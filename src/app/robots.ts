import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export const dynamic = "force-static";

// Todo se puede rastrear. Lo que no debe indexarse (/inicio/, la 404) lleva noindex en su página:
// un Disallow aquí impediría que el buscador lo lea.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).href,
  };
}
