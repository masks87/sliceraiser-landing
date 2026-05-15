import { useLocation } from 'wouter'
import { useEffect, useRef } from 'react'
import dashboardImg from '@/assets/dashboard.png'

import imgLuxuryProperty from '@/assets/luxury-property.png'

import imgPhone289193 from '@/assets/phone-289193.png'
import imgPhone289197 from '@/assets/phone-289197.png'
import imgPhone289192 from '@/assets/phone-289192.png'
import imgPhoneFrame from '@/assets/phone-frame-1000002023.png'
import imgLineGraph from '@/assets/phone-line-graph.png'
import imgPhoneBg from '@/assets/phone-background.png'
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

  const phoneClusterRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = phoneClusterRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.querySelectorAll<HTMLElement>('.phone-item').forEach(el => {
            el.classList.add('phone-visible')
          })
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Section 1: Hero ── */}
      <section
        className="snap-section relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "600px" }}
      >
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

        {/* Content container — padding: 40px 24px 0, gap: 48px, max-width: 1400px */}
        <div
          className="relative z-10 w-full flex flex-col items-center"
          style={{ maxWidth: "1400px", padding: "40px 24px 0", gap: "48px" }}
        >
          {/* Inner container — max-width: 768px, gap: 24px */}
          <div
            className="flex flex-col items-center"
            style={{ width: "100%", maxWidth: "768px", gap: "24px" }}
          >
            {/* Title — 60px/60px, Inter 700; second line blue */}
            <h1
              style={{
                width: "100%",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "60px",
                lineHeight: "60px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Discover Your Perfect<br />
              <span style={{ color: "#4285F4" }}>Property Investment</span>
            </h1>

            {/* Subtitle — 20px/28px, Inter 400, white 90% */}
            <p
              style={{
                width: "100%",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "28px",
                textAlign: "center",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Explore premium real estate opportunities in UAE and Europe with our curated selection of luxury properties.
            </p>

            {/* CTA row — flex-wrap, row-gap: 0, col-gap: 15.99px, padding-top: 8px */}
            <div
              className="flex flex-wrap justify-center"
              style={{ rowGap: "0px", columnGap: "15.99px", paddingTop: "8px", paddingBottom: "80px" }}
            >
              {/* Browse Properties — 172×48px, #4285F4, border-radius 14px */}
              <button
                onClick={goProperties}
                className="flex items-center justify-center transition-all"
                style={{
                  width: "172px",
                  height: "48px",
                  padding: "13.5px 24px 14.5px",
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
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(66,133,244,0.45)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)";
                }}
              >
                Browse Properties
              </button>

              {/* Investment Opportunities — 221×50px, #082F6F, border-radius 14px */}
              <button
                onClick={goProperties}
                className="flex items-center justify-center transition-all"
                style={{
                  width: "221px",
                  height: "50px",
                  padding: "14.5px 25px 15.5px",
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
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(8,47,111,0.45)";
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

          {/* Search filter form — hidden per Figma (display: none), kept in DOM for future activation */}
          <div
            style={{
              display: "none",
              width: "100%",
              maxWidth: "896px",
              height: "126px",
              background: "#082F6F",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "16px",
              padding: "25px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex flex-row items-start" style={{ gap: "16px", width: "100%", height: "76px" }}>
              {/* Location */}
              <div className="flex flex-col items-start" style={{ width: "199.5px", gap: "9.5px", paddingTop: "2.5px" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF" }}>Location</span>
                <div style={{ width: "199.5px", height: "44px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(6px)", borderRadius: "16px", padding: "11px 33px 11px 21px", display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#FFFFFF" }}>Any Location</span>
                </div>
              </div>
              {/* Property Type */}
              <div className="flex flex-col items-start" style={{ width: "199.5px", gap: "9.5px", paddingTop: "2.5px" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF" }}>Property Type</span>
                <div style={{ width: "199.5px", height: "44px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(6px)", borderRadius: "16px", padding: "11px 33px 11px 21px", display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#FFFFFF" }}>Any Type</span>
                </div>
              </div>
              {/* Price Range */}
              <div className="flex flex-col items-start" style={{ width: "199.5px", gap: "9.5px", paddingTop: "2.5px" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#FFFFFF" }}>Price Range</span>
                <div style={{ width: "199.5px", height: "44px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(6px)", borderRadius: "16px", padding: "11px 33px 11px 21px", display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#FFFFFF" }}>Any Price</span>
                </div>
              </div>
              {/* Search button */}
              <div className="flex flex-row items-end justify-center" style={{ width: "199.5px", height: "76px" }}>
                <button
                  onClick={goProperties}
                  className="flex items-center justify-center"
                  style={{ width: "199.5px", height: "40px", background: "#4285F4", boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)", backdropFilter: "blur(2px)", borderRadius: "14px", gap: "8px", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#F8FAFC", border: "none", cursor: "pointer" }}
                >
                  <svg width="16" height="16" fill="none" stroke="#F8FAFC" strokeWidth="1.33" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/></svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Build Your Investment Lifestyle ── */}
      <section className="snap-section bg-white py-20 px-6">
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
                color: "#000000",
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

          {/* Right: phone cluster — 668×614px absolute container
               Figma bounding box origin: left:732 top:93
               Each slot: position relative to that origin              */}
          <div
            ref={phoneClusterRef}
            className="shrink-0"
            style={{ position: "relative", width: "668px", height: "614px" }}
          >
            {/* Group 289193 — left:91 top:35 */}
            <img src={imgPhone289193} alt="" className="phone-item" style={{ position:"absolute", left:91, top:35, width:176, height:360, objectFit:"contain", filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }} />

            {/* Group 289197 — left:291 top:215 */}
            <img src={imgPhone289197} alt="" className="phone-item" style={{ position:"absolute", left:291, top:215, width:176, height:360, objectFit:"contain", filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }} />

            {/* Group 289192 — left:491 top:21 */}
            <img src={imgPhone289192} alt="" className="phone-item" style={{ position:"absolute", left:491, top:21, width:177, height:360, objectFit:"contain", filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }} />

            {/* Frame 1000002023 — left:298 top:0 */}
            <img src={imgPhoneFrame} alt="" className="phone-item" style={{ position:"absolute", left:298, top:0, width:169, height:187, objectFit:"contain", filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.14))" }} />

            {/* Multiple Line Graph — left:0 top:427 */}
            <img src={imgLineGraph} alt="" className="phone-item" style={{ position:"absolute", left:0, top:427, width:182, height:187, objectFit:"contain", filter:"drop-shadow(0 8px 20px rgba(0,0,0,0.12))" }} />

            {/* Background — left:540 top:395 */}
            <img src={imgPhoneBg} alt="" className="phone-item" style={{ position:"absolute", left:540, top:395, width:109, height:174, objectFit:"contain", filter:"drop-shadow(0 8px 20px rgba(0,0,0,0.12))" }} />
          </div>
        </div>
      </section>

      {/* ── Section 3: Featured Properties ── */}
      <section className="snap-section bg-white" style={{ padding: "80px 24px" }}>
        <div
          className="mx-auto flex flex-col items-center"
          style={{ maxWidth: "1400px", padding: "0 32px", gap: "48px" }}
        >
          {/* Header group */}
          <div className="flex flex-col items-center" style={{ gap: "16px" }}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#4285F4",
                margin: 0,
              }}
            >
              Featured Properties
            </h2>
            <div style={{ maxWidth: "672px" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#8E9196",
                  margin: 0,
                  width: "819px",
                  maxWidth: "100%",
                }}
              >
                Explore our handpicked selection of premium properties across luxury locations in UAE and Europe.
              </p>
            </div>
          </div>

          {/* Browsers screenshot — 1400×847, drop-shadow, border-radius 20px */}
          <img
            src={dashboardImg}
            alt="SliceRaiser Dashboard"
            style={{
              width: "100%",
              maxWidth: "1400px",
              height: "auto",
              aspectRatio: "1400 / 847",
              objectFit: "cover",
              borderRadius: "20px",
              filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.25))",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ── Section 4: Featured Locations ── */}
      <section
        className="snap-section py-20 px-6"
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
      <section className="snap-section bg-white py-20 px-6">
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
