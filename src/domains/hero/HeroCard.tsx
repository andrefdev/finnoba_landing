"use client";

import type { ReactNode } from "react";
import { COLORS } from "@/domains/common/tokens";
import { ChainGlyph } from "@/domains/common/ChainGlyph";
import { useLanding } from "@/lib/i18n/LandingProvider";

function CardRow({
  icon,
  title,
  value,
  sub,
  right,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  sub: string;
  right?: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        background: "rgba(255,255,255,.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 10,
        marginBottom: 8,
      }}
    >
      {icon}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontFamily: "Poppins", fontWeight: 500, color: COLORS.fgDark3, fontSize: 12 }}>{title}</div>
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              color: "#fff",
              fontSize: 14,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {value}
          </div>
        </div>
        <div style={{ color: COLORS.fgDark3, fontSize: 11.5, marginTop: 2 }}>{sub}</div>
      </div>
      {right && <div style={{ marginLeft: 4 }}>{right}</div>}
    </div>
  );
}

export function HeroCard() {
  const { t, side } = useLanding();
  const c = t.hero.card;
  const isLender = side === "lender";

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 460,
        marginLeft: "auto",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 24,
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: COLORS.success,
              boxShadow: "0 0 0 3px rgba(0,198,138,.15)",
            }}
          />
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 12,
              color: COLORS.fgDark2,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            {isLender ? c.lenderStatus : c.borrowerStatus}
          </span>
        </div>
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 11,
            color: COLORS.fgDark3,
            letterSpacing: ".08em",
          }}
        >
          #FN-{isLender ? "0421" : "0422"}
        </span>
      </div>

      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            fontSize: 12,
            color: COLORS.fgDark3,
            marginBottom: 6,
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          {isLender ? c.lenderYield : c.borrowerRequest}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: 56,
              letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            {isLender ? "12.40" : "300"}
          </div>
          <div style={{ fontWeight: 600, fontSize: 18, color: COLORS.magenta }}>
            {isLender ? "% APY" : "USDT"}
          </div>
        </div>
        <div style={{ color: COLORS.fgDark3, fontSize: 12.5, marginTop: 6 }}>
          {isLender ? c.lenderFoot : c.borrowerFoot}
        </div>
      </div>

      <CardRow
        icon={<ChainGlyph chain="usdt" size={32} />}
        title={isLender ? c.lenderTicket : c.borrowerScore}
        value={isLender ? "500 USDT" : "724 / 1000"}
        sub={isLender ? c.lenderTicketSub : c.borrowerScoreSub}
        right={
          isLender ? (
            <ChainGlyph chain="polygon" size={18} />
          ) : (
            <span style={{ color: COLORS.success, fontFamily: "Poppins", fontWeight: 600, fontSize: 12 }}>
              {c.approved}
            </span>
          )
        }
      />
      <CardRow
        icon={<ChainGlyph chain="usdt" size={32} />}
        title={isLender ? c.lenderPool : c.borrowerRate}
        value={isLender ? "6,000 USDT" : "14.2% APR"}
        sub={isLender ? c.lenderPoolSub : c.borrowerRateSub}
        right={<ChainGlyph chain="base" size={18} />}
      />

      <div style={{ marginTop: 18 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: COLORS.fgDark3,
            marginBottom: 8,
            fontFamily: "Poppins",
          }}
        >
          <span>{isLender ? c.lenderProgress : c.borrowerProgress}</span>
          <span style={{ color: "#fff", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>68%</span>
        </div>
        <div style={{ height: 5, background: "rgba(255,255,255,.06)", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ width: "68%", height: "100%", background: "linear-gradient(90deg,#7904EB 0%,#FE76FF 100%)" }} />
        </div>
      </div>
    </div>
  );
}
