"use client";

import { useState } from "react";
import { ArrowRight } from "@/domains/common/ArrowRight";
import { FONT_UI, LIGHT } from "@/domains/common/tokens";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function WaitlistForm({ full = false }: { full?: boolean }) {
  const { t } = useLanding();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [focus, setFocus] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  if (done) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 18px",
          borderRadius: 2,
          background: "#fff",
          border: `1px solid ${LIGHT.success}`,
          color: LIGHT.success,
          fontFamily: FONT_UI,
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: LIGHT.success }} />
        {t.waitlist.success}
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: 0,
        background: "#fff",
        border: `1px solid ${focus ? LIGHT.ink : LIGHT.lineStrong}`,
        borderRadius: 2,
        maxWidth: full ? "100%" : 480,
        transition: "border-color 160ms",
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={t.waitlist.placeholder}
        style={{
          flex: 1,
          minWidth: 0,
          background: "transparent",
          border: 0,
          outline: "none",
          color: LIGHT.ink,
          fontFamily: FONT_UI,
          fontSize: 14,
          padding: "14px 18px",
        }}
      />
      <button
        type="submit"
        style={{
          fontFamily: FONT_UI,
          fontWeight: 500,
          fontSize: 14,
          padding: "0 22px",
          border: 0,
          borderLeft: `1px solid ${LIGHT.lineStrong}`,
          background: LIGHT.ink,
          color: "#fff",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          borderRadius: 0,
        }}
      >
        {t.waitlist.cta}
        <ArrowRight size={14} />
      </button>
    </form>
  );
}
