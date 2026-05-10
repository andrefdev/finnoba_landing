"use client";

import Link from "next/link";
import { ArrowRight } from "./ArrowRight";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, GRADIENT, LIGHT } from "./tokens";

export function CtaBlock({
  tag,
  title,
  sub,
  primary,
  primaryHref,
  foot,
}: {
  tag?: string;
  title: string;
  sub?: string;
  primary: string;
  primaryHref: string;
  foot?: string;
}) {
  return (
    <section
      id="reservar"
      data-final-cta
      style={{
        position: "relative",
        background: GRADIENT.ctaDark,
        padding: "140px clamp(20px,4vw,80px)",
        overflow: "hidden",
        scrollMarginTop: 96,
      }}
    >
      <div
        aria-hidden
        className="glow-pulse"
        style={{
          position: "absolute",
          top: "-40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 1100,
          height: 1100,
          background: "radial-gradient(closest-side, rgba(254,118,255,0.22), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 85%)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 920,
          margin: "0 auto",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        {tag ? (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.16)",
              fontFamily: FONT_MONO,
              fontSize: 11.5,
              color: LIGHT.inkOnDark2,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: GRADIENT.brand,
                boxShadow: "0 0 0 4px rgba(254,118,255,0.18)",
              }}
            />
            {tag}
          </div>
        ) : null}

        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 300,
            fontSize: "clamp(2.5rem, 5.4vw, 4.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
            color: "#fff",
            margin: "0 0 18px",
            textWrap: "balance",
          }}
        >
          {title}
        </h2>
        {sub ? (
          <p
            style={{
              fontFamily: FONT_UI,
              fontSize: 18,
              color: LIGHT.inkOnDark2,
              margin: "0 auto 36px",
              lineHeight: 1.55,
              maxWidth: 620,
              opacity: 0.9,
            }}
          >
            {sub}
          </p>
        ) : null}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            href={primaryHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: FONT_UI,
              fontWeight: 400,
              fontSize: 15,
              padding: "16px 28px",
              background: "#fff",
              color: LIGHT.ink,
              borderRadius: 999,
              textDecoration: "none",
              letterSpacing: "-0.005em",
            }}
          >
            {primary}
            <ArrowRight size={14} />
          </Link>
        </div>
        {foot ? (
          <div
            style={{
              marginTop: 22,
              color: LIGHT.inkOnDark3,
              fontFamily: FONT_UI,
              fontSize: 12.5,
              letterSpacing: "0.02em",
            }}
          >
            {foot}
          </div>
        ) : null}
      </div>
    </section>
  );
}
