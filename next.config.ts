import type { NextConfig } from "next";

// Exportación estática para GitHub Pages: sin servidor, cada página sale como HTML en out/.
const nextConfig: NextConfig = {
  output: "export",
  // /nosotros/ → out/nosotros/index.html. Pages sirve /nosotros/ y redirige /nosotros a /nosotros/.
  trailingSlash: true,
  // La exportación no tiene optimizador de imágenes.
  images: { unoptimized: true },
};

export default nextConfig;
