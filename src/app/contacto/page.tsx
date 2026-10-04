import { pageMetadata } from "@/lib/metadata";
import { site, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contacto",
  description: "Contacto de MC Consultores por WhatsApp, teléfono o correo. Lima, Perú.",
  path: "/contacto/",
});

export default function ContactPage() {
  const { contact } = site;
  return (
    <>
      <h1>Contacto</h1>
      <ul>
        <li>
          <a href={whatsappLink()}>WhatsApp {contact.whatsapp.display}</a>
        </li>
        <li>
          <a href={contact.phone.href}>Llamar al {contact.phone.display}</a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
      </ul>
    </>
  );
}
