import Image from "next/image";

import grupo from "@/assets/fotos/equipo-grupo-3.webp";
import { PeopleGroups } from "@/components/ui/PersonCard";
import { Pending, ReviewFlag, ReviewOnly } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { facts, factsConfirmed } from "@/content/facts";
import { inicio } from "@/content/inicio";

export function About() {
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
          <PeopleGroups />
        </div>
      </div>
    </section>
  );
}
