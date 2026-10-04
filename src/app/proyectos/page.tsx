import { SkeletonList } from "@/components/sections/Skeleton";
import { getClient } from "@/content/clients";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Proyectos",
  description:
    "Casos de MC Consultores con Southern Peru Copper Corporation, Compañía Minera Condestable y Minera Titán del Perú.",
  path: "/proyectos/",
});

export default function ProjectsPage() {
  return (
    <>
      <h1>Proyectos</h1>
      <SkeletonList
        title="Casos"
        items={projects.map((project) => ({
          key: project.slug,
          label: project.title,
          detail: project.client
            ? (getClient(project.client).legalName ?? getClient(project.client).name)
            : undefined,
        }))}
      />
    </>
  );
}
