"use client";

import Link from "next/link";
import { ArrowRight } from "@/domains/common/ArrowRight";
import { CrossMarks } from "@/domains/common/CrossMarks";
import { CtaBlock } from "@/domains/common/CtaBlock";
import { InlineCta } from "@/domains/common/InlineCta";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const RESERVE_HREF = "/inversores#reservar";

const FRAME_PAD = "0";
const FRAME_BORDERS: React.CSSProperties = {
  borderLeft: `1px solid ${LIGHT.line}`,
  borderRight: `1px solid ${LIGHT.line}`,
};

export default function Page() {
  const { t } = useLanding();
  const home = t.home;

  return (
    <>
      {/* HERO */}
      <section style={{ background: LIGHT.bg, padding: FRAME_PAD }}>
        <div
          className="frame"
          style={{
            ...FRAME_BORDERS,
            position: "relative",
            padding: "180px clamp(24px,4vw,72px) 96px",
            overflow: "hidden",
            isolation: "isolate",
          }}
        >
          <div
            aria-hidden
            className="glow-pulse"
            style={{
              position: "absolute",
              top: "-40%",
              right: "-25%",
              width: 1100,
              height: 1100,
              background:
                "radial-gradient(closest-side, rgba(75,2,168,0.13) 0%, rgba(121,4,235,0.06) 35%, rgba(168,85,247,0) 100%)",
              filter: "blur(60px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <CrossMarks corners="bottom" />

          <div
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: LIGHT.ink3,
              marginBottom: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: LIGHT.violet,
                boxShadow: "0 0 0 4px rgba(121,4,235,0.14)",
              }}
            />
            Finnoba · 00 — {home.hero.tag}
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 300,
                fontSize: "clamp(2.75rem, 6.6vw, 6rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                margin: "0 0 32px",
                color: LIGHT.ink,
                textWrap: "balance",
                maxWidth: 1100,
              }}
            >
              {home.hero.h1Pre}{" "}
              <span className="gradient-text">{home.hero.h1Highlight}</span>
            </h1>

            <p
              style={{
                fontFamily: FONT_UI,
                fontSize: 19,
                lineHeight: 1.55,
                color: LIGHT.ink2,
                maxWidth: 720,
                margin: "0 0 36px",
              }}
            >
              {home.hero.sub}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
              <Link
                href={RESERVE_HREF}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: FONT_UI,
                  fontWeight: 400,
                  fontSize: 15,
                  padding: "15px 26px",
                  background: LIGHT.ink,
                  color: "#fff",
                  borderRadius: 999,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                }}
              >
                {home.hero.primary}
                <ArrowRight size={14} />
              </Link>
              <InlineCta href="/tesis">{home.hero.secondary}</InlineCta>
            </div>
          </div>
        </div>
      </section>

      {/* TRÍO DE NÚMEROS */}
      <section style={{ background: LIGHT.bg, padding: FRAME_PAD }}>
        <div
          className="frame"
          style={{
            ...FRAME_BORDERS,
            borderTop: `1px solid ${LIGHT.line}`,
            position: "relative",
          }}
        >
          <FrameTag id="01" label="Indicadores" />
          <div
            className="home-stats"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
            }}
          >
            <Stat value={home.stats.apr} label={home.stats.aprLabel} first />
            <Stat value={home.stats.time} label={home.stats.timeLabel} />
            <Stat value={home.stats.capital} label={home.stats.capitalLabel} mono />
          </div>
          <div
            style={{
              borderTop: `1px solid ${LIGHT.line}`,
              padding: "20px clamp(24px,4vw,40px)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: FONT_UI,
                fontSize: 12.5,
                color: LIGHT.ink3,
                lineHeight: 1.55,
                maxWidth: 720,
              }}
            >
              {home.stats.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 1: PROBLEMA */}
      <ContentBlock
        index="02"
        eyebrow={home.problem.eyebrow}
        title={home.problem.title}
        body={
          <>
            <p style={paraStyle}>{home.problem.p1}</p>
            <p style={{ ...paraStyle, marginTop: 18 }}>{home.problem.p2}</p>
          </>
        }
        ctaLabel={home.problem.cta}
        ctaHref="/tesis"
      />

      {/* BLOQUE 2: TRES PILARES */}
      <section style={{ background: LIGHT.bg, padding: FRAME_PAD }}>
        <div
          className="frame"
          style={{
            ...FRAME_BORDERS,
            borderTop: `1px solid ${LIGHT.line}`,
            padding: "100px clamp(24px,4vw,40px) 0",
            position: "relative",
          }}
        >
          <FrameTag id="03" label={home.pillars.eyebrow} />
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <Eyebrow>{home.pillars.eyebrow}</Eyebrow>
            <h2 style={titleStyle}>{home.pillars.title}</h2>
          </div>

          <div
            className="home-pillars"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              borderTop: `1px solid ${LIGHT.line}`,
              borderBottom: `1px solid ${LIGHT.line}`,
              marginLeft: "calc(-1 * clamp(24px,4vw,40px))",
              marginRight: "calc(-1 * clamp(24px,4vw,40px))",
              position: "relative",
            }}
          >
            {home.pillars.items.map((item, i) => (
              <div
                key={item.k}
                style={{
                  padding: "40px 32px",
                  borderRight: i < home.pillars.items.length - 1 ? `1px solid ${LIGHT.line}` : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: 12,
                    color: LIGHT.ink3,
                    letterSpacing: "0.10em",
                    marginBottom: 24,
                  }}
                >
                  {item.k}
                </div>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 300,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    margin: "0 0 12px",
                    color: LIGHT.ink,
                  }}
                >
                  {item.t}
                </h3>
                <p
                  style={{
                    fontFamily: FONT_UI,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: LIGHT.ink2,
                    margin: 0,
                  }}
                >
                  {item.b}
                </p>
              </div>
            ))}
          </div>

          <div style={{ padding: "32px 0 100px" }}>
            <InlineCta href="/como-funciona">{home.pillars.cta}</InlineCta>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: RIESGO */}
      <ContentBlock
        index="04"
        eyebrow={home.risk.eyebrow}
        title={home.risk.title}
        body={<p style={paraStyle}>{home.risk.body}</p>}
        ctaLabel={home.risk.cta}
        ctaHref="/riesgo"
      />

      <CtaBlock
        tag={home.finalCta.tag}
        title={home.finalCta.title}
        sub={home.finalCta.sub}
        primary={home.finalCta.primary}
        primaryHref={RESERVE_HREF}
        foot={home.finalCta.foot}
      />
    </>
  );
}

