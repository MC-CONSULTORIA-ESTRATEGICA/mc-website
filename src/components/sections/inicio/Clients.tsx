import Image from "next/image";

import { Contours } from "@/components/ui/Contours";
import { ReviewOnly } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { clients } from "@/content/clients";
import { inicio } from "@/content/inicio";

const COLUMNS = 6;

export function Clients() {
  const rows = Math.ceil((clients.length + 1) / COLUMNS);
  const empty = rows * COLUMNS - clients.length;
  return (
    <section id="clientes" className="sec sec-paper grain sec-clients" aria-labelledby="clientes-title">
      <Contours
        className="earth-rings clients-rings"
        viewBox={{ width: 420, height: 340 }}
        center={{ x: 214, y: 150 }}
        rings={7}
        radius={28}
        step={20}
        stretch={1.25}
        indexEvery={0}
        phase={1.7}
      />
      <div className="page">
        <SectionHead id="clientes-title" title="Clientes" lead={<p>{inicio.clients.lead}</p>} />
        {/* Retícula con coordenadas, como una hoja de plano */}
        <div className="coord-frame">
          <ol className="coord-axis coord-x" aria-hidden="true">
            {"ABCDEF".split("").map((letter) => (
              <li key={letter}>{letter}</li>
            ))}
          </ol>
          <ol className="coord-axis coord-y" aria-hidden="true">
            {Array.from({ length: rows }, (_, i) => (
              <li key={i}>{i + 1}</li>
            ))}
          </ol>
          <ul className="client-grid">
            {clients.map((client) => (
              <li key={client.id}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  sizes="200px"
                  style={"optical" in client && client.optical ? { transform: `scale(${client.optical})` } : undefined}
                />
              </li>
            ))}
            {Array.from({ length: empty }, (_, i) => (
              <li key={`vacia-${i}`} className="client-empty">
                {i === 0 ? (
                  <ReviewOnly>
                    {/* PENDIENTE(Marcos): qué certificaciones o partners se declaran */}
                    <p className="client-pending">Por definir: certificaciones y partners</p>
                  </ReviewOnly>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
