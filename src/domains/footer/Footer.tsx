"use client";

import { Link } from "@/lib/i18n/Link";
import { Wordmark } from "@/domains/common/Wordmark";
import { COLOR, CONTAINER_MAX, CONTAINER_PAD, FONT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

type LinkItem = { l: string; h: string; e?: boolean };

function FooterLink({ item }: { item: LinkItem }) {
  const style = {
    display: "block",
    color: COLOR.muted,
    fontSize: 13,
    padding: "4px 0",
    fontFamily: FONT,
    fontWeight: 500,
  } as const;
  return item.e ? (
    <a href={item.h} target="_blank" rel="noopener noreferrer" style={style}>{item.l}</a>
  ) : (
    <Link href={item.h} style={style}>{item.l}</Link>
  );
}

export function Footer() {
  const { t } = useLanding();
  return (
    <footer style={{ background: "#fff", padding: `0 ${CONTAINER_PAD} 48px` }}>
      <div
        style={{
          maxWidth: CONTAINER_MAX,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(4, 1fr)",
          gap: 32,
          paddingTop: 48,
          borderTop: `1px solid ${COLOR.line}`,
        }}
        className="footer-grid"
      >
        <div>
          <Wordmark size={22} />
          <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.6, maxWidth: 300, color: COLOR.muted }}>
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <div style={{ color: COLOR.ink, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>
            {t.footer.productTitle}
          </div>
          {t.footer.product.map((it) => <FooterLink key={it.h} item={it as LinkItem} />)}
        </div>

        <div>
          <div style={{ color: COLOR.ink, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>
            {t.footer.resourcesTitle}
          </div>
          {t.footer.resources.map((it) => <FooterLink key={it.h} item={it as LinkItem} />)}
        </div>

        <div>
          <div style={{ color: COLOR.ink, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>
            {t.footer.communityTitle}
          </div>
          {t.footer.community.map((it) => <FooterLink key={it.h} item={it as LinkItem} />)}
        </div>

        <div>
          <div style={{ color: COLOR.ink, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>
            {t.footer.legalTitle}
          </div>
          {t.footer.legalLinks.map((it) => <FooterLink key={it.h} item={it as LinkItem} />)}
        </div>
      </div>

      <div
        style={{
          maxWidth: CONTAINER_MAX,
          margin: "32px auto 0",
          fontSize: 12,
          color: COLOR.faint,
          lineHeight: 1.6,
        }}
      >
        {t.footer.legalBase}
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
