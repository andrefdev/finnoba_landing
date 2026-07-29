import { dict, localePath, type Lang } from "./i18n";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL, OG_IMAGE } from "../consts";

/**
 * Structured data. Everything here must be checkable against the site copy —
 * no claims we would not put in visible text.
 */

export function organizationLd(lang: Lang) {
  const t = dict(lang);
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-finnoba-navy.png`,
    image: OG_IMAGE,
    description: t.home.meta.description,
    email: CONTACT_EMAIL,
    areaServed: { "@type": "Country", name: "Peru" },
    knowsLanguage: ["es", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "investor relations",
      availableLanguage: ["Spanish", "English"],
    },
  };
}

export function webSiteLd(lang: Lang) {
  const t = dict(lang);
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: t.home.meta.description,
    inLanguage: lang,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webPageLd(lang: Lang, path: string, title: string, description: string) {
  const url = `${SITE_URL}${localePath(lang, path)}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Home → current page. Omitted on the home page itself (a 1-item trail is noise). */
export function breadcrumbLd(lang: Lang, path: string, title: string) {
  if (path === "/") return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}${localePath(lang, "/")}` },
      { "@type": "ListItem", position: 2, name: title, item: `${SITE_URL}${localePath(lang, path)}` },
    ],
  };
}

/** Built from the same dictionary the FAQ page renders, so they cannot drift. */
export function faqLd(lang: Lang) {
  const t = dict(lang);
  return {
    "@type": "FAQPage",
    mainEntity: t.faq.groups.flatMap((g) =>
      g.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      }))
    ),
  };
}

/** Wraps the node list in a single @graph so one <script> covers the page. */
export function jsonLdGraph(nodes: Array<object | null>) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  });
}
