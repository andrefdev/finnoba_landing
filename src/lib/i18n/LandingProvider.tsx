"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { DICTIONARIES, type Dictionary, type Lang, type Side } from "./dictionaries";

type Ctx = {
  lang: Lang;
  side: Side;
  heroVariant: "glow" | "flat";
  t: Dictionary;
  setLang: (l: Lang) => void;
  setSide: (s: Side) => void;
  setHeroVariant: (v: "glow" | "flat") => void;
};

const LandingCtx = createContext<Ctx | null>(null);

export function LandingProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [side, setSide] = useState<Side>("lender");
  const [heroVariant, setHeroVariant] = useState<"glow" | "flat">("glow");

  const value: Ctx = {
    lang,
    side,
    heroVariant,
    t: DICTIONARIES[lang] as Dictionary,
    setLang: useCallback((l: Lang) => setLang(l), []),
    setSide: useCallback((s: Side) => setSide(s), []),
    setHeroVariant: useCallback((v: "glow" | "flat") => setHeroVariant(v), []),
  };
  return <LandingCtx.Provider value={value}>{children}</LandingCtx.Provider>;
}

export function useLanding() {
  const c = useContext(LandingCtx);
  if (!c) throw new Error("useLanding must be inside LandingProvider");
  return c;
}
