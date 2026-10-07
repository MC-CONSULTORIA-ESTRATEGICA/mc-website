import type { Metadata } from "next";

import type { RoutePath } from "@/lib/routes";
import { site } from "@/lib/site";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

/** Imagen para compartir (public/compartir.png, la genera scripts/build-og.mjs). */
export const shareImage = {
  url: "/compartir.png",
  width: 1200,
  height: 630,
  alt: `${site.name}: ${site.tagline}`,
};

// Next combina la metadata de layout y página sin mezclar los objetos anidados: el openGraph de una
// página reemplaza entero al del layout. Por eso cada página repite esta base.
export const baseOpenGraph = {
  siteName: site.name,
  locale: "es_PE",
  type: "website",
  images: [shareImage],
} satisfies OpenGraph;

type PageMetadataInput = {
  title: string;
  description: string;
  /** Una ruta de routes.ts o la página de un artículo (/blog/<slug>/). */
  path: RoutePath | `/blog/${string}/`;
  /** Solo en artículos: fecha de publicación (AAAA-MM). */
  publishedTime?: string;
};

/** Metadata por página con su URL canónica. El título usa la plantilla del layout. */
export function pageMetadata({ title, description, path, publishedTime }: PageMetadataInput): Metadata {
  const openGraph: OpenGraph = publishedTime
    ? { ...baseOpenGraph, type: "article", publishedTime, title, description, url: path }
    : { ...baseOpenGraph, title, description, url: path };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
  };
}
