// Valida la exportación estática antes de publicar: cada ruta de src/lib/routes.ts tiene su HTML,
// existe el 404 real y las imágenes de la firma de correo siguen en la raíz, idénticas a public/
// (los correos del equipo las cargan desde el dominio).
import { existsSync, readFileSync } from "node:fs";
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

if (errors.length > 0) {
  console.error(`check-export: ${errors.length} problema(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`check-export: ${routes.length} rutas, 404 y firma de correo en orden.`);
