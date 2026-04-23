import type { ReactNode } from "react";
import { Link } from "wouter";
import { useListOpportunities, type InvestmentOpportunity } from "@workspace/api-client-react";
import heroImg from "@/assets/hero.png";
import locDubai from "@/assets/loc-dubai.jpg";
import locAbuDhabi from "@/assets/loc-abudhabi.jpg";
import locSpain from "@/assets/loc-spain.jpg";
import locFrance from "@/assets/loc-france.jpg";
import locItaly from "@/assets/loc-italy.jpg";
import { formatCurrency, formatPercent } from "@/lib/format";

function PhoneFrame({
  children,
  className = "",
  rotate = "0deg",
  z = 1,
  shadow = "shadow-2xl",
}: {
  children: ReactNode;
  className?: string;
  rotate?: string;
  z?: number;
  shadow?: string;
}) {
  return (
    <div
      className={`relative ${className} ${shadow} rounded-[36px] bg-[#020817] p-[6px]`}
      style={{ transform: `rotate(${rotate})`, zIndex: z }}
    >
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[30px] bg-white">
        <div className="absolute left-1/2 top-0 z-20 h-[18px] w-[90px] -translate-x-1/2 rounded-b-[12px] bg-[#020817]" />
        {children}
      </div>
    </div>
  );
}

