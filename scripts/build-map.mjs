// Genera el trazo de Perú y Ecuador para el mapa del Inicio (src/content/geo/peru-ecuador.ts).
//
// Fuente: Natural Earth, "Admin 0 – Countries" 1:50m (dominio público),
// https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson
// El GeoJSON no se versiona: se descarga, se corre este script y se commitea solo el resultado.
//
// Uso: node scripts/build-map.mjs <ruta/ne_50m_admin_0_countries.geojson>
import fs from "node:fs";
import path from "node:path";

const source = process.argv[2];
if (!source) {
  console.error("Uso: node scripts/build-map.mjs <ne_50m_admin_0_countries.geojson>");
  process.exit(1);
}

// Ventana del mapa en grados. Excluye Galápagos: el mapa muestra el territorio continental.
const LON_MIN = -82;
const LON_MAX = -68;
const LAT_MAX = 2;
const LAT_MIN = -19;
// Proyección equirectangular con el ancho corregido en la latitud media de la ventana.
const K = Math.cos((((LAT_MAX + LAT_MIN) / 2) * Math.PI) / 180);
const WIDTH = 600;
const SCALE = WIDTH / ((LON_MAX - LON_MIN) * K);
const HEIGHT = Math.round((LAT_MAX - LAT_MIN) * SCALE);

const project = ([lon, lat]) => [(lon - LON_MIN) * K * SCALE, (LAT_MAX - lat) * SCALE];
const inWindow = (ring) => ring.every(([lon, lat]) => lon >= LON_MIN && lon <= LON_MAX && lat <= LAT_MAX && lat >= LAT_MIN);
// Islas de menos de este perímetro (en px) se omiten: a esta escala son un punto.
const MIN_RING_PX = 12;

function ringToPath(ring) {
  const pts = ring.map(project);
  let length = 0;
  for (let i = 1; i < pts.length; i++) length += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  if (length < MIN_RING_PX) return null;
  // Quita puntos a menos de 0,6 px del anterior: no se ven y pesan.
  const kept = [pts[0]];
  for (const p of pts.slice(1)) {
    const last = kept[kept.length - 1];
    if (Math.hypot(p[0] - last[0], p[1] - last[1]) >= 0.6) kept.push(p);
  }
  return `M${kept.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join("L")}Z`;
}

// Vecinos: solo contexto. Sus puntos se recortan a un margen fuera de la ventana, así el trazo
// visible es exacto y el archivo no carga el resto del continente.
const MARGIN = 1.5;
const clampPoint = ([lon, lat]) => [
  Math.min(Math.max(lon, LON_MIN - MARGIN), LON_MAX + MARGIN),
  Math.max(Math.min(lat, LAT_MAX + MARGIN), LAT_MIN - MARGIN),
];
const touchesWindow = (ring) =>
  ring.some(([lon, lat]) => lon >= LON_MIN && lon <= LON_MAX && lat <= LAT_MAX && lat >= LAT_MIN);

// Qué bordes de la ventana ampliada toca un punto recortado ("" si está dentro).
const edgesOf = ([lon, lat]) =>
  [lon <= LON_MIN - MARGIN && "O", lon >= LON_MAX + MARGIN && "E", lat >= LAT_MAX + MARGIN && "N", lat <= LAT_MIN - MARGIN && "S"]
    .filter(Boolean)
    .join("");

// En un tramo sobre un mismo borde los puntos son colineales: basta con el primero y el último.
function dropCollinear(ring) {
  return ring.filter((p, i) => {
    const edge = edgesOf(p);
    if (!edge || i === 0 || i === ring.length - 1) return true;
    return edgesOf(ring[i - 1]) !== edge || edgesOf(ring[i + 1]) !== edge;
  });
}

function neighborPath(features, a3) {
  const feature = features.find((f) => f.properties.ADM0_A3 === a3);
  if (!feature) throw new Error(`No está ${a3} en ${source}`);
  const { type, coordinates } = feature.geometry;
  const polygons = type === "MultiPolygon" ? coordinates : [coordinates];
  return polygons
    .map((polygon) => polygon[0])
    .filter(touchesWindow)
    .map((ring) => ringToPath(dropCollinear(ring.map(clampPoint))))
    .filter(Boolean)
    .join("");
}

function countryPath(features, a3) {
  const feature = features.find((f) => f.properties.ADM0_A3 === a3);
  if (!feature) throw new Error(`No está ${a3} en ${source}`);
  const { type, coordinates } = feature.geometry;
  const polygons = type === "MultiPolygon" ? coordinates : [coordinates];
  return polygons
    .map((polygon) => polygon[0])
    .filter(inWindow)
    .map(ringToPath)
    .filter(Boolean)
    .join("");
}

const point = (lon, lat) => project([lon, lat]).map((v) => Number(v.toFixed(1)));

const { features } = JSON.parse(fs.readFileSync(source, "utf8"));
const graticule = {
  lon: [-80, -75, -70].map((lon) => ({ value: lon, x: Number(project([lon, 0])[0].toFixed(1)) })),
  lat: [0, -5, -10, -15].map((lat) => ({ value: lat, y: Number(project([0, lat])[1].toFixed(1)) })),
};

const out = `// Generado por scripts/build-map.mjs a partir de Natural Earth 1:50m (dominio público).
// No editar a mano: rehacer con el script.
// Proyección equirectangular, ventana ${LON_MIN}° a ${LON_MAX}° de longitud y ${LAT_MAX}° a ${LAT_MIN}° de latitud.

export const MAP_VIEWBOX = { width: ${WIDTH}, height: ${HEIGHT} } as const;

export const COUNTRY_PATHS = {
  peru: "${countryPath(features, "PER")}",
  ecuador: "${countryPath(features, "ECU")}",
} as const;

/** Países vecinos, recortados a la ventana: solo contexto. */
export const NEIGHBOR_PATHS = ${JSON.stringify(["COL", "BRA", "BOL", "CHL"].map((a3) => neighborPath(features, a3)))};

/** Puntos para los rótulos de los países y del océano. */
export const LABEL_POINTS = {
  peru: { x: ${point(-75, -9)[0]}, y: ${point(-75, -9)[1]} },
  ecuador: { x: ${point(-78.4, -1.6)[0]}, y: ${point(-78.4, -1.6)[1]} },
  pacifico: { x: ${point(-80.6, -13.5)[0]}, y: ${point(-80.6, -13.5)[1]} },
} as const;

/** Lima (12,05° S, 77,04° O). */
export const LIMA = { x: ${point(-77.04, -12.05)[0]}, y: ${point(-77.04, -12.05)[1]} } as const;

/** Meridianos y paralelos cada 5°, en coordenadas del mapa. */
export const GRATICULE = ${JSON.stringify(graticule)} as const;
`;

const target = path.join("src", "content", "geo", "peru-ecuador.ts");
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, out);
console.log(`${target}: ${(out.length / 1024).toFixed(1)} KB, ${WIDTH}×${HEIGHT}`);
