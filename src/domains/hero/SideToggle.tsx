"use client";

import { COLORS } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";
import type { Side } from "@/lib/i18n/dictionaries";

export function SideToggle() {
  const { t, side, setSide } = useLanding();
  const opts: { k: Side; label: string }[] = [
    { k: "lender", label: t.hero.tabLender },
    { k: "borrower", label: t.hero.tabBorrower },
  ];
  return (
    <div
      style={{
        display: "inline-flex",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 9999,
        padding: 4,
      }}
    >
      {opts.map((opt) => (
        <button
          key={opt.k}
          onClick={() => setSide(opt.k)}
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 13,
            padding: "9px 18px",
            borderRadius: 9999,
            border: 0,
            cursor: "pointer",
            background: side === opt.k ? "linear-gradient(135deg,#7904EB 0%,#FE76FF 100%)" : "transparent",
            color: side === opt.k ? "#fff" : COLORS.fgDark2,
            transition: "all 200ms cubic-bezier(.22,1,.36,1)",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
