"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "@/domains/common/ArrowRight";
import { Wordmark } from "@/domains/common/Wordmark";
import { FONT_MONO, FONT_UI, LIGHT } from "@/domains/common/tokens";
import type { Lang } from "@/lib/i18n/dictionaries";
import { useLanding } from "@/lib/i18n/LandingProvider";

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
      style={{ position: "relative", width: 40, height: 40, display: "inline-block", pointerEvents: "none" }}
    >
      <span style={{ ...lineStyle, top: open ? 19.25 : 14, transform: open ? "rotate(45deg)" : "none" }} />
      <span style={{ ...lineStyle, top: 19.25, opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "scaleX(1)" }} />
      <span style={{ ...lineStyle, top: open ? 19.25 : 24.5, transform: open ? "rotate(-45deg)" : "none" }} />
    </span>
  );
}

const RESERVE_HREF = "/inversores#reservar";

export function Nav() {
  const { t, lang, setLang } = useLanding();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

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

  const links: { l: string; h: string }[] = [
    { l: t.nav.how, h: "/como-funciona" },
    { l: t.nav.investors, h: "/inversores" },
    { l: t.nav.thesis, h: "/tesis" },
    { l: t.nav.faq, h: "/faq" },
  ];

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
          transition: "opacity 280ms ease",
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
          right: 0,
          bottom: 0,
          width: "min(440px, 100vw)",
          background: "#fff",
          borderLeft: `1px solid ${LIGHT.line}`,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 420ms cubic-bezier(.22,1,.36,1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 28px",
            borderBottom: `1px solid ${LIGHT.line}`,
          }}
        >
          <Wordmark height={18} />
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

        <nav style={{ flex: 1, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map((item) => (
            <Link
              key={item.h}
              href={item.h}
              onClick={close}
              style={{
                fontFamily: FONT_UI,
                fontWeight: 300,
                fontSize: 22,
                color: LIGHT.ink,
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: `1px solid ${LIGHT.line}`,
                letterSpacing: "-0.015em",
              }}
            >
              {item.l}
            </Link>
          ))}
        </nav>

        <div
          style={{
            padding: "20px 28px 28px",
            borderTop: `1px solid ${LIGHT.line}`,
          }}
        >
          <Link
            href={RESERVE_HREF}
            onClick={close}
            style={{
              width: "100%",
              fontFamily: FONT_UI,
              fontWeight: 400,
              fontSize: 14,
              padding: "14px 22px",
              background: LIGHT.ink,
              color: "#fff",
              borderRadius: 999,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              letterSpacing: "-0.005em",
              textDecoration: "none",
            }}
          >
            {t.nav.reserve}
            <ArrowRight size={14} />
          </Link>

          <div
            style={{
              marginTop: 18,
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
          background: scrolled ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0.72)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          borderBottom: `1px solid ${LIGHT.line}`,
          transition: "background 240ms cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div
          className="frame"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px clamp(20px,3.5vw,40px)",
            borderLeft: `1px solid ${LIGHT.line}`,
            borderRight: `1px solid ${LIGHT.line}`,
          }}
        >
          {/* Left — logo */}
          <Link
            href="/"
            aria-label="Finnoba — Inicio"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <Wordmark height={24} />
          </Link>

          {/* Right — CTA + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href={RESERVE_HREF}
              className="nav-cta"
              style={{
                fontFamily: FONT_UI,
                fontWeight: 400,
                fontSize: 13.5,
                padding: "10px 18px",
                background: LIGHT.ink,
                color: "#fff",
                borderRadius: 999,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                letterSpacing: "-0.005em",
              }}
            >
              {t.nav.reserve}
              <ArrowRight size={12} />
            </Link>

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
              }}
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </nav>

      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
