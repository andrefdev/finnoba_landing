"use client";

import { Wordmark } from "@/domains/common/Wordmark";
import { FONT_UI, LIGHT } from "@/domains/common/tokens";
import type { Lang } from "@/lib/i18n/dictionaries";
import { useLanding } from "@/lib/i18n/LandingProvider";

function FooterCol({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div style={{ fontFamily: FONT_UI }}>
      <div
        style={{
          color: LIGHT.ink,
          fontWeight: 500,
          fontSize: 12,
          marginBottom: 16,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      {links.map((l) => (
        <a
          key={l}
          href="#"
          style={{
            display: "block",
            color: LIGHT.ink2,
            textDecoration: "none",
            fontSize: 14,
            padding: "6px 0",
            transition: "color 160ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = LIGHT.ink)}
          onMouseLeave={(e) => (e.currentTarget.style.color = LIGHT.ink2)}
        >
          {l}
        </a>
      ))}
    </div>
  );
}

function LangToggle() {
  const { lang, setLang, t } = useLanding();
  const langs: Lang[] = ["es", "en"];
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span style={{ color: LIGHT.ink3 }}>{t.footer.lang}:</span>
      <div style={{ display: "inline-flex", border: `1px solid ${LIGHT.lineStrong}`, borderRadius: 2 }}>
        {langs.map((l, i) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding: "6px 14px",
              border: 0,
              borderLeft: i === 0 ? 0 : `1px solid ${LIGHT.line}`,
              borderRadius: 0,
              cursor: "pointer",
              fontFamily: FONT_UI,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: lang === l ? LIGHT.ink : "#fff",
              color: lang === l ? "#fff" : LIGHT.ink3,
              transition: "all 160ms",
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const { t } = useLanding();
  return (
    <footer
      style={{
        background: "#fff",
        color: LIGHT.ink2,
        padding: "64px clamp(20px,4vw,80px) 36px",
        borderTop: `1px solid ${LIGHT.line}`,
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1280px, 100% - 40px)",
          pointerEvents: "none",
          borderLeft: `1px solid ${LIGHT.line}`,
          borderRight: `1px solid ${LIGHT.line}`,
        }}
      />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.5fr) repeat(3, minmax(0, 1fr))",
            gap: 40,
            paddingBottom: 48,
            borderBottom: `1px solid ${LIGHT.line}`,
          }}
        >
          <div>
            <Wordmark height={26} />
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                lineHeight: 1.55,
                maxWidth: 320,
                color: LIGHT.ink3,
                fontFamily: FONT_UI,
              }}
            >
              {t.footer.tagline}
            </p>
          </div>
          <FooterCol title={t.footer.product} links={t.footer.productLinks} />
          <FooterCol title={t.footer.resources} links={t.footer.resourceLinks} />
          <FooterCol title={t.footer.community} links={t.footer.communityLinks} />
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            fontFamily: FONT_UI,
            fontSize: 12.5,
            color: LIGHT.ink3,
          }}
        >
          <span>{t.footer.legal}</span>
          <LangToggle />
        </div>
      </div>
    </footer>
  );
}
