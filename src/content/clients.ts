import type { StaticImageData } from "next/image";

import southernCopper from "@/assets/clientes/southern-copper.webp";
import condestable from "@/assets/clientes/condestable.webp";
import titanDelPeru from "@/assets/clientes/titan-del-peru.webp";
import korimallko from "@/assets/clientes/korimallko.webp";
import ingemmet from "@/assets/clientes/ingemmet.webp";
import yura from "@/assets/clientes/yura.webp";
import buenaventura from "@/assets/clientes/buenaventura.webp";
import orex from "@/assets/clientes/orex.webp";
import minsur from "@/assets/clientes/minsur.webp";
import yanaquihua from "@/assets/clientes/yanaquihua.webp";
import coloradoMining from "@/assets/clientes/colorado-mining.webp";

export type Client = {
  id: string;
  /** Nombre corto, como en el logo. */
  name: string;
  /** Razón social, como aparece en los casos. */
  legalName?: string;
  logo: StaticImageData;
};

// En el orden del carrusel actual: Southern, Buenaventura y Minsur primero (Sofía y Marcos).
// No todos son mineras (INGEMMET es un instituto del Estado; Yura, cementera): la sección no se
// titula como "empresas mineras". Los logos no tienen transparencia (Minsur va sobre cuadro azul).
export const clients = [
  { id: "southern", name: "Southern Copper", legalName: "Southern Peru Copper Corporation", logo: southernCopper },
  { id: "buenaventura", name: "Buenaventura", logo: buenaventura },
  { id: "minsur", name: "Minsur", logo: minsur },
  { id: "korimallko", name: "Korimallko", logo: korimallko },
  { id: "ingemmet", name: "INGEMMET", logo: ingemmet },
  { id: "yura", name: "Yura", logo: yura },
  { id: "condestable", name: "Compañía Minera Condestable", legalName: "Compañía Minera Condestable S.A.", logo: condestable },
  { id: "orex", name: "Minera OREX", logo: orex },
  { id: "titan", name: "Minera Titán del Perú", legalName: "Minera Titán del Perú S.R.L.", logo: titanDelPeru },
  { id: "yanaquihua", name: "Yanaquihua", logo: yanaquihua },
  { id: "colorado", name: "Colorado Mining", logo: coloradoMining },
] as const satisfies readonly Client[];

export type ClientId = (typeof clients)[number]["id"];

export function getClient(id: ClientId): Client {
  return clients.find((client) => client.id === id)!;
}
