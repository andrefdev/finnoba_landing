import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["es", "en"] as const;
const DEFAULT_LOCALE = "es";

function pickLocale(accept: string | null): (typeof LOCALES)[number] {
  if (!accept) return DEFAULT_LOCALE;
  // Take the first matching language tag; "en-US,en;q=0.9,es;q=0.8" → "en".
  const tags = accept.toLowerCase().split(",").map((t) => t.trim().split(";")[0]);
  for (const tag of tags) {
    const base = tag.split("-")[0];
    if ((LOCALES as readonly string[]).includes(base)) return base as (typeof LOCALES)[number];
  }
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Already locale-prefixed → let it through.
  for (const loc of LOCALES) {
    if (pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)) return;
  }

  const locale = pickLocale(req.headers.get("accept-language"));
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

// Skip Next internals, API routes, and static files (anything with a dot).
export const config = {
  matcher: ["/((?!_next/|api/|favicon\\.ico|.*\\.).*)"],
};
