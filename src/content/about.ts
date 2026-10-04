import type { StaticImageData } from "next/image";

import equipoGrupo3 from "@/assets/fotos/equipo-grupo-3.webp";
import sesionSala1 from "@/assets/fotos/sesion-sala-1.webp";
import equipoBanner1 from "@/assets/fotos/equipo-banner-1.webp";
import equipoGrupo1 from "@/assets/fotos/equipo-grupo-1.webp";
import equipoGrupo2 from "@/assets/fotos/equipo-grupo-2.webp";

// Afirmaciones del sitio actual sobre MC: se pueden usar (PRODUCT.md), pero no se agregan nuevas.

/** Viñetas de "Sobre Nosotros". */
export const aboutHighlights = [
  "Equipo multidisciplinario altamente calificado",
  "Enfoque en la automatización",
  "Comprometidos con la excelencia",
];

/** Lista "por qué MC" del inicio actual. */
export const reasons = [
  { title: "Especialistas en el sector minero", desc: "Entendemos los desafíos y oportunidades de la industria." },
  { title: "Respuestas ágiles", desc: "Capacidad de adaptación y entrega en tiempos cortos." },
  { title: "Enfoque en la optimización", desc: "Ayudamos a mejorar procesos, reducir costos y potenciar." },
  { title: "Acompañamiento cercano", desc: "Comunicación clara y compromiso con cada cliente." },
  { title: "Soporte técnico y estratégico", desc: "Soluciones integrales que abarcan lo operativo y lo gerencial." },
];

/** Fotos reales de MC (eventos y equipo), en el orden del carrusel de Nosotros. */
export const teamPhotos: { image: StaticImageData; alt: string }[] = [
  { image: equipoGrupo3, alt: "Equipo de MC Consultores" },
  { image: equipoGrupo2, alt: "Equipo de MC Consultores en un evento" },
  { image: equipoBanner1, alt: "Equipo de MC Consultores en un evento" },
  { image: equipoGrupo1, alt: "Equipo de MC Consultores en un evento" },
  { image: sesionSala1, alt: "Sesión de MC Consultores" },
];
