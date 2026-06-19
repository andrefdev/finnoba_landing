"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/domains/common/Button";
import { Wordmark } from "@/domains/common/Wordmark";
import { COLOR, EASE, FONT, RADIUS } from "@/domains/common/tokens";
import { Link } from "@/lib/i18n/Link";
import { useLanding } from "@/lib/i18n/LandingProvider";

const LINKS = [
  { key: "how", href: "/how-it-works" },
  { key: "investors", href: "/investors" },
  { key: "thesis", href: "/thesis" },
  { key: "faq", href: "/faq" },
] as const;

export function Nav() {
  const { t, lang } = useLanding();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const other = lang === "es" ? "en" : "es";
  const langSwitchHref = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${other}`) || `/${other}`;

  return (
    <nav
      style={{
        position: "sticky",
        top: 14,
        zIndex: 50,
        marginTop: scrolled ? 18 : 14,
        marginLeft: "auto",
        marginRight: "auto",
        width: "calc(100% - clamp(28px,6vw,64px))",
        maxWidth: scrolled ? 880 : 1600,
        padding: "10px 12px 10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: RADIUS.pill,
        background: scrolled ? "rgba(255,255,255,.78)" : "rgba(255,255,255,.45)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: "1px solid rgba(255,255,255,.6)",
        boxShadow: scrolled ? "0 8px 32px rgba(16,24,40,.1)" : "none",
        transition: `all 240ms ${EASE}`,
      }}
    >
      <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
        <Wordmark size={32} priority />
      </Link>

      {/* Desktop links */}
      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {LINKS.map((l) => (
          <Link
            key={l.key}
            href={l.href}
            style={{
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: 14,
              color: COLOR.ink2,
              padding: "8px 14px",
              borderRadius: RADIUS.pill,
            }}
          >
            {t.nav[l.key]}
          </Link>
        ))}
        <NextLink
          href={langSwitchHref}
          aria-label={`Switch to ${other.toUpperCase()}`}
          hrefLang={other}
          style={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 12,
            color: COLOR.muted,
            padding: "8px 10px",
            borderRadius: RADIUS.pill,
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          {other.toUpperCase()}
        </NextLink>
        <Link href="/#reserve">
          <Button variant="ink" size="sm">{t.nav.reserve}</Button>
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="nav-burger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        style={{
          display: "none",
          border: 0,
          background: "rgba(255,255,255,.6)",
          borderRadius: RADIUS.pill,
          width: 40,
          height: 40,
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,.95)",
            backdropFilter: "blur(20px) saturate(1.4)",
            border: "1px solid rgba(255,255,255,.7)",
            borderRadius: 24,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: "0 24px 64px rgba(16,24,40,.18)",
          }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 15,
                color: COLOR.ink,
                padding: "12px 14px",
                borderRadius: 14,
              }}
            >
              {t.nav[l.key]}
            </Link>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <NextLink
              href={langSwitchHref}
              hrefLang={other}
              onClick={() => setOpen(false)}
              style={{
                flex: 1,
                border: "1px solid rgba(20,21,26,.12)",
                borderRadius: RADIUS.pill,
                padding: "10px",
                fontFamily: FONT,
                fontWeight: 700,
                color: COLOR.ink,
                textAlign: "center",
              }}
            >
              {other.toUpperCase()}
            </NextLink>
            <Link href="/#reserve" onClick={() => setOpen(false)} style={{ flex: 2 }}>
              <Button variant="ink" size="md" full>{t.nav.reserve}</Button>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .nav-links { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
}
