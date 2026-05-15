import { useLocation } from 'wouter'
import dashboardImg from '@/assets/dashboard.png'

const imgLuxuryProperty = "https://www.figma.com/api/mcp/asset/763237e7-9544-47f2-95d3-d99e408f8ad6"
const imgFrame1000002023 = "https://www.figma.com/api/mcp/asset/023f3a49-d6a7-4116-bb4c-6dba771cabfc"
const imgMultipleLineGraph = "https://www.figma.com/api/mcp/asset/6cf1a34f-0dac-44a7-8703-82a603e88f10"
const imgGroup289192 = "https://www.figma.com/api/mcp/asset/61fc9281-116e-42cd-9a72-2edb3c71b3db"
const imgGroup289193 = "https://www.figma.com/api/mcp/asset/1c26a17f-cfda-43f2-acb1-85cb28883fbb"
const imgGroup289197 = "https://www.figma.com/api/mcp/asset/0b0f748f-1694-44cd-afce-0810215f25d0"
const imgDubaiUae = "https://www.figma.com/api/mcp/asset/042e7b36-e60b-4f1a-9670-8c7d2d095147"
const imgAbuDhabi = "https://www.figma.com/api/mcp/asset/1628a40a-ce8c-4aa2-9a2c-46334f6ffbc1"
const imgBrisbane = "https://images.unsplash.com/photo-1566734904496-9309bb1798ae?auto=format&fit=crop&w=1600&q=80"
const imgSpain = "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80"
const imgFrance = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
const imgGroup289194 = "https://www.figma.com/api/mcp/asset/abf2831e-ac22-426c-870d-b0d3417deb18"
const imgGroup289195 = "https://www.figma.com/api/mcp/asset/11c45383-8665-4c12-b134-d66c3dbf3c78"
const imgGroup289196 = "https://www.figma.com/api/mcp/asset/4ecc83fa-5659-4999-ae99-1e23767b07b0"

const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4285F4" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'High ROI',
    desc: 'Enjoy exceptional returns on your real estate investments in booming markets.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4285F4" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure Investment',
    desc: 'Our properties are carefully vetted to ensure security and long-term value appreciation.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4285F4" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Professional Management',
    desc: 'Full-service property management solutions to maximize your rental income.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4285F4" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path strokeLinecap="round" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Global Portfolio',
    desc: 'Diverse investment opportunities across premium locations in UAE and Europe.',
  },
]

