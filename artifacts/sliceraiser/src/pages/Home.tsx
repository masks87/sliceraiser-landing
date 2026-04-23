import { Link } from "wouter";
import heroImg from "@/assets/hero.png";
import dashboardImg from "@/assets/dashboard.png";
import locDubai from "@/assets/loc-dubai.jpg";
import locAbuDhabi from "@/assets/loc-abudhabi.jpg";
import locSpain from "@/assets/loc-spain.jpg";
import locFrance from "@/assets/loc-france.jpg";
import locItaly from "@/assets/loc-italy.jpg";

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
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl md:text-[28px] font-bold text-[#4285f4] mb-6 leading-snug">
              Discipline will take you places motivation can't
            </h2>
            <p className="text-[#8e9196] text-base leading-relaxed mb-10 font-normal">
              Slice your capital across institutional-grade real estate, infrastructure, and alternative income
              opportunities. We hand-pick deals from premium operators across the UAE and Europe so you can build a
              diversified portfolio with as little as a few thousand dollars.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/opportunities"
                className="bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors"
              >
                Browse Opportunities
              </Link>
              <Link
                href="/sign-up"
                className="border border-[#082f6f] text-[#082f6f] text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#082f6f] hover:text-white transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img src={dashboardImg} alt="SliceRaiser Dashboard" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

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
