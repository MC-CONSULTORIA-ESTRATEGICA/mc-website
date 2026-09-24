import perumin1 from "../assets/perumin1.webp";
import perumin2 from "../assets/perumin2.webp";
import perumin3 from "../assets/perumin3.webp";
import perumin4 from "../assets/perumin4.webp";

import continental1 from "../assets/continental1.webp";
import continental2 from "../assets/continental2.webp";

import unsa1 from "../assets/unsa1.webp";
import unsa2 from "../assets/unsa2.webp";
import unsa3 from "../assets/unsa3.webp";
import unsa4 from "../assets/unsa4.webp";

import pucp from "../assets/pucp.webp";

import aussim1 from "../assets/aussim1.webp";
import aussim2 from "../assets/aussim2.webp";

import ProExplo1 from "../assets/ProExplo1.webp";
import ProExplo2 from "../assets/ProExplo2.webp";
import ProExplo3 from "../assets/ProExplo3.webp";
import ProExplo4 from "../assets/ProExplo4.webp";

export type NewsItem = {
  id: number;
  category: "Perumin" | "Universidades" | string;
  type: string;
  date: string;
  city: string;
  title: string;
  summary: string;
  attendees: number;
  images: string[];
  image: string;
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
    city: "Arequipa, PE",
    title: "Participación en PERUMIN 37",
    summary: "Participación activa en actividades técnicas y networking.",
    attendees: 1200,
    images: [perumin1, perumin2, perumin3, perumin4],
    image: perumin1,
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
    city: "Arequipa, PE",
    title: "Ponencia en universidad Continental: CONTIMIN",
    summary: "Exposición de casos y buenas prácticas en reconciliación minera.",
    points: [
      "Desafíos actuales de la industria",
      "Importancia de la estimación de recursos y reservas",
      "Innovación en procesos y el valor de una formación técnica con propósito.",
    ],
    attendees: 180,
    image: continental1,
    images: [continental1, continental2],
    link: "",
    highlight: false,
  },
  {
    id: 3,
    category: "Universidades",
    type: "Ponencia",
    date: "Dic 2025",
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
    image: unsa1,
    images: [unsa1, unsa2, unsa3, unsa4],
    link: "",
    highlight: false,
  },
  {
    id: 4,
    category: "Universidades",
    type: "Ponencia",
    date: "Feb 2026",
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
    image: pucp,
    images: [pucp],
    link: "",
    highlight: false,
  },
  {
    id: 5,
    category: "AusIMM",
    type: "Conferencia / Networking",
    date: "2026",
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
    image: aussim1,
    images: [aussim1, aussim2],
    link: "",
    highlight: false,
  },
  {
    id: 6,
    category: "ProExplo",
    type: "Conferencia / Exposición",
    date: "2026",
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
    image: ProExplo1,
    images: [ProExplo1, ProExplo2, ProExplo3, ProExplo4],
    link: "",
    highlight: false,
  },
];
