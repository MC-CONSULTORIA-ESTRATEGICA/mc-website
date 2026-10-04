import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { Pending, ReviewFlag } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { getClient } from "@/content/clients";
import { projects } from "@/content/projects";

export function Projects() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  return (
    <section id="proyectos" className="sec sec-sheet" aria-labelledby="proyectos-title">
      <div className="sec-gridband" aria-hidden="true" />
      <div className="page">
        <SectionHead id="proyectos-title" title="Proyectos recientes" />
        <div className="case-grid">
          {featured.map((project) => {
            const client = project.client ? getClient(project.client) : null;
            const fields = [
              ...(client ? [{ label: "Cliente", value: client.legalName ?? client.name }] : []),
              ...(project.service ? [{ label: "Servicio", value: project.service }] : []),
              ...(project.scope ? [{ label: "Alcance", value: project.scope }] : []),
            ];
            return (
              <article key={project.slug} id={`caso-${project.slug}`} className="case">
                <figure className="case-media">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    sizes="(max-width: 899px) 100vw, 640px"
                  />
                  {project.image.kind === "referencial" ? (
                    <figcaption className="img-label case-ref">Imagen referencial</figcaption>
                  ) : null}
                </figure>
                <h3>{project.title}</h3>
                <p>{project.excerpt}</p>
                {fields.length > 0 ? (
                  <dl className="origin">
                    {fields.map((field) => (
                      <div key={field.label} className="origin-row">
                        <dt>{field.label}</dt>
                        <dd>{field.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {project.toConfirm ? <ReviewFlag>Por confirmar</ReviewFlag> : null}
              </article>
            );
          })}
        </div>
        <Link className="link-arrow" href="/proyectos/">
          Ver todos los proyectos
          <Icon name="arrow-right" size={16} />
        </Link>
        {/* PENDIENTE(Marcos): testimonios (los pidió Camila) */}
        <div className="projects-pending">
          <Pending what="testimonios de clientes">con nombre, cargo y empresa.</Pending>
        </div>
      </div>
    </section>
  );
}
