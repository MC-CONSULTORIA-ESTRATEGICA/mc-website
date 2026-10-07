// Bloque JSON-LD. El "<" se escapa para que un texto no pueda cerrar el <script> (guía JSON-LD de Next).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
