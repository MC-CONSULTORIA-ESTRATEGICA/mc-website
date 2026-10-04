---
version: 1
slug: "src-app-contacto-page-tsx"
primary_target: "src/app/contacto/page.tsx"
related_targets: []
---

# Contacto (src/app/contacto/page.tsx)

## Alcance y modo

Página de Contacto, escritorio y 375 px. Modo **Persuade** en su forma de trabajo: el visitante
decidió hablar con MC y necesita el canal, el horario y dónde está, sin buscar. Hereda la cabecera
interior; su cota son los canales mismos.

## Visitante, tarea y prueba

- Responsable técnico o de compras de una minera que quiere cotizar o hablar con alguien; a veces
  desde el celular.
- Acción: "Solicitar una cotización" por WhatsApp; llamar; escribir al correo; LinkedIn.
- Prueba disponible: datos reales de site.ts (WhatsApp y teléfono +51 932 432 031,
  ventas@mc-consultoria.com, LinkedIn de la empresa, Lima, horario de lunes a viernes 8:00–18:00 y
  sábado 8:00–13:00) y las 4 preguntas fijas del asistente del sitio actual.
- Restricciones: ninguna afirmación nueva; sin formulario (exportación estática y el sitio actual no
  lo tiene); el contacto de Camila falta.

## Decisiones del usuario (4 oct)

La cota de la cabecera son los canales como acciones (WhatsApp, Teléfono, Correo, LinkedIn), cada uno
con su dato y su enlace directo. Sin mapa. Las 4 preguntas del asistente como preguntas frecuentes
(la de capacitaciones queda marcada en revisión hasta que Marcos confirme si hay cursos abiertos).
Sin el cierre "Conversemos sobre su proyecto": la página entera es el contacto.

## Pendiente

Contacto de Camila Algarate en ventas (Marcos). Si hay cursos abiertos a profesionales (Marcos).

## Direction contract

THESIS: Contacto como la cartela de un plano: los canales en la cota de la cabecera, listos para
usar, y debajo la ficha con horario y oficina y las preguntas que se resuelven antes de escribir.
Rechaza el formulario de contacto genérico, el mapa incrustado de Google y las tarjetas con ícono.

OWN-WORLD: El mismo Afiche. Cabecera interior navy de portada; cuerpo sobre papel con grano; ficha de
datos sobre hoja; preguntas como lista reglada (regla de 2 px y filas de 1 px). El único relleno cyan
es la acción "Solicitar una cotización". Títulos en Archivo angosta; cifras tabulares en teléfono y
horario.

STORY: Ve en la primera pantalla los cuatro canales con su dato y toca el que quiere; si duda, baja,
pide la cotización por WhatsApp o revisa el horario, la oficina y las preguntas frecuentes, y escribe.

FIRST VIEWPORT: Cabecera interior: h1 "Contacto" en Archivo angosta blanca (~72 px) con la bajada del
sitio actual en "usted". Al pie, la cota-índice con un nodo por canal: el nombre del canal arriba
(WhatsApp, Teléfono, Correo, LinkedIn) y el dato debajo (+51 932 432 031, ventas@…), cada uno con su
ícono y su enlace directo; se traza al cargar.

FORM: Afiche (variante 4 de la propuesta v3, Figma 2WjOpYVypwycMiNaT4pbFt, frame 26:2), fijada por el
usuario; sin concept-seed y sin seed key. Firma: la cota de la cabecera convertida en el panel de
contacto. Cuerpo en dos columnas 7/5: a la izquierda la acción principal y las preguntas frecuentes
(cada respuesta termina en WhatsApp); a la derecha la ficha de datos (correo, teléfono, LinkedIn,
horario, oficina). Código guiado.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
