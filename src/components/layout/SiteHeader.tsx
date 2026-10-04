import Link from "next/link";

import { navRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

// Provisional (paso 2): el header del Afiche llega en el paso 3.
export function SiteHeader() {
  return (
    <header>
      <Link href="/">{site.name}</Link>
      <nav aria-label="Principal">
        <ul>
          {navRoutes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
