import Image from "next/image";
import Link from "next/link";

import logoWhite from "@/assets/marca/logo-vertical-blanco.webp";
import { navRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

import "./SiteFooter.css";

export function SiteFooter() {
  const { contact } = site;
  return (
    <footer className="site-footer grain">
      <div className="page site-footer-grid">
        <div className="footer-brand">
          {/* Logo vertical blanco del sitio actual, sin modificar */}
          <Image src={logoWhite} alt={site.name} width={120} />
          {/* Texto del pie del sitio actual */}
          <p>
            Consultora especializada en el sector minero, brindando soluciones integrales para el desarrollo
            sostenible de proyectos mineros.
          </p>
        </div>
        <nav aria-label="Pie de página" className="footer-col">
          <p className="footer-head">Secciones</p>
          <ul>
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link href={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-col">
          <p className="footer-head">Contacto</p>
          <ul>
            <li>
              <a href={contact.phone.href} className="num">
                {contact.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>{contact.city}</li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-head">Horario</p>
          <ul>
            {contact.hours.map((slot) => (
              <li key={slot.days}>
                {slot.days}
                <br />
                <span className="num">{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="page footer-legal">
        <p>
          © <span className="num">{new Date().getFullYear()}</span> {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
