import type { StaticImageData } from "next/image";

import perumin37_1 from "@/assets/eventos/perumin-37-1.webp";
import perumin37_2 from "@/assets/eventos/perumin-37-2.webp";
import perumin37_3 from "@/assets/eventos/perumin-37-3.webp";
import perumin37_4 from "@/assets/eventos/perumin-37-4.webp";

import contiminContinental1 from "@/assets/eventos/contimin-continental-1.webp";
import contiminContinental2 from "@/assets/eventos/contimin-continental-2.webp";

import unsaAniversario1 from "@/assets/eventos/unsa-aniversario-1.webp";
import unsaAniversario2 from "@/assets/eventos/unsa-aniversario-2.webp";
import unsaAniversario3 from "@/assets/eventos/unsa-aniversario-3.webp";
import unsaAniversario4 from "@/assets/eventos/unsa-aniversario-4.webp";

import centrumPucp from "@/assets/eventos/centrum-pucp.webp";

import ausimm1 from "@/assets/eventos/ausimm-1.webp";
import ausimm2 from "@/assets/eventos/ausimm-2.webp";

import proexplo1 from "@/assets/eventos/proexplo-1.webp";
import proexplo2 from "@/assets/eventos/proexplo-2.webp";
import proexplo3 from "@/assets/eventos/proexplo-3.webp";
import proexplo4 from "@/assets/eventos/proexplo-4.webp";

export type NewsItem = {
  id: number;
  category: "Perumin" | "Universidades" | string;
  type: string;
  date: string;
  /** Fecha para ordenar (AAAA-MM, o AAAA si falta el mes). */
  dateTime: string;
  city: string;
  title: string;
  summary: string;
  attendees: number;
  images: StaticImageData[];
  image: StaticImageData;
  /** La imagen es el afiche del evento, no una foto: se muestra entera. */
  poster?: boolean;
  link?: string;
  highlight?: boolean;
  points?: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "Perumin",
    type: "Feria / Networking",
    date: "Sep 2025",
    dateTime: "2025-09",
    city: "Arequipa, PE",
    title: "Participación en PERUMIN 37",
    summary: "Participación activa en actividades técnicas y networking.",
    attendees: 1200,
    images: [perumin37_1, perumin37_2, perumin37_3, perumin37_4],
    image: perumin37_1,
    link: "",
    highlight: true,
    points: [
      "Rondas de networking con proveedores y empresas mineras",
      "Charlas técnicas sobre innovación y productividad",
      "Recopilación de insights para proyectos en operación",
    ],
  },
  {
    id: 2,
    category: "Universidades",
    type: "Ponencia",
    date: "Nov 2025",
    dateTime: "2025-11",
    city: "Arequipa, PE",
    title: "Ponencia en universidad Continental: CONTIMIN",
    summary: "Exposición de casos y buenas prácticas en reconciliación minera.",
    points: [
      "Desafíos actuales de la industria",
      "Importancia de la estimación de recursos y reservas",
      "Innovación en procesos y el valor de una formación técnica con propósito.",
    ],
    attendees: 180,
    image: contiminContinental1,
    images: [contiminContinental1, contiminContinental2],
    link: "",
    highlight: false,
  },
  {
    id: 3,
    category: "Universidades",
    type: "Ponencia",
    date: "Dic 2025",
    dateTime: "2025-12",
    city: "Arequipa, PE",
    title:
      "Asistencia LXXIX Aniversario de la Facultad de Geología, Geofísica y Minas - UNSA",
    summary:
      "Crecimiento Minero en el Perú, Arequipa como cluster de innovación y desarrollo territorial.",
    points: [
      "Consolidación de Arequipa como hub minero del sur del Perú",
      "Innovación tecnológica aplicada a la reconciliación minera",
      "Impacto del crecimiento minero en el desarrollo territorial",
      "Articulación universidad–empresa–Estado para impulsar investigación aplicada",
    ],
    attendees: 350,
    image: unsaAniversario1,
    images: [unsaAniversario1, unsaAniversario2, unsaAniversario3, unsaAniversario4],
    link: "",
    highlight: false,
  },
  {
    id: 4,
    category: "Universidades",
    type: "Ponencia",
    date: "Feb 2026",
    dateTime: "2026-02",
    city: "Lima, PE",
    title: "Ponencia en Centrum PUCP Business Consulting Club (CPBCC)",
    summary:
      "Distinción por aporte en actividades técnicas y difusión de conocimiento aplicado al sector.",
    points: [
      "La Minería 4.0 no crea valor por sí sola",
      "El valor surge cuando la geología se integra estratégicamente",
      "Permite planificar, explotar y reconciliar con precisión y datos confiables.",
    ],
    attendees: 60,
    image: centrumPucp,
    poster: true,
    images: [centrumPucp],
    link: "",
    highlight: false,
  },
  {
    id: 5,
    category: "AusIMM",
    type: "Conferencia / Networking",
    date: "2026",
    dateTime: "2026",
    city: "Perú",
    title: "Participación en AusIMM",
    summary:
      "Participación activa en eventos de la Asociación Australiana de Ingenieros de Minas y Metalurgia.",
    points: [
      "Compartir experiencias técnicas en la industria minera",
      "Networking con profesionales del sector",
      "Presentación de soluciones innovadoras",
    ],
    attendees: 0,
    image: ausimm1,
    images: [ausimm1, ausimm2],
    link: "",
    highlight: false,
  },
  {
    id: 6,
    category: "ProExplo",
    type: "Conferencia / Exposición",
    date: "2026",
    dateTime: "2026",
    city: "Perú",
    title: "Participación en ProExplo",
    summary:
      "Presencia en la conferencia y exposición de exploración minera más importante del Perú.",
    points: [
      "Exhibición de tecnologías y servicios de exploración",
      "Sesiones técnicas sobre estimación de recursos",
      "Networking con empresas exploratorias",
    ],
    attendees: 0,
    image: proexplo1,
    images: [proexplo1, proexplo2, proexplo3, proexplo4],
    link: "",
    highlight: false,
  },
];

// PENDIENTE(Camila): meses de AusIMM y ProExplo (2026). Mientras falten, un año sin mes se ordena
// como el más reciente de ese año, y entre ellos por id: el orden del Inicio es provisional.
const sortKey = (item: NewsItem) => (item.dateTime.length === 4 ? `${item.dateTime}-13` : item.dateTime);

/** Eventos del más reciente al más antiguo. */
export function recentNews(count = newsItems.length): NewsItem[] {
  return [...newsItems]
    .sort((a, b) => sortKey(b).localeCompare(sortKey(a)) || b.id - a.id)
    .slice(0, count);
}
