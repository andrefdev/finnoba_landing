"use client";

import { useState } from "react";
import { COLORS } from "@/domains/common/tokens";
import { PillButton } from "@/domains/common/PillButton";
import { useLanding } from "@/lib/i18n/LandingProvider";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
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
          borderRadius: 9999,
          background: "rgba(0,198,138,0.10)",
          border: "1px solid rgba(0,198,138,0.35)",
          color: COLORS.success,
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.success }} />
        {t.waitlist.success}
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${focus ? "rgba(254,118,255,0.45)" : "rgba(255,255,255,0.12)"}`,
        borderRadius: 9999,
        padding: 5,
        maxWidth: 460,
        transition: "all 200ms",
        boxShadow: focus ? "0 0 0 4px rgba(121,4,235,0.18)" : "none",
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
          color: "#fff",
          fontFamily: "Poppins",
          fontSize: 14,
          padding: compact ? "8px 14px" : "10px 18px",
        }}
      />
      <PillButton type="submit" variant="grad" size={compact ? "sm" : "md"}>
        {t.waitlist.cta}
      </PillButton>
    </form>
  );
}
