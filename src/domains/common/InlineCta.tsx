import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "./ArrowRight";
import { FONT_UI, LIGHT } from "./tokens";

export function InlineCta({
  href,
  children,
  style,
}: {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: FONT_UI,
        fontSize: 14,
        color: LIGHT.ink,
        textDecoration: "none",
        borderBottom: `1px solid ${LIGHT.lineStrong}`,
        paddingBottom: 4,
        letterSpacing: "-0.005em",
        ...style,
      }}
    >
      <span>{children}</span>
      <ArrowRight size={12} />
    </Link>
  );
}
