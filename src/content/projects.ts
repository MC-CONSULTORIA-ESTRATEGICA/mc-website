import type { StaticImageData } from "next/image";

import sesionSala2 from "@/assets/fotos/sesion-sala-2.webp";
import reunionSpm from "@/assets/fotos/reunion-spm.webp";
import afloramiento from "@/assets/generadas/afloramiento-plegado.webp";
import muestrasLaboratorio from "@/assets/generadas/muestras-laboratorio.webp";
import type { ClientId } from "@/content/clients";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  /** "referencial": generada, muestra el tipo de trabajo y no el lugar del cliente (con rótulo). */
  kind: "foto" | "referencial";
};

export type Project = {
  slug: string;
  title: string;
  /** Rótulo corto para la cota-índice de Proyectos. */
  shortTitle: string;
  tag: string;
  client?: ClientId;
  /** Solo cuando el sitio actual lo dice; si no, la fila no se muestra. */
  service?: string;
  /** Slug del servicio de `services.ts` al que pertenece el caso (la página de Servicios lo enlaza). */
  serviceSlug?: string;
  scope?: string;
  image: ProjectImage;
  excerpt: string;
  description: string;
  /** Entre los 4 que se muestran en el inicio. */
  featured: boolean;
  /** Falta confirmar que el proyecto es real: la marca solo se ve en modo revisión. */
  toConfirm?: boolean;
};

// Los 4 casos del sitio actual. Sofía dice que son unos 13: la lista (cliente, servicio,
// alcance) se pide a Sofía o a Camila y entra aquí. Un caso confidencial va sin `client`.
export const projects: Project[] = [
  {
    slug: "curso-sk-1300-southern",
    title: "Curso de Código S-K 1300",
    shortTitle: "Curso S-K 1300",
    tag: "capacitación",
    client: "southern",
    service: "Capacitación",
    serviceSlug: "capacitacion",
    scope: "Perú, Chile y Argentina",
    image: {
      src: sesionSala2,
      alt: "Participantes del curso S-K 1300 reunidos en una sala de conferencias",
      kind: "foto",
    },
    excerpt:
      "Capacitación especializada en el Código S-K 1300 para el equipo de Exploraciones, con alcance regional en Perú, Chile y Argentina. La sesión fue conducida por nuestro Consultor Asociado, el Dr. Armando Simón, PhD, PGeo.",
    description:
      "Diseñamos y dictamos una capacitación especializada en el Código S-K 1300 para el equipo de Exploraciones de Southern Peru Copper Corporation. La sesión fue conducida por nuestro Consultor Asociado, el Dr. Armando Simón, PhD, PGeo, y reunió a los responsables de Exploraciones de sus proyectos en Perú, Chile y Argentina en un espacio de aprendizaje, análisis técnico y colaboración regional.",
    featured: true,
  },
  {
    slug: "reconciliacion-condestable",
    title: "Servicio de reconciliación minera",
    shortTitle: "Reconciliación minera",
    tag: "reconciliación",
    client: "condestable",
    service: "Reconciliación minera",
    serviceSlug: "reconciliacion-minera",
    scope: "Cadena mina-planta",
    image: {
      src: reunionSpm,
      alt: "Dos personas junto al letrero de Southern Peaks Mining (SPM), dueña de Condestable",
      kind: "foto",
    },
    excerpt:
      "Análisis y validación de datos de producción y recursos para fortalecer la toma de decisiones estratégicas.",
    description:
      "Implementamos un servicio de reconciliación minera para Compañía Minera Condestable S.A., analizando y validando datos críticos de producción y recursos a lo largo de la cadena mina-planta. El resultado fue información confiable y trazable que permitió optimizar procesos operativos y fortalecer la toma de decisiones estratégicas.",
    featured: true,
  },
  {
    slug: "bd-geologica-titan",
    title: "Automatización y analítica en base de datos geológica",
    shortTitle: "Base de datos geológica",
    // En el sitio actual la etiqueta es "analítica"; el servicio exacto no está confirmado.
    tag: "analítica",
    client: "titan",
    image: {
      src: muestrasLaboratorio,
      alt: "Imagen referencial: sobres y bolsas de muestras de laboratorio en bandejas",
      kind: "referencial",
    },
    excerpt:
      "Automatización de la integración de datos geológicos para acelerar su carga en el software de modelamiento.",
    description:
      "Desarrollamos una solución de automatización y analítica para la base de datos geológica de Minera Titán del Perú. Integramos y depuramos los datos de exploración para identificar puntos de mejora en el flujo de trabajo, habilitando su importación automática hacia el software de modelamiento y reduciendo los tiempos de procesamiento manual.",
    featured: true,
  },
  {
    slug: "geologia-estructural",
    title: "Geología estructural",
    shortTitle: "Geología estructural",
    tag: "geología-estructural",
    image: {
      src: afloramiento,
      alt: "Imagen referencial: afloramiento de roca con estratos plegados y una falla",
      kind: "referencial",
    },
    excerpt:
      "Mapeo y modelamiento 3D de estructuras geológicas para optimizar la exploración y evaluación de yacimientos.",
    description:
      "Realizamos un análisis estructural detallado orientado a optimizar la exploración y evaluación de yacimientos. Aplicamos técnicas avanzadas de mapeo de campo y modelamiento 3D para caracterizar la arquitectura geológica de depósitos mineros, brindando una base técnica sólida para la planificación de futuras campañas de exploración.",
    featured: true,
    // PENDIENTE(Sofía o Camila): confirmar que es un proyecto real; no tiene cliente nombrado.
    // Se muestra por decisión de Salim (4 oct 2026).
    toConfirm: true,
  },
];

/** Enlace a un caso en la página de Proyectos. */
export function caseHref(slug: string): string {
  return `/proyectos/#caso-${slug}`;
}

/** Bajada de la página de Proyectos: describe la lista, sin afirmar más. */
export const projectsLead = "Casos de MC Consultores y el trabajo realizado en cada uno.";
