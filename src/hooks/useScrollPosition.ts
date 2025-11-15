import { useSyncExternalStore } from "react";

interface ScrollSnapshot {
  x: number;
  y: number;
}

const listeners = new Set<() => void>();
let snapshot: ScrollSnapshot = { x: 0, y: 0 };

const updateSnapshot = () => {
  snapshot = {
    x: window.scrollX,
    y: window.scrollY,
  };
  listeners.forEach((listener) => listener());
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", updateSnapshot, { passive: true });
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => snapshot;
const getServerSnapshot = (): ScrollSnapshot => ({ x: 0, y: 0 });

export const useScrollPosition = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
