import { site } from "@/lib/site";

// Provisional (paso 2): el pie del Afiche llega en el paso 3.
export function SiteFooter() {
  const { contact } = site;
  return (
    <footer>
      <address>
        <p>{contact.city}</p>
        <p>
          <a href={contact.phone.href}>{contact.phone.display}</a>
        </p>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          <a href={contact.linkedin}>LinkedIn</a>
        </p>
      </address>
      <ul>
        {contact.hours.map((slot) => (
          <li key={slot.days}>
            {slot.days}: {slot.time}
          </li>
        ))}
      </ul>
    </footer>
  );
}
