import { Link } from "wouter";

const BG = "#F8F9FA";
const PRIMARY = "#1E3A8A";
const TEXT = "#2C2C2C";
const GOLD = "#D4AF37";
const INTER = "'Inter', sans-serif";

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

export default function HowItWorks() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: INTER }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-14">
          <h1
            className="text-[40px] leading-[48px] mb-3"
            style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 700 }}
          >
            How It Works
          </h1>
          <p
            className="text-[18px] leading-[26px] mb-6"
            style={{ color: TEXT, fontWeight: 500 }}
          >
            A simple journey to explore property, equity and fixed income opportunities through SliceRaiser.
          </p>
          <div className="h-[3px] w-20 mb-8" style={{ backgroundColor: GOLD }} />
          <div className="max-w-3xl">
            <p
              style={{ color: TEXT, fontWeight: 400 }}
              className="text-[15px] leading-[24px]"
            >
              SliceRaiser is designed to make investment access clearer, more structured and easier to understand. From exploring opportunities to tracking your dashboard, the platform gives users one digital path to discover selected investment opportunities and become part of the SliceRaiser investment lifestyle.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-16">
          <H2>Your Journey</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl p-6 bg-white h-full flex gap-4"
                style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: PRIMARY, fontWeight: 700, fontSize: 14 }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div
                    className="text-[16px] mb-2"
                    style={{ color: PRIMARY, fontWeight: 700 }}
                  >
                    {step.title}
                  </div>
                  <p
                    className="text-[14px] leading-[22px]"
                    style={{ color: TEXT, fontWeight: 400 }}
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <H2>Built for the SliceRaiser Investment Lifestyle</H2>
          <div
            className="rounded-2xl bg-white p-8 flex flex-col sm:flex-row sm:items-center gap-6"
            style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
          >
            <div className="flex-1">
              <p
                className="text-[15px] leading-[24px]"
                style={{ color: TEXT, fontWeight: 400 }}
              >
                SliceRaiser is more than a platform to browse opportunities. It is a modern investment lifestyle built around access, participation, ownership mindset and long term value creation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center text-white text-[14px] px-6 py-3 rounded-xl transition-colors"
                style={{ backgroundColor: PRIMARY, fontWeight: 600 }}
              >
                Explore Investments
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[14px] px-6 py-3 rounded-xl transition-colors"
                style={{ border: `1.5px solid ${PRIMARY}`, color: PRIMARY, fontWeight: 600 }}
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
