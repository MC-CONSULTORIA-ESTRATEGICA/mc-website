import { Contact } from "@/components/sections/Contact";
import { AboutMc } from "@/components/sections/nosotros/AboutMc";
import { PhotoSheet } from "@/components/sections/nosotros/PhotoSheet";
import { Roster } from "@/components/sections/nosotros/Roster";
import { PageHead } from "@/components/ui/PageHead";
import { PageIndex } from "@/components/ui/PageIndex";
import { ReviewFlag } from "@/components/ui/Review";
import { aboutLead } from "@/content/about";
import { peopleGroups } from "@/content/people";
import { pageMetadata } from "@/lib/metadata";

import "@/components/sections/nosotros/nosotros.css";

export const metadata = pageMetadata({
  title: "Equipo y consultores asociados",
  description: "Equipo y consultores asociados de MC Consultores, consultora minera en Lima, Perú.",
  path: "/nosotros/",
});

export default function AboutPage() {
  const index = [
    { href: "#sobre-mc", label: "Sobre MC" },
    ...peopleGroups.map((group) => ({ href: `#${group.id}`, label: group.title })),
    { href: "#fotos", label: "Fotos del equipo" },
  ];
  return (
    <>
      <PageHead
        title="Nosotros"
        lead={
          <>
            {aboutLead} <ReviewFlag>Borrador</ReviewFlag>
          </>
        }
      >
        <PageIndex label="Secciones de esta página" items={index} />
      </PageHead>
      <AboutMc />
      <Roster />
      <PhotoSheet />
      <Contact />
    </>
  );
}
