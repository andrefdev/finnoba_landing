import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { RADIUS } from "./tokens";

type Variant = "flat" | "glass" | "mint" | "rose" | "lilac";

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  children?: ReactNode;
};

const VARIANTS: Record<Variant, CSSProperties> = {
  flat: { background: "#fff", border: "1px solid rgba(20,21,26,.08)" },
  glass: {
    background: "rgba(255,255,255,.66)",
    backdropFilter: "blur(20px) saturate(1.4)",
    WebkitBackdropFilter: "blur(20px) saturate(1.4)",
    border: "1px solid rgba(255,255,255,.7)",
    boxShadow: "0 8px 32px rgba(16,24,40,.1)",
  },
  mint: { background: "#E7F5EC" },
  rose: { background: "#FCE7EB" },
  lilac: { background: "#EEEAFC" },
};

export function Card({ variant = "flat", style, children, ...rest }: Props) {
  return (
    <div
      style={{
        borderRadius: RADIUS.xl,
        padding: 22,
        ...VARIANTS[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
