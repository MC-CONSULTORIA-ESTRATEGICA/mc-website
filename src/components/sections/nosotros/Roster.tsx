import { PersonCard } from "@/components/ui/PersonCard";
import { Pending } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { peopleGroups } from "@/content/people";

/** Equipo y consultores asociados en fichas verticales, cada grupo con su regla de cabecera. */
export function Roster() {
  return (
    <section className="sec sec-sheet roster" aria-label="Personas">
      <div className="page roster-groups">
        {peopleGroups.map((group) => (
          <div key={group.id} id={group.id} className="roster-group">
            <SectionHead id={`${group.id}-title`} title={group.title} />
            <ul className="roster-list">
              {group.people.map((person) => (
                <PersonCard key={person.slug} person={person} variant="sheet" />
              ))}
            </ul>
            {/* PENDIENTE(Marcos): grupo de cuatro consultores de relaves y Percy Surca */}
            {group.id === "asociados" ? (
              <Pending what="consultores nuevos">grupo de cuatro de relaves y Percy Surca (nombre, cargo y foto).</Pending>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