export default function Home() {
  const [, setLocation] = useLocation()
  const goProperties = () => setLocation('/properties')
  const goContact = () => setLocation('/contact')

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Section 1: Hero ── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "600px" }}>
        <img
          src={imgLuxuryProperty}
          alt="Luxury Property"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(26,31,44,0.8) 0%, rgba(0,0,0,0.9) 100%)" }}
        />
        <div
          className="relative z-10 mx-auto px-6 flex flex-col items-center text-center"
          style={{ maxWidth: "1400px", padding: "96px 24px 0", gap: "48px" }}
        >
          {/* Heading + subtitle */}
          <div className="flex flex-col items-center" style={{ maxWidth: "768px", gap: "24px" }}>
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "60px",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Discover Your Perfect Property Investment
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "28px",
                color: "rgba(255,255,255,0.9)",
                textAlign: "center",
              }}
            >
              Explore premium real estate opportunities in UAE and Europe with our curated selection of luxury properties.
            </p>
            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center" style={{ gap: "16px", paddingTop: "8px", paddingBottom: "80px" }}>
              <button
                onClick={goProperties}
                className="flex items-center justify-center transition-all"
                style={{
                  width: "172px",
                  height: "48px",
                  background: "#4285F4",
                  boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "14px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#F8FAFC",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(66,133,244,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)";
                }}
              >
                Browse Properties
              </button>
              <button
                onClick={goProperties}
                className="flex items-center justify-center transition-all"
                style={{
                  width: "221px",
                  height: "50px",
                  background: "#082F6F",
                  boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "14px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(8,47,111,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)";
                }}
              >
                Investment Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Build Your Investment Lifestyle ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto flex flex-col lg:flex-row items-center" style={{ maxWidth: "1400px", gap: "58px" }}>
          {/* Left: content */}
          <div className="flex flex-col items-start" style={{ maxWidth: "687px", gap: "20px" }}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "117.7%",
                letterSpacing: "-0.03em",
                color: "#4285F4",
              }}
            >
              Build Your SliceRaiser Investment Lifestyle
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "158.7%",
                letterSpacing: "-0.03em",
                color: "#8E9196",
              }}
            >
              SliceRaiser is built for people who want more than traditional saving. Explore selected property, equity and fixed income opportunities through a platform designed around income potential, capital growth, diversification and ownership mindset.
            </p>
            <div className="flex flex-wrap" style={{ gap: "56px" }}>
              <button
                onClick={goProperties}
                style={{
                  width: "165px",
                  height: "48px",
                  background: "#4285F4",
                  boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "14px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#F8FAFC",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(66,133,244,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 4px 6px -1px rgba(0,0,0,0.1)";
                }}
              >
                Schedule a Demo
              </button>
              <button
                onClick={goContact}
                style={{
                  width: "144px",
                  height: "50px",
                  background: "#082F6F",
                  boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "14px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(8,47,111,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 4px 6px -1px rgba(0,0,0,0.1)";
                }}
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* Right: phone cluster */}
          <div className="flex-1 flex items-end justify-center gap-3 min-h-[340px] relative w-full">
            <div className="flex flex-col gap-3 items-center self-start pt-10">
              <img src={imgFrame1000002023} alt="" className="w-28 rounded-xl shadow-2xl" />
              <img src={imgMultipleLineGraph} alt="" className="w-32 rounded-xl shadow-2xl" />
            </div>
            <div className="flex flex-col gap-3 items-center self-start pt-20">
              <img src={imgGroup289193} alt="" className="w-28 rounded-xl shadow-2xl" />
              <img src={imgGroup289197} alt="" className="w-28 rounded-xl shadow-2xl" />
            </div>
            <div className="self-start pt-4">
              <img src={imgGroup289192} alt="" className="w-28 rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Featured Properties ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto" style={{ maxWidth: "1400px" }}>
          {/* Header */}
          <div className="flex flex-col items-center mb-12" style={{ gap: "16px" }}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#4285F4",
              }}
            >
              Featured Properties
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "24px",
                textAlign: "center",
                color: "#8E9196",
                maxWidth: "672px",
              }}
            >
              Explore our handpicked selection of premium properties across luxury locations in UAE and Europe.
            </p>
          </div>
          {/* Dashboard screenshot */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "20px",
              filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.25))",
            }}
          >
            <img src={dashboardImg} alt="SliceRaiser Dashboard" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* ── Section 4: Featured Locations ── */}
      <section
        className="py-20 px-6"
        style={{ background: "rgba(241,240,251,0.3)" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1400px" }}>
          {/* Header */}
          <div className="flex flex-col items-center mb-12" style={{ gap: "16px" }}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#4285F4",
              }}
            >
              Featured Locations
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "24px",
                textAlign: "center",
                color: "#8E9196",
                maxWidth: "792px",
              }}
            >
              Explore our exquisite properties in these premium locations across UAE and Europe.
            </p>
          </div>

          {/* Location cards grid — Dubai wide on top, others below */}
          <div className="flex flex-col" style={{ gap: "24px" }}>
            {/* Row 1: Dubai wide card */}
            <LocationCard
              name="Dubai, UAE"
              text="A leading investment market known for premium real estate, global connectivity and strong investor demand."
              img={imgDubaiUae}
              height="280px"
              wide
            />
            {/* Row 2: smaller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
              <LocationCard
                name="Abu Dhabi, UAE"
                text="A strategic capital market supported by long-term planning, institutional growth and economic stability."
                img={imgAbuDhabi}
                height="280px"
              />
              <LocationCard
                name="Brisbane, Australia"
                text="A growing Australian market with strong lifestyle demand, infrastructure growth and long-term investment potential."
                img={imgBrisbane}
                height="280px"
              />
              <LocationCard
                name="Spain"
                text="A vibrant Mediterranean market offering exceptional lifestyle properties with strong rental yield potential."
                img={imgSpain}
                height="280px"
              />
              <LocationCard
                name="France"
                text="Europe's most prestigious property market combining cultural heritage with world-class investment opportunities."
                img={imgFrance}
                height="280px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Invest in Premium Real Estate ── */}
      <section className="bg-white py-20 px-6">
        <div
          className="mx-auto flex flex-col lg:flex-row items-center"
          style={{ maxWidth: "1400px", gap: "64px" }}
        >
          {/* Left: text + cards + button */}
          <div className="flex flex-col items-start" style={{ maxWidth: "636px", gap: "24px" }}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "40px",
                color: "#4285F4",
              }}
            >
              Invest in Premium Real Estate
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#8E9196",
              }}
            >
              Our curated real estate investment opportunities offer exceptional returns in high-growth markets. With strategic locations across UAE and Europe, our properties combine luxury living with strong investment potential.
            </p>
            {/* 2x2 feature cards */}
            <div
              className="grid grid-cols-2 w-full"
              style={{ gap: "16px" }}
            >
              {features.map(f => (
                <div
                  key={f.title}
                  className="flex flex-col items-start"
                  style={{
                    padding: "21px",
                    background: "rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "16px",
                    backgroundColor: "#fff",
                    borderColor: "#E5E7EB",
                    gap: "8px",
                  }}
                >
                  <div className="mb-1">{f.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "28px",
                      color: "#020817",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#8E9196",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={goProperties}
              style={{
                height: "48px",
                padding: "0 24px",
                background: "#4285F4",
                boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
                backdropFilter: "blur(2px)",
                borderRadius: "14px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#F8FAFC",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(66,133,244,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 4px 6px -1px rgba(0,0,0,0.1)";
              }}
            >
              Explore Investment Opportunities
            </button>
          </div>

          {/* Right: phone mockups */}
          <div className="flex-1 flex items-end justify-center gap-4 min-h-[400px] relative">
            <div className="self-end">
              <img src={imgGroup289196} alt="" className="w-36 rounded-2xl shadow-2xl" />
            </div>
            <div className="self-start pt-8">
              <img src={imgGroup289195} alt="" className="w-36 rounded-2xl shadow-2xl" />
            </div>
            <div className="self-end">
              <img src={imgGroup289194} alt="" className="w-36 rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

function LocationCard({
  name,
  text,
  img,
  height,
  wide = false,
}: {
  name: string
  text: string
  img: string
  height: string
  wide?: boolean
}) {
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        height,
        width: wide ? "100%" : undefined,
        borderRadius: "16px",
        boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
        backdropFilter: "blur(6px)",
        cursor: "pointer",
      }}
    >
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />
      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-start"
        style={{ padding: "24px", gap: "4px" }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "28px",
            color: "#FFFFFF",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
