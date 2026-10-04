"use client";

// Muestra su contenido solo si la URL trae ?revision. Lo usa Review.tsx; no usarlo directo.
import { useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};
const inReview = () => new URLSearchParams(window.location.search).has("revision");

export function ReviewGate({ children }: { children: ReactNode }) {
  const show = useSyncExternalStore(subscribe, inReview, () => false);
  return show ? children : null;
}