function PhoneMockupTrio() {
  return (
    <div className="relative mx-auto flex h-[480px] w-full max-w-[520px] items-center justify-center">
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute inset-x-8 inset-y-10 rounded-[60px] bg-gradient-to-br from-[#4285f4]/20 via-[#082f6f]/10 to-transparent blur-3xl" />

      {/* Left phone — portfolio chart */}
      <PhoneFrame
        className="absolute left-0 top-8 w-[150px]"
        rotate="-7deg"
        z={1}
      >
        <div className="flex h-full flex-col bg-gradient-to-b from-[#f7f9ff] to-white p-3">
          <div className="text-[8px] font-semibold text-[#8e9196]">Portfolio</div>
          <div className="text-[14px] font-bold text-[#020817]">$46,290</div>
          <div className="text-[8px] font-medium text-emerald-600">+10.2% YTD</div>
          <div className="mt-3 flex-1">
            <svg viewBox="0 0 120 80" className="h-full w-full">
              <defs>
                <linearGradient id="phgrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4285f4" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#4285f4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 L15,55 L30,50 L45,42 L60,38 L75,30 L90,28 L105,18 L120,12 L120,80 L0,80 Z"
                fill="url(#phgrad)"
              />
              <path
                d="M0,60 L15,55 L30,50 L45,42 L60,38 L75,30 L90,28 L105,18 L120,12"
                fill="none"
                stroke="#4285f4"
                strokeWidth="1.6"
              />
            </svg>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="rounded-md bg-[#f1f0fb] p-1.5">
              <div className="text-[6px] text-[#8e9196]">Invested</div>
              <div className="text-[8px] font-bold text-[#020817]">$42k</div>
            </div>
            <div className="rounded-md bg-[#082f6f] p-1.5">
              <div className="text-[6px] text-white/70">Return</div>
              <div className="text-[8px] font-bold text-white">+$4.2k</div>
            </div>
          </div>
        </div>
      </PhoneFrame>

      {/* Right phone — opportunity card */}
      <PhoneFrame
        className="absolute right-0 top-12 w-[150px]"
        rotate="8deg"
        z={1}
      >
        <div className="flex h-full flex-col">
          <div className="relative h-[110px] w-full overflow-hidden">
            <img src={locDubai} alt="" className="h-full w-full object-cover" />
            <div className="absolute left-2 top-2 rounded-md bg-emerald-100 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-700">
              Low risk
            </div>
          </div>
          <div className="flex-1 px-2.5 py-2">
            <div className="text-[7px] text-[#8e9196]">Dubai Marina, UAE</div>
            <div className="mt-0.5 text-[9px] font-bold leading-tight text-[#020817]">
              Marina Bay Penthouse
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[#f1f0fb]">
              <div className="h-full w-[75%] rounded-full bg-[#4285f4]" />
            </div>
            <div className="mt-1 flex justify-between text-[6px]">
              <span className="text-[#8e9196]">Funded</span>
              <span className="font-semibold text-[#020817]">75%</span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <div className="text-[6px] text-[#8e9196]">Return</div>
                <div className="text-[10px] font-bold text-[#4285f4]">8.4%</div>
              </div>
              <div className="rounded-md bg-[#4285f4] px-2 py-1 text-[7px] font-semibold text-white">
                Invest
              </div>
            </div>
          </div>
        </div>
      </PhoneFrame>

      {/* Center phone — biggest, dashboard hero */}
      <PhoneFrame className="relative w-[180px]" z={2} shadow="shadow-[0_30px_60px_-15px_rgba(8,47,111,0.45)]">
        <div className="flex h-full flex-col bg-gradient-to-b from-white to-[#f7f9ff]">
          <div className="flex items-center justify-between px-3 pt-5">
            <div>
              <div className="text-[8px] font-semibold text-[#8e9196]">Hello,</div>
              <div className="text-[12px] font-bold text-[#020817]">Investor</div>
            </div>
            <div className="h-7 w-7 rounded-full bg-[#082f6f] text-white text-[10px] font-bold flex items-center justify-center">
              I
            </div>
          </div>
          <div className="mx-3 mt-3 rounded-xl bg-gradient-to-br from-[#4285f4] to-[#082f6f] p-3 text-white">
            <div className="text-[8px] opacity-80">Total value</div>
            <div className="text-[16px] font-bold">$46,290</div>
            <div className="text-[8px] text-emerald-200">+ $4,290 this year</div>
          </div>
          <div className="mt-3 px-3 text-[8px] font-semibold uppercase tracking-wide text-[#8e9196]">
            Top holdings
          </div>
          <div className="mx-3 mt-1.5 space-y-1.5">
            {[
              { c: "#4285f4", t: "Marina Bay", v: "$13.6k" },
              { c: "#10b981", t: "Catalonia Coast", v: "$9.9k" },
              { c: "#f59e0b", t: "Provence Vineyard", v: "$6.4k" },
              { c: "#082f6f", t: "Tuscan Heritage", v: "$16.2k" },
            ].map((h) => (
              <div key={h.t} className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-2 py-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: h.c }} />
                  <span className="text-[8px] font-medium text-[#020817]">{h.t}</span>
                </div>
                <span className="text-[8px] font-bold text-[#020817]">{h.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto mx-3 mb-3 rounded-lg bg-[#082f6f] py-2 text-center text-[9px] font-semibold text-white">
            View dashboard
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function FeaturedProperties() {
  const { data, isLoading } = useListOpportunities();
  const featured = ((data ?? []) as InvestmentOpportunity[]).slice(0, 3);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">Featured Properties</h2>
          <p className="text-[#8e9196] text-base max-w-md mx-auto leading-[24px] font-normal">
            Explore our handpicked selection of premium properties across luxury locations in UAE and Europe.
          </p>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-[420px] rounded-2xl bg-[#f1f0fb] animate-pulse" />
            ))}
          </div>
        ) : featured.length === 0 ? (
          <p className="text-center text-[#8e9196] text-sm">No properties available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <Link
                key={p.id}
                href={`/opportunities/${p.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                    {p.riskLevel} risk
                  </div>
                  <div className="absolute top-3 right-3 rounded-md bg-white/95 px-2 py-1 text-[11px] font-semibold text-[#020817]">
                    {p.assetType}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-1.5 text-[12px] text-[#8e9196]">
                    <svg className="h-3.5 w-3.5 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {p.location}
                  </div>
                  <h3 className="mt-1 text-[16px] font-bold leading-tight text-[#020817]">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13px] text-[#8e9196] leading-relaxed">{p.description}</p>
                  <div className="mt-auto pt-4 grid grid-cols-2 gap-3 border-t border-gray-100">
                    <div>
                      <div className="text-[11px] text-[#8e9196]">Expected return</div>
                      <div className="text-[15px] font-bold text-[#4285f4]">
                        {formatPercent(p.expectedReturn)}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#8e9196]">Min. investment</div>
                      <div className="text-[15px] font-bold text-[#020817]">
                        {formatCurrency(p.minimumInvestment)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const locations = [
  { name: "Dubai, UAE", count: "120 Properties", img: locDubai },
  { name: "Abu Dhabi, UAE", count: "95 Properties", img: locAbuDhabi },
  { name: "Spain", count: "78 Properties", img: locSpain },
  { name: "France", count: "62 Properties", img: locFrance },
  { name: "Italy", count: "56 Properties", img: locItaly },
];

const features = [
  {
    title: "High ROI",
    desc: "Enjoy exceptional returns on your real estate investments in booming markets.",
    icon: (
      <svg className="w-6 h-6 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M14 7h7v7" />
      </svg>
    ),
  },
  {
    title: "Secure Investment",
    desc: "Our properties are carefully vetted to ensure security and long-term value appreciation.",
    icon: (
      <svg className="w-6 h-6 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    title: "Professional Management",
    desc: "Full-service property management solutions to maximize your rental income.",
    icon: (
      <svg className="w-6 h-6 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-6 9 6v11a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V9z" />
      </svg>
    ),
  },
  {
    title: "Global Portfolio",
    desc: "Diverse investment opportunities across premium locations in UAE and Europe.",
    icon: (
      <svg className="w-6 h-6 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
  },
];

function LocationCard({ loc, height }: { loc: typeof locations[number]; height: string }) {
  return (
    <Link
      href="/opportunities"
      className={`group relative ${height} rounded-2xl overflow-hidden shadow-xl block`}
    >
      <img
        src={loc.img}
        alt={loc.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-[18px] leading-[26px]">{loc.name}</p>
        <p className="text-white/75 text-[13px] mt-0.5 font-normal">{loc.count}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Luxury Property" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,31,44,0.8)] to-[rgba(0,0,0,0.92)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Discover Your Perfect
            <br />
            <span className="text-[#4285f4]">Property Investment</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed font-normal">
            Explore premium real estate opportunities in UAE and Europe with our curated selection of luxury properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              className="bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              href="/opportunities"
              className="bg-[#082f6f] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#061f4a] transition-colors"
            >
              Investment Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Discipline Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl md:text-[28px] font-bold text-[#4285f4] mb-6 leading-snug">
              Discipline will take you places motivation can't
            </h2>
            <p className="text-[#8e9196] text-base leading-relaxed mb-5 font-normal">
              Slice your capital across institutional-grade real estate, infrastructure, and alternative income
              opportunities. We hand-pick deals from premium operators across the UAE and Europe so you can build a
              diversified portfolio with as little as a few thousand dollars.
            </p>
            <p className="text-[#8e9196] text-base leading-relaxed mb-5 font-normal">
              Every offering is structured by our investment team, vetted by independent legal and financial advisors,
              and continuously monitored after funding. You stay in control with transparent reporting and a single
              dashboard for every position.
            </p>
            <p className="text-[#8e9196] text-base leading-relaxed mb-10 font-normal">
              Whether you want predictable income, long-term capital growth, or both, SliceRaiser gives you the access
              and tools to put your strategy on autopilot.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/opportunities"
                className="bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors"
              >
                Schedule a Demo
              </Link>
              <a
                href="mailto:info@sliceraiser.com"
                className="border border-[#082f6f] text-[#082f6f] text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#082f6f] hover:text-white transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <PhoneMockupTrio />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Featured Locations */}
      <section className="bg-[#f1f0fb4d] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">Featured Locations</h2>
            <p className="text-[#8e9196] text-base max-w-sm mx-auto leading-[24px] font-normal">
              Explore our exquisite properties in these premium locations across UAE and Europe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {locations.slice(0, 2).map((loc) => (
              <LocationCard key={loc.name} loc={loc} height="h-[260px]" />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {locations.slice(2).map((loc) => (
              <LocationCard key={loc.name} loc={loc} height="h-[200px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">Invest in Premium Real Estate</h2>
            <p className="text-[#8e9196] text-base max-w-md mx-auto leading-[24px] font-normal">
              Our curated investment opportunities offer exceptional returns in high-growth markets, combining luxury
              with strong long-term potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-[#020817] font-semibold text-[15px] mb-2">{f.title}</h3>
                <p className="text-[#8e9196] text-[13px] leading-[20px] font-normal">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/opportunities"
              className="inline-block bg-[#4285f4] text-white text-[14px] font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors"
            >
              Explore Investment Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
