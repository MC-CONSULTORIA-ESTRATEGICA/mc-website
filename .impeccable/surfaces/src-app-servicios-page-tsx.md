---
version: 1
slug: "src-app-servicios-page-tsx"
primary_target: "src/app/servicios/page.tsx"
related_targets: []
---

# Servicios (src/app/servicios/page.tsx)

## Alcance y modo

Página de Servicios, escritorio y 375 px. Modo **Persuade**: quien ya vio el Inicio (o llega desde un
buscador por "reconciliación minera", "QA-QC", "NI 43-101") confirma que MC hace lo que necesita y
pide una cotización. Es la primera página interior: estrena la **cabecera interior** que heredan
Nosotros, Noticias, Blog, Contacto y Proyectos.

## Visitante, tarea y prueba

- Jefe técnico o gerente de una minera que busca un servicio concreto y quiere saber en qué consiste,
  bajo qué código se hace y si MC ya lo hizo para alguien.
- Acción: "Solicitar una cotización" (WhatsApp) en el cierre de Contacto y siempre en el riel.
- Prueba disponible: 5 servicios con descripción del sitio actual y códigos (JORC, NI 43-101,
  S-K 1300); 2 casos que se cruzan con un servicio (Condestable → Reconciliación; Southern →
  Capacitación); el proceso de trabajo de 4 pasos del sitio actual.
- Restricciones: ninguna afirmación nueva; sin imágenes de IA (las de `services.ts` no se usan);
  relaves, relleno y agua solo nombrados; catálogo de cursos pendiente.

## Decisiones del usuario (4 oct)

Cabecera interior con cota-índice (la banda y el h1 los heredan las demás páginas; cada una decide
qué anota su cota). Relaves, relleno para mina y tratamiento de agua: solo nombrados en una fila bajo
la leyenda, sin trama, descripción ni casos, con enlace a WhatsApp. El bloque 3D queda solo en el
Inicio.

## Pendiente

Textos de relaves, relleno y tratamiento de agua (Marcos). Catálogo de cursos y si hay cursos
abiertos (Marcos). Revisión técnica de las tramas como lenguaje de carta geológica (sin revisor de
geología desde que salió Claudio).

## Direction contract

THESIS: La página de Servicios como la leyenda completa de una carta geológica: cada servicio es una
unidad con su trama, su código y, cuando existe, el caso donde se aplicó. Rechaza la grilla de
tarjetas con ícono y la lista de servicios con foto de stock.

OWN-WORLD: El mismo Afiche del Inicio. Cabecera interior en navy de portada sin roca; leyenda sobre
papel con grano; flujo de trabajo sobre hoja limpia; cierre de Contacto en navy con estratos. Tramas
en navy sobre cyan velo, líneas de 1 px, nodos cuadrados huecos, reglas de cabecera de 2 px. Títulos
en Archivo angosta (wdth 68). Sin tierra fuera de curvas de nivel.

STORY: Ve de un vistazo los cinco servicios como índice, baja al que le interesa, lee qué es, bajo
qué norma y para quién se hizo, entiende cómo trabaja MC en cuatro pasos y escribe por WhatsApp.

FIRST VIEWPORT: Cabecera interior: banda navy de portada a sangre bajo el encabezado, h1 "Servicios"
en Archivo angosta blanca (entre el h2 y el display, ~72 px) con la bajada del sitio actual debajo.
Al pie de la banda, una cota horizontal de lado a lado con cinco nodos cuadrados, uno por servicio,
cada nodo con su trama en miniatura y el nombre del servicio como rótulo: es el índice de la página
(enlaces a cada unidad). La línea se traza al cargar y los nodos aparecen en escalera, como las cotas
de la portada. En 375 px la cota pasa a vertical, a la izquierda, con los rótulos a la derecha.

FORM: Afiche (variante 4 de la propuesta v3, Figma 2WjOpYVypwycMiNaT4pbFt, frame 26:2), fijada por el
usuario; sin concept-seed y sin seed key. Firma de la página: la cota-índice de la cabecera y el
flujo de trabajo dibujado con la misma línea (cuatro nodos que se trazan al entrar en pantalla). Cada
unidad de la leyenda: trama grande (96 × 64) a la izquierda, título angosto, códigos como chips,
descripción a 60 caracteres y, si hay caso, una fila "Caso: …" con cliente y enlace. Código guiado
(no hay generación de imágenes).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
