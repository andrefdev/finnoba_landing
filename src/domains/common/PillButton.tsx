"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { COLORS } from "./tokens";

type Variant = "grad" | "solid" | "ghost" | "violet";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, CSSProperties> = {
  sm: { padding: "8px 14px", fontSize: 13 },
  md: { padding: "12px 22px", fontSize: 14 },
  lg: { padding: "15px 28px", fontSize: 15 },
};

const variants: Record<Variant, { base: CSSProperties; hover: CSSProperties }> = {
  grad: {
    base: { background: "linear-gradient(135deg,#7904EB 0%,#FE76FF 100%)", color: "#fff" },
    hover: { boxShadow: "0 0 0 1px rgba(254,118,255,.3)" },
  },
  solid: {
    base: { background: COLORS.white, color: COLORS.navy },
    hover: { background: "#EFEDFB" },
  },
  ghost: {
    base: {
      background: "rgba(255,255,255,.06)",
      color: "#fff",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.14)",
    },
    hover: { background: "rgba(255,255,255,.10)" },
  },
  violet: {
    base: { background: COLORS.violet, color: "#fff" },
    hover: { background: "#8a16ee" },
  },
};

export function PillButton({
  variant = "grad",
  size = "md",
  children,
  onClick,
  type = "button",
  full,
  style,
}: {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  full?: boolean;
  style?: CSSProperties;
}) {
  const [hover, setHover] = useState(false);
  const v = variants[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "Poppins",
        fontWeight: 600,
        border: 0,
        borderRadius: 9999,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        transition: "all 200ms cubic-bezier(.22,1,.36,1)",
        whiteSpace: "nowrap",
        width: full ? "100%" : "auto",
        ...sizes[size],
        ...v.base,
        ...(hover ? v.hover : {}),
        ...style,
      }}
    >
      {children}
    </button>
  );
}
