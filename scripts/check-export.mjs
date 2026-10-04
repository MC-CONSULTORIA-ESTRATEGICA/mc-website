// Valida la exportación estática antes de publicar: cada ruta de src/lib/routes.ts tiene su HTML,
// existe el 404 real y las imágenes de la firma de correo siguen en la raíz, idénticas a public/
// (los correos del equipo las cargan desde el dominio).
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

import { routes } from "../src/lib/routes.ts";

const OUT = "out";
const EMAIL_SIGNATURE_IMAGES = ["correo.png", "mclogocorreo.png", "telefono.png", "web.png"];

const errors = [];

for (const route of routes) {
  const file = path.join(OUT, route.path, "index.html");
  if (!existsSync(file)) errors.push(`falta ${file} (ruta ${route.path})`);
}

if (!existsSync(path.join(OUT, "404.html"))) errors.push("falta out/404.html");

for (const name of EMAIL_SIGNATURE_IMAGES) {
  const exported = path.join(OUT, name);
  if (!existsSync(exported)) {
    errors.push(`falta ${exported} (firma de correo)`);
  } else if (!readFileSync(exported).equals(readFileSync(path.join("public", name)))) {
    errors.push(`${exported} difiere de public/${name} (firma de correo)`);
  }
}

// Los pendientes del modo revisión no pueden llegar al build de producción (ni visibles ni en el
// HTML, los datos de React o el JS). En el build de revisión (REVIEW=1) sí están.
const REVIEW_MARKERS = ["Por definir", "Por confirmar", "Borrador", "Pendiente: revisión técnica"];
const reviewBuild = process.env.REVIEW === "1";
if (!reviewBuild) {
  const files = readdirSync(OUT, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(html|txt|js|json)$/.test(entry.name))
    .map((entry) => path.join(entry.parentPath, entry.name));
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    for (const marker of REVIEW_MARKERS) {
      if (text.includes(marker)) errors.push(`${file} contiene "${marker}" (pendiente del modo revisión)`);
    }
  }
}

if (errors.length > 0) {
  console.error(`check-export: ${errors.length} problema(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(
  `check-export: ${routes.length} rutas, 404 y firma de correo en orden; ` +
    (reviewBuild ? "build de revisión (con pendientes, no publicar)." : "sin pendientes de revisión."),
);
