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

const BG = "#F8F9FA";
const PRIMARY = "#1E3A8A";
const TEXT = "#2C2C2C";
const GOLD = "#D4AF37";
const INTER = "'Inter', sans-serif";

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

export default function Careers() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: INTER }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-14">
          <h1
            className="text-[40px] leading-[48px] mb-3"
            style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 700 }}
          >
            Careers at SliceRaiser
          </h1>
          <p
            className="text-[18px] leading-[26px] mb-6"
            style={{ color: TEXT, fontWeight: 500 }}
          >
            Join the team building a new investment platform for property, equity and fixed income opportunities.
          </p>
          <div className="h-[3px] w-20 mb-8" style={{ backgroundColor: GOLD }} />
          <div className="space-y-4 max-w-3xl">
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              SliceRaiser is building a global investment platform designed to connect users with selected opportunities across property, equity and fixed income. We are looking for people who want to help build a serious financial technology company with strong execution, clear thinking and long term ambition.
            </p>
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              We are not looking for people who only want a job title. We are looking for builders, operators and specialists who can help turn SliceRaiser from a platform vision into a trusted investment ecosystem.
            </p>
          </div>
        </section>

        {/* Build Something Meaningful */}
        <section className="mb-16">
          <H2>Build Something Meaningful</H2>
          <div className="space-y-4 max-w-3xl">
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              SliceRaiser is being developed around a clear mission: make access to selected investment opportunities more structured, transparent and digital. Our team will work across technology, investments, compliance, operations, marketing, partnerships and customer experience.
            </p>
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              This is an early stage environment. The work is demanding, the standards are high and every person must take ownership.
            </p>
          </div>
        </section>

        {/* Who We Are Looking For */}
        <section className="mb-16">
          <H2>Who We Are Looking For</H2>
          <p
            className="text-[15px] leading-[24px] mb-6 max-w-3xl"
            style={{ color: TEXT, fontWeight: 400 }}
          >
            We are looking for professionals who are practical, disciplined and comfortable working in a fast moving environment.
          </p>
          <Card>
            <ul className="space-y-2">
              {lookingFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-[14px] leading-[22px]"
                  style={{ color: TEXT, fontWeight: 400 }}
                >
                  <span style={{ color: GOLD }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Departments */}
        <section className="mb-16">
          <H2>Current and Future Departments</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((d) => (
              <Card key={d.title}>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: BG }}
                >
                  <d.Icon className="w-5 h-5" style={{ color: PRIMARY }} />
                </div>
                <div
                  className="text-[16px] mb-2"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {d.title}
                </div>
                <p
                  className="text-[14px] leading-[22px]"
                  style={{ color: TEXT, fontWeight: 400 }}
                >
                  {d.text}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Priority Roles */}
        <section className="mb-16">
          <H2>Priority Roles</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {priorityRoles.map((r) => (
              <Card key={r.title}>
                <div
                  className="text-[16px] mb-2"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {r.title}
                </div>
                <p
                  className="text-[14px] leading-[22px]"
                  style={{ color: TEXT, fontWeight: 400 }}
                >
                  {r.text}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Work With SliceRaiser */}
        <section className="mb-16">
          <H2>Why Work With SliceRaiser</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyWork.map((c) => (
              <Card key={c.title}>
                <div
                  className="text-[16px] mb-2"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {c.title}
                </div>
                <p
                  className="text-[14px] leading-[22px]"
                  style={{ color: TEXT, fontWeight: 400 }}
                >
                  {c.text}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Culture */}
        <section className="mb-16">
          <H2>Our Culture</H2>
          <div className="space-y-4 max-w-3xl">
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              SliceRaiser culture is built around discipline, trust and execution. We value people who are direct, honest and able to solve problems without creating unnecessary complexity.
            </p>
            <p style={{ color: TEXT, fontWeight: 400 }} className="text-[15px] leading-[24px]">
              We expect every team member to care about quality. In a financial technology business, small errors can create large problems. That is why we value accuracy, documentation and professional communication.
            </p>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <H2>How to Apply</H2>
          <Card>
            <p
              className="text-[15px] leading-[24px] mb-3"
              style={{ color: TEXT, fontWeight: 400 }}
            >
              If you are interested in joining SliceRaiser, send your profile and a short message explaining how you can contribute.
            </p>
            <a
              href="mailto:careers@sliceraiser.com"
              className="font-semibold hover:underline break-words"
              style={{ color: PRIMARY }}
            >
              careers@sliceraiser.com
            </a>
          </Card>
        </section>

        {/* CTA */}
        <section>
          <H2>Ready to Build With Us?</H2>
          <div
            className="rounded-2xl bg-white p-8 flex flex-col sm:flex-row sm:items-center gap-6"
            style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
          >
            <div className="flex-1">
              <p
                className="text-[15px] leading-[24px]"
                style={{ color: TEXT, fontWeight: 400 }}
              >
                If you want to be part of a platform built around investment access, technology and long term growth, we would like to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-white text-[14px] px-6 py-3 rounded-xl transition-colors"
                style={{ backgroundColor: PRIMARY, fontWeight: 600 }}
              >
                Contact Our Team
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center text-[14px] px-6 py-3 rounded-xl transition-colors"
                style={{ border: `1.5px solid ${PRIMARY}`, color: PRIMARY, fontWeight: 600 }}
              >
                Explore SliceRaiser
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
