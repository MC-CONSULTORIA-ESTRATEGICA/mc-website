// Genera la imagen para compartir (Open Graph, 1200×630) en public/compartir.png, sin IA: navy de la
// portada con su grano, el logo horizontal tal cual, el lema del sitio y curvas de nivel en tierra
// trazadas con la misma función que el sitio. La toma la hace Chrome sin interfaz.
// Uso: node scripts/build-og.mjs   (otra ruta de Chrome: CHROME=/ruta/al/chrome)
// Necesita red: Archivo se carga de Google Fonts, como en el build.
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import sharp from "sharp";

import { contourPaths } from "../src/components/ui/contourPaths.ts";
import { site } from "../src/lib/site.ts";

const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT = "public/compartir.png";
const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const asset = (file) => pathToFileURL(path.resolve(file)).href;

const rings = contourPaths({ rings: 9, radius: 34, step: 30, stretch: 1.3, phase: 0.4 })
  .map((d, i, all) => {
    const index = i % 4 === 0;
    const opacity = (0.9 - (i / all.length) * 0.5).toFixed(2);
    return `<path d="${d}" class="${index ? "contour contour-index" : "contour"}" style="opacity:${opacity}"/>`;
  })
  .join("");

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=block">
<style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; }
  body {
    position: relative;
    background-color: #002d50;
    background-image: url("${asset("src/assets/texturas/grano.png")}");
    background-size: 256px 256px;
    font-family: "Archivo", sans-serif;
    color: #ffffff;
  }
  svg { position: absolute; inset: 0; }
  .contour { fill: none; stroke: #b08462; stroke-width: 1.6; }
  .contour-index { stroke: #9a6b47; stroke-width: 2.6; }
  .card {
    position: relative;
    height: 100%;
    padding: 64px 72px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .logo { height: 52px; width: auto; align-self: flex-start; }
  h1 {
    font-size: 94px;
    line-height: 0.96;
    font-weight: 560;
    font-variation-settings: "wdth" 68;
    letter-spacing: -0.01em;
    max-width: 470px;
  }
  .foot { display: flex; justify-content: space-between; align-items: baseline; font-size: 22px; }
  .foot span:first-child { color: #c9d6df; }
  .foot span:last-child { color: #9fc9e0; }
</style>
</head>
<body>
<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" aria-hidden="true"><g transform="translate(970 270)">${rings}</g></svg>
<div class="card">
  <img class="logo" src="${asset("src/assets/marca/logo-horizontal.webp")}" alt="">
  <h1>${site.tagline}</h1>
  <div class="foot"><span>Consultoría minera · ${site.contact.city}</span><span>${new URL(site.url).host}</span></div>
</div>
</body>
</html>`;

const dir = mkdtempSync(path.join(tmpdir(), "compartir-"));
const page = path.join(dir, "tarjeta.html");
const shot = path.join(dir, "tarjeta.png");
writeFileSync(page, html);

// Chrome sin interfaz escribe la toma enseguida pero no siempre termina solo: se espera el archivo
// y se lo cierra.
const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    `--user-data-dir=${path.join(dir, "perfil")}`,
    "--hide-scrollbars",
    "--allow-file-access-from-files",
    "--force-device-scale-factor=1",
    "--virtual-time-budget=8000",
    `--window-size=${WIDTH},${HEIGHT}`,
    `--screenshot=${shot}`,
    pathToFileURL(page).href,
  ],
  { stdio: "ignore" },
);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let size = -1;
for (let i = 0; i < 120; i++) {
  await sleep(500);
  const current = existsSync(shot) ? statSync(shot).size : -1;
  if (current > 0 && current === size) break;
  size = current;
}
chrome.kill();
if (size <= 0) {
  console.error("build-og: Chrome no escribió la toma en 60 s");
  process.exit(1);
}

const meta = await sharp(shot).metadata();
if (meta.width !== WIDTH || meta.height !== HEIGHT) {
  console.error(`build-og: la toma mide ${meta.width}×${meta.height}, no ${WIDTH}×${HEIGHT}`);
  process.exit(1);
}
await sharp(shot).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(OUTPUT);
console.log(OUTPUT);
