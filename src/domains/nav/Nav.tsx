"use client";

import { useEffect, useState } from "react";
import { COLORS } from "@/domains/common/tokens";
import { PillButton } from "@/domains/common/PillButton";
import { Wordmark } from "@/domains/common/Wordmark";
import { useLanding } from "@/lib/i18n/LandingProvider";

function scrollToFinalCta() {
  const el = document.querySelector("[data-final-cta]");
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 60;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Nav() {
  const { t } = useLanding();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { l: t.nav.how, h: "#how" },
    { l: t.nav.compare, h: "#compare" },
    { l: t.nav.backed, h: "#backed" },
    { l: t.nav.docs, h: "#" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "14px clamp(20px,4vw,80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(3,0,26,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "1px solid transparent",
        transition: "all 200ms cubic-bezier(.22,1,.36,1)",
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <Wordmark height={30} />
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-links">
        {items.map((item) => (
          <a
            key={item.l}
            href={item.h}
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 14,
              color: COLORS.fgDark2,
              textDecoration: "none",
              transition: "color 160ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.fgDark2)}
          >
            {item.l}
          </a>
        ))}
        <PillButton variant="grad" size="sm" onClick={scrollToFinalCta}>
          {t.nav.waitlist}
        </PillButton>
      </div>
    </nav>
  );
}
