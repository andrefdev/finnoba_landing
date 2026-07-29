import type { APIRoute } from "astro";
import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE } from "../lib/i18n";

// Rendered on demand so it can read the request's Accept-Language: a real 302
// from the server, instead of an HTML page whose only job is a meta refresh.
export const prerender = false;

// `preferredLocale` is the browser code Astro matched ("en-US"), so
// getRelativeLocaleUrl maps it back to the route path ("/en"). It is undefined
// when the visitor speaks neither language.
export const GET: APIRoute = ({ preferredLocale, redirect }) =>
  redirect(getRelativeLocaleUrl(preferredLocale ?? DEFAULT_LOCALE), 302);
