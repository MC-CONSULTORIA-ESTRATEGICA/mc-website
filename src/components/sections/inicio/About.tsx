import Image from "next/image";

import grupo from "@/assets/fotos/equipo-grupo-3.webp";
import { Icon } from "@/components/ui/Icon";
import { Pending, ReviewFlag, ReviewOnly } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { facts, factsConfirmed } from "@/content/facts";
import { inicio } from "@/content/inicio";
import { activePeople, type Person } from "@/content/people";

function PersonItem({ person }: { person: Person }) {
  return (
    <li className="person">
      <span className="portrait">
        {person.photo ? (
          <Image
            src={person.photo}
            alt=""
            sizes="96px"
            style={person.photoFocusY ? { objectPosition: `50% ${person.photoFocusY}` } : undefined}
          />
        ) : null}
      </span>
      <span className="person-text">
        <span className="person-name">{person.name}</span>
        <span className="person-role">{person.role}</span>
        {person.linkedin ? (
          <a className="person-in" href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={14} />
            <span className="visually-hidden">LinkedIn de {person.name}</span>
          </a>
        ) : null}
      </span>
    </li>
  );
}

export function About() {
  // Equipo arriba y asociados abajo, como en el Afiche. PENDIENTE(Marcos): orden de los grupos.
  const groups = [
    { title: "Equipo", people: activePeople.filter((person) => person.group === "equipo") },
    { title: "Consultores asociados", people: activePeople.filter((person) => person.group === "asociado") },
  ];
  return (
    <section id="nosotros" className="sec-about" aria-labelledby="nosotros-title">
      <figure className="about-photo">
        <Image src={grupo} alt={inicio.about.photoAlt} sizes="100vw" />
      </figure>
      <div className="sec sec-paper grain">
        <div className="page">
          <SectionHead id="nosotros-title" title="Quiénes somos" />
          <div className="about-grid">
            <div className="about-text">
              <p>
                {inicio.about.text} <ReviewFlag>Borrador</ReviewFlag>
              </p>
              {/* PENDIENTE(Marcos): misión y visión */}
              <Pending what="misión y visión" />
            </div>
            {/* PENDIENTE(Marcos): cifras del sitio actual; se muestran cuando estén confirmadas */}
            {factsConfirmed ? (
              <aside className="about-figures" aria-label="Cifras">
                <ul>
                  {facts.map((fact) => (
                    <li key={fact.label}>
                      <span className="num">
                        {fact.prefix}
                        {fact.value}
                      </span>{" "}
                      {fact.label}
                    </li>
                  ))}
                </ul>
              </aside>
            ) : (
              <ReviewOnly>
                <aside className="about-figures" aria-label="Cifras por confirmar">
                  <p className="about-figures-head">Por confirmar</p>
                  <ul>
                    {facts.map((fact) => (
                      <li key={fact.label}>
                        <span className="num">
                          {fact.prefix}
                          {fact.value}
                        </span>{" "}
                        {fact.label.toLowerCase()}
                      </li>
                    ))}
                  </ul>
                </aside>
              </ReviewOnly>
            )}
          </div>
          <div className="people">
            {groups.map((group) => (
              <div key={group.title} className="people-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.people.map((person) => (
                    <PersonItem key={person.slug} person={person} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
