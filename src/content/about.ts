import type { StaticImageData } from "next/image";

import equipoGrupo3 from "@/assets/fotos/equipo-grupo-3.webp";
import sesionSala1 from "@/assets/fotos/sesion-sala-1.webp";
import equipoBanner1 from "@/assets/fotos/equipo-banner-1.webp";
import equipoGrupo1 from "@/assets/fotos/equipo-grupo-1.webp";
import equipoGrupo2 from "@/assets/fotos/equipo-grupo-2.webp";

// Afirmaciones del sitio actual sobre MC: se pueden usar (PRODUCT.md), pero no se agregan nuevas.

/**
 * "Sobre Nosotros" del sitio actual sin sus adjetivos vacíos ("estrategias innovadoras", "excelente
 * y eficiente"); el cierre sale del texto "MC Consultores". BORRADOR hasta que lo apruebe Marcos.
 */
export const aboutLead = "En MC Consultores reunimos a geólogos, ingenieros y especialistas en minería.";
export const aboutText =
  "Nuestro enfoque combina el criterio técnico con el conocimiento de los procesos mineros, para optimizar la toma de decisiones a lo largo del ciclo minero.";

/**
 * Especialidades del equipo, sacadas al pie de la letra de los cargos de people.ts (slugs). Sin
 * dirección, administración ni software (no se promociona software). Una persona inactiva no se
 * muestra, y una especialidad sin nadie activo tampoco.
 */
export const specialties: { title: string; people: string[] }[] = [
  { title: "Geología", people: ["armando-simon", "cecilia-ildefonso", "luis-maldonado"] },
  { title: "Geofísica", people: ["armando-simon"] },
  { title: "Modelamiento geológico", people: ["cecilia-ildefonso"] },
  { title: "Geotecnia", people: ["luis-maldonado"] },
  { title: "Procesos metalúrgicos", people: ["adalberto-rivadeneira"] },
  { title: "Planeamiento de minas", people: ["juan-rondinel"] },
  { title: "Analítica de datos y automatización de procesos", people: ["sofia-quispe"] },
];

/** Viñetas de "Sobre Nosotros". No se muestran: son adjetivos sin respaldo (Salim, 4 oct). */
export const aboutHighlights = [
  "Equipo multidisciplinario altamente calificado",
  "Enfoque en la automatización",
  "Comprometidos con la excelencia",
];

/** Lista "por qué MC" del inicio actual. No se muestra, por lo mismo. */
export const reasons = [
  { title: "Especialistas en el sector minero", desc: "Entendemos los desafíos y oportunidades de la industria." },
  { title: "Respuestas ágiles", desc: "Capacidad de adaptación y entrega en tiempos cortos." },
  { title: "Enfoque en la optimización", desc: "Ayudamos a mejorar procesos, reducir costos y potenciar." },
  { title: "Acompañamiento cercano", desc: "Comunicación clara y compromiso con cada cliente." },
  { title: "Soporte técnico y estratégico", desc: "Soluciones integrales que abarcan lo operativo y lo gerencial." },
];

/**
 * Fotos reales de MC (eventos y equipo), en el orden del carrusel de Nosotros.
 * PENDIENTE(Camila): de qué evento y fecha es cada una, para el pie.
 */
export const teamPhotos: { image: StaticImageData; alt: string }[] = [
  { image: equipoGrupo3, alt: "Equipo de MC Consultores" },
  { image: equipoGrupo2, alt: "Equipo de MC Consultores en un evento" },
  { image: equipoBanner1, alt: "Equipo de MC Consultores en un evento" },
  { image: equipoGrupo1, alt: "Equipo de MC Consultores en un evento" },
  { image: sesionSala1, alt: "Sesión de MC Consultores" },
];
