import type { MetadataRoute } from "next";

import { articleHref, recentArticles } from "@/content/articles";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

// La exportación estática solo genera un Route Handler si se declara estático.
export const dynamic = "force-static";

// Las páginas de routes.ts marcadas inSitemap y una por artículo. Sin lastmod, changefreq ni
// priority: no hay fechas de modificación confiables y Google ignora los otros dos.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...routes.filter((route) => route.inSitemap).map((route) => route.path),
    ...recentArticles().map((article) => articleHref(article.slug)),
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).href }));
}
