// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://finnoba.xyz",
  trailingSlash: "never",

  // Everything is prerendered except `/`, which needs the request's
  // Accept-Language header to pick a locale (see src/pages/index.ts).
  adapter: vercel(),

  // Astro's own i18n routing. `redirectToDefaultLocale: false` hands `/` to our
  // own route so it can redirect by browser language instead of always to /es.
  // Codes are listed the way browsers send them, which is what
  // Astro.preferredLocale matches against.
  i18n: {
    defaultLocale: "es",
    locales: [
      { path: "es", codes: ["es", "es-419", "es-PE", "es-ES", "es-MX", "es-AR", "es-CO", "es-CL"] },
      { path: "en", codes: ["en", "en-US", "en-GB", "en-CA", "en-AU"] },
    ],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },

  // Links prefetch when they scroll into view, so navigation is instant and
  // the view transition has nothing to wait for.
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },

  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-PE", en: "en-US" } },
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
