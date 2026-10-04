import type { StaticImageData } from "next/image";

import servicioReconciliacion from "@/assets/ia/servicio-reconciliacion.webp";
import servicioConsultoria from "@/assets/ia/servicio-consultoria.webp";
import servicioQaqc from "@/assets/ia/servicio-qaqc.webp";
import servicioEstimacion from "@/assets/ia/servicio-estimacion.webp";
import servicioCapacitacion from "@/assets/ia/servicio-capacitacion.webp";

export type Service = {
  slug: string;
  title: string;
  /** `null` mientras falte el texto: el servicio no se muestra. */
  description: string | null;
  /** Generadas con IA en el sitio actual; salen en el paso 3. */
  image?: StaticImageData;
  active: boolean;
};

// QA-QC es control de calidad de ensayes de laboratorio y de datos geológicos, no de software.
export const services: Service[] = [
  {
    slug: "reconciliacion-minera",
    title: "Reconciliación Minera",
    description:
      "Aseguramos la coherencia entre el plan de mina y la producción real. Con nuestras metodologías ayudamos a reducir pérdidas y mejorar la eficiencia operativa.",
    image: servicioReconciliacion,
    active: true,
  },
  {
    slug: "consultoria",
    title: "Consultoría",
    description:
      "Ofrecemos asesoría integral en todas las etapas del proyecto minero: desde exploración, estudios de factibilidad, permisos ambientales hasta cierre de mina.",
    image: servicioConsultoria,
    active: true,
  },
  {
    slug: "base-de-datos-qa-qc",
    title: "Base de datos QA-QC",
    description:
      "Diseñamos y auditamos bases de datos geológicas, asegurando integridad y confiabilidad para respaldar decisiones estratégicas.",
    image: servicioQaqc,
    active: true,
  },
  {
    slug: "estimacion-de-recursos-y-reservas",
    title: "Estimación de Recursos y Reservas",
    description:
      "Creamos modelos geológicos precisos y realizamos estimaciones bajo estándares internacionales (JORC, NI 43-101).",
    image: servicioEstimacion,
    active: true,
  },
  {
    slug: "capacitacion",
    title: "Capacitación en Códigos Mineros y Control de Calidad",
    description:
      "Brindamos formación especializada en códigos mineros y sistemas de control de calidad, asegurando el cumplimiento normativo y la mejora continua de los procesos operativos.",
    image: servicioCapacitacion,
    active: true,
  },
  // Marcos pidió reforzarlos (30 sep). Se pueden nombrar; descripción, alcance y casos no se
  // inventan. PENDIENTE(Marcos): textos de relaves, relleno y tratamiento de agua.
  { slug: "canchas-de-relaves", title: "Manejo de canchas de relaves", description: null, active: false },
  { slug: "relleno-para-mina", title: "Relleno para mina", description: null, active: false },
  { slug: "tratamiento-de-agua", title: "Tratamiento de agua", description: null, active: false },
];

export const activeServices = services.filter((service) => service.active && service.description);

/** "Nuestro Proceso de Trabajo" de la página Nosotros actual; Sofía lo quiere en Servicios. */
export const workProcess = [
  {
    title: "Identificamos la Necesidad",
    text: "Escuchamos a nuestros clientes y analizamos su contexto para entender sus desafíos reales.",
  },
  {
    title: "Diseñamos la Estrategia",
    text: "Creamos soluciones a medida con base en estudios técnicos, económicos y regulatorios.",
  },
  {
    title: "Implementamos la Solución",
    text: "Nuestro equipo acompaña cada fase del proyecto, asegurando calidad y cumplimiento normativo.",
  },
  {
    title: "Medimos y Optimizamos",
    text: "Monitoreamos resultados y ajustamos procesos para maximizar el impacto positivo.",
  },
];
