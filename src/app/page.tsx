import Image from "next/image";

import { SkeletonList } from "@/components/sections/Skeleton";
import { clients } from "@/content/clients";
import { newsItems } from "@/content/news";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: site.tagline,
    description:
      "Consultoría minera: reconciliación, bases de datos QA-QC, estimación de recursos y reservas, y capacitación en códigos mineros.",
    path: "/",
  }),
  // La plantilla de título del layout no se aplica a la página de su mismo segmento.
  title: { absolute: `${site.name} | ${site.tagline}` },
};

export default function HomePage() {
  return (
    <>
      <h1>{site.tagline}</h1>
      <SkeletonList
        title="Proyectos"
        items={projects
          .filter((project) => project.featured)
          .map((project) => ({ key: project.slug, label: project.title, detail: project.tag }))}
      />
      <section>
        <h2>Clientes</h2>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <Image src={client.logo} alt={client.name} height={48} style={{ width: "auto" }} />
            </li>
          ))}
        </ul>
      </section>
      <SkeletonList
        title="Eventos"
        items={newsItems
          .slice(0, 3)
          .map((item) => ({ key: String(item.id), label: item.title, detail: item.date }))}
      />
    </>
  );
}
