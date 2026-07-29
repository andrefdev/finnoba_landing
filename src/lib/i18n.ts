import { DICTIONARIES, type Lang } from "./dictionaries";

export type { Lang };

export const LOCALES = ["es", "en"] as const;
export const DEFAULT_LOCALE: Lang = "es";

export const OG_LOCALE: Record<Lang, string> = { es: "es_LA", en: "en_US" };
export const HTML_LANG: Record<Lang, string> = { es: "es", en: "en" };

export function dict(lang: Lang) {
  return DICTIONARIES[lang];
}

export function otherLocale(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

/** Prefixes an app path with the active locale. External/anchor hrefs pass through. */
export function localePath(lang: Lang, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  return `/${lang}${href === "/" ? "" : href}`;
}

/**
 * One entry per locale. Returns `lang` as a prop too, so pages read a typed
 * `Astro.props.lang` instead of casting `Astro.params.lang`.
 */
export function localeParams() {
  return LOCALES.map((lang) => ({ params: { lang }, props: { lang } }));
}
