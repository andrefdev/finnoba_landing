"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { DICTIONARIES, type Dictionary, type Lang, type Side } from "./dictionaries";

type Ctx = {
  lang: Lang;
  side: Side;
  t: Dictionary;
  setLang: (l: Lang) => void;
  setSide: (s: Side) => void;
  scrollToWaitlist: () => void;
};

const LandingCtx = createContext<Ctx | null>(null);

export function LandingProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [side, setSide] = useState<Side>("lender");

  const scrollToWaitlist = useCallback(() => {
    const el = document.querySelector("[data-final-cta]");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const value: Ctx = {
    lang,
    side,
    t: DICTIONARIES[lang] as Dictionary,
    setLang: useCallback((l: Lang) => setLang(l), []),
    setSide: useCallback((s: Side) => setSide(s), []),
    scrollToWaitlist,
  };
  return <LandingCtx.Provider value={value}>{children}</LandingCtx.Provider>;
}

export function useLanding() {
  const c = useContext(LandingCtx);
  if (!c) throw new Error("useLanding must be inside LandingProvider");
  return c;
}
