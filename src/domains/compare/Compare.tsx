"use client";

import { COLORS } from "@/domains/common/tokens";
import { Eyebrow } from "@/domains/common/Eyebrow";
import { useLanding } from "@/lib/i18n/LandingProvider";

type Kind = "on" | "off" | "mid";

function CheckIcon({ kind }: { kind: Kind | string }) {
  if (kind === "on") {
    return (
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "rgba(0,198,138,0.15)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M2 6.5L4.8 9L10 3.5" stroke="#00C68A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (kind === "off") {
    return (
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "rgba(255,77,109,0.10)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
          <path d="M2 2L8 8M8 2L2 8" stroke="#FF4D6D" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return (
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "rgba(255,181,71,0.18)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ width: 8, height: 2, background: "#FFB547", borderRadius: 2 }} />
    </span>
  );
}

export function Compare() {
  const { t } = useLanding();
  const c = t.compare;
  return (
    <section
      id="compare"
      style={{
        background: "#03001A",
        color: "#fff",
        padding: "120px clamp(20px,4vw,80px)",
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "clamp(2rem,3.6vw,3rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            margin: "14px 0 14px",
            color: "#fff",
          }}
        >
          {c.title}
        </h2>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: 17,
            color: COLORS.fgDark2,
            maxWidth: 620,
            margin: "0 0 48px",
            lineHeight: 1.55,
          }}
        >
          {c.sub}
        </p>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 12,
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(220px, 1.6fr) repeat(4, minmax(120px, 1fr))",
              padding: "18px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 13,
              alignItems: "center",
            }}
          >
            <div />
            {c.cols.map((col, i) => (
              <div
                key={col}
                style={{
                  textAlign: "center",
                  color: i === 0 ? COLORS.magenta : COLORS.fgDark2,
                  fontWeight: i === 0 ? 700 : 600,
                  fontSize: i === 0 ? 14 : 13,
                  letterSpacing: i === 0 ? "-0.01em" : 0,
                }}
              >
                {col}
              </div>
            ))}
          </div>

          {c.rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(220px, 1.6fr) repeat(4, minmax(120px, 1fr))",
                padding: "18px 24px",
                borderBottom: i < c.rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                alignItems: "center",
                background: i % 2 === 1 ? "rgba(255,255,255,0.012)" : "transparent",
              }}
            >
              <div style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: 14.5, color: "#fff" }}>{row[0]}</div>
              {row.slice(1).map((kind, j) => (
                <div key={j} style={{ display: "flex", justifyContent: "center" }}>
                  <CheckIcon kind={kind} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 24,
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          {(["on", "mid", "off"] as const).map((k) => (
            <span
              key={k}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: COLORS.fgDark3,
                fontFamily: "Poppins",
                fontSize: 12.5,
              }}
            >
              <CheckIcon kind={k} /> {c.legend[k]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
