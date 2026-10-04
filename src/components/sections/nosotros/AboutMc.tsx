import { Pending, ReviewFlag } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { aboutText, specialties } from "@/content/about";
import { facts, factsConfirmed } from "@/content/facts";
import { inicio } from "@/content/inicio";
import { getPerson, type Person } from "@/content/people";
import { activeServices } from "@/content/services";
import { site } from "@/lib/site";

/** Códigos de reporte que nombran los servicios, sin repetir. */
const codes = [...new Set(activeServices.flatMap((service) => service.codes ?? []))];

/** Texto, especialidades con quién las cubre y ficha de la empresa. */
export function AboutMc() {
  const rows = specialties
    .map((specialty) => ({
      title: specialty.title,
      people: specialty.people.map(getPerson).filter((person): person is Person => Boolean(person?.active)),
    }))
    .filter((row) => row.people.length > 0);
  return (
    <section id="sobre-mc" className="sec sec-paper grain about-mc" aria-labelledby="sobre-mc-title">
      <div className="page">
        <SectionHead id="sobre-mc-title" title="Sobre MC" />
        <div className="about-mc-grid">
          <div className="about-mc-main">
            <p className="about-mc-text">
              {aboutText} <ReviewFlag>Borrador</ReviewFlag>
            </p>
          </div>
          <aside className="about-mc-aside" aria-label="Ficha de la empresa">
            <dl className="origin">
              <div className="origin-row">
                <dt>Razón social</dt>
                <dd>{site.legalName}</dd>
              </div>
              <div className="origin-row">
                <dt>Oficina</dt>
                <dd>{site.contact.city}</dd>
              </div>
              <div className="origin-row">
                <dt>Presencia</dt>
                <dd>{inicio.presence.title}</dd>
              </div>
              <div className="origin-row">
                <dt>Códigos</dt>
                <dd className="about-mc-codes">
                  {codes.map((code) => (
                    <span key={code} className="code-tag">
                      {code}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            {/* PENDIENTE(Marcos): misión y visión */}
            <Pending what="misión y visión" />
            {/* PENDIENTE(Marcos): cifras del sitio actual; se muestran cuando estén confirmadas */}
            {factsConfirmed ? null : (
              <Pending what="cifras">
                {facts.map((fact) => `${fact.prefix ?? ""}${fact.value} ${fact.label.toLowerCase()}`).join(" · ")}
              </Pending>
            )}
          </aside>
          <div className="about-mc-legend">
          <h3 className="specialties-title">Especialidades</h3>
          <dl className="specialties">
            {rows.map((row) => (
              <div key={row.title}>
                <dt>{row.title}</dt>
                <dd>
                  {row.people.map((person, i) => (
                    <span key={person.slug}>
                      {i > 0 ? ", " : null}
                      <a href={`#persona-${person.slug}`}>{person.name}</a>
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
