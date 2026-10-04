import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Página no encontrada" };

// Genera out/404.html, que Pages sirve con estado 404.
export default function NotFound() {
  return (
    <>
      <h1>Página no encontrada</h1>
      <p>
        La dirección no existe o cambió. <Link href="/">Ir al inicio</Link>
      </p>
    </>
  );
}
