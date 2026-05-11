import { useMemo, useState } from "react";
import { Link } from "wouter";

type QA = { q: string; a: string };
type Category = { title: string; items: QA[] };

const CATEGORIES: Category[] = [
  {
    title: "Getting Started",
    items: [
      {
        q: "What is SliceRaiser?",
        a: "SliceRaiser is a regulated fractional investment platform that gives everyone access to premium real estate and SME investment opportunities starting from just $100. We connect investors worldwide with real asset opportunities located in UAE and Australia.",
      },
      {
        q: "Who can invest on SliceRaiser?",
        a: "Anyone over 18 years old from anywhere in the world can register and invest, subject to identity verification and eligibility under the laws of their country of residence. We welcome both individual and corporate investors.",
      },
      {
        q: "How do I get started?",
        a: "Sign up using your email or social account, complete your identity verification, fund your wallet, and start browsing available opportunities. The whole process takes minutes.",
      },
      {
        q: "What types of investments are available?",
        a: "Currently SliceRaiser offers fractional real estate investments including residential and commercial properties. SME equity and fixed income opportunities are coming in future phases.",
      },
    ],
  },
  {
    title: "Investment Process",
    items: [
      {
        q: "What is the minimum investment?",
        a: "You can start investing from just USD 100 per opportunity.",
      },
      {
        q: "How does fractional investment work?",
        a: "Each property is held through a Special Purpose Vehicle (SPV). Investors purchase fractional shares of the SPV giving them proportional ownership of the property, rental income, and capital appreciation without the complexity of direct ownership.",
      },
      {
        q: "Why does SliceRaiser use SPVs?",
        a: "SPVs allow multiple investors to co-own a single property legally and efficiently. Each property has its own SPV managed by SliceRaiser ensuring clear ownership records, regulatory compliance, and proper governance.",
      },
      {
        q: "Can I invest in multiple opportunities?",
        a: "Yes. Diversifying across multiple properties and opportunities is encouraged and easy to do through your SliceRaiser portfolio dashboard.",
      },
      {
        q: "How do I monitor my investments?",
        a: "Your dashboard shows real-time performance of all your investments including current value, returns earned, and upcoming distributions.",
      },
    ],
  },
  {
    title: "Returns",
    items: [
      {
        q: "What returns can I expect?",
        a: "Returns vary by opportunity and are clearly shown on each listing before you invest. Returns may come from rental income, capital appreciation, or both depending on the property type.",
      },
      {
        q: "How are returns paid?",
        a: "Returns are credited to your SliceRaiser wallet. You can withdraw to your bank account or reinvest into new opportunities. Distribution frequency is monthly or quarterly depending on the deal.",
      },
      {
        q: "Are the returns shown net of fees?",
        a: "Yes. All returns displayed on our platform are net of applicable fees. There are no hidden charges.",
      },
    ],
  },
  {
    title: "Fees",
    items: [
      {
        q: "What are SliceRaiser fees?",
        a: "SliceRaiser charges a platform management fee on each investment. All fees are deducted before returns are shown — what you see is what you get. Full fee details are shown on each opportunity page before you invest.",
      },
    ],
  },
  {
    title: "Security and Regulation",
    items: [
      {
        q: "Is SliceRaiser regulated?",
        a: "Yes. SliceRaiser operates under applicable European regulatory frameworks designed to protect investors and ensure full compliance with financial regulations.",
      },
      {
        q: "How are my funds protected?",
        a: "Investor funds are held in segregated accounts separate from SliceRaiser operational funds. This ensures your capital is protected and cannot be used for company operations.",
      },
      {
        q: "What documents do I need to register?",
        a: "You will need a valid passport or national ID, proof of address, and basic information about your source of funds as part of our KYC compliance process.",
      },
    ],
  },
  {
    title: "Account and Wallet",
    items: [
      {
        q: "How do I fund my wallet?",
        a: "You can deposit via bank transfer or debit and credit card including Visa, Mastercard, and Apple Pay.",
      },
      {
        q: "What currency does SliceRaiser use?",
        a: "SliceRaiser operates primarily in USD.",
      },
      {
        q: "How do I withdraw my money?",
        a: "You can withdraw your available wallet balance to your registered bank account at any time. Processing times depend on your bank.",
      },
    ],
  },
  {
    title: "Contingency",
    items: [
      {
        q: "What happens if SliceRaiser ceases operations?",
        a: "In the unlikely event SliceRaiser cannot continue operating, all investors are immediately notified by email. Investors then vote on whether to retain or liquidate their property holdings. If the majority votes to retain — a pre-defined Property Asset Manager takes over and continues income distributions. If the majority votes to liquidate — the property is sold and proceeds returned to investors proportionally after costs.",
      },
    ],
  },
  {
    title: "Contact and Support",
    items: [
      {
        q: "How do I contact SliceRaiser?",
        a: "Visit our Contact page at sliceraiser.com/contact or email contact@sliceraiser.com. Live chat is also available on our website.",
      },
      {
        q: "How do I submit a complaint?",
        a: "Use our Contact page and select Complaint or Support from the inquiry type dropdown. We aim to respond within 2 business days.",
      },
    ],
  },
];

