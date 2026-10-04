import { Pending } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { COUNTRY_PATHS, GRATICULE, LABEL_POINTS, LIMA, MAP_VIEWBOX, NEIGHBOR_PATHS } from "@/content/geo/peru-ecuador";
import { inicio } from "@/content/inicio";

const lonLabel = (value: number) => `${Math.abs(value)}° O`;
const latLabel = (value: number) => (value === 0 ? "0°" : `${Math.abs(value)}° S`);

/** Perú y Ecuador dibujados con la misma línea que las cotas de la portada. */
function PresenceMap() {
  const { width, height } = MAP_VIEWBOX;
  return (
    <svg
      className="presence-map"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Mapa de Perú y Ecuador con la oficina de MC en Lima"
    >
      <defs>
        <pattern id="trama-presencia" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0V9" className="pm-hatch" />
        </pattern>
        <clipPath id="ventana-mapa">
          <rect width={width} height={height} />
        </clipPath>
      </defs>
      <g clipPath="url(#ventana-mapa)">
        {/* Meridianos y paralelos cada 5° */}
        <g className="pm-graticule">
          {GRATICULE.lon.map((line) => (
            <path key={`lon${line.value}`} d={`M${line.x} 0V${height}`} />
          ))}
          {GRATICULE.lat.map((line) => (
            <path key={`lat${line.value}`} d={`M0 ${line.y}H${width}`} />
          ))}
        </g>
        <g className="pm-neighbors">
          {NEIGHBOR_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g className="pm-countries">
          <path className="pm-fill" d={COUNTRY_PATHS.peru} />
          <path className="pm-fill" d={COUNTRY_PATHS.ecuador} />
          <path className="pm-outline" pathLength={1} d={COUNTRY_PATHS.peru} />
          <path className="pm-outline" pathLength={1} d={COUNTRY_PATHS.ecuador} />
        </g>
      </g>
      <g className="pm-axis" aria-hidden="true">
        {GRATICULE.lon.map((line) => (
          <text key={line.value} x={line.x + 6} y={height - 10}>
            {lonLabel(line.value)}
          </text>
        ))}
        {GRATICULE.lat.map((line) => (
          <text key={line.value} x={-10} y={line.y + 5} className="pm-lat">
            {latLabel(line.value)}
          </text>
        ))}
      </g>
      <g className="pm-labels" aria-hidden="true">
        <text className="pm-country" x={LABEL_POINTS.peru.x} y={LABEL_POINTS.peru.y}>
          Perú
        </text>
        <text className="pm-country" x={LABEL_POINTS.ecuador.x} y={LABEL_POINTS.ecuador.y}>
          Ecuador
        </text>
        <text className="pm-ocean" x={LABEL_POINTS.pacifico.x} y={LABEL_POINTS.pacifico.y}>
          <tspan x={LABEL_POINTS.pacifico.x}>Océano</tspan>
          <tspan x={LABEL_POINTS.pacifico.x} dy="1.3em">
            Pacífico
          </tspan>
        </text>
      </g>
      {/* Oficina en Lima: nodo cuadrado hueco (10 unidades, algo mayor que las cotas por la escala del mapa) y guía al rótulo, como las cotas de la portada */}
      <g className="pm-office">
        <path className="pm-leader" d={`M${LIMA.x} ${LIMA.y}H${LIMA.x + 96}`} />
        <rect className="pm-node" x={LIMA.x - 5} y={LIMA.y - 5} width={10} height={10} />
        <text className="pm-office-label" x={LIMA.x + 104} y={LIMA.y + 5}>
          Lima · oficina
        </text>
      </g>
    </svg>
  );
}

export function Presence() {
  return (
    <section id="presencia" className="sec sec-sheet sec-presence" aria-labelledby="presencia-title">
      <div className="page presence-grid">
        <div className="presence-figure">
          <PresenceMap />
        </div>
        <div className="presence-text">
          <SectionHead id="presencia-title" title={inicio.presence.title} lead={<p>{inicio.presence.lead}</p>} />
          <dl className="presence-key">
            <div>
              <dt>
                <span className="key-node" aria-hidden="true" />
                Oficina
              </dt>
              <dd>Lima, Perú</dd>
            </div>
            <div>
              <dt>
                <svg className="key-hatch" viewBox="0 0 18 12" aria-hidden="true" focusable="false">
                  <rect x="0.5" y="0.5" width="17" height="11" fill="url(#trama-presencia)" />
                </svg>
                Presencia
              </dt>
              <dd>Perú y Ecuador</dd>
            </div>
          </dl>
          {/* PENDIENTE(Marcos): proyectos o clientes en Ecuador; entran como datos en el mapa */}
          <Pending what="proyectos y clientes en Ecuador" />
        </div>
      </div>
    </section>
  );
}
