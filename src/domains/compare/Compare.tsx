"use client";

import { SectionFrame } from "@/domains/common/SectionFrame";
import { SectionHeader } from "@/domains/common/SectionHeader";
import { FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

type Kind = "on" | "off" | "mid";

function CheckIcon({ kind }: { kind: Kind | string }) {
  if (kind === "on") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-label="yes">
        <path
          d="M3 8L6.5 11.5L13 4.5"
          stroke={LIGHT.ink}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "off") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-label="no">
        <path d="M3 3L11 11M11 3L3 11" stroke={LIGHT.ink4} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-label="partial">
      <line x1="3" y1="7" x2="11" y2="7" stroke={LIGHT.ink3} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Compare() {
  const { t } = useLanding();
  const c = t.compare;

  return (
    <SectionFrame id="compare" bg={LIGHT.bg} padY="120px" style={{ scrollMarginTop: 96 }}>
      <SectionHeader eyebrow={c.eyebrow} title={c.title} lead={c.sub} />
      <div style={{ border: `1px solid ${LIGHT.line}`, background: "#fff", fontFamily: FONT_UI, overflowX: "auto" }}>
        <div
          className="compare-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(240px, 1.8fr) repeat(4, minmax(120px, 1fr))",
            padding: "20px 28px",
            borderBottom: `1px solid ${LIGHT.lineStrong}`,
            fontWeight: 500,
            fontSize: 12,
            alignItems: "center",
            background: LIGHT.bgSoft,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ color: LIGHT.ink3 }}>—</div>
          {c.cols.map((col, i) => (
            <div
              key={col}
              style={{
                textAlign: "center",
                color: i === 0 ? LIGHT.ink : LIGHT.ink3,
                fontWeight: i === 0 ? 600 : 500,
              }}
            >
              {col}
            </div>
          ))}
        </div>

        {c.rows.map((row, i) => (
          <div
            key={i}
            className="compare-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(240px, 1.8fr) repeat(4, minmax(120px, 1fr))",
              padding: "18px 28px",
              borderBottom: i < c.rows.length - 1 ? `1px solid ${LIGHT.line}` : "none",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: 400, fontSize: 14.5, color: LIGHT.ink }}>{row[0]}</div>
            {row.slice(1).map((kind, j) => (
              <div
                key={j}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  background: j === 0 ? LIGHT.bgSoft : "transparent",
                  padding: "6px 0",
                }}
              >
                <CheckIcon kind={kind} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: 28,
          marginTop: 24,
          justifyContent: "flex-end",
          flexWrap: "wrap",
          fontFamily: FONT_UI,
        }}
      >
        {(["on", "mid", "off"] as const).map((k) => (
          <span
            key={k}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: LIGHT.ink3,
              fontSize: 12.5,
            }}
          >
            <CheckIcon kind={k} /> {c.legend[k]}
          </span>
        ))}
      </div>
    </SectionFrame>
  );
}
