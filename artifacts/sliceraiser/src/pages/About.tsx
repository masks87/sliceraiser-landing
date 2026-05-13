import { Link } from "wouter";
import { aboutPage } from "@/config/siteSettings";

const BG = "#F8F9FA";
const PRIMARY = "#1E3A8A";
const TEXT = "#2C2C2C";
const GOLD = "#D4AF37";
const INTER = "'Inter', sans-serif";

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

export default function About() {
  const { hero, whoWeAre, vision, mission, whyUs, team, markets, cta } = aboutPage;

  return (
    <div style={{ backgroundColor: BG, fontFamily: INTER }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-14">
          <h1
            className="text-[40px] leading-[48px] mb-3"
            style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 700 }}
          >
            {hero.title}
          </h1>
          <p
            className="text-[18px] leading-[26px] mb-6"
            style={{ color: TEXT, fontWeight: 500 }}
          >
            {hero.subtitle}
          </p>
          <div className="h-[3px] w-20" style={{ backgroundColor: GOLD }} />
        </section>

        {/* Who We Are */}
        <section className="mb-16">
          <H2>{whoWeAre.heading}</H2>
          <div className="space-y-4 max-w-3xl">
            {whoWeAre.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-[24px]"
                style={{ color: TEXT, fontWeight: 400 }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <H2>Vision &amp; Mission</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card>
              <div
                className="text-[16px] mb-3"
                style={{ color: PRIMARY, fontWeight: 700 }}
              >
                {vision.heading}
              </div>
              <p
                className="text-[15px] leading-[24px]"
                style={{ color: TEXT, fontWeight: 400 }}
              >
                {vision.text}
              </p>
            </Card>
            <Card>
              <div
                className="text-[16px] mb-3"
                style={{ color: PRIMARY, fontWeight: 700 }}
              >
                {mission.heading}
              </div>
              <p
                className="text-[15px] leading-[24px]"
                style={{ color: TEXT, fontWeight: 400 }}
              >
                {mission.text}
              </p>
            </Card>
          </div>
        </section>

        {/* Why SliceRaiser */}
        <section className="mb-16">
          <H2>{whyUs.heading}</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.cards.map((card, i) => (
              <Card key={i}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: BG }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: GOLD }}
                  />
                </div>
                <div
                  className="text-[16px] mb-2"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {card.title}
                </div>
                <p
                  className="text-[14px] leading-[22px]"
                  style={{ color: TEXT, fontWeight: 400 }}
                >
                  {card.text}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <H2>{team.heading}</H2>
          <div className="space-y-5">
            {team.members.map((member, i) => (
              <div
                key={i}
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
                    {member.name}
                  </div>
                  <div
                    className="text-[14px] mb-2"
                    style={{ color: GOLD, fontWeight: 600 }}
                  >
                    {member.title}
                  </div>
                  <p
                    className="text-[14px] leading-[22px]"
                    style={{ color: TEXT, fontWeight: 400 }}
                  >
                    {member.bio}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-white text-[13px] px-5 py-2.5 rounded-xl transition-colors"
                    style={{ backgroundColor: PRIMARY, fontWeight: 600 }}
                  >
                    LinkedIn Profile
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center text-[13px] px-5 py-2.5 rounded-xl transition-colors"
                    style={{
                      border: `1.5px solid ${PRIMARY}`,
                      color: PRIMARY,
                      fontWeight: 600,
                      backgroundColor: "transparent",
                    }}
                  >
                    Request a Meeting
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Markets */}
        <section className="mb-16">
          <H2>{markets.heading}</H2>
          <p
            className="text-[15px] leading-[24px] mb-6 max-w-3xl"
            style={{ color: TEXT, fontWeight: 400 }}
          >
            {markets.text}
          </p>
          <div className="flex flex-wrap gap-2">
            {markets.list.map((item, i) => (
              <span
                key={i}
                className="inline-block rounded-full px-4 py-2 text-[13px]"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${GOLD}`,
                  color: PRIMARY,
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <H2>{cta.heading}</H2>
          <div
            className="rounded-2xl bg-white p-8 flex flex-col sm:flex-row sm:items-center gap-6"
            style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
          >
            <div className="flex-1">
              <p
                className="text-[15px] leading-[24px]"
                style={{ color: TEXT, fontWeight: 400 }}
              >
                {cta.text}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={cta.primaryLink}
                className="inline-flex items-center justify-center text-white text-[14px] px-6 py-3 rounded-xl transition-colors"
                style={{ backgroundColor: PRIMARY, fontWeight: 600 }}
              >
                {cta.primaryButton}
              </Link>
              <Link
                href={cta.secondaryLink}
                className="inline-flex items-center justify-center text-[14px] px-6 py-3 rounded-xl transition-colors"
                style={{
                  border: `1.5px solid ${PRIMARY}`,
                  color: PRIMARY,
                  fontWeight: 600,
                }}
              >
                {cta.secondaryButton}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
