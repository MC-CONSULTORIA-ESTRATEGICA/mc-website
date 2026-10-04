import Image from "next/image";

import { Icon } from "@/components/ui/Icon";
import { peopleGroups, type Person } from "@/content/people";

import "./PersonCard.css";

/**
 * `row`: retrato de 96 px a la izquierda (Inicio). `sheet`: ficha vertical con retrato de 144 px y
 * ancla `#persona-<slug>` (Nosotros; las especialidades enlazan ahí).
 */
export function PersonCard({ person, variant = "row" }: { person: Person; variant?: "row" | "sheet" }) {
  const sheet = variant === "sheet";
  return (
    <li className={sheet ? "person person-sheet" : "person"} id={sheet ? `persona-${person.slug}` : undefined}>
      <span className="portrait">
        {person.photo ? (
          <Image
            src={person.photo}
            alt=""
            sizes={sheet ? "144px" : "96px"}
            style={{
              objectPosition: person.photoFocusY ? `50% ${person.photoFocusY}` : undefined,
              transform: person.photoScale ? `scale(${person.photoScale})` : undefined,
            }}
          />
        ) : null}
      </span>
      <span className="person-text">
        <span className="person-name">{person.name}</span>
        <span className="person-role">{person.role}</span>
        {person.linkedin ? (
          <a className="person-in" href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={14} />
            <span className="visually-hidden">LinkedIn de {person.name}</span>
          </a>
        ) : null}
      </span>
    </li>
  );
}

/** Equipo y consultores asociados activos, cada grupo con su regla de cabecera. */
export function PeopleGroups() {
  return (
    <div className="people">
      {peopleGroups.map((group) => (
        <div key={group.title} className="people-group">
          <h3>{group.title}</h3>
          <ul>
            {group.people.map((person) => (
              <PersonCard key={person.slug} person={person} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
