import Link from "next/link";

import { CaseCard } from "@/components/ui/CaseCard";
import { Icon } from "@/components/ui/Icon";
import { Pending } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { projects } from "@/content/projects";

export function Projects() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  return (
    <section id="proyectos" className="sec sec-sheet" aria-labelledby="proyectos-title">
      <div className="sec-gridband" aria-hidden="true" />
      <div className="page">
        <SectionHead id="proyectos-title" title="Proyectos recientes" />
        <div className="case-grid">
          {featured.map((project) => (
            <CaseCard key={project.slug} project={project} />
          ))}
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
