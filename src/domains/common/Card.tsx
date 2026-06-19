"use client";

import { useState, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { EASE, RADIUS, TINT } from "./tokens";

type Variant = "plain" | "flat" | "ink" | "glass" | keyof typeof TINT;

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  padded?: boolean;
  hoverable?: boolean;
  children?: ReactNode;
};

const BASE: Record<Exclude<Variant, keyof typeof TINT>, (hover: boolean) => CSSProperties> = {
  plain: (hover) => ({
    background: "#fff",
    boxShadow: hover
      ? "0 12px 32px rgba(16,24,40,.1),0 4px 10px rgba(16,24,40,.05)"
      : "0 4px 16px rgba(16,24,40,.07),0 2px 4px rgba(16,24,40,.04)",
    transform: hover ? "translateY(-2px)" : "none",
  }),
  flat: () => ({ background: "#fff", boxShadow: "none", border: "1px solid rgba(20,21,26,.08)" }),
  ink: () => ({ background: "#14151A", color: "#fff" }),
  glass: () => ({
    background: "rgba(255,255,255,.66)",
    backdropFilter: "blur(20px) saturate(1.4)",
    WebkitBackdropFilter: "blur(20px) saturate(1.4)",
    border: "1px solid rgba(255,255,255,.7)",
    boxShadow: "0 8px 32px rgba(16,24,40,.1)",
  }),
};

export function Card({ variant = "plain", padded = true, hoverable, style, onMouseEnter, onMouseLeave, children, ...rest }: Props) {
  const [hover, setHover] = useState(false);
  const tint = (TINT as Record<string, { bg: string; fg: string }>)[variant];
  const base = tint ? { background: tint.bg } : BASE[variant as keyof typeof BASE](Boolean(hoverable && hover));
  const merged: CSSProperties = {
    borderRadius: RADIUS.xl,
    padding: padded ? 22 : 0,
    transition: `all 200ms ${EASE}`,
    ...base,
    ...style,
  };
  return (
    <div
      style={merged}
      onMouseEnter={(e) => { setHover(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); onMouseLeave?.(e); }}
      {...rest}
    >
      {children}
    </div>
  );
}
