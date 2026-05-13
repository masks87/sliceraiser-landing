import { Link } from "wouter";
import {
  Briefcase,
  Calculator,
  Users,
  Code,
  ShieldCheck,
  Megaphone,
  Settings,
  type LucideIcon,
} from "lucide-react";

const ROYAL = "#1E3A8A";
const GOLD = "#D4AF37";
const SOFT = "#F8F9FA";
const CHARCOAL = "#2C2C2C";

const lookingFor: string[] = [
  "Take ownership without waiting for constant instructions",
  "Communicate clearly and professionally",
  "Work with accuracy and attention to detail",
  "Understand the responsibility of working around investment products",
  "Respect compliance, documentation and process",
  "Build systems that can scale across markets",
];

const departments: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Briefcase,
    title: "Investment and Portfolio Management",
    text: "Portfolio managers, investment analysts and asset managers who can review opportunities, monitor performance, support portfolio reporting and help structure investor focused updates.",
  },
  {
    Icon: Calculator,
    title: "Finance and Financial Control",
    text: "Financial controllers, accountants and reporting specialists who can manage financial models, budgets, fee logic, SPV cost tracking, investor reporting and internal financial controls.",
  },
  {
    Icon: Users,
    title: "Sales and Account Management",
    text: "Sales managers and account managers who can build relationships with investors, sponsors, partners and enterprise clients while maintaining a professional and compliant communication process.",
  },
  {
    Icon: Code,
    title: "Technology and Product",
    text: "Developers, product managers, UI and UX designers, QA testers and technical leads who can build a secure, scalable and user friendly investment platform.",
  },
  {
    Icon: ShieldCheck,
    title: "Legal and Compliance",
    text: "Compliance officers, legal coordinators, onboarding reviewers and regulatory support specialists who can help manage documentation, controls, investor onboarding and internal review processes.",
  },
  {
    Icon: Megaphone,
    title: "Marketing and Growth",
    text: "Marketing managers, content creators, social media specialists and growth professionals who can help build the SliceRaiser brand, investor education and market awareness.",
  },
  {
    Icon: Settings,
    title: "Operations and Administration",
    text: "Operations managers, HR coordinators, administration executives and customer support officers who can support daily execution, communication, documentation and internal coordination.",
  },
];

const priorityRoles: { title: string; text: string }[] = [
  { title: "Financial Controller", text: "Responsible for financial planning, budgets, reporting, fee analysis, SPV cost tracking and internal financial controls." },
  { title: "Portfolio Manager", text: "Responsible for monitoring investment opportunities, portfolio performance, investor updates and asset level reporting." },
  { title: "Sales Manager", text: "Responsible for investor acquisition, sponsor relationships, sales pipeline development and partnership follow up." },
  { title: "Account Manager", text: "Responsible for managing investor and partner relationships, supporting inquiries and ensuring a professional client experience." },
  { title: "Business Development Manager", text: "Responsible for identifying strategic partners, sponsors, market opportunities and enterprise relationships." },
  { title: "Compliance Officer", text: "Responsible for supporting onboarding checks, compliance documentation, internal policies and risk review processes." },
  { title: "Frontend Developer", text: "Responsible for building and improving the user interface, investor journey and platform experience." },
  { title: "Backend Developer", text: "Responsible for APIs, database logic, security, integrations and platform infrastructure." },
];

const whyWork: { title: string; text: string }[] = [
  { title: "Build Early", text: "Join at an early stage and help shape the platform, culture and operating structure." },
  { title: "Think Global", text: "Work on a platform designed for selected international market expansion." },
  { title: "Own Your Work", text: "Take responsibility for execution, quality and results." },
  { title: "Grow With Us", text: "Join a business built around technology, investment and long term value creation." },
];

