import Image from "next/image";

import { Pending } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { teamPhotos } from "@/content/about";

/** Hoja de contactos con las fotos reales del equipo; la primera, grande. */
export function PhotoSheet() {
  // La primera va grande y, a su lado, la primera foto vertical con su misma altura.
  const [big, ...rest] = teamPhotos;
  const tall = rest.find((photo) => photo.image.height > photo.image.width);
  const photos = tall ? [big, tall, ...rest.filter((photo) => photo !== tall)] : teamPhotos;
  return (
    <section id="fotos" className="sec sec-paper grain photo-sheet" aria-labelledby="fotos-title">
      <div className="page">
        <SectionHead id="fotos-title" title="Fotos del equipo" />
        <ul className="photo-grid">
          {photos.map((photo, i) => (
            <li key={photo.image.src} className={i === 0 ? "is-big" : i === 1 && tall ? "is-tall" : undefined}>
              <Image
                src={photo.image}
                alt={photo.alt}
                sizes={i === 0 ? "(max-width: 899px) 100vw, 880px" : "(max-width: 899px) 50vw, 440px"}
              />
            </li>
          ))}
        </ul>
        {/* PENDIENTE(Camila): evento y fecha de cada foto */}
        <Pending what="pies de las fotos">evento y fecha de cada una.</Pending>
      </div>
    </section>
  );
}
