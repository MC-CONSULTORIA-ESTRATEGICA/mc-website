// Lista única de páginas: alimenta el menú, el pie, el chequeo de out/ y, en el paso 4, el sitemap.

export type Route = {
  path: `/${string}`;
  label: string;
  inNav: boolean;
  inSitemap: boolean;
};

export const routes = [
  { path: "/", label: "Inicio", inNav: true, inSitemap: true },
  { path: "/nosotros/", label: "Nosotros", inNav: true, inSitemap: true },
  { path: "/servicios/", label: "Servicios", inNav: true, inSitemap: true },
  { path: "/proyectos/", label: "Proyectos", inNav: true, inSitemap: true },
  { path: "/blog/", label: "Blog", inNav: true, inSitemap: true },
  { path: "/noticias/", label: "Noticias", inNav: true, inSitemap: true },
  { path: "/contacto/", label: "Contacto", inNav: true, inSitemap: true },
  // La portada del sitio anterior; ahora solo reenvía a "/".
  { path: "/inicio/", label: "Inicio (anterior)", inNav: false, inSitemap: false },
] as const satisfies readonly Route[];

export type RoutePath = (typeof routes)[number]["path"];

export const navRoutes = routes.filter((route) => route.inNav);