const paraStyle: React.CSSProperties = {
  fontFamily: FONT_UI,
  fontSize: 16.5,
  lineHeight: 1.65,
  color: LIGHT.ink2,
  margin: 0,
  maxWidth: 680,
};

const titleStyle: React.CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontWeight: 300,
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.035em",
  margin: "16px 0 0",
  color: LIGHT.ink,
  textWrap: "balance",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: FONT_MONO,
        fontSize: 11,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: LIGHT.ink3,
      }}
    >
      — {children}
    </div>
  );
}

function FrameTag({ id, label }: { id: string; label: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: -1,
        left: "clamp(24px,4vw,40px)",
        transform: "translateY(-50%)",
        background: LIGHT.bg,
        padding: "2px 12px",
        fontFamily: FONT_MONO,
        fontSize: 10.5,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: LIGHT.ink3,
        zIndex: 2,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ color: LIGHT.violet, fontWeight: 500 }}>{id}</span>
      <span style={{ width: 14, height: 1, background: LIGHT.line }} />
      {label}
    </div>
  );
}

function Stat({
  value,
  label,
  first,
  mono,
}: {
  value: string;
  label: string;
  first?: boolean;
  mono?: boolean;
}) {
  return (
    <div
      style={{
        padding: "44px 32px",
        borderLeft: first ? "none" : `1px solid ${LIGHT.line}`,
      }}
    >
      <div
        style={{
          fontFamily: mono ? FONT_MONO : FONT_DISPLAY,
          fontWeight: 300,
          fontSize: mono ? "clamp(1.5rem, 2.6vw, 2rem)" : "clamp(2.5rem, 4.6vw, 3.75rem)",
          lineHeight: 1,
          letterSpacing: mono ? "0" : "-0.04em",
          color: LIGHT.ink,
          fontVariantNumeric: "tabular-nums",
          marginBottom: 14,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: FONT_UI,
          fontSize: 13.5,
          color: LIGHT.ink3,
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function ContentBlock({
  index,
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section style={{ background: LIGHT.bg, padding: FRAME_PAD }}>
      <div
        className="frame"
        style={{
          ...FRAME_BORDERS,
          borderTop: `1px solid ${LIGHT.line}`,
          padding: "100px clamp(24px,4vw,40px)",
          position: "relative",
        }}
      >
        <FrameTag id={index} label={eyebrow} />
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 style={{ ...titleStyle, marginBottom: 28 }}>{title}</h2>
        <div>{body}</div>
        <div style={{ marginTop: 32 }}>
          <InlineCta href={ctaHref}>{ctaLabel}</InlineCta>
        </div>
      </div>
    </section>
  );
}
