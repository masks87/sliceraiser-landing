import { Link } from "wouter";

const ROYAL_BLUE = "#1E3A8A";
const GOLD = "#D4AF37";
const SOFT_WHITE = "#F8F9FA";
const CHARCOAL = "#2C2C2C";

const steps = [
  {
    title: "Explore Opportunities",
    text: "Browse selected opportunities across property, equity and fixed income. Each opportunity is presented with key information to help users understand the category, structure, market and available details before taking the next step.",
  },
  {
    title: "Create Your Account",
    text: "Create a SliceRaiser account to access a more complete platform experience, save opportunities and begin your investment journey through one secure digital platform.",
  },
  {
    title: "Complete Onboarding",
    text: "Users may be asked to complete onboarding steps such as identity details, contact information and required declarations before participating in available opportunities.",
  },
  {
    title: "Review the Opportunity",
    text: "Before making any decision, users can review the opportunity details, documents, risks, timeline and investment structure. SliceRaiser is built to make this information easier to access and understand.",
  },
  {
    title: "Start from USD 100",
    text: "SliceRaiser is designed to make investment participation more accessible, with opportunities starting from USD 100 where available.",
  },
  {
    title: "Track Your Dashboard",
    text: "After participation, users can track activity through their dashboard, including investment status, updates, documents, portfolio overview and distributions where applicable.",
  },
  {
    title: "Receive Updates",
    text: "SliceRaiser aims to keep users informed with updates on opportunity progress, project milestones, reporting and relevant platform notifications.",
  },
  {
    title: "Continue or Exit",
    text: "Depending on the structure of each opportunity, users may continue holding, receive distributions where applicable or follow the exit process described in the opportunity documents.",
  },
];

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: SOFT_WHITE, fontFamily: "'Inter', sans-serif" }}>

      {/* Hero */}
      <section
        style={{ backgroundColor: ROYAL_BLUE, paddingTop: "80px", paddingBottom: "80px" }}
        className="px-6 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-white text-center mb-4"
            style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1.15 }}
          >
            How It Works
          </h1>
          <p
            className="text-white text-center"
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.6, opacity: 0.95 }}
          >
            A simple journey to explore property, equity and fixed income opportunities through SliceRaiser.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-6" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-base leading-relaxed text-center"
            style={{ color: CHARCOAL, fontFamily: "'Roboto', 'Inter', sans-serif" }}
          >
            SliceRaiser is designed to make investment access clearer, more structured and easier to understand. From exploring opportunities to tracking your dashboard, the platform gives users one digital path to discover selected investment opportunities and become part of the SliceRaiser investment lifestyle.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section
        className="px-6"
        style={{ backgroundColor: SOFT_WHITE, paddingTop: "48px", paddingBottom: "48px" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-7 shadow-sm flex gap-5"
              style={{ borderLeft: `4px solid ${GOLD}` }}
            >
              <div
                className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: ROYAL_BLUE, fontSize: "16px" }}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <h3
                  className="font-bold mb-2"
                  style={{ color: ROYAL_BLUE, fontSize: "18px" }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: CHARCOAL,
                    fontSize: "14px",
                    fontFamily: "'Roboto', 'Inter', sans-serif",
                  }}
                >
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{ paddingTop: "48px", paddingBottom: "48px" }}
        className="px-6 text-center bg-gradient-to-r from-[#D4AF37] to-[#1E3A8A]"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Built for the SliceRaiser Investment Lifestyle
          </h2>
          <p className="text-base text-white/95 leading-relaxed mb-8">
            SliceRaiser is more than a platform to browse opportunities. It is a modern investment lifestyle built around access, participation, ownership mindset and long term value creation.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: "16px" }}
          >
            <Link
              href="/properties"
              className="inline-block text-sm font-semibold transition-colors hover:opacity-90"
              style={{
                backgroundColor: "#ffffff",
                color: ROYAL_BLUE,
                border: "none",
                padding: "12px 32px",
                borderRadius: "8px",
              }}
            >
              Explore Investments
            </Link>
            <Link
              href="/contact"
              className="inline-block text-sm font-semibold transition-colors hover:bg-white/10"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #ffffff",
                color: "#ffffff",
                padding: "12px 32px",
                borderRadius: "8px",
              }}
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
