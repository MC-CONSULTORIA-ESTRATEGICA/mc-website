import type { NextConfig } from "next";

// Modo revisión: los pendientes (textos por definir, borradores, revisiones técnicas) existen solo
// en desarrollo (pnpm dev) y en un build de revisión (pnpm build:revision). En el build normal,
// el que publica el workflow, no se compilan.
const reviewMode = process.env.NODE_ENV === "development" || process.env.REVIEW === "1";

// Exportación estática para GitHub Pages: sin servidor, cada página sale como HTML en out/.
const nextConfig: NextConfig = {
  env: { REVIEW_MODE: reviewMode ? "1" : "0" },
  output: "export",
  // /nosotros/ → out/nosotros/index.html. Pages sirve /nosotros/ y redirige /nosotros a /nosotros/.
  trailingSlash: true,
  // La exportación no tiene optimizador de imágenes.
  images: { unoptimized: true },
};

export default nextConfig;
