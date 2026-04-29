"use client";

import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px",
        borderBottom: `1px solid ${LIGHT.line}`,
        fontFamily: FONT_UI,
      }}
    >
      <span style={{ fontSize: 13, color: LIGHT.ink2, fontWeight: 400 }}>{label}</span>
      <span
        style={{
          fontSize: 13.5,
          color: LIGHT.ink,
          fontWeight: 500,
          fontVariantNumeric: "tabular-nums",
          fontFamily: FONT_MONO,
        }}
      >
        {value}
      </span>
    </div>
  );
}

export function HeroCard() {
  const { t, side } = useLanding();
  const isLender = side === "lender";
  const c = t.card;

  const headerLabel = isLender ? c.lenderHeader : c.borrowerHeader;
  const bigLabel = isLender ? c.lenderBig : c.borrowerBig;
  const bigNumber = isLender ? "12.40" : "2,500";
  const bigUnit = isLender ? c.lenderUnit : "USD";
  const bigSub = isLender ? c.lenderSub : c.borrowerSub;

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        border: `1px solid ${LIGHT.lineStrong}`,
        borderRadius: 2,
        fontFamily: FONT_UI,
        boxShadow: "0 30px 60px -30px rgba(17, 4, 88, 0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 20px",
          borderBottom: `1px solid ${LIGHT.line}`,
          background: LIGHT.bgSoft,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: LIGHT.success }} />
          <span
            style={{
              fontWeight: 500,
              fontSize: 11,
              color: LIGHT.ink2,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
            }}
          >
            {headerLabel}
          </span>
        </div>
        <span style={{ fontFamily: FONT_MONO, fontWeight: 500, fontSize: 11, color: LIGHT.ink3 }}>
          #FN-{isLender ? "0421" : "0422"}
        </span>
      </div>

      <div style={{ padding: "28px 24px 24px", borderBottom: `1px solid ${LIGHT.line}` }}>
        <div
          style={{
            fontSize: 11,
            color: LIGHT.ink3,
            marginBottom: 10,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {bigLabel}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <div
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 400,
              fontSize: 64,
              letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
              color: LIGHT.ink,
              lineHeight: 1,
            }}
          >
            {bigNumber}
          </div>
          <div style={{ fontWeight: 500, fontSize: 18, color: LIGHT.ink2, fontFamily: FONT_UI }}>
            {bigUnit}
          </div>
        </div>
        <div style={{ color: LIGHT.ink3, fontSize: 13, marginTop: 8 }}>{bigSub}</div>
      </div>

      {isLender ? (
        <>
          <Row label={c.yourInvestment} value="$ 500" />
          <Row label={c.diversification} value={c.diversificationValue} />
          <Row label={c.nextPayout} value={c.nextPayoutValue} />
        </>
      ) : (
        <>
          <Row label={c.applicantScore} value="724 / 1000" />
          <Row label={c.estimatedRate} value="14.2 %" />
          <Row label={c.monthlyPayment} value="$ 228" />
        </>
      )}

      <div style={{ padding: "20px 24px", borderTop: `1px solid ${LIGHT.line}` }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: LIGHT.ink3,
            marginBottom: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span>{isLender ? c.lenderProgress : c.borrowerProgress}</span>
          <span
            style={{
              color: LIGHT.ink,
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums",
              fontFamily: FONT_MONO,
              letterSpacing: 0,
            }}
          >
            68%
          </span>
        </div>
        <div style={{ height: 4, background: LIGHT.line, borderRadius: 0, overflow: "hidden" }}>
          <div style={{ width: "68%", height: "100%", background: LIGHT.ink }} />
        </div>
      </div>
    </div>
  );
}
