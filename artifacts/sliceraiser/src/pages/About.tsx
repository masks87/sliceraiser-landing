import { Link } from "wouter";
import { aboutPage } from "@/config/siteSettings";

export default function About() {
  const { hero, whoWeAre, vision, mission, whyUs, team, markets, cta } = aboutPage;

  return (
    <div style={{ backgroundColor: "#F8F9FA", fontFamily: "'Inter', sans-serif" }}>

      {/* Section 1: Hero */}
      <section
        style={{ backgroundColor: "#1E3A8A" }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">{hero.title}</h1>
          <p className="text-lg text-white/85 leading-relaxed">{hero.subtitle}</p>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#1E3A8A" }}>
            {whoWeAre.heading}
          </h2>
          <div className="space-y-5">
            {whoWeAre.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "#2C2C2C" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Vision and Mission */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-2xl p-8"
            style={{ borderLeft: "4px solid #D4AF37" }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: "#1E3A8A" }}>
              {vision.heading}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#2C2C2C" }}>
              {vision.text}
            </p>
          </div>
          <div
            className="bg-white rounded-2xl p-8"
            style={{ borderLeft: "4px solid #D4AF37" }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: "#1E3A8A" }}>
              {mission.heading}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#2C2C2C" }}>
              {mission.text}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Why SliceRaiser */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#1E3A8A" }}>
            {whyUs.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUs.cards.map((card, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-7 shadow-sm">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#D4AF3720" }}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#D4AF37" }}
                  />
                </div>
                <h4 className="text-base font-semibold mb-2" style={{ color: "#1E3A8A" }}>
                  {card.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Team */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10" style={{ color: "#1E3A8A" }}>
            {team.heading}
          </h2>
          <div className="space-y-6">
            {team.members.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                  style={{ backgroundColor: "#1E3A8A" }}
                >
                  MA
                </div>
                <h4 className="text-xl font-bold mb-1" style={{ color: "#1E3A8A" }}>
                  {member.name}
                </h4>
                <p className="text-sm font-medium mb-4" style={{ color: "#D4AF37" }}>
                  {member.title}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6 max-w-lg mx-auto"
                  style={{ color: "#2C2C2C" }}
                >
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium px-5 py-2.5 rounded-lg border transition-colors hover:opacity-80"
                  style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}
                >
                  LinkedIn Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Markets */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#1E3A8A" }}>
            {markets.heading}
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#2C2C2C" }}>
            {markets.text}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {markets.list.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#1E3A8A15", color: "#1E3A8A" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section
        style={{ backgroundColor: "#1E3A8A" }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">{cta.heading}</h2>
          <p className="text-base text-white/85 leading-relaxed mb-8">{cta.text}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={cta.primaryLink}
              className="inline-block text-sm font-semibold px-7 py-3 rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: "#D4AF37", color: "#1E3A8A" }}
            >
              {cta.primaryButton}
            </Link>
            <Link
              href={cta.secondaryLink}
              className="inline-block text-sm font-semibold px-7 py-3 rounded-lg border border-white text-white transition-colors hover:bg-white/10"
            >
              {cta.secondaryButton}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
