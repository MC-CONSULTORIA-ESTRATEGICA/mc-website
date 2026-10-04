"use client";

// Riel de contacto: reúne los botones flotantes del sitio actual (WhatsApp, llamada, LinkedIn y el
// asistente). En escritorio es una banda fija en el borde derecho; en móvil, una barra inferior.
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { assistantQuestions } from "@/content/assistant";
import { site, whatsappLink, WHATSAPP_QUOTE } from "@/lib/site";

import "./ContactRail.css";

function Assistant({ onClose }: { onClose: () => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const item = picked === null ? null : assistantQuestions[picked];

  return (
    <div ref={panelRef} className="assistant" role="dialog" aria-modal="false" aria-labelledby={titleId}>
      <div className="assistant-head">
        <p id={titleId} className="assistant-title">
          Asistente de MC
        </p>
        <button type="button" className="assistant-close" onClick={onClose}>
          <Icon name="close" size={18} />
          <span className="visually-hidden">Cerrar asistente</span>
        </button>
      </div>
      {item ? (
        <div className="assistant-answer" aria-live="polite">
          <p className="assistant-q">{item.question}</p>
          <p className="assistant-a">{item.answer}</p>
          <a className="assistant-wa" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} />
            Continuar por WhatsApp
          </a>
          <button type="button" className="assistant-back" onClick={() => setPicked(null)}>
            Ver las otras preguntas
          </button>
        </div>
      ) : (
        <div className="assistant-list">
          <p className="assistant-intro">Elija una pregunta:</p>
          <ul>
            {assistantQuestions.map((entry, index) => (
              <li key={entry.question}>
                <button type="button" onClick={() => setPicked(index)}>
                  {entry.question}
                  <Icon name="arrow-right" size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function ContactRail() {
  const { contact } = site;
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <aside className="contact-rail" aria-label="Contacto directo">
        <a className="rail-phone num" href={contact.phone.href}>
          <span className="visually-hidden">Llamar al </span>
          {contact.phone.display}
        </a>
        <ul className="rail-actions">
          <li>
            <a className="rail-btn rail-btn-primary" href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={22} />
              <span className="rail-label">Cotizar</span>
              <span className="rail-tip">Solicitar una cotización por WhatsApp</span>
            </a>
          </li>
          <li>
            <a className="rail-btn" href={contact.phone.href}>
              <Icon name="phone" size={22} />
              <span className="rail-label">Llamar</span>
              <span className="rail-tip">Llamar al {contact.phone.display}</span>
            </a>
          </li>
          <li>
            <a className="rail-btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={20} />
              <span className="rail-label">LinkedIn</span>
              <span className="rail-tip">MC en LinkedIn</span>
            </a>
          </li>
          <li>
            <button
              ref={triggerRef}
              type="button"
              className="rail-btn"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name="assistant" size={22} />
              <span className="rail-label">Asistente</span>
              <span className="rail-tip">Preguntas frecuentes</span>
            </button>
          </li>
        </ul>
      </aside>
      {open ? <Assistant onClose={close} /> : null}
    </>
  );
}
