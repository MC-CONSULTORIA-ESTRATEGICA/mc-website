import { ContactBody } from "@/components/sections/contacto/ContactBody";
import { Icon } from "@/components/ui/Icon";
import { PageHead } from "@/components/ui/PageHead";
import { PageIndex } from "@/components/ui/PageIndex";
import { contactLead } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";
import { site, whatsappLink } from "@/lib/site";

import "@/components/sections/contacto/contacto.css";

export const metadata = pageMetadata({
  title: "Contacto",
  description: "Contacto de MC Consultores por WhatsApp, teléfono o correo. Lima, Perú.",
  path: "/contacto/",
});

export default function ContactPage() {
  const { contact } = site;
  // La cota de la cabecera son los canales mismos: cada nodo actúa (wa.me, tel:, mailto:).
  const channels = [
    {
      label: <span className="num">{contact.whatsapp.display}</span>,
      meta: "WhatsApp",
      href: whatsappLink(),
      icon: "whatsapp",
      external: true,
    },
    { label: <span className="num">{contact.phone.display}</span>, meta: "Teléfono", href: contact.phone.href, icon: "phone" },
    { label: contact.email, meta: "Correo", href: `mailto:${contact.email}`, icon: "mail" },
    { label: "MC Consultoría Estratégica", meta: "LinkedIn", href: contact.linkedin, icon: "linkedin", external: true },
  ] as const;
  return (
    <>
      <PageHead title="Contacto" lead={contactLead}>
        <PageIndex
          label="Canales de contacto"
          variant="channels"
          items={channels.map((channel) => ({
            href: channel.href,
            label: channel.label,
            meta: channel.meta,
            external: "external" in channel ? channel.external : undefined,
            icon: (
              <span className="page-index-icon">
                <Icon name={channel.icon} size={18} />
              </span>
            ),
          }))}
        />
      </PageHead>
      <ContactBody />
    </>
  );
}
