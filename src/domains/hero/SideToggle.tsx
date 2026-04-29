"use client";

import { FONT_UI, LIGHT } from "@/domains/common/tokens";
import type { Side } from "@/lib/i18n/dictionaries";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function SideToggle() {
  const { t, side, setSide } = useLanding();
  const opts: { k: Side; label: string }[] = [
    { k: "lender", label: t.hero.tabLender },
    { k: "borrower", label: t.hero.tabBorrower },
  ];

  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        border: `1px solid ${LIGHT.lineStrong}`,
        borderRadius: 2,
        background: "#fff",
      }}
    >
      {opts.map((opt, i) => {
        const active = side === opt.k;
        return (
          <button
            key={opt.k}
            role="tab"
            aria-selected={active}
            onClick={() => setSide(opt.k)}
            style={{
              fontFamily: FONT_UI,
              fontWeight: 500,
              fontSize: 13,
              padding: "10px 20px",
              borderRadius: 0,
              border: 0,
              borderRight: i === 0 ? `1px solid ${LIGHT.line}` : "none",
              cursor: "pointer",
              background: active ? LIGHT.ink : "transparent",
              color: active ? "#fff" : LIGHT.ink2,
              transition: "all 160ms ease",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
