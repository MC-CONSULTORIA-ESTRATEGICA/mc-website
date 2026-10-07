// Valida la exportación estática antes de publicar: cada ruta de src/lib/routes.ts y cada artículo
// de src/content/articles.ts tienen su HTML, existe el 404 real, las imágenes de la firma de correo
// siguen en la raíz, idénticas a public/ (los correos del equipo las cargan desde el dominio), y el
// SEO está completo: sitemap.xml, robots.txt, título y descripción únicos, canonical, Open Graph y
// JSON-LD.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

import { articleHref, articles } from "../src/content/articles.ts";
import { routes } from "../src/lib/routes.ts";
import { site } from "../src/lib/site.ts";

const OUT = "out";
const EMAIL_SIGNATURE_IMAGES = ["correo.png", "mclogocorreo.png", "telefono.png", "web.png"];
const SHARE_IMAGE = "compartir.png";

const errors = [];

const paths = [...routes.map((route) => route.path), ...articles.map((article) => articleHref(article.slug))];
for (const routePath of paths) {
  const file = path.join(OUT, routePath, "index.html");
  if (!existsSync(file)) errors.push(`falta ${file} (ruta ${routePath})`);
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

// SEO. El sitemap lista exactamente las páginas inSitemap y los artículos, en URL absoluta.
const sitemapPaths = [
  ...routes.filter((route) => route.inSitemap).map((route) => route.path),
  ...articles.map((article) => articleHref(article.slug)),
];
const absolute = (routePath) => new URL(routePath, site.url).href;
const readOut = (file) => (existsSync(path.join(OUT, file)) ? readFileSync(path.join(OUT, file), "utf8") : null);

const sitemap = readOut("sitemap.xml");
if (sitemap === null) {
  errors.push("falta out/sitemap.xml");
} else {
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expected = sitemapPaths.map(absolute);
  for (const url of expected) if (!locs.includes(url)) errors.push(`sitemap.xml no incluye ${url}`);
  for (const url of locs) if (!expected.includes(url)) errors.push(`sitemap.xml incluye ${url}, que no está marcada inSitemap`);
  if (new Set(locs).size !== locs.length) errors.push("sitemap.xml repite una URL");
}

const robots = readOut("robots.txt");
if (robots === null) errors.push("falta out/robots.txt");
else if (!robots.includes(`Sitemap: ${absolute("/sitemap.xml")}`)) errors.push("robots.txt no apunta al sitemap");

const shareImage = path.join(OUT, SHARE_IMAGE);
if (!existsSync(shareImage)) errors.push(`falta ${shareImage} (imagen para compartir)`);

const attribute = (html, pattern) => html.match(pattern)?.[1] ?? null;
const titles = new Map();
const descriptions = new Map();
for (const routePath of sitemapPaths) {
  const html = readOut(path.join(routePath, "index.html"));
  if (html === null) continue; // Ya se informó arriba.
  const title = attribute(html, /<title>([^<]*)<\/title>/);
  const description = attribute(html, /<meta name="description" content="([^"]*)"/);
  const canonical = attribute(html, /<link rel="canonical" href="([^"]*)"/);
  if (!title) errors.push(`${routePath} no tiene <title>`);
  else if (titles.has(title)) errors.push(`${routePath} repite el título de ${titles.get(title)}`);
  else titles.set(title, routePath);
  if (!description) errors.push(`${routePath} no tiene descripción`);
  else if (descriptions.has(description)) errors.push(`${routePath} repite la descripción de ${descriptions.get(description)}`);
  else descriptions.set(description, routePath);
  if (canonical !== absolute(routePath)) errors.push(`${routePath}: canonical ${canonical}, se esperaba ${absolute(routePath)}`);
  for (const property of ["og:title", "og:url", "og:site_name", "og:locale", "og:image"]) {
    if (!html.includes(`<meta property="${property}"`)) errors.push(`${routePath} no tiene ${property}`);
  }
  if (!html.includes(`<meta property="og:image" content="${absolute(`/${SHARE_IMAGE}`)}"`)) {
    errors.push(`${routePath}: og:image no es /${SHARE_IMAGE}`);
  }

  const types = [];
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)) {
    try {
      types.push(JSON.parse(json)["@type"]);
    } catch {
      errors.push(`${routePath}: un JSON-LD no se puede leer`);
    }
  }
  const expectedTypes = routePath === "/" ? ["Organization", "WebSite"] : routePath.startsWith("/blog/") && routePath !== "/blog/" ? ["Article"] : [];
  for (const type of expectedTypes) if (!types.includes(type)) errors.push(`${routePath} no tiene JSON-LD ${type}`);
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
  `check-export: ${routes.length} rutas y ${articles.length} artículos, 404, firma de correo y SEO en orden; ` +
    (reviewBuild ? "build de revisión (con pendientes, no publicar)." : "sin pendientes de revisión."),
);
