import type { StaticImageData } from "next/image";

import marcos from "@/assets/personas/marcos-calderon.webp";
import armando from "@/assets/personas/armando-simon.webp";
import astrid from "@/assets/personas/astrid-flores.webp";
import cecilia from "@/assets/personas/cecilia-ildefonso.webp";
import adalberto from "@/assets/personas/adalberto-rivadeneira.webp";
import luis from "@/assets/personas/luis-maldonado.webp";
import juan from "@/assets/personas/juan-rondinel.webp";
import arnold from "@/assets/personas/arnold-chavez.webp";
import sofia from "@/assets/personas/sofia-quispe.webp";
import claudio from "@/assets/personas/claudio-moncada.webp";
import salim from "@/assets/personas/salim-ramirez.webp";
import camila from "@/assets/personas/camila-algarate.webp";

export type Person = {
  slug: string;
  name: string;
  role: string;
  group: "team" | "associate";
  photo?: StaticImageData;
  /** Posición vertical del recorte de la foto (object-position Y); los retratos son desparejos. */
  photoFocusY?: string;
  /** Acercamiento de la foto dentro del marco, para sacar bordes del retrato de origen. */
  photoScale?: number;
  linkedin?: string;
  /** `false`: ya no está en MC; se conserva el dato pero no se muestra. */
  active: boolean;
};

// Orden equipo/asociados sin decidir: Sofía prefiere equipo arriba; Marcos quiso a los
// consultores arriba. PENDIENTE(Marcos): orden de las secciones.
// PENDIENTE(Marcos): entran un grupo de cuatro consultores de relaves y Percy Surca (nombres,
// cargos y fotos).
// El sitio actual muestra a Marcos al inicio de las dos secciones; aquí figura una sola vez.
export const people: Person[] = [
  // Equipo
  {
    slug: "marcos-calderon",
    name: "Marcos Calderon",
    role: "CEO & Founder",
    group: "team",
    photo: marcos,
    photoFocusY: "4%",
    linkedin: "https://www.linkedin.com/in/marcos-s-calder%C3%B3n-aran%C3%ADbar-a07283140/",
    active: true,
  },
  {
    // Salió de MC (se fue a Volcan; Marcos, 30 sep).
    slug: "claudio-moncada",
    name: "Claudio Moncada",
    role: "Ing. Geológica - Consultor de Geología",
    group: "team",
    photo: claudio,
    photoFocusY: "54%",
    linkedin: "https://www.linkedin.com/in/claudio-moncada-romani-003150168/",
    active: false,
  },
  /* Comentado en el sitio actual (y con la foto de Claudio):
  {
    slug: "edu-andia",
    name: "Edu Andia",
    role: "Consultor Senior Procesos Metalúrgicos",
    group: "team",
    linkedin: "https://www.linkedin.com/in/edu-andia-carpio-19b19a255/",
    active: false,
  },
  */
  {
    slug: "sofia-quispe",
    name: "Sofia Quispe",
    role: "Ing. de Sistemas, Analítica de Datos y Automatización de Procesos",
    group: "team",
    photo: sofia,
    photoFocusY: "31%",
    linkedin: "https://www.linkedin.com/in/sofia-quispe-salas/",
    active: true,
  },
  {
    slug: "salim-ramirez",
    name: "Salim Ramirez",
    role: "Ing. Software - Consultor de Software",
    group: "team",
    photo: salim,
    photoFocusY: "55%",
    linkedin: "https://www.linkedin.com/in/salimramirezm/",
    active: true,
  },
  {
    // Pasa a ventas y debe figurar en contacto (Marcos, 30 sep).
    slug: "camila-algarate",
    name: "Camila Algarate",
    role: "Administración & Marketing",
    group: "team",
    photo: camila,
    photoFocusY: "35%",
    linkedin: "https://www.linkedin.com/in/camila-algarate-espino-33b948308/",
    active: true,
  },

  // Consultores asociados
  {
    slug: "armando-simon",
    name: "Armando Simón",
    role: "Ph.D. Ing. Geólogo y Geofísico",
    group: "associate",
    photo: armando,
    photoFocusY: "50%",
    linkedin: "https://www.linkedin.com/in/armando-sim%C3%B3n-phd-pgeo-5781513b/",
    active: true,
  },
  {
    slug: "adalberto-rivadeneira",
    name: "Adalberto Rivadeneira",
    role: "Consultor Senior Procesos Metalúrgicos",
    group: "associate",
    photo: adalberto,
    photoFocusY: "64%",
    linkedin: "https://www.linkedin.com/in/adalberto-rivadeneira-48ab24b8/",
    active: true,
  },
  {
    // Sale (Marcos, 30 sep).
    slug: "astrid-flores",
    name: "Astrid Flores",
    role: "Ing. Geóloga Mina QAQC y Desarrollo Corporativo",
    group: "associate",
    photo: astrid,
    photoFocusY: "52%",
    linkedin: "https://www.linkedin.com/in/carmen-astrid-flores-ramirez-87086339/",
    active: false,
  },
  {
    slug: "cecilia-ildefonso",
    name: "Cecilia Ildefonso",
    role: "Ing. Geóloga, Consultora en Modelamiento Geológico",
    group: "associate",
    photo: cecilia,
    photoFocusY: "47%",
    linkedin: "https://pe.linkedin.com/in/cecilia-i-40a36355",
    active: true,
  },
  {
    slug: "luis-maldonado",
    name: "Luis Maldonado",
    role: "Ing. Geólogo, Consultor Senior de Geotecnia",
    group: "associate",
    photo: luis,
    photoFocusY: "71%",
    // La foto de origen trae un recorte circular: se acerca para que no se vea dentro del marco.
    // PENDIENTE(Camila): retrato nuevo de Luis Maldonado.
    photoScale: 1.3,
    linkedin: "https://www.linkedin.com/in/luis-maldonado-zorrilla-a7b34322/",
    active: true,
  },
  {
    slug: "juan-rondinel",
    name: "Juan Rondinel",
    role: "Ing. de Minas, Consultor Senior de Planeamiento, CP MAusIMM 3000013",
    group: "associate",
    photo: juan,
    photoFocusY: "58%",
    linkedin: "https://www.linkedin.com/in/juandavidrondinel/",
    active: true,
  },
  {
    // Sale (Marcos, 30 sep).
    slug: "arnold-chavez",
    name: "Arnold Chávez",
    role: "Ing. de Minas, Consultor Senior de Planeamiento",
    group: "associate",
    photo: arnold,
    photoFocusY: "53%",
    linkedin: "https://www.linkedin.com/in/arnold-chavez-atalaya-928302121/",
    active: false,
  },
];

export const activePeople = people.filter((person) => person.active);

export function getPerson(slug: string): Person | undefined {
  return people.find((person) => person.slug === slug);
}

/**
 * Grupos en el orden en que se muestran: equipo arriba y asociados abajo (Sofía).
 * PENDIENTE(Marcos): orden de los grupos.
 */
export const peopleGroups = [
  { id: "equipo", title: "Equipo", people: activePeople.filter((person) => person.group === "team") },
  {
    id: "asociados",
    title: "Consultores asociados",
    people: activePeople.filter((person) => person.group === "associate"),
  },
];