export default function Careers() {
  return (
    <div style={{ backgroundColor: SOFT, fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section
        className="px-6 text-center"
        style={{ backgroundColor: ROYAL, paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-white mb-4"
            style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1.15 }}
          >
            Careers at SliceRaiser
          </h1>
          <p
            className="text-white"
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.6, opacity: 0.95 }}
          >
            Join the team building a new investment platform for property, equity and fixed income opportunities.
          </p>
        </div>
      </section>

      {/* Hero paragraphs */}
      <section className="bg-white px-6" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-base leading-relaxed" style={{ color: CHARCOAL }}>
            SliceRaiser is building a global investment platform designed to connect users with selected opportunities across property, equity and fixed income. We are looking for people who want to help build a serious financial technology company with strong execution, clear thinking and long term ambition.
          </p>
          <p className="text-base leading-relaxed" style={{ color: CHARCOAL }}>
            We are not looking for people who only want a job title. We are looking for builders, operators and specialists who can help turn SliceRaiser from a platform vision into a trusted investment ecosystem.
          </p>
        </div>
      </section>

      {/* Build Something Meaningful */}
      <section className="px-6" style={{ backgroundColor: SOFT, paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: ROYAL }}>
            Build Something Meaningful
          </h2>
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: CHARCOAL }}>
              SliceRaiser is being developed around a clear mission: make access to selected investment opportunities more structured, transparent and digital. Our team will work across technology, investments, compliance, operations, marketing, partnerships and customer experience.
            </p>
            <p className="text-base leading-relaxed" style={{ color: CHARCOAL }}>
              This is an early stage environment. The work is demanding, the standards are high and every person must take ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Looking For */}
      <section className="bg-white px-6" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: ROYAL }}>
            Who We Are Looking For
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: CHARCOAL }}>
            We are looking for professionals who are practical, disciplined and comfortable working in a fast moving environment.
          </p>
          <ul className="space-y-3">
            {lookingFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-2 inline-block rounded-full"
                  style={{ width: 8, height: 8, backgroundColor: GOLD }}
                  aria-hidden
                />
                <span className="text-base leading-relaxed" style={{ color: CHARCOAL }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Current and Future Departments */}
      <section className="px-6" style={{ backgroundColor: SOFT, paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ROYAL }}>
            Current and Future Departments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: SOFT }}
                >
                  <d.Icon className="w-5 h-5" style={{ color: ROYAL }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: ROYAL, fontSize: 17 }}>
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: CHARCOAL }}>
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Roles */}
      <section className="bg-white px-6" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ROYAL }}>
            Priority Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {priorityRoles.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl p-6 border h-full flex flex-col"
                style={{ backgroundColor: SOFT, borderColor: "#E5E7EB" }}
              >
                <div
                  className="h-1 w-10 rounded-full mb-4"
                  style={{ backgroundColor: GOLD }}
                  aria-hidden
                />
                <h3 className="font-semibold mb-2" style={{ color: ROYAL, fontSize: 16 }}>
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: CHARCOAL }}>
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With SliceRaiser */}
      <section className="px-6" style={{ backgroundColor: SOFT, paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ROYAL }}>
            Why Work With SliceRaiser
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyWork.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full"
              >
                <h3 className="font-semibold mb-2" style={{ color: ROYAL, fontSize: 17 }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: CHARCOAL }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-white px-6" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: ROYAL }}>
            Our Culture
          </h2>
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: CHARCOAL }}>
              SliceRaiser culture is built around discipline, trust and execution. We value people who are direct, honest and able to solve problems without creating unnecessary complexity.
            </p>
            <p className="text-base leading-relaxed" style={{ color: CHARCOAL }}>
              We expect every team member to care about quality. In a financial technology business, small errors can create large problems. That is why we value accuracy, documentation and professional communication.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="px-6" style={{ backgroundColor: SOFT, paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: ROYAL }}>
            How to Apply
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: CHARCOAL }}>
            If you are interested in joining SliceRaiser, send your profile and a short message explaining how you can contribute.
          </p>
          <a
            href="mailto:careers@sliceraiser.com"
            className="inline-block font-semibold underline"
            style={{ color: ROYAL }}
          >
            careers@sliceraiser.com
          </a>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 text-center"
        style={{ backgroundColor: ROYAL, paddingTop: "64px", paddingBottom: "64px" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-white mb-4"
            style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2 }}
          >
            Ready to Build With Us?
          </h2>
          <p
            className="text-white mb-8"
            style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.95 }}
          >
            If you want to be part of a platform built around investment access, technology and long term growth, we would like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-colors"
              style={{ backgroundColor: GOLD, color: CHARCOAL }}
            >
              Contact Our Team
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Explore SliceRaiser
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
