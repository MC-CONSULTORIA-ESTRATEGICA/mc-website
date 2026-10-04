import type { StaticImageData } from "next/image";

import sesionSala2 from "@/assets/fotos/sesion-sala-2.webp";
import reunionSpm from "@/assets/fotos/reunion-spm.webp";
import casoGeologiaEstructural from "@/assets/ia/caso-geologia-estructural.webp";
import casoBdGeologica from "@/assets/ia/caso-bd-geologica.webp";
import type { ClientId } from "@/content/clients";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  client?: ClientId;
  /** Las de `assets/ia/` son generadas con IA y salen en el paso 3 (regla de imágenes). */
  image: StaticImageData;
  excerpt: string;
  description: string;
  /** Entre los 4 que se muestran en el inicio. */
  featured: boolean;
};

// Los 4 casos del sitio actual. Sofía dice que son unos 13: la lista (cliente, servicio,
// alcance) se pide a Sofía o a Camila y entra aquí.
export const projects: Project[] = [
  {
    slug: "curso-sk-1300-southern",
    title: "Curso de Código S-K 1300",
    tag: "capacitación",
    client: "southern",
    image: sesionSala2,
    excerpt:
      "Capacitación especializada en el Código S-K 1300 para el equipo de Exploraciones, con alcance regional en Perú, Chile y Argentina.",
    description:
      "Diseñamos y dictamos una capacitación especializada en el Código S-K 1300 para el equipo de Exploraciones de Southern Peru Copper Corporation. La sesión fue conducida por nuestro Consultor Asociado, el Dr. Armando Simón, PhD, PGeo, y reunió a los responsables de Exploraciones de sus proyectos en Perú, Chile y Argentina en un espacio de aprendizaje, análisis técnico y colaboración regional.",
    featured: true,
  },
  {
    slug: "reconciliacion-condestable",
    title: "Servicio de Reconciliación Minera",
    tag: "reconciliación",
    client: "condestable",
    image: reunionSpm,
    excerpt:
      "Análisis y validación de datos de producción y recursos para fortalecer la toma de decisiones estratégicas.",
    description:
      "Implementamos un servicio de reconciliación minera para Compañía Minera Condestable S.A., analizando y validando datos críticos de producción y recursos a lo largo de la cadena mina-planta. El resultado fue información confiable y trazable que permitió optimizar procesos operativos y fortalecer la toma de decisiones estratégicas.",
    featured: true,
  },
  {
    slug: "bd-geologica-titan",
    title: "Automatización y Analítica en BD Geológica",
    tag: "analítica",
    client: "titan",
    image: casoBdGeologica,
    excerpt:
      "Automatización de la integración de datos geológicos para acelerar su carga en el software de modelamiento.",
    description:
      "Desarrollamos una solución de automatización y analítica para la base de datos geológica de Minera Titán del Perú. Integramos y depuramos los datos de exploración para identificar puntos de mejora en el flujo de trabajo, habilitando su importación automática hacia el software de modelamiento y reduciendo los tiempos de procesamiento manual.",
    featured: true,
  },
  {
    // PENDIENTE(Marcos): confirmar que es un proyecto real; no tiene cliente nombrado.
    slug: "geologia-estructural",
    title: "Geología Estructural",
    tag: "geología-estructural",
    image: casoGeologiaEstructural,
    excerpt:
      "Mapeo y modelamiento 3D de estructuras geológicas para optimizar la exploración y evaluación de yacimientos.",
    description:
      "Realizamos un análisis estructural detallado orientado a optimizar la exploración y evaluación de yacimientos. Aplicamos técnicas avanzadas de mapeo de campo y modelamiento 3D para caracterizar la arquitectura geológica de depósitos mineros, brindando una base técnica sólida para la planificación de futuras campañas de exploración.",
    featured: true,
  },
];
