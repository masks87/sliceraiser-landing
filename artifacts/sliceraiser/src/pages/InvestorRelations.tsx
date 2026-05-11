import { useState, type FormEvent } from "react";
import { Link } from "wouter";

const BG = "#F8F9FA";
const PRIMARY = "#1E3A8A";
const TEXT = "#2C2C2C";
const GOLD = "#D4AF37";
const MUTED = "#6B7280";
const INTER = "'Inter', sans-serif";

const INQUIRY_TYPES = [
  "I want to invest IN SliceRaiser (VC · Angel · Family Office)",
  "I want to partner with SliceRaiser (Technology · Real Estate · Regional)",
  "I represent an institutional investor",
  "I want to list my opportunity on the platform",
  "General investor relations question",
];

const ENGAGEMENT_SIZES = [
  "Under $50k",
  "$50k–$250k",
  "$250k–$1M",
  "$1M–$5M",
  "$5M+",
  "Not applicable",
];

const METRICS: Array<{ label: string; value: string }> = [
  { label: "Target Users", value: "1 Million in 3 years" },
  { label: "Min Investment", value: "From USD 100" },
  { label: "Target AUM", value: "USD 1.5 Billion" },
  { label: "Markets", value: "UAE · Australia · Worldwide" },
];

const FOCUS = [
  {
    title: "Property Investments",
    items: [
      "Residential opportunities",
      "Commercial assets",
      "Development projects",
      "Income-generating real estate",
    ],
  },
  {
    title: "Equity Investments",
    items: [
      "Startup opportunities",
      "SME and private market exposure",
      "Growth-focused businesses",
    ],
  },
  {
    title: "Fixed Income",
    items: [
      "Structured income opportunities",
      "Sukuk and conventional structures",
      "Asset-backed income products",
    ],
  },
];

