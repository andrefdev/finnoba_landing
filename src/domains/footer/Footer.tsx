"use client";

import { Wordmark } from "@/domains/common/Wordmark";
import { FONT_MONO, FONT_UI, GRADIENT, LIGHT } from "@/domains/common/tokens";
import type { Lang } from "@/lib/i18n/dictionaries";
import { useLanding } from "@/lib/i18n/LandingProvider";

function FooterCol({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div style={{ fontFamily: FONT_UI }}>
      <div
        style={{
          color: "#fff",
          fontWeight: 300,
          fontSize: 12,
          marginBottom: 16,
          letterSpacing: "0.10em",
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
            color: LIGHT.inkOnDark2,
            textDecoration: "none",
            fontSize: 14,
            padding: "6px 0",
            transition: "color 160ms",
            opacity: 0.75,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = LIGHT.inkOnDark2;
            e.currentTarget.style.opacity = "0.75";
          }}
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
      <span style={{ color: LIGHT.inkOnDark3 }}>{t.footer.lang}:</span>
      <div
        style={{
          display: "inline-flex",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 999,
          background: "rgba(255,255,255,0.04)",
          padding: 3,
        }}
      >
        {langs.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding: "6px 14px",
              border: 0,
              borderRadius: 999,
              cursor: "pointer",
              fontFamily: FONT_UI,
              fontWeight: 300,
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: lang === l ? GRADIENT.brand : "transparent",
              color: lang === l ? "#fff" : LIGHT.inkOnDark2,
              transition: "all 200ms",
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
        background: LIGHT.bgDark,
        color: LIGHT.inkOnDark2,
        padding: "80px clamp(20px,4vw,80px) 36px",
        borderTop: `1px solid ${LIGHT.lineDark}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 200,
          background: "radial-gradient(ellipse closest-side, rgba(121,4,235,0.30), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.5fr) repeat(3, minmax(0, 1fr))",
            gap: 40,
            paddingBottom: 56,
            borderBottom: `1px solid ${LIGHT.lineDark}`,
          }}
        >
          <div>
            <Wordmark height={26} />
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                lineHeight: 1.6,
                maxWidth: 320,
                color: LIGHT.inkOnDark2,
                fontFamily: FONT_UI,
                opacity: 0.8,
              }}
            >
              {t.footer.tagline}
            </p>
            <div
              style={{
                marginTop: 24,
                fontFamily: FONT_MONO,
                fontSize: 11,
                color: LIGHT.inkOnDark3,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              {t.hero2.tagline}
            </div>
          </div>
          <FooterCol title={t.footer.product} links={t.footer.productLinks} />
          <FooterCol title={t.footer.resources} links={t.footer.resourceLinks} />
          <FooterCol title={t.footer.community} links={t.footer.communityLinks} />
        </div>
        <div
          style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            fontFamily: FONT_UI,
            fontSize: 12.5,
            color: LIGHT.inkOnDark3,
          }}
        >
          <span>{t.footer.legal}</span>
          <LangToggle />
        </div>
      </div>
    </footer>
  );
}
