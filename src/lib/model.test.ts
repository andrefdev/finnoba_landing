// Run: node src/lib/model.test.ts
//
// Two things worth guarding, both on money/trust paths. The published Level 1
// schedule is hand-entered from the closed model, so it has to keep tying out
// to the stated rules: interest on the OUTSTANDING balance, capital in equal
// parts, and a 40/60 split of every interest payment. And the RUC check digit
// is the only thing standing between the demand form and junk tax IDs.

import assert from "node:assert/strict";
import { N1 } from "./loans.ts";
import { isValidRuc } from "./ruc.ts";

const RATE = 0.05; // 5% monthly, Level 1

let balance = N1.amount;
let sum = { capital: 0, interest: 0, fee: 0, lender: 0, payment: 0 };

for (const [i, row] of N1.rows.entries()) {
  const label = `cuota ${i + 1}`;

  assert.equal(row.capital, N1.amount / N1.months, `${label}: capital in equal parts`);
  assert.equal(row.interest, balance * RATE, `${label}: interest on outstanding balance`);
  assert.equal(row.fee, row.interest * 0.4, `${label}: Finnoba takes 40% of interest`);
  assert.equal(row.lender, row.interest * 0.6, `${label}: lender takes 60% of interest`);
  assert.equal(row.fee + row.lender, row.interest, `${label}: split adds back to interest`);
  assert.equal(row.payment, row.capital + row.interest, `${label}: payment = capital + interest`);

  balance -= row.capital;
  for (const k of Object.keys(sum) as Array<keyof typeof sum>) sum[k] += row[k];
}

assert.equal(N1.rows.length, N1.months, "one row per month");
assert.equal(balance, 0, "balance fully amortised");
assert.deepEqual(sum, N1.totals, "totals match the sum of the rows");
assert.equal(N1.totals.capital, N1.amount, "capital repaid equals the loan");

// TCEA = (1 + monthly) ^ 12 - 1. Flat interest would breach the BCRP cap, which
// is the whole reason the schedule amortises — so assert we stay under it.
const tcea = (1 + RATE) ** 12 - 1;
assert.equal(N1.tcea, `${(tcea * 100).toFixed(2)}%`, "published TCEA matches the rate");
assert.ok(tcea * 100 < parseFloat(N1.legalCap), "TCEA below the legal cap");

// --- RUC check digit -------------------------------------------------------

// Real, publicly listed RUCs: SUNAT itself and Banco de Crédito del Perú. The
// second one exercises the remainder-1 case, where the check digit wraps to 0.
for (const ruc of ["20131312955", "20100070970", "10426264540"]) {
  assert.ok(isValidRuc(ruc), `${ruc} should be valid`);

  // Alter the check digit: every other digit stays put, so only the modulus
  // can reject it.
  const wrong = ruc.slice(0, 10) + ((Number(ruc[10]) + 1) % 10);
  assert.ok(!isValidRuc(wrong), `${wrong} should fail the check digit`);
}

for (const bad of [
  "",
  "2013131295", // 10 digits
  "201313129551", // 12 digits
  "30131312955", // prefix outside 10/20
  "2013131295a", // non-numeric
]) {
  assert.ok(!isValidRuc(bad), `${JSON.stringify(bad)} should be rejected`);
}

assert.ok(isValidRuc(" 20131312955 "), "surrounding whitespace is trimmed");

console.log("model.test.ts: ok");
