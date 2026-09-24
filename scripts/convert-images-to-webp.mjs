import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();

const IMAGE_FOLDERS = [
  path.join(ROOT, "src"),
  path.join(ROOT, "public"),
];

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

const CODE_EXTENSIONS = [
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".html",
  ".json",
];

const IGNORE_DIRS = new Set([
  "node_modules",
  "dist",
  "build",
  ".git",
]);

const convertedImages = new Map();

/**
 * Obtener todos los archivos recursivamente
 */
function getFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  let files = [];

  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files = files.concat(getFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Convertir imágenes
 */
async function convertImages() {
  console.log("\nBuscando imágenes...\n");

  let total = 0;

  for (const folder of IMAGE_FOLDERS) {
    const files = getFiles(folder);

    for (const file of files) {
      const extension = path.extname(file).toLowerCase();

      if (!IMAGE_EXTENSIONS.includes(extension)) {
        continue;
      }

      const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");

      try {
        const image = sharp(file);

        /*
         * JPEG/JPG:
         * WebP con compresión optimizada.
         *
         * PNG:
         * nearLossless ayuda a conservar logos,
         * transparencia, gráficos, etc.
         */
        if (extension === ".png") {
          await image
            .webp({
              nearLossless: true,
              quality: 90,
              effort: 6,
            })
            .toFile(webpPath);
        } else {
          await image
            .webp({
              quality: 82,
              effort: 6,
            })
            .toFile(webpPath);
        }

        convertedImages.set(file, webpPath);

        const originalSize = fs.statSync(file).size;
        const webpSize = fs.statSync(webpPath).size;

        const saving = (
          ((originalSize - webpSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(
          `✓ ${path.relative(ROOT, file)}`
        );

        console.log(
          `  ${(originalSize / 1024).toFixed(1)} KB → ` +
          `${(webpSize / 1024).toFixed(1)} KB ` +
          `(${saving}% reducción)`
        );

        total++;
      } catch (error) {
        console.error(
          `✗ Error convirtiendo ${file}:`,
          error.message
        );
      }
    }
  }

  console.log(`\n${total} imágenes convertidas.\n`);
}

/**
 * Cambiar referencias en código
 */
function updateReferences() {
  console.log("Actualizando referencias...\n");

  const files = getFiles(ROOT);

  let modifiedFiles = 0;
  let replacements = 0;

  for (const file of files) {
    const extension = path.extname(file).toLowerCase();

    if (!CODE_EXTENSIONS.includes(extension)) {
      continue;
    }

    let content;

    try {
      content = fs.readFileSync(file, "utf8");
    } catch {
      continue;
    }

    const originalContent = content;

    /*
     * Cambia referencias:
     *
     * image.jpg   -> image.webp
     * image.jpeg  -> image.webp
     * image.png   -> image.webp
     *
     * Solo si esa imagen realmente fue convertida.
     */

    for (const [oldImage, newImage] of convertedImages) {
      const oldFilename = path.basename(oldImage);
      const newFilename = path.basename(newImage);

      const oldRelativeFromFile = path
        .relative(path.dirname(file), oldImage)
        .replaceAll("\\", "/");

      const newRelativeFromFile = path
        .relative(path.dirname(file), newImage)
        .replaceAll("\\", "/");

      const variants = [
        [
          oldRelativeFromFile,
          newRelativeFromFile,
        ],

        [
          `./${oldRelativeFromFile}`,
          `./${newRelativeFromFile}`,
        ],

        [
          oldFilename,
          newFilename,
        ],
      ];

      /*
       * Archivos dentro de public/
       *
       * public/images/photo.jpg
       * se utiliza como:
       * /images/photo.jpg
       */
      const publicDirectory = path.join(ROOT, "public");

      if (oldImage.startsWith(publicDirectory)) {
        const oldPublicPath =
          "/" +
          path
            .relative(publicDirectory, oldImage)
            .replaceAll("\\", "/");

        const newPublicPath =
          "/" +
          path
            .relative(publicDirectory, newImage)
            .replaceAll("\\", "/");

        variants.push([
          oldPublicPath,
          newPublicPath,
        ]);
      }

      for (const [oldReference, newReference] of variants) {
        if (!oldReference) {
          continue;
        }

        const before = content;

        content = content.split(oldReference).join(newReference);

        if (before !== content) {
          const count =
            before.split(oldReference).length - 1;

          replacements += count;
        }
      }
    }

    if (content !== originalContent) {
      fs.writeFileSync(file, content, "utf8");

      console.log(
        `✓ ${path.relative(ROOT, file)}`
      );

      modifiedFiles++;
    }
  }

  console.log(
    `\n${modifiedFiles} archivos de código modificados.`
  );

  console.log(
    `${replacements} referencias actualizadas.\n`
  );
}

async function main() {
  console.log("======================================");
  console.log("    IMAGE → WEBP OPTIMIZER");
  console.log("======================================");

  await convertImages();

  updateReferences();

  console.log("======================================");
  console.log("Proceso terminado.");
  console.log("Los originales NO fueron eliminados.");
  console.log("======================================\n");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});