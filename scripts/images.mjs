// Optimiza imágenes para la web: las pasa a WebP, las reduce a un ancho máximo y les quita los
// metadatos (EXIF, incluido el GPS de las fotos de celular).
//
// Uso:
//   pnpm images <archivo o carpeta>... [opciones]
//   pnpm images --revisar
//
// Opciones:
//   --destino <carpeta>    dónde dejar los .webp (por defecto, junto al original)
//   --ancho <px>           ancho máximo (por defecto 2000; nunca agranda)
//   --calidad <1-100>      calidad WebP (por defecto 80)
//   --sin-perdida          WebP sin pérdida (logos y gráficos con transparencia)
//   --reemplazar           sobrescribir un .webp que ya existe
//   --borrar-originales    borrar el original después de convertirlo
//   --revisar              listar las imágenes de src/assets que pesan o miden de más
//
// Las imágenes se usan con import en src/content/, así que no se reescribe código: si un nombre
// cambia, el build falla y avisa. Nunca toca public/ (la firma de correo se carga desde ahí).
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parseArgs } from "node:util";

import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const ASSETS_DIR = path.join(ROOT, "src", "assets");
const INPUT_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff"]);
const HEIC_EXTENSIONS = new Set([".heic", ".heif"]);
const REVIEW_MAX_KB = 400;

const { values: options, positionals: inputs } = parseArgs({
  allowPositionals: true,
  options: {
    destino: { type: "string" },
    ancho: { type: "string", default: "2000" },
    calidad: { type: "string", default: "80" },
    "sin-perdida": { type: "boolean", default: false },
    reemplazar: { type: "boolean", default: false },
    "borrar-originales": { type: "boolean", default: false },
    revisar: { type: "boolean", default: false },
  },
});

const maxWidth = Number(options.ancho);
const quality = Number(options.calidad);

function fail(message) {
  console.error(`images: ${message}`);
  process.exit(1);
}

function isInside(file, directory) {
  const relative = path.relative(directory, file);
  return relative !== "" && !relative.startsWith("..") && !path.isAbsolute(relative);
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

/** Ruta relativa al repo si está dentro; si no, absoluta. */
const show = (file) => (isInside(file, ROOT) ? path.relative(ROOT, file) : file);

/** "Foto Equipo PERUMIN (1).JPG" → "foto-equipo-perumin-1" */
function toKebabCase(name) {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function collectFiles(target) {
  const absolute = path.resolve(ROOT, target);
  if (!fs.existsSync(absolute)) fail(`no existe ${target}`);
  if (absolute === PUBLIC_DIR || isInside(absolute, PUBLIC_DIR)) {
    fail(`${target} está en public/: esos archivos se sirven tal cual y no se tocan.`);
  }
  if (fs.statSync(absolute).isFile()) return [absolute];
  return fs
    .readdirSync(absolute, { withFileTypes: true, recursive: true })
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath, entry.name));
}

/** sharp no lee HEIC (fotos de iPhone); en macOS se pasa antes a JPEG con sips. */
function heicToJpeg(file) {
  if (process.platform !== "darwin") {
    fail(`${path.basename(file)} es HEIC: conviértelo a JPG antes (sharp no lee HEIC).`);
  }
  const temporary = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "images-")), "foto.jpg");
  execFileSync("sips", ["-s", "format", "jpeg", file, "--out", temporary], { stdio: "ignore" });
  return temporary;
}

async function optimize(file) {
  const extension = path.extname(file).toLowerCase();
  const isHeic = HEIC_EXTENSIONS.has(extension);
  if (!INPUT_EXTENSIONS.has(extension) && !isHeic) return null;

  const outputDir = options.destino ? path.resolve(ROOT, options.destino) : path.dirname(file);
  if (outputDir === PUBLIC_DIR || isInside(outputDir, PUBLIC_DIR)) {
    fail("el destino no puede estar en public/.");
  }
  const output = path.join(outputDir, `${toKebabCase(path.parse(file).name)}.webp`);
  const replacesItself = path.resolve(output) === path.resolve(file);

  if (fs.existsSync(output) && !options.reemplazar) {
    console.log(`– ${show(output)} ya existe (usa --reemplazar)`);
    return null;
  }

  const source = isHeic ? heicToJpeg(file) : file;
  const originalSize = fs.statSync(file).size;

  // autoOrient antes de perder el EXIF: sharp quita todos los metadatos al escribir.
  const buffer = await sharp(source)
    .autoOrient()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp(options["sin-perdida"] ? { lossless: true, effort: 6 } : { quality, effort: 6 })
    .toBuffer({ resolveWithObject: true });

  // Si ya era un WebP optimizado y el resultado pesa más, se conserva el original.
  if (replacesItself && buffer.data.length >= originalSize) {
    console.log(`– ${show(file)} ya está optimizada`);
    return null;
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(output, buffer.data);
  if (options["borrar-originales"] && !replacesItself) fs.rmSync(file);

  const { width, height } = buffer.info;
  console.log(
    `✓ ${show(output)}  ${width}×${height}  ${kb(originalSize)} → ${kb(buffer.data.length)}`,
  );
  return { before: originalSize, after: buffer.data.length };
}

async function review() {
  const files = collectFiles(path.relative(ROOT, ASSETS_DIR)).filter((file) =>
    INPUT_EXTENSIONS.has(path.extname(file).toLowerCase()),
  );
  const flagged = [];
  for (const file of files) {
    const size = fs.statSync(file).size;
    const { width } = await sharp(file).metadata();
    if (size > REVIEW_MAX_KB * 1024 || width > maxWidth) flagged.push({ file, size, width });
  }
  flagged.sort((a, b) => b.size - a.size);
  for (const { file, size, width } of flagged) {
    console.log(`${kb(size).padStart(8)}  ${String(width).padStart(5)} px  ${path.relative(ROOT, file)}`);
  }
  console.log(
    flagged.length
      ? `\n${flagged.length} de ${files.length} imágenes pasan de ${REVIEW_MAX_KB} KB o de ${maxWidth} px.`
      : `Las ${files.length} imágenes de src/assets están dentro de ${REVIEW_MAX_KB} KB y ${maxWidth} px.`,
  );
}

async function main() {
  if (options.revisar) return review();
  if (inputs.length === 0) fail("indica uno o más archivos o carpetas (o --revisar).");
  if (!Number.isInteger(maxWidth) || maxWidth < 1) fail("--ancho debe ser un entero positivo.");
  if (!Number.isInteger(quality) || quality < 1 || quality > 100) fail("--calidad va de 1 a 100.");

  let before = 0;
  let after = 0;
  let converted = 0;
  for (const file of inputs.flatMap(collectFiles)) {
    const result = await optimize(file);
    if (!result) continue;
    before += result.before;
    after += result.after;
    converted++;
  }
  console.log(
    converted
      ? `\n${converted} imagen(es): ${kb(before)} → ${kb(after)}.`
      : "\nNinguna imagen convertida.",
  );
}

main().catch((error) => fail(error.message));
