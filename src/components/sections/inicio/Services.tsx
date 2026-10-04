import { Contours } from "@/components/ui/Contours";
import { ReviewFlag, ReviewOnly } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { activeServices, courses, servicesLead } from "@/content/services";

import { ServicesLegend } from "./ServicesLegend";

export function Services() {
  const legend = activeServices.map(({ slug, title, description, pattern, codes }) => ({
    slug,
    title,
    description,
    pattern,
    codes,
  }));
  return (
    <section id="servicios" className="sec sec-paper grain sec-services" aria-labelledby="servicios-title">
      <Contours
        className="earth-rings services-rings"
        viewBox={{ width: 560, height: 440 }}
        center={{ x: 278, y: 222 }}
        rings={10}
        radius={26}
        step={21}
        stretch={1.3}
        indexEvery={3}
      />
      <div className="page">
        <SectionHead id="servicios-title" title="Servicios" lead={<p>{servicesLead}</p>} />
        <ServicesLegend
          services={legend}
          coursesPending={
            courses.length === 0 ? (
              <ReviewOnly>
                {/* PENDIENTE(Marcos): catálogo de cursos (src/content/services.ts) */}
                <span className="lg-pending">Por definir: catálogo de cursos</span>
              </ReviewOnly>
            ) : null
          }
          // REVISAR: quitar la marca cuando la geología del bloque tenga su revisión técnica
          figureFlag={<ReviewFlag>Pendiente: revisión técnica</ReviewFlag>}
        />
      </div>
    </section>
  );
}
