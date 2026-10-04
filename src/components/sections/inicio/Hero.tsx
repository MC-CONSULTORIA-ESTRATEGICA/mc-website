import Image from "next/image";
import type { CSSProperties } from "react";

import roca from "@/assets/generadas/roca-portada.webp";
import { Icon } from "@/components/ui/Icon";
import { ReviewFlag } from "@/components/ui/Review";
import { inicio } from "@/content/inicio";
import { site, WHATSAPP_QUOTE } from "@/lib/site";

import "./Hero.css";

// Cotas sobre la roca, en coordenadas de la imagen (1848×792 en el Afiche): una línea vertical
// con un nodo en cada extremo y, en dos de ellas, un tramo horizontal hacia la derecha.
const COTAS = [
  { x: 680, top: 150, bottom: 560, tick: 80 },
  { x: 890, top: 210, bottom: 455 },
  { x: 1040, top: 120, bottom: 395, tick: 50 },
];

export function Hero() {
  return (
    <section className="hero on-navy" aria-labelledby="hero-title">
      <div className="hero-plate">
        <Image
          src={roca}
          alt=""
          priority
          fetchPriority="high"
          sizes="(max-width: 899px) 180vw, 134vw"
          className="hero-rock"
        />
        <svg className="hero-cotas" viewBox="0 0 1848 792" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {COTAS.map((c, i) => (
            <g key={c.x} className="cota" style={{ "--i": i } as CSSProperties}>
              <path className="cota-line" pathLength={1} d={`M${c.x} ${c.top}V${c.bottom}`} />
              {c.tick ? <path className="cota-line cota-tick" pathLength={1} d={`M${c.x} ${c.top}h${c.tick}`} /> : null}
              <rect className="cota-node" x={c.x - 3.5} y={c.top - 3.5} width={7} height={7} />
              <rect className="cota-node" x={c.x - 3.5} y={c.bottom - 3.5} width={7} height={7} />
            </g>
          ))}
        </svg>
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="page hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title" className="display">
            {site.tagline}
          </h1>
          <p className="hero-lead">
            {inicio.hero.lead} <ReviewFlag>Borrador</ReviewFlag>
          </p>
          <div className="hero-actions">
            <a className="c-btn c-btn-action" href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} />
              Solicitar una cotización
            </a>
            <a className="c-btn c-btn-line" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
      <p className="hero-credit">Imagen ilustrativa</p>
    </section>
  );
}
