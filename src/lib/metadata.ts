import type { Metadata } from "next";

import type { RoutePath } from "@/lib/routes";

type PageMetadataInput = {
  title: string;
  description: string;
  path: RoutePath;
};

/** Metadata por página con su URL canónica. El título usa la plantilla del layout. */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
