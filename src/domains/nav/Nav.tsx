"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "@/domains/common/ArrowRight";
import { Wordmark } from "@/domains/common/Wordmark";
import { FONT_DISPLAY, FONT_MONO, FONT_UI, GRADIENT, LIGHT } from "@/domains/common/tokens";
import type { Lang } from "@/lib/i18n/dictionaries";
import { useLanding } from "@/lib/i18n/LandingProvider";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function HamburgerIcon({ open }: { open: boolean }) {
  const lineStyle: React.CSSProperties = {
    width: 18,
    height: 1.5,
    background: "currentColor",
    borderRadius: 2,
    transition: "all 280ms cubic-bezier(.22,1,.36,1)",
    position: "absolute",
    left: 11,
    pointerEvents: "none",
  };
  return (
    <span
      aria-hidden
      style={{
        position: "relative",
        width: 40,
        height: 40,
        display: "inline-block",
        pointerEvents: "none",
      }}
    >
      <span style={{ ...lineStyle, top: open ? 19.25 : 14, transform: open ? "rotate(45deg)" : "none" }} />
      <span style={{ ...lineStyle, top: 19.25, opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "scaleX(1)" }} />
      <span style={{ ...lineStyle, top: open ? 19.25 : 24.5, transform: open ? "rotate(-45deg)" : "none" }} />
    </span>
  );
}

const SOCIALS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Newsletter", href: "#" },
];

