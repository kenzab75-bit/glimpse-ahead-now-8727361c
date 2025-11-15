import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MotionPreference = "system" | "reduce" | "allow";

interface MotionContextValue {
  reducedMotion: boolean;
  preference: MotionPreference;
  setPreference: (preference: MotionPreference) => void;
}

const MotionContext = createContext<MotionContextValue | undefined>(undefined);

const STORAGE_KEY = "lemaclinic-motion-preference";

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  const systemPrefersReducedMotion = usePrefersReducedMotion();
  const [preference, setPreference] = useState<MotionPreference>(() => {
    if (typeof window === "undefined") {
      return "system";
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "reduce" || stored === "allow" || stored === "system" ? stored : "system";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, preference);
  }, [preference]);

  const reducedMotion = useMemo(() => {
    if (preference === "system") {
      return systemPrefersReducedMotion;
    }
    return preference === "reduce";
  }, [preference, systemPrefersReducedMotion]);

  const value = useMemo<MotionContextValue>(
    () => ({
      reducedMotion,
      preference,
      setPreference,
    }),
    [preference, reducedMotion]
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
};

export const useMotionPreferences = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotionPreferences must be used within a MotionProvider");
  }
  return context;
};
