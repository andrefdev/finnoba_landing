"use client";

import NextLink, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useLanding } from "./LandingProvider";

type Props = Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: string;
    children?: ReactNode;
  };

// Locale-aware Link. Prefixes the current `lang` segment to any path that
// starts with "/" (skipping "//" protocol-relative and "/_" Next internals).
// External hrefs (mailto:, https://, #fragment-only) pass through untouched.
export function Link({ href, ...rest }: Props) {
  const { lang } = useLanding();
  const prefixed = needsPrefix(href) ? `/${lang}${href === "/" ? "" : href}` : href;
  return <NextLink href={prefixed} {...rest} />;
}

function needsPrefix(href: string): boolean {
  if (!href.startsWith("/")) return false;
  if (href.startsWith("//")) return false;
  if (href.startsWith("/_")) return false;
  return true;
}
