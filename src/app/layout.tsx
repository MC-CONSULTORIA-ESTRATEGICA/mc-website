import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import { ContactRail } from "@/components/layout/ContactRail";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { baseOpenGraph } from "@/lib/metadata";
import { site } from "@/lib/site";

import "@/styles/tokens.css";
import "@/styles/reset.css";
import "@/styles/base.css";
import "@/styles/components.css";

// Archivo variable con su eje de ancho: títulos angostos (wdth 68) y texto normal (wdth 100).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: `${site.name}: consultoría minera en Lima, Perú.`,
  icons: { icon: "/logo.webp" },
  openGraph: baseOpenGraph,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={archivo.variable}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <ContactRail />
      </body>
    </html>
  );
}
