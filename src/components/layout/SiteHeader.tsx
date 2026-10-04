"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "@/assets/marca/logo-horizontal.webp";
import { Icon } from "@/components/ui/Icon";
import { navRoutes } from "@/lib/routes";

import "./SiteHeader.css";

/** "page" en la página misma; "true" en una página interna de esa sección (un artículo del Blog). */
function currentFor(pathname: string, routePath: string): "page" | "true" | undefined {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (path === routePath) return "page";
  if (routePath !== "/" && path.startsWith(routePath)) return "true";
  return undefined;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="page site-header-row">
        <Link href="/" className="site-logo" aria-label="MC Consultores, ir al inicio">
          {/* Logo horizontal del sitio actual, sin modificar (solo existe en blanco) */}
          <Image src={logo} alt="" priority height={40} style={{ width: "auto" }} />
        </Link>
        <button
          type="button"
          className="site-menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
          <span>{open ? "Cerrar" : "Menú"}</span>
        </button>
        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Principal">
          <ul>
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  aria-current={currentFor(pathname, route.path)}
                  onClick={() => setOpen(false)}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
