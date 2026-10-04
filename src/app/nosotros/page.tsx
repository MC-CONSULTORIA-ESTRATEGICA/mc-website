import { SkeletonList } from "@/components/sections/Skeleton";
import { aboutHighlights } from "@/content/about";
import { activePeople } from "@/content/people";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Nosotros",
  description: "Equipo y consultores asociados de MC Consultores, consultora minera en Lima, Perú.",
  path: "/nosotros/",
});

export default function AboutPage() {
  const toItem = (person: (typeof activePeople)[number]) => ({
    key: person.slug,
    label: person.name,
    detail: person.role,
  });
  return (
    <>
      <h1>Nosotros</h1>
      <SkeletonList
        title="Sobre nosotros"
        items={aboutHighlights.map((text) => ({ key: text, label: text }))}
      />
      <SkeletonList
        title="Equipo"
        items={activePeople.filter((person) => person.group === "equipo").map(toItem)}
      />
      <SkeletonList
        title="Consultores asociados"
        items={activePeople.filter((person) => person.group === "asociado").map(toItem)}
      />
    </>
  );
}
