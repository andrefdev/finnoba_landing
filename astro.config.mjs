// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://finnoba.xyz",
  trailingSlash: "never",

  // Links prefetch when they scroll into view, so navigation is instant and
  // the view transition has nothing to wait for.
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },

  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-PE", en: "en-US" } },
      filter: (page) => !page.includes("/404"),
    }),
  ],

  // ponytail: static redirect page. A real 301 belongs in the host config
  // (vercel.json / _redirects) once the deploy target is fixed.
  redirects: { "/": "/es" },
});