const PHASES = [
  {
    phase: "Phase 1",
    title: "MVP",
    items: [
      "Real estate opportunities",
      "User onboarding and compliance",
      "Initial market penetration",
    ],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    items: [
      "Multi-jurisdiction growth",
      "Equity and fixed income launch",
      "Strategic partnerships",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    items: [
      "Institutional integrations",
      "Secondary liquidity",
      "Global expansion",
    ],
  },
];

const CATEGORIES = [
  "Venture Capital",
  "Family Offices",
  "Strategic Partners",
  "Institutional Investors",
  "Real Estate Groups",
  "Technology Partners",
];

const WHY = [
  {
    title: "Large Addressable Market",
    body: "The alternative investment sector continues to expand globally across retail and institutional segments.",
  },
  {
    title: "Scalable Platform Model",
    body: "Designed to support expansion across multiple investment categories and jurisdictions.",
  },
  {
    title: "Low Entry Participation",
    body: "Investment opportunities starting from approximately USD 100 depending on product structure.",
  },
  {
    title: "Long-Term Expansion",
    body: "Roadmap includes additional markets, products, and institutional investment infrastructure.",
  },
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2
        className="text-[26px] leading-[32px]"
        style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 700 }}
      >
        {children}
      </h2>
      <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: GOLD }} />
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 bg-white h-full"
      style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
    >
      {children}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="block text-[12.5px] mb-1.5 tracking-wide"
        style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 600 }}
      >
        {label} {required && <span style={{ color: GOLD }}>*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl px-3.5 py-2.5 text-[14px] outline-none transition-colors bg-white";
const inputStyle = {
  border: `1px solid #D1D5DB`,
  color: TEXT,
  fontFamily: INTER,
  fontWeight: 400,
} as const;

export default function InvestorRelations() {
  const [form, setForm] = useState({
    inquiryType: INQUIRY_TYPES[0],
    fullName: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    engagementSize: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    setSubmitting(true);
    try {
      const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
      const res = await fetch(`${basePath}/api/ir-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || "Failed to send inquiry");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send inquiry");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ backgroundColor: BG, fontFamily: INTER }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-14">
          <h1
            className="text-[40px] leading-[48px] mb-3"
            style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 700 }}
          >
            Investor Relations
          </h1>
          <p
            className="text-[18px] leading-[26px] mb-6"
            style={{ color: TEXT, fontWeight: 500 }}
          >
            Building the Future of Global Alternative Investments
          </p>
          <div className="h-[3px] w-20 mb-8" style={{ backgroundColor: GOLD }} />
          <div className="space-y-4 max-w-3xl">
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              SliceRaiser is developing a next-generation investment platform designed to expand access to real estate, equity, and fixed-income opportunities through a scalable digital investment ecosystem.
            </p>
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              The platform is being structured to support retail, professional, and institutional participation across multiple jurisdictions through a phased regulatory and operational expansion strategy.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METRICS.map((m) => (
              <div key={m.label}>
                <Card>
                  <div
                    className="text-[12px] tracking-[0.14em] uppercase mb-2"
                    style={{ color: GOLD, fontWeight: 700 }}
                  >
                    {m.label}
                  </div>
                  <div
                    className="text-[20px] leading-[26px]"
                    style={{ color: PRIMARY, fontWeight: 700 }}
                  >
                    {m.value}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <H2>Our Vision</H2>
          <div className="space-y-4 max-w-3xl">
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              To become a globally recognized investment infrastructure platform connecting investors with high-quality opportunities across real assets, income-generating investments, and growth-focused ventures.
            </p>
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              SliceRaiser is designed to simplify access, improve transparency, and support scalable investment participation starting from low entry points while maintaining institutional-level operational standards.
            </p>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="mb-16">
          <H2>Market Opportunity</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <div
                className="text-[14px] mb-3"
                style={{ color: PRIMARY, fontWeight: 700 }}
              >
                Global demand growing in:
              </div>
              <ul className="space-y-2">
                {[
                  "Real estate fractional ownership",
                  "Private market access",
                  "Fixed-income alternatives",
                  "Cross-border investment participation",
                  "Digitized investment infrastructure",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-2 text-[14px] leading-[22px]"
                    style={{ color: TEXT, fontWeight: 400 }}
                  >
                    <span style={{ color: GOLD }}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <div
                className="text-[14px] mb-3"
                style={{ color: PRIMARY, fontWeight: 700 }}
              >
                Traditional access limited by:
              </div>
              <ul className="space-y-2">
                {[
                  "High entry barriers",
                  "Geographic restrictions",
                  "Limited transparency",
                  "Operational complexity",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-2 text-[14px] leading-[22px]"
                    style={{ color: TEXT, fontWeight: 400 }}
                  >
                    <span style={{ color: GOLD }}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <p
            className="text-[15px] leading-[24px] max-w-3xl"
            style={{ color: TEXT, fontWeight: 400 }}
          >
            SliceRaiser aims to address these gaps through a unified investment platform designed for scalable global participation.
          </p>
        </section>

        {/* Investment Focus */}
        <section className="mb-16">
          <H2>Investment Focus</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FOCUS.map((f) => (
              <Card key={f.title}>
                <div
                  className="text-[16px] mb-3"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {f.title}
                </div>
                <ul className="space-y-2">
                  {f.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-2 text-[14px] leading-[22px]"
                      style={{ color: TEXT, fontWeight: 400 }}
                    >
                      <span style={{ color: GOLD }}>•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Growth Strategy */}
        <section className="mb-16">
          <H2>Growth Strategy</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PHASES.map((p) => (
              <Card key={p.phase}>
                <div
                  className="text-[12px] tracking-[0.14em] uppercase mb-1"
                  style={{ color: GOLD, fontWeight: 700 }}
                >
                  {p.phase}
                </div>
                <div
                  className="text-[18px] mb-3"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {p.title}
                </div>
                <ul className="space-y-2">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-2 text-[14px] leading-[22px]"
                      style={{ color: TEXT, fontWeight: 400 }}
                    >
                      <span style={{ color: GOLD }}>•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Investor Categories */}
        <section className="mb-16">
          <H2>Who We Work With</H2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="inline-block rounded-full px-4 py-2 text-[13px]"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${GOLD}`,
                  color: PRIMARY,
                  fontWeight: 600,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Why SliceRaiser */}
        <section className="mb-16">
          <H2>Why SliceRaiser</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY.map((w) => (
              <Card key={w.title}>
                <div
                  className="text-[16px] mb-2"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {w.title}
                </div>
                <p
                  className="text-[14px] leading-[22px]"
                  style={{ color: TEXT, fontWeight: 400 }}
                >
                  {w.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CEO Contact Card */}
        <section className="mb-16">
          <H2>Connect With Our Team</H2>
          <div
            className="rounded-2xl bg-white p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[20px] shrink-0"
              style={{ backgroundColor: PRIMARY, fontWeight: 700 }}
            >
              MA
            </div>
            <div className="flex-1">
              <div
                className="text-[18px]"
                style={{ color: PRIMARY, fontWeight: 700 }}
              >
                Mamoon Alkhatib
              </div>
              <div
                className="text-[14px]"
                style={{ color: TEXT, fontWeight: 400 }}
              >
                Founder and CEO — SliceRaiser
              </div>
              <a
                href="mailto:investors@sliceraiser.com"
                className="text-[13px] mt-1 inline-block hover:underline"
                style={{ color: PRIMARY, fontWeight: 600 }}
              >
                investors@sliceraiser.com
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/mamoon-alkhatib-77541639/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13px] px-5 py-2.5 rounded-xl transition-colors"
                style={{
                  border: `1.5px solid ${PRIMARY}`,
                  color: PRIMARY,
                  fontWeight: 600,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = GOLD;
                  e.currentTarget.style.borderColor = GOLD;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = PRIMARY;
                  e.currentTarget.style.color = PRIMARY;
                }}
              >
                LinkedIn
              </a>
              <Link
                href="/contact"
                className="inline-block text-white text-[13px] px-5 py-2.5 rounded-xl transition-colors"
                style={{ backgroundColor: PRIMARY, fontWeight: 600 }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY)}
              >
                Request a Meeting
              </Link>
            </div>
          </div>
        </section>

        {/* Smart Inquiry Form */}
        <section className="mb-12">
          <H2>Submit an Inquiry</H2>
          <p
            className="text-[14px] mb-6 max-w-3xl"
            style={{ color: TEXT, fontWeight: 400 }}
          >
            Please select your inquiry type so we can direct your message correctly.
          </p>

          {done ? (
            <div
              className="rounded-2xl bg-white p-8 text-center"
              style={{ border: `1px solid ${GOLD}`, borderTop: `3px solid ${GOLD}` }}
            >
              <div
                className="text-[20px] mb-2"
                style={{ color: PRIMARY, fontWeight: 700 }}
              >
                Thank you — your inquiry has been sent.
              </div>
              <p style={{ color: TEXT, fontWeight: 400 }} className="text-[14px]">
                Our team will get back to you shortly at the email you provided.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-white p-6 sm:p-8 space-y-5"
              style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
            >
              <Field label="Inquiry type" required>
                <select
                  className={inputClass}
                  style={inputStyle}
                  value={form.inquiryType}
                  onChange={(e) => update("inquiryType", e.target.value)}
                  required
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full name" required>
                  <input
                    className={inputClass}
                    style={inputStyle}
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    required
                  />
                </Field>
                <Field label="Organization or fund name">
                  <input
                    className={inputClass}
                    style={inputStyle}
                    value={form.organization}
                    onChange={(e) => update("organization", e.target.value)}
                  />
                </Field>
                <Field label="Your role or title">
                  <input
                    className={inputClass}
                    style={inputStyle}
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                  />
                </Field>
                <Field label="Email address" required>
                  <input
                    type="email"
                    className={inputClass}
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </Field>
                <Field label="Phone number with country code">
                  <input
                    className={inputClass}
                    style={inputStyle}
                    placeholder="+971 50 000 0000"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </Field>
                <Field label="Estimated engagement size">
                  <select
                    className={inputClass}
                    style={inputStyle}
                    value={form.engagementSize}
                    onChange={(e) => update("engagementSize", e.target.value)}
                  >
                    <option value="">Select…</option>
                    {ENGAGEMENT_SIZES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  rows={5}
                  className={inputClass}
                  style={inputStyle}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </Field>

              {error && (
                <div
                  className="rounded-xl px-4 py-3 text-[13px]"
                  style={{
                    backgroundColor: "#FEF2F2",
                    border: "1px solid #FECACA",
                    color: "#991B1B",
                    fontWeight: 500,
                  }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="text-white text-[14px] px-6 py-3 rounded-xl transition-colors disabled:opacity-60"
                style={{ backgroundColor: PRIMARY, fontWeight: 600 }}
                onMouseEnter={(e) => {
                  if (!submitting) e.currentTarget.style.backgroundColor = GOLD;
                }}
                onMouseLeave={(e) => {
                  if (!submitting) e.currentTarget.style.backgroundColor = PRIMARY;
                }}
              >
                {submitting ? "Sending…" : "Send Inquiry"}
              </button>
            </form>
          )}
        </section>

        <p
          className="text-[12px] leading-[20px] max-w-3xl"
          style={{ color: MUTED, fontWeight: 400 }}
        >
          This page is for informational purposes only and does not constitute an offer or solicitation to buy or sell securities in any jurisdiction. SliceRaiser is currently in development phase. All projections are targets only and not guaranteed.
        </p>
      </div>
    </div>
  );
}
