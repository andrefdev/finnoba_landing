"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/domains/common/Wordmark";
import { ArrowRight } from "@/domains/common/ArrowRight";
import { FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

const SECTIONS = ["how", "compare", "backed", "docs"] as const;
type SectionId = (typeof SECTIONS)[number];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Nav() {
  const { t, scrollToWaitlist } = useLanding();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId | "">("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // active section detection
      let current: SectionId | "" = "";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { l: string; k: SectionId }[] = [
    { l: t.nav.how, k: "how" },
    { l: t.nav.compare, k: "compare" },
    { l: t.nav.backed, k: "backed" },
    { l: t.nav.docs, k: "docs" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        padding: "16px 16px 0",
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "8px 8px 8px 20px",
          width: "100%",
          maxWidth: 1180,
          background: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.55)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          border: `1px solid ${scrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)"}`,
          borderRadius: 999,
          boxShadow: scrolled
            ? "0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 24px rgba(10,10,10,0.08), 0 1px 2px rgba(10,10,10,0.04)"
            : "0 1px 0 rgba(255,255,255,0.9) inset, 0 4px 16px rgba(10,10,10,0.04)",
          transition: "all 240ms cubic-bezier(.22,1,.36,1)",
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          <Wordmark height={20} />
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map((item) => {
            const isActive = active === item.k;
            return (
              <a
                key={item.k}
                href={`#${item.k}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.k);
                }}
                style={{
                  fontFamily: FONT_UI,
                  fontWeight: 500,
                  fontSize: 13.5,
                  color: isActive ? LIGHT.ink : LIGHT.ink2,
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: isActive ? "rgba(10,10,10,0.06)" : "transparent",
                  transition: "all 160ms ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = "rgba(10,10,10,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                {item.l}
              </a>
            );
          })}
        </div>

        <button
          onClick={scrollToWaitlist}
          style={{
            fontFamily: FONT_UI,
            fontWeight: 500,
            fontSize: 13,
            padding: "9px 16px",
            background: LIGHT.ink,
            color: "#fff",
            border: 0,
            borderRadius: 999,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            letterSpacing: "-0.005em",
            boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset, 0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          <span className="nav-cta-text">{t.nav.waitlist}</span>
          <ArrowRight size={12} />
        </button>
      </nav>
    </div>
  );
}
