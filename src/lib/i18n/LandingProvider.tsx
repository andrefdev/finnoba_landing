"use client";

import { createContext, useContext, type ReactNode } from "react";
import { DICTIONARIES, type Dictionary, type Lang } from "./dictionaries";

type Ctx = {
  lang: Lang;
  t: Dictionary;
};

const LandingCtx = createContext<Ctx | null>(null);

export function LandingProvider({ children, lang }: { children: ReactNode; lang: Lang }) {
  const value: Ctx = { lang, t: DICTIONARIES[lang] as Dictionary };
  return <LandingCtx.Provider value={value}>{children}</LandingCtx.Provider>;
}

export function useLanding() {
  const c = useContext(LandingCtx);
  if (!c) throw new Error("useLanding must be inside LandingProvider");
  return c;
}
