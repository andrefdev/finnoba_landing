"use client";

import { Link } from "@/lib/i18n/Link";
import { Wordmark } from "@/domains/common/Wordmark";
import { COLOR, CONTAINER_MAX, CONTAINER_PAD, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const linkStyle = {
  display: "block",
  color: COLOR.muted,
  fontSize: 13,
  padding: "4px 0",
  fontFamily: FONT,
  fontWeight: 500,
} as const;

export function Footer() {
  const { t } = useLanding();
  const f = t.footer;
  const columns = [
    { title: f.productTitle, links: f.product },
    { title: f.resourcesTitle, links: f.resources },
    { title: f.communityTitle, links: f.community },
    { title: f.legalTitle, links: f.legalLinks },
  ];
  return (
    <footer style={{ background: "#fff", padding: `0 ${CONTAINER_PAD} 48px` }}>
      <div
        className="footer-grid"
        style={{
          maxWidth: CONTAINER_MAX,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(4, 1fr)",
          gap: 32,
          paddingTop: 48,
          borderTop: `1px solid ${COLOR.line}`,
        }}
      >
        <div>
          <Wordmark size={30} />
          <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.6, maxWidth: 300, color: COLOR.muted }}>{f.tagline}</p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div style={{ color: COLOR.ink, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>{col.title}</div>
            {col.links.map((it) =>
              "e" in it && it.e ? (
                <a key={it.h} href={it.h} target="_blank" rel="noopener noreferrer" style={linkStyle}>{it.l}</a>
              ) : (
                <Link key={it.h} href={it.h} style={linkStyle}>{it.l}</Link>
              )
            )}
          </div>
        ))}
      </div>

      <div style={{ maxWidth: CONTAINER_MAX, margin: "32px auto 0", fontSize: 12, color: COLOR.faint, lineHeight: 1.6 }}>
        {f.legalBase}
      </div>

      <style>{`
        @media (max-width: 960px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
