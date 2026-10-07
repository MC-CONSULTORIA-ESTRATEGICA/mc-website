// Datos estructurados (JSON-LD, schema.org) para los buscadores. Solo datos que el sitio ya
// muestra: los de la empresa salen de site.ts y los de cada artículo, de articles.ts.

import { type Article, articleHref } from "@/content/articles";
import { site } from "@/lib/site";

const organizationId = `${site.url}/#organizacion`;
const websiteId = `${site.url}/#sitio`;

// La ficha completa de la empresa está solo en la portada: en otras páginas, la referencia lleva
// lo mínimo para entenderse sola.
const organizationRef = { "@type": "Organization", "@id": organizationId, name: site.name, url: `${site.url}/` };

/** "8:00–18:00" → ["08:00", "18:00"] (formato hh:mm de schema.org). */
function openingTimes(time: string): [string, string] {
  const [opens, closes] = time.split("–").map((part) => part.trim().padStart(5, "0"));
  return [opens, closes];
}

export function organizationJsonLd() {
  const { contact } = site;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/`,
    logo: { "@type": "ImageObject", url: `${site.url}/logo.webp`, width: 602, height: 425 },
    telephone: contact.phone.display,
    email: contact.email,
    address: { "@type": "PostalAddress", addressLocality: "Lima", addressCountry: "PE" },
    sameAs: [contact.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: contact.phone.display,
      email: contact.email,
      availableLanguage: "es",
      hoursAvailable: contact.hours.map((slot) => {
        const [opens, closes] = openingTimes(slot.time);
        return { "@type": "OpeningHoursSpecification", dayOfWeek: slot.dayOfWeek, opens, closes };
      }),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: `${site.url}/`,
    inLanguage: "es",
    publisher: { "@id": organizationId },
  };
}

/** Sin autor con nombre: el autor y el editor son MC. La fecha va con mes y año (AAAA-MM). */
export function articleJsonLd(article: Article) {
  const url = new URL(articleHref(article.slug), site.url).href;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateTime,
    inLanguage: "es",
    url,
    mainEntityOfPage: url,
    author: organizationRef,
    publisher: organizationRef,
    isPartOf: { "@type": "WebSite", "@id": websiteId, name: site.name, url: `${site.url}/` },
  };
}
