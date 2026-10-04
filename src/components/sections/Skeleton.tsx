// Esqueleto del paso 2: muestra los datos en bruto para comprobar que migraron y que el HTML
// sale prerenderizado. Cada página lo reemplaza por sus secciones del Afiche en el paso 3.

type SkeletonListProps = {
  title: string;
  items: { key: string; label: string; detail?: string }[];
};

export function SkeletonList({ title, items }: SkeletonListProps) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.key}>
            {item.label}
            {item.detail ? ` — ${item.detail}` : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
