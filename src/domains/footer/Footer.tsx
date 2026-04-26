"use client";

import { COLORS } from "@/domains/common/tokens";
import { Wordmark } from "@/domains/common/Wordmark";
import { useLanding } from "@/lib/i18n/LandingProvider";
import type { Lang } from "@/lib/i18n/dictionaries";

function FooterCol({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <div
        style={{
          color: "#fff",
          fontWeight: 600,
          fontSize: 13,
          marginBottom: 14,
          fontFamily: "Poppins",
          letterSpacing: ".04em",
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
            color: COLORS.fgDark3,
            textDecoration: "none",
            fontSize: 13.5,
            padding: "5px 0",
            fontFamily: "Poppins",
            transition: "color 160ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.fgDark3)}
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
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span style={{ color: COLORS.fgDark3 }}>{t.footer.lang}:</span>
      <div
        style={{
          display: "inline-flex",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 9999,
          padding: 3,
        }}
      >
        {langs.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding: "6px 14px",
              borderRadius: 9999,
              border: 0,
              cursor: "pointer",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              background: lang === l ? "rgba(254,118,255,0.14)" : "transparent",
              color: lang === l ? COLORS.magenta : COLORS.fgDark3,
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
        background: "#03001A",
        color: COLORS.fgDark3,
        padding: "64px clamp(20px,4vw,80px) 36px",
        borderTop: "1px solid rgba(254,118,255,.14)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.5fr) repeat(3, minmax(0, 1fr))",
            gap: 40,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <Wordmark height={28} />
            <p
              style={{
                marginTop: 18,
                fontSize: 13.5,
                lineHeight: 1.6,
                maxWidth: 320,
                color: COLORS.fgDark2,
                fontFamily: "Poppins",
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
            paddingTop: 6,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            fontFamily: "Poppins",
            fontSize: 12.5,
            color: COLORS.fgDark3,
          }}
        >
          <span>{t.footer.legal}</span>
          <LangToggle />
        </div>
      </div>
    </footer>
  );
}