export function Nav() {
  const { t, lang, setLang, scrollToWaitlist } = useLanding();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  const toggleOpen = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  const links: { l: string; k: string; sub: string; n: string }[] = [
    { l: t.nav.how, k: "how", sub: t.how.sub, n: "01" },
    { l: t.nav.backed, k: "backed", sub: t.backed.sub, n: "02" },
    {
      l: t.nav.docs,
      k: "docs",
      sub:
        lang === "es"
          ? "Propuesta, auditoría y materiales para socios."
          : "Proposal, audit and partner materials.",
      n: "03",
    },
  ];

  const onLinkClick = (k: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(k), 320);
  };

  const drawer = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <div
        onClick={close}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,10,0.40)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          opacity: open ? 1 : 0,
          transition: "opacity 320ms ease",
        }}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "min(520px, 100vw)",
          background: "#fff",
          borderRight: `1px solid ${LIGHT.line}`,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 460ms cubic-bezier(.22,1,.36,1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          aria-hidden
          className="drawer-glow"
          style={{
            position: "absolute",
            top: "-30%",
            right: "-20%",
            width: 700,
            height: 700,
            background:
              "radial-gradient(closest-side, rgba(75,2,168,0.22) 0%, rgba(121,4,235,0.10) 40%, rgba(168,85,247,0.05) 65%, transparent 100%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-25%",
            left: "-30%",
            width: 600,
            height: 600,
            background:
              "radial-gradient(closest-side, rgba(49,46,129,0.12) 0%, rgba(75,2,168,0.04) 50%, transparent 100%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(${LIGHT.lineStrong} 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 80% 100% at 30% 30%, black 0%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 100% at 30% 30%, black 0%, transparent 80%)",
            opacity: 0.35,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 32px",
            borderBottom: `1px solid ${LIGHT.line}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              className="drawer-mark"
              aria-hidden
              style={{
                display: "inline-block",
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: GRADIENT.brand,
                boxShadow: "0 0 0 4px rgba(168,85,247,0.10)",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -2,
                  left: 8,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#fff",
                }}
              />
            </span>
            <Wordmark height={18} />
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              border: `1px solid ${LIGHT.line}`,
              background: LIGHT.bgCard,
              color: LIGHT.ink,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <HamburgerIcon open />
          </button>
        </div>

        <div
          style={{
            position: "relative",
            flex: 1,
            overflowY: "auto",
            padding: "40px 32px 24px",
          }}
        >
          <div
            className={open ? "drawer-item" : ""}
            style={{
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: LIGHT.ink3,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: 28,
              animationDelay: "60ms",
            }}
          >
            — {lang === "es" ? "Navegación" : "Navigation"}
          </div>

          <nav style={{ display: "flex", flexDirection: "column", position: "relative" }}>
            {links.map((item, i) => {
              const isHover = hovered === item.k;
              return (
                <button
                  type="button"
                  key={item.k}
                  onClick={() => onLinkClick(item.k)}
                  onMouseEnter={() => setHovered(item.k)}
                  onMouseLeave={() => setHovered(null)}
                  className={open ? "drawer-item" : ""}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "44px 1fr 24px",
                    alignItems: "center",
                    gap: 16,
                    padding: "20px 0",
                    borderBottom: `1px solid ${LIGHT.line}`,
                    position: "relative",
                    animationDelay: `${140 + i * 80}ms`,
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: "0 -32px",
                      background:
                        "linear-gradient(90deg, rgba(75,2,168,0.06) 0%, rgba(168,85,247,0.04) 60%, transparent 100%)",
                      opacity: isHover ? 1 : 0,
                      transition: "opacity 260ms ease",
                      pointerEvents: "none",
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      fontFamily: FONT_MONO,
                      fontSize: 12,
                      letterSpacing: "0.10em",
                      color: isHover ? "#7904EB" : LIGHT.ink3,
                      transition: "color 200ms ease",
                    }}
                  >
                    {item.n}
                  </span>
                  <span style={{ position: "relative", display: "block", minWidth: 0 }}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: FONT_DISPLAY,
                        fontWeight: 300,
                        fontSize: 36,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        color: LIGHT.ink,
                        transform: isHover ? "translateX(6px)" : "translateX(0)",
                        transition: "transform 280ms cubic-bezier(.22,1,.36,1)",
                      }}
                    >
                      {item.l}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: FONT_UI,
                        fontSize: 13,
                        color: LIGHT.ink3,
                        lineHeight: 1.45,
                        marginTop: 6,
                        maxHeight: isHover ? 60 : 0,
                        opacity: isHover ? 1 : 0,
                        overflow: "hidden",
                        transition: "max-height 320ms cubic-bezier(.22,1,.36,1), opacity 220ms ease",
                      }}
                    >
                      {item.sub}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    style={{
                      position: "relative",
                      color: isHover ? "#7904EB" : LIGHT.ink3,
                      transform: isHover ? "translateX(4px)" : "translateX(0)",
                      transition: "all 280ms cubic-bezier(.22,1,.36,1)",
                      display: "inline-flex",
                    }}
                  >
                    <ArrowRight size={16} />
                  </span>
                </button>
              );
            })}
          </nav>

          <div
            className={open ? "drawer-item" : ""}
            style={{
              marginTop: 40,
              padding: "20px 0 0",
              animationDelay: `${140 + links.length * 80 + 80}ms`,
            }}
          >
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 11,
                color: LIGHT.ink3,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              — {lang === "es" ? "Comunidad" : "Community"}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    fontFamily: FONT_UI,
                    fontSize: 14.5,
                    color: LIGHT.ink2,
                    textDecoration: "none",
                    padding: "8px 0",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "color 200ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4B02A8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = LIGHT.ink2)}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: GRADIENT.brand,
                      display: "inline-block",
                    }}
                  />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={open ? "drawer-item" : ""}
          style={{
            position: "relative",
            padding: "20px 32px 28px",
            borderTop: `1px solid ${LIGHT.line}`,
            animationDelay: `${140 + links.length * 80 + 200}ms`,
          }}
        >
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setTimeout(scrollToWaitlist, 320);
            }}
            style={{
              width: "100%",
              fontFamily: FONT_UI,
              fontWeight: 300,
              fontSize: 14,
              padding: "16px 24px",
              background: GRADIENT.brand,
              color: "#fff",
              border: 0,
              borderRadius: 999,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              letterSpacing: "-0.005em",
              boxShadow: "0 8px 24px rgba(75,2,168,0.32)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(75,2,168,0.42)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(75,2,168,0.32)";
            }}
          >
            {t.nav.waitlist}
            <ArrowRight size={14} />
          </button>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: FONT_MONO,
              fontSize: 11,
              color: LIGHT.ink3,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span>Q3 2026 · LATAM</span>
            <div style={{ display: "inline-flex", gap: 6 }}>
              {(["es", "en"] as Lang[]).map((l) => (
                <button
                  type="button"
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    border: 0,
                    background: lang === l ? LIGHT.ink : "transparent",
                    color: lang === l ? "#fff" : LIGHT.ink3,
                    padding: "5px 10px",
                    borderRadius: 999,
                    cursor: "pointer",
                    fontFamily: FONT_MONO,
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    transition: "all 200ms ease",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px clamp(20px,4vw,80px)",
          background: scrolled ? "rgba(255,255,255,0.78)" : "transparent",
          backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${LIGHT.line}` : "1px solid transparent",
          transition: "all 240ms cubic-bezier(.22,1,.36,1)",
          pointerEvents: "auto",
        }}
      >
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={toggleOpen}
          style={{
            width: 44,
            height: 44,
            borderRadius: 999,
            border: `1px solid ${LIGHT.line}`,
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: LIGHT.ink,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            transition: "background 200ms ease",
            position: "relative",
            zIndex: 1,
          }}
        >
          <HamburgerIcon open={open} />
        </button>

        <button
          type="button"
          onClick={scrollToWaitlist}
          style={{
            fontFamily: FONT_UI,
            fontWeight: 300,
            fontSize: 13.5,
            padding: "11px 20px",
            background: LIGHT.ink,
            color: "#fff",
            border: 0,
            borderRadius: 999,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            letterSpacing: "-0.005em",
            boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset, 0 1px 2px rgba(0,0,0,0.18)",
          }}
        >
          {t.nav.waitlist}
          <ArrowRight size={12} />
        </button>
      </nav>

      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
