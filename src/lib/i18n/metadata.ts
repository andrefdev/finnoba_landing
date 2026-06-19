import type { Metadata } from "next";
import { DICTIONARIES, type Dictionary, type Lang } from "./dictionaries";

// Shared metadata factory for inner-page layouts. Pulls the localized
// title/description from the dictionary section and emits hreflang
// alternates so Google indexes both locales as equivalents.
export function pageMetadata(opts: {
  path: `/${string}`;
  section: (d: Dictionary) => { title: string; description: string };
}) {
  return async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = DICTIONARIES[lang as Lang] as Dictionary;
    const m = opts.section(dict);
    return {
      title: m.title,
      description: m.description,
      alternates: {
        canonical: `/${lang}${opts.path}`,
        languages: {
          es: `/es${opts.path}`,
          en: `/en${opts.path}`,
          "x-default": `/es${opts.path}`,
        },
      },
    };
  };
}
