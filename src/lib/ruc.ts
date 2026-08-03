/**
 * SUNAT tax ID (RUC) validation.
 *
 * 11 digits: a two-digit taxpayer type, eight digits, and a modulus-11 check
 * digit over the first ten. The pilot only accepts type 10 (persona natural
 * con negocio) and 20 (persona jurídica) — the segments that can hold an
 * export business — so other valid prefixes are rejected on purpose.
 */

const WEIGHTS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

export function isValidRuc(value: string): boolean {
  const ruc = value.trim();
  if (!/^(10|20)\d{9}$/.test(ruc)) return false;

  const sum = WEIGHTS.reduce((acc, w, i) => acc + w * Number(ruc[i]), 0);

  // check = 11 - (sum mod 11), where 11 wraps to 1 and 10 wraps to 0 — which
  // is what the trailing mod 10 does.
  return (11 - (sum % 11)) % 10 === Number(ruc[10]);
}
