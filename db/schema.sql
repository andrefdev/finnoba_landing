-- Demand-validation form storage. Run once against the Neon database
-- (Neon console -> SQL Editor -> paste -> Run). Re-running is harmless.
--
-- Answers are stored as machine keys ("agro", ">15k"), never as the label the
-- visitor saw, so metrics aggregate across the Spanish and English forms.

create table if not exists leads (
  id             bigserial primary key,
  created_at     timestamptz not null default now(),
  lang           text not null,

  razon_social   text not null,
  ruc            text not null,
  contacto       text not null,
  cargo          text,
  email          text not null,
  whatsapp       text not null,

  cobra_usd      text not null,
  sector         text not null,
  mercados       text[] not null,
  facturacion    text not null,
  antiguedad     text not null,
  monto          text not null,
  destino        text not null,
  urgencia       text not null,
  oc_sin_factura text not null,
  alternativa    text not null,

  -- Soft disqualification. Nobody is rejected on screen; the record is kept
  -- and marked, because a disqualified answer is still phase-1 data.
  flags          text[] not null default '{}',
  utm            jsonb  not null default '{}',

  -- Salted hash, never the address itself: it only has to support the
  -- per-IP rate limit.
  ip_hash        text not null
);

create index if not exists leads_ip_recent on leads (ip_hash, created_at desc);

-- Metric 6 (completed submissions over form visits) needs a denominator.
-- A daily counter, so no cookie and no per-visitor record is required.
create table if not exists form_views (
  day date primary key,
  n   integer not null default 0
);