const BRAND = {
  bg: "#F8F9FA",
  primary: "#1E3A8A",
  gold: "#D4AF37",
  text: "#2C2C2C",
  inter: "'Plus Jakarta Sans', sans-serif",
};

function AccordionItem({
  qa,
  isOpen,
  onToggle,
}: {
  qa: QA;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(30, 58, 138, 0.12)" }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left py-5 gap-4 focus:outline-none"
        style={{ background: "transparent" }}
      >
        <span
          className="text-[16px] leading-[24px]"
          style={{ color: BRAND.primary, fontFamily: BRAND.inter, fontWeight: 600 }}
        >
          {qa.q}
        </span>
        <span
          className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-300"
          style={{
            backgroundColor: isOpen ? BRAND.gold : "transparent",
            border: `1.5px solid ${isOpen ? BRAND.gold : BRAND.primary}`,
            color: isOpen ? "#ffffff" : BRAND.primary,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-5 pr-10 text-[15px] leading-[24px]"
            style={{ color: BRAND.text, fontFamily: BRAND.inter, fontWeight: 400 }}
          >
            {qa.a}
          </p>
        </div>
      </div>
    </div>
  );
}

function openChatWidget() {
  const ev = new CustomEvent("sliceraiser:open-chat", { cancelable: true });
  const handled = !window.dispatchEvent(ev);
  if (!handled) {
    window.location.href = "mailto:contact@sliceraiser.com?subject=SliceRaiser%20Live%20Chat";
  }
}

export default function Faq() {
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  return (
    <div style={{ backgroundColor: BRAND.bg }}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1
          className="text-[34px] leading-[40px] mb-3"
          style={{ color: BRAND.primary, fontFamily: BRAND.inter, fontWeight: 700 }}
        >
          Frequently Asked Questions
        </h1>
        <p
          className="text-[15px] leading-[24px] mb-8"
          style={{ color: BRAND.text, fontFamily: BRAND.inter, fontWeight: 400 }}
        >
          Everything you need to know about investing with SliceRaiser
        </p>

        <div
          className="flex items-center gap-3 mb-12 px-4 py-3 rounded-xl bg-white"
          style={{ border: `1px solid ${BRAND.gold}` }}
        >
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            stroke={BRAND.primary}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            aria-label="Search FAQ"
            className="w-full bg-transparent outline-none text-[14px]"
            style={{ color: BRAND.text, fontFamily: BRAND.inter, fontWeight: 400 }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[12px] hover:underline shrink-0"
              style={{ color: BRAND.primary, fontFamily: BRAND.inter, fontWeight: 600 }}
            >
              Clear
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <p
            className="text-[15px] py-12 text-center"
            style={{ color: BRAND.text, fontFamily: BRAND.inter, fontWeight: 400 }}
          >
            No questions match your search.
          </p>
        ) : (
          filtered.map((cat) => (
            <section key={cat.title} className="mb-10">
              <h2
                className="text-[14px] tracking-[0.18em] uppercase mb-4"
                style={{ color: BRAND.gold, fontFamily: BRAND.inter, fontWeight: 700 }}
              >
                {cat.title}
              </h2>
              <div>
                {cat.items.map((qa) => {
                  const key = `${cat.title}::${qa.q}`;
                  return (
                    <AccordionItem
                      key={key}
                      qa={qa}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>
            </section>
          ))
        )}

        <div
          className="mt-16 rounded-2xl p-10 text-center"
          style={{ backgroundColor: "#ffffff", border: `1px solid ${BRAND.gold}` }}
        >
          <h2
            className="text-[22px] leading-[28px] mb-2"
            style={{ color: BRAND.primary, fontFamily: BRAND.inter, fontWeight: 700 }}
          >
            Still have questions?
          </h2>
          <p
            className="text-[15px] leading-[24px] mb-6"
            style={{ color: BRAND.text, fontFamily: BRAND.inter, fontWeight: 400 }}
          >
            Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block text-white text-[14px] px-6 py-3 rounded-[14px] transition-colors"
              style={{ backgroundColor: BRAND.primary, fontFamily: BRAND.inter, fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND.primary)}
            >
              Contact Us
            </Link>
            <button
              type="button"
              onClick={openChatWidget}
              className="text-[14px] px-6 py-3 rounded-[14px] transition-colors"
              style={{
                backgroundColor: "transparent",
                border: `1.5px solid ${BRAND.primary}`,
                color: BRAND.primary,
                fontFamily: BRAND.inter,
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = BRAND.gold;
                e.currentTarget.style.borderColor = BRAND.gold;
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = BRAND.primary;
                e.currentTarget.style.color = BRAND.primary;
              }}
            >
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
