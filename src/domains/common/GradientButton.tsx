"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight } from "./ArrowRight";
import { FONT_UI, GRADIENT, LIGHT } from "./tokens";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "gradient" | "ghost-dark";
  size?: "md" | "lg";
  iconRight?: boolean;
  href?: string;
  type?: "button" | "submit";
};

export function GradientButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  iconRight = true,
  href,
  type = "button",
}: Props) {
  const [hover, setHover] = useState(false);

  const sizes = {
    md: { padding: "12px 22px", fontSize: 14 },
    lg: { padding: "16px 28px", fontSize: 15 },
  } as const;

  const variants = {
    primary: {
      background: LIGHT.ink,
      color: "#fff",
      border: `1px solid ${LIGHT.ink}`,
      shadow: hover ? "0 8px 24px rgba(121,4,235,0.30)" : "none",
    },
    gradient: {
      background: GRADIENT.brand,
      color: "#fff",
      border: "1px solid transparent",
      shadow: hover
        ? "0 12px 28px rgba(121,4,235,0.45), 0 0 0 4px rgba(254,118,255,0.18)"
        : "0 6px 16px rgba(121,4,235,0.28)",
    },
    secondary: {
      background: "transparent",
      color: LIGHT.ink,
      border: `1px solid ${LIGHT.lineStrong}`,
      shadow: hover ? "0 1px 2px rgba(10,10,10,0.05)" : "none",
    },
    "ghost-dark": {
      background: hover ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.16)",
      shadow: "none",
    },
  } as const;

  const v = variants[variant];

  const style: React.CSSProperties = {
    fontFamily: FONT_UI,
    fontWeight: 500,
    letterSpacing: "-0.005em",
    borderRadius: 999,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "all 200ms cubic-bezier(.22,1,.36,1)",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transform: hover && variant === "gradient" ? "translateY(-1px)" : "none",
    ...sizes[size],
    background: v.background,
    color: v.color,
    border: v.border,
    boxShadow: v.shadow,
  };

  const content = (
    <>
      {children}
      {iconRight && <ArrowRight size={14} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style}
    >
      {content}
    </button>
  );
}
