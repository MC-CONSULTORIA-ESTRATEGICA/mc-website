import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { contourPaths } from "@/components/ui/Contours";
import { SectionHead } from "@/components/ui/SectionHead";
import { recentNews } from "@/content/news";

/** Reglas cortas arriba a la derecha y curvas de nivel abajo a la izquierda, en tierra clara. */
function EventLines() {
  const contours = contourPaths({ rings: 7, radius: 40, step: 26, stretch: 1.35, phase: 0.7 });
  return (
    <svg className="event-lines" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="el-rules">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M${1440 - 180 - i * 46} ${22 + i * 9}H1440`} />
        ))}
      </g>
      <g className="el-contours" transform="translate(40 720)">
        {contours.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

export function Events() {
  const events = recentNews(3);
  return (
    <section id="eventos" className="sec sec-navy grain on-navy" aria-labelledby="eventos-title">
      <EventLines />
      <div className="page events-grid">
        <div className="events-text">
          <SectionHead id="eventos-title" title="Eventos" />
          <ol className="events-list">
            {events.map((event) => (
              <li key={event.id}>
                <time className="num" dateTime={event.dateTime}>
                  {event.date}
                </time>
                <span className="events-body">
                  <Link className="events-title" href={`/noticias/#evento-${event.id}`}>
                    {event.title}
                  </Link>
                  <span className="events-meta">
                    {event.type} · {event.city}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <Link className="link-arrow events-link" href="/noticias/">
            Ver todos los eventos en Noticias
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="events-photos">
          {events.map((event, i) => (
            <figure key={event.id} className={`${i === 0 ? "is-big" : ""}${event.poster ? " is-poster" : ""}`}>
              <Image
                src={event.image}
                alt={event.poster ? `Afiche: ${event.title}` : event.title}
                sizes={i === 0 ? "(max-width: 899px) 100vw, 720px" : "(max-width: 899px) 50vw, 360px"}
              />
              <figcaption>{event.poster ? `Afiche de la ponencia · ${event.date}` : event.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
