import { Contact } from "@/components/sections/Contact";
import { CaseLog } from "@/components/sections/proyectos/CaseLog";
import { PageHead } from "@/components/ui/PageHead";
import { PageIndex } from "@/components/ui/PageIndex";
import { getClient } from "@/content/clients";
import { projects, projectsLead } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

import "@/components/sections/proyectos/proyectos.css";

export const metadata = pageMetadata({
  title: "Proyectos y casos",
  description:
    "Casos de MC Consultores con Southern Peru Copper Corporation, Compañía Minera Condestable y Minera Titán del Perú.",
  path: "/proyectos/",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHead title="Proyectos" lead={projectsLead}>
        <PageIndex
          label="Casos en esta página"
          items={projects.map((project) => ({
            href: `#caso-${project.slug}`,
            label: project.shortTitle,
            // Sin cliente nombrado (o confidencial): la fila del cliente queda vacía.
            meta: project.client ? getClient(project.client).name : null,
          }))}
        />
      </PageHead>
      <CaseLog />
      <Contact />
    </>
  );
}
