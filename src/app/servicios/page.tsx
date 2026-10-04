import { SkeletonList } from "@/components/sections/Skeleton";
import { activeServices, workProcess } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Servicios",
  description:
    "Reconciliación minera, consultoría en el ciclo minero, bases de datos QA-QC, estimación de recursos y reservas (JORC, NI 43-101) y capacitación.",
  path: "/servicios/",
});

export default function ServicesPage() {
  return (
    <>
      <h1>Servicios</h1>
      <SkeletonList
        title="Servicios"
        items={activeServices.map((service) => ({ key: service.slug, label: service.title }))}
      />
      <SkeletonList
        title="Proceso de trabajo"
        items={workProcess.map((step) => ({ key: step.title, label: step.title, detail: step.text }))}
      />
    </>
  );
}
