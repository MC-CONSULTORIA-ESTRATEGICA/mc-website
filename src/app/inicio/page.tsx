import type { Metadata } from "next";
import Link from "next/link";

// La portada del sitio anterior estaba en /inicio. La exportación estática no admite redirects y
// Pages no da 301: esta página reenvía a "/" para no romper enlaces viejos y no se indexa.
export const metadata: Metadata = {
  title: "Inicio",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

export default function LegacyHomeRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/" />
      <p>
        La portada está en <Link href="/">mc-consultoria.com</Link>.
      </p>
    </>
  );
}
