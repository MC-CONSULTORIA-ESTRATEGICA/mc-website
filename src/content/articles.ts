import type { StaticImageData } from "next/image";

import servicioReconciliacion from "@/assets/ia/servicio-reconciliacion.webp";
import servicioQaqc from "@/assets/ia/servicio-qaqc.webp";
import servicioEstimacion from "@/assets/ia/servicio-estimacion.webp";
import casoGeologiaEstructural from "@/assets/ia/caso-geologia-estructural.webp";

export type Article = {
  slug: string;
  category: string;
  tag: string;
  accent: string;
  title: string;
  excerpt: string;
  content: string[];
  image: StaticImageData;
  date: string;
  /** Fecha para ordenar y para <time> (AAAA-MM). */
  dateTime: string;
  readTime: string;
};

export const articles: Article[] = [
  {
    slug: "importancia-reconciliacion-minera",
    category: "Reconciliación minera",
    tag: "reconciliacion",
    accent: "#3f9dc8",
    title: "La importancia de la reconciliación minera",
    excerpt:
      "Comparar lo planificado con lo realmente producido es clave para detectar pérdidas, reducir la dilución y respaldar decisiones confiables en toda la cadena mina-planta-despacho.",
    image: servicioReconciliacion,
    date: "Mar 2026",
    dateTime: "2026-03",
    readTime: "6 min de lectura",
    content: [
      "La reconciliación minera es el proceso mediante el cual se compara lo estimado en los modelos geológicos y planes de mina con lo efectivamente extraído, procesado y despachado. Esta comparación permite identificar brechas entre lo planificado y lo real en tonelaje, ley y recuperación.",
      "Su importancia radica en que funciona como un sistema de control cruzado a lo largo de todo el ciclo minero: perforación, modelamiento geológico, planificación de corto y largo plazo, extracción, procesamiento metalúrgico y despacho. Cada eslabón introduce variabilidad, y sin un proceso de reconciliación estructurado, esas diferencias se acumulan sin ser detectadas a tiempo.",
      "Entre los beneficios directos de una reconciliación bien implementada están: la reducción de pérdidas y dilución no controlada, la validación (o ajuste) de los modelos de recursos y reservas, la mejora en la confiabilidad de los reportes técnicos, y una base sólida para la toma de decisiones estratégicas y operativas.",
      "Como buena práctica, recomendamos establecer indicadores claros, como el factor de reconciliación por tonelaje y por ley, definir una frecuencia de revisión (diaria, semanal y mensual) y contar con una base de datos integrada que permita trazar el origen de cada desviación, en lugar de auditar procesos de forma aislada.",
    ],
  },
  {
    slug: "buenas-practicas-qa-qc",
    category: "QA-QC",
    tag: "qa-qc",
    accent: "#3f9dc8",
    title: "Buenas prácticas de QA/QC en bases de datos geológicas",
    excerpt:
      "Un programa sólido de aseguramiento y control de calidad protege la confiabilidad de los datos que sustentan la estimación de recursos y las decisiones de inversión.",
    image: servicioQaqc,
    date: "Ene 2026",
    dateTime: "2026-01",
    readTime: "5 min de lectura",
    content: [
      "El QA/QC (Quality Assurance / Quality Control) es el conjunto de procedimientos que garantizan que los datos geológicos, como leyes de ensayes, densidades, coordenadas de sondajes y litología, sean precisos, consistentes y trazables desde el campo hasta la base de datos final.",
      "Un programa de QA/QC robusto se apoya en el uso sistemático de materiales de control: estándares certificados para evaluar la exactitud, blancos para detectar contaminación, y duplicados (de campo, de preparación y de pulpa) para medir la precisión del muestreo y el análisis de laboratorio.",
      "Cuando estos controles no se implementan o no se revisan con la frecuencia adecuada, el riesgo no es solo estadístico: puede traducirse en modelos de recursos sobreestimados o subestimados, decisiones de inversión mal fundamentadas y observaciones en auditorías técnicas externas.",
      "Recomendamos definir límites de control (por ejemplo, ±2 y ±3 desviaciones estándar) con alertas automáticas ante anomalías, documentar cada excursión fuera de rango con su causa raíz, y auditar periódicamente al laboratorio primario y de verificación (check assays) para sostener la confianza en la base de datos a largo plazo.",
    ],
  },
  {
    slug: "estimacion-recursos-ni-43-101",
    category: "Recursos y reservas",
    tag: "ni-43-101",
    accent: "#3f9dc8",
    title: "Estimación de recursos bajo el estándar NI 43-101",
    excerpt:
      "El código canadiense NI 43-101 establece los requisitos mínimos de transparencia y rigor técnico para reportar recursos y reservas minerales ante inversionistas.",
    image: servicioEstimacion,
    date: "Nov 2025",
    dateTime: "2025-11",
    readTime: "7 min de lectura",
    content: [
      "El National Instrument 43-101 (NI 43-101) es el estándar canadiense que regula la divulgación pública de información técnica y científica sobre proyectos mineros, exigido a las compañías que cotizan en bolsas como la TSX o la TSX-V. Su objetivo es proteger a los inversionistas asegurando que la información publicada sea preparada y verificada por profesionales calificados.",
      "Bajo este código, los recursos minerales se clasifican en tres categorías según el nivel de confianza geológica: inferidos, indicados y medidos; mientras que las reservas, que incorporan factores económicos, técnicos, legales y ambientales, se dividen en probables y probadas.",
      "Una pieza central del estándar es la figura de la 'Qualified Person' (QP), un profesional con experiencia relevante y reconocido por una asociación profesional, responsable de firmar y respaldar técnicamente el reporte NI 43-101 que sustenta las declaraciones de recursos y reservas.",
      "Aunque el NI 43-101 es de origen canadiense, comparte principios con otros códigos internacionales como el JORC (Australia) o el S-K 1300 (Estados Unidos). Para proyectos con potencial de financiamiento internacional, alinear la metodología de estimación con estos estándares desde etapas tempranas evita reprocesos costosos más adelante.",
    ],
  },
  {
    slug: "gestion-relaves-sostenibilidad",
    category: "Sostenibilidad",
    tag: "sostenibilidad",
    accent: "#3f9dc8",
    title: "Gestión de relaves y sostenibilidad en la operación minera",
    excerpt:
      "La gestión responsable de depósitos de relaves es hoy un pilar de la licencia social y ambiental, no solo un requisito técnico o normativo.",
    image: casoGeologiaEstructural,
    date: "Sep 2025",
    dateTime: "2025-09",
    readTime: "6 min de lectura",
    content: [
      "Los relaves son los residuos generados tras la extracción del mineral de valor durante el procesamiento metalúrgico. Su almacenamiento a largo plazo en depósitos superficiales representa uno de los mayores riesgos ambientales, sociales y de reputación de la industria minera cuando no se gestiona adecuadamente.",
      "Los incidentes ocurridos en distintas operaciones a nivel mundial impulsaron la creación del Estándar Global para la Gestión de Relaves (GISTM, por sus siglas en inglés), que promueve una gestión basada en la seguridad de las personas y del ambiente por sobre criterios puramente económicos.",
      "Una gestión sostenible de relaves integra monitoreo geotécnico continuo (piezómetros, inclinómetros, inspecciones visuales), planes de cierre y post-cierre diseñados desde el inicio del proyecto, gestión eficiente del agua para reducir el volumen almacenado, y una comunicación transparente con las comunidades del entorno.",
      "Más allá del cumplimiento normativo, una estrategia sólida de gestión de relaves fortalece la licencia social para operar, reduce pasivos ambientales futuros y se alinea con los criterios ESG cada vez más exigidos por inversionistas y entidades financieras.",
    ],
  },
];

/** Artículos del más reciente al más antiguo. */
export function recentArticles(count = articles.length): Article[] {
  return [...articles].sort((a, b) => b.dateTime.localeCompare(a.dateTime)).slice(0, count);
}
