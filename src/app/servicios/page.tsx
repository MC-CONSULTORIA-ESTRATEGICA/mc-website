import { Contact } from "@/components/sections/Contact";
import { ServiceUnits } from "@/components/sections/servicios/ServiceUnits";
import { WorkFlow } from "@/components/sections/servicios/WorkFlow";
import { PageHead } from "@/components/ui/PageHead";
import { PageIndex } from "@/components/ui/PageIndex";
import { Swatch } from "@/components/ui/Swatch";
import { activeServices, servicesLead } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

import "@/components/sections/servicios/servicios.css";

export const metadata = pageMetadata({
  title: "Servicios de consultoría minera",
  description:
    "Reconciliación minera, consultoría en el ciclo minero, bases de datos QA-QC, estimación de recursos y reservas (JORC, NI 43-101) y capacitación.",
  path: "/servicios/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHead title="Servicios" lead={servicesLead}>
        <PageIndex
          label="Servicios en esta página"
          items={activeServices.map((service) => ({
            href: `#servicio-${service.slug}`,
            label: service.title,
            icon: service.pattern ? (
              <Swatch pattern={service.pattern} width={36} height={24} idPrefix="indice" className="swatch index-swatch" />
            ) : undefined,
          }))}
        />
      </PageHead>
      <ServiceUnits />
      <WorkFlow />
      <Contact />
    </>
  );
}
