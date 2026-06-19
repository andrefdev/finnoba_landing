"use client";

import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";
import { COLOR, EASE, FONT, RADIUS } from "./tokens";

type Variant = "ink" | "soft" | "on-dark";
type Size = "sm" | "md" | "lg";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  full?: boolean;
  type?: "button" | "submit" | "reset";
};

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "8px 14px", fontSize: 13 },
  md: { padding: "12px 20px", fontSize: 15 },
  lg: { padding: "15px 26px", fontSize: 16 },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  ink: { background: COLOR.ink, color: COLOR.white },
  soft: { background: COLOR.white, color: COLOR.ink, boxShadow: "inset 0 0 0 1px rgba(20,21,26,.12)" },
  "on-dark": { background: COLOR.white, color: COLOR.ink },
};

const HOVERS: Record<Variant, CSSProperties> = {
  ink: { background: "#2A2B33" },
  soft: { background: "#FAFAFC" },
  "on-dark": { background: "#F0F0F3" },
};

export function Button({
  variant = "ink",
  size = "md",
  icon,
  iconRight,
  full,
  type = "button",
  style,
  disabled,
  children,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: Props) {
  const [hover, setHover] = useState(false);
  const merged: CSSProperties = {
    fontFamily: FONT,
    fontWeight: 600,
    border: 0,
    borderRadius: RADIUS.pill,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: `all 200ms ${EASE}`,
    width: full ? "100%" : "auto",
    opacity: disabled ? 0.5 : 1,
    whiteSpace: "nowrap",
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVERS[variant] : null),
    ...style,
  };
  return (
    <button
      type={type}
      disabled={disabled}
      style={merged}
      onMouseEnter={(e) => { setHover(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); onMouseLeave?.(e); }}
      {...rest}
    >
      {icon}{children}{iconRight}
    </button>
  );
}
