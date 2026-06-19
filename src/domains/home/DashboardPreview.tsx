"use client";

import { Wordmark } from "@/domains/common/Wordmark";
import { COLOR, FONT } from "@/domains/common/tokens";
import { LOANS } from "@/domains/loans/data";
import { CategoryAvatar } from "@/domains/loans/CategoryBadge";
import { GradeChip } from "@/domains/loans/GradeChip";
import { useLanding } from "@/lib/i18n/LandingProvider";

const NAV_SECTIONS = [
  { g: null, items: [["Overview", false], ["Portfolio", false]] as Array<[string, boolean]> },
  { g: "INVEST", items: [["Marketplace", true], ["Repayments", false]] as Array<[string, boolean]> },
  { g: "ACCOUNT", items: [["Statements", false], ["Settings", false]] as Array<[string, boolean]> },
];

const COLS = "1.9fr 1fr 0.9fr 1fr 0.9fr";

// Browser-chrome mockup of the dashboard. Fakes a window with a sidebar and
// the marketplace table — the LOANS data is shared with the live MarketsSection.
export function DashboardPreview() {
  const { t } = useLanding();
  const rows = LOANS.slice(0, 4);
  const p = t.home.preview;
  return (
    <div
      style={{
        position: "relative",
        maxWidth: 1120,
        margin: "52px auto 0",
        WebkitMaskImage: "linear-gradient(180deg,#000 82%,transparent 100%)",
        maskImage: "linear-gradient(180deg,#000 82%,transparent 100%)",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "18px 18px 0 0",
          border: "1px solid rgba(20,21,26,.08)",
          boxShadow: "0 40px 90px rgba(16,24,40,.20)",
          overflow: "hidden",
          textAlign: "left",
        }}
      >
        {/* Window chrome */}
        <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 16px", borderBottom: "1px solid rgba(20,21,26,.06)" }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ fontFamily: FONT, fontSize: 12, color: COLOR.faint, background: "#F2F2F5", padding: "5px 16px", borderRadius: 8 }}>
              {p.url}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", minHeight: 440 }}>
          {/* Sidebar */}
          <div style={{ width: 212, flexShrink: 0, borderRight: "1px solid rgba(20,21,26,.06)", padding: "18px 14px", background: "rgba(247,247,250,.5)" }}>
            <div style={{ padding: "0 6px 16px" }}>
              <Wordmark size={18} />
            </div>
            {NAV_SECTIONS.map((sec, si) => (
              <div key={si} style={{ marginBottom: 14 }}>
                {sec.g && (
                  <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10, letterSpacing: ".1em", color: COLOR.faint, padding: "0 10px 8px" }}>
                    {sec.g}
                  </div>
                )}
                {sec.items.map(([label, active]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 10px",
                      borderRadius: 10,
                      marginBottom: 2,
                      background: active ? "#fff" : "transparent",
                      boxShadow: active ? "0 1px 3px rgba(16,24,40,.08)" : "none",
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: 13.5,
                      color: active ? COLOR.ink : COLOR.muted,
                    }}
                  >
                    <span
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 5,
                        background: active ? "linear-gradient(135deg,#8B3DF0,#C42FD8)" : "rgba(20,21,26,.12)",
                      }}
                    />
                    {label}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Main */}
          <div style={{ flex: 1, minWidth: 0, padding: "20px 26px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", borderRadius: 10, background: "#F2F2F5", fontFamily: FONT, fontSize: 13, color: COLOR.faint }}>
                {p.search}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(20,21,26,.1)", fontFamily: FONT, fontWeight: 600, fontSize: 13, color: COLOR.ink2 }}>
                {p.addFunds}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 12px 6px 6px", borderRadius: 9999, background: COLOR.ink, fontFamily: FONT, fontWeight: 600, fontSize: 13, color: "#fff" }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#6D54E8,#2D7FF9)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>
                  CR
                </span>
                Carla R.
              </div>
            </div>

            <h3 style={{ fontFamily: FONT, fontWeight: 800, fontSize: 24, letterSpacing: "-.02em", color: COLOR.ink, margin: "0 0 6px" }}>
              {p.title}
            </h3>
            <p style={{ fontFamily: FONT, fontSize: 14, color: COLOR.muted, margin: "0 0 22px" }}>{p.sub}</p>

            <div style={{ display: "grid", gridTemplateColumns: COLS, gap: 12, padding: "0 14px 12px", borderBottom: "1px solid rgba(20,21,26,.08)" }}>
              {[p.headers.business, p.headers.amount, p.headers.term, p.headers.yield, p.headers.grade].map((h) => (
                <div key={h} style={{ fontFamily: FONT, fontWeight: 700, fontSize: 10.5, letterSpacing: ".08em", color: COLOR.faint }}>
                  {h}
                </div>
              ))}
            </div>

            {rows.map((r, i) => (
              <div
                key={r.business}
                style={{
                  display: "grid",
                  gridTemplateColumns: COLS,
                  gap: 12,
                  alignItems: "center",
                  padding: "13px 14px",
                  borderRadius: 12,
                  background: i === 0 ? "rgba(139,61,240,.05)" : "transparent",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <CategoryAvatar category={r.category} size={30} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13.5, color: COLOR.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {r.business}
                    </div>
                    <div style={{ fontFamily: FONT, fontSize: 11.5, color: COLOR.faint }}>{r.city}</div>
                  </div>
                </div>
                <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 13, color: COLOR.ink, fontVariantNumeric: "tabular-nums" }}>
                  ${r.amount.toLocaleString()}
                </div>
                <div style={{ fontFamily: FONT, fontWeight: 500, fontSize: 13, color: COLOR.muted }}>
                  {r.term} mo
                </div>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, color: "#157A47", fontVariantNumeric: "tabular-nums" }}>
                  {r.yld}
                </div>
                <div>
                  <GradeChip grade={r.grade} label={t.home.markets.gradeLabel} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
