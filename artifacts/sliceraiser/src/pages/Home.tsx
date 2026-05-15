import { useLocation } from 'wouter'
import { useEffect, useRef } from 'react'
import SectionDots from '@/components/SectionDots'
import imgLuxuryProperty from '@/assets/luxury-property.png'

import imgPhone289193 from '@/assets/phone-289193.png'
import imgPhone289197 from '@/assets/phone-289197.png'
import imgPhone289192 from '@/assets/phone-289192.png'
import imgPhoneFrame from '@/assets/phone-frame-1000002023.png'
import imgLineGraph from '@/assets/phone-line-graph.png'
import imgPhoneBg from '@/assets/phone-background.png'
import imgGroup289194 from '@/assets/group-289194.png'
import imgGroup289195 from '@/assets/group-289195.png'
import imgGroup289196 from '@/assets/group-289196.png'
import imgBrowserMockup from "@assets/Browsers1_1778862431620.png"
import imgDubai    from "@/assets/loc-dubai.jpg"
import imgAbuDhabi from "@/assets/loc-abudhabi.jpg"
import imgSpain    from "@/assets/loc-spain.jpg"
import imgFrance   from "@/assets/loc-france.jpg"
import imgItaly    from "@/assets/loc-italy.jpg"

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

  const heroImgRef = useRef<HTMLImageElement>(null)
  const phoneClusterRef = useRef<HTMLDivElement>(null)
  const phone2ClusterRef = useRef<HTMLDivElement>(null)

  // Hero parallax — bg image moves at 35% of scroll speed
  useEffect(() => {
    const el = heroImgRef.current
    if (!el) return
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section-by-section scroll hijacking
  useEffect(() => {
    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>('.snap-section'))
        .filter(s => s.offsetParent !== null)

    // Find which section is currently most visible.
    // Returns sections.length when the page is scrolled into the footer zone.
    const currentIndex = () => {
      const sections = getSections()
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        return sections.length // footer zone
      }
      let best = 0
      let bestDist = Infinity
      sections.forEach((s, i) => {
        const dist = Math.abs(s.getBoundingClientRect().top)
        if (dist < bestDist) { bestDist = dist; best = i }
      })
      return best
    }

    const goTo = (idx: number) => {
      const sections = getSections()
      if (idx < 0) return
      if (idx >= sections.length) {
        // Scroll to just after last section to reveal footer cleanly
        const last = sections[sections.length - 1]
        if (last) window.scrollTo({ top: last.offsetTop + last.offsetHeight, behavior: 'smooth' })
        return
      }
      sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    let locked = false
    const lock = () => {
      locked = true
      setTimeout(() => { locked = false }, 900)
    }

    const isMobile = () => window.innerWidth < 1024

    // Wheel
    const onWheel = (e: WheelEvent) => {
      if (isMobile()) return
      if (locked) { e.preventDefault(); return }
      e.preventDefault()
      lock()
      goTo(currentIndex() + (e.deltaY > 0 ? 1 : -1))
    }

    // Keyboard: arrow down/up, page down/up, space
    const onKey = (e: KeyboardEvent) => {
      if (isMobile()) return
      const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ']
      if (!keys.includes(e.key)) return
      if (locked) { e.preventDefault(); return }
      e.preventDefault()
      lock()
      const dir = ['ArrowDown', 'PageDown', ' '].includes(e.key) ? 1 : -1
      goTo(currentIndex() + dir)
    }

    // Touch
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e: TouchEvent) => {
      if (isMobile()) return
      if (locked) return
      const delta = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(delta) < 40) return
      lock()
      goTo(currentIndex() + (delta > 0 ? 1 : -1))
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  // Entrance animations — adds .is-visible once element enters viewport
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const refs = [phoneClusterRef, phone2ClusterRef]
    const observers = refs.map(ref => {
      const container = ref.current
      if (!container) return null
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
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SectionDots />

      {/* ── Section 1: Hero ── */}
      <section
        className="snap-section hero-section relative flex items-center justify-center overflow-hidden"
        data-label="hero"
        style={{ minHeight: "100vh" }}
      >
        <img
          ref={heroImgRef}
          src={imgLuxuryProperty}
          alt="Luxury Property"
          className="absolute inset-0 w-full object-cover"
          style={{ opacity: 0.5, height: "130%", top: "-15%", willChange: "transform" }}
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
              className="home-hero-title fade-up"
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
              className="fade-up delay-1"
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

            {/* CTA row */}
            <div
              className="fade-up delay-2 flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center"
              style={{ gap: "16px", paddingTop: "8px", paddingBottom: "80px" }}
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
      <section className="snap-section snap-s-phone bg-white overflow-hidden" data-label="overview" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "60px 24px" }}>
        <div className="mx-auto flex flex-col lg:flex-row items-center" style={{ maxWidth: "1400px", gap: "58px" }}>
          {/* Left: content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left" style={{ maxWidth: "687px", gap: "20px" }}>
            <h2
              className="home-section-h2 fade-up"
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
              className="home-section-body fade-up delay-1"
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

            <div className="fade-up delay-2 flex flex-wrap justify-center lg:justify-start" style={{ gap: "20px" }}>
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

          {/* Right: phone cluster — centered wrapper + 668×614px absolute container */}
          <div className="w-full lg:w-auto flex justify-center overflow-visible flex-shrink-0">
          <div
            ref={phoneClusterRef}
            className="phone-cluster-wrap fade-up delay-3"
            style={{ position: "relative", width: "668px", height: "614px", flexShrink: 0 }}
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
        </div>
      </section>

      {/* ── Section 3: Featured Properties — desktop only ── */}
      <section
        className="snap-section hidden lg:flex"
        data-label="properties"
        style={{ background: "#080D1A", minHeight: "100vh", alignItems: "center", padding: "60px 24px" }}
      >
        <div
          className="mx-auto flex flex-col items-center"
          style={{ maxWidth: "1100px", padding: "0 32px", gap: "40px", width: "100%" }}
        >
          {/* Header */}
          <div className="flex flex-col items-center w-full" style={{ gap: "14px" }}>
            <h2
              className="home-section-h2 fade-up"
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
            <p
              className="home-section-body fade-up delay-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "26px",
                textAlign: "center",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "620px",
                margin: 0,
              }}
            >
              Explore our handpicked selection of premium properties across luxury locations in UAE and Europe.
            </p>
          </div>

          {/* Browser mockup */}
          <div
            className="fade-up delay-2 w-full"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={imgBrowserMockup}
              alt="SliceRaiser platform — Featured Properties"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Section 4: Featured Locations ── */}
      <section
        className="snap-section"
        data-label="locations"
        style={{ background: "#080D1A", minHeight: "100vh", display: "flex", alignItems: "center", padding: "60px 24px" }}
      >
        <div
          className="mx-auto flex flex-col items-center"
          style={{ maxWidth: "1200px", padding: "0 32px", gap: "40px", width: "100%" }}
        >
          {/* Header */}
          <div className="flex flex-col items-center w-full" style={{ gap: "14px" }}>
            <h2
              className="home-section-h2 fade-up"
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
              Featured Locations
            </h2>
            <p
              className="home-section-body fade-up delay-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "26px",
                textAlign: "center",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "680px",
                margin: 0,
              }}
            >
              Explore our exquisite properties in these premium locations across UAE and Europe.
            </p>
          </div>

          {/* ── Desktop: 5 cards in 2 rows ── */}
          <div className="hidden lg:flex flex-col w-full" style={{ gap: "16px" }}>
            {/* Row 1: Dubai (wide) + Abu Dhabi */}
            <div
              className="fade-up delay-2 w-full"
              style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}
            >
              <LocationCard name="Dubai, UAE"     count="120 Properties" img={imgDubai}    height={280} />
              <LocationCard name="Abu Dhabi, UAE" count="95 Properties"  img={imgAbuDhabi} height={280} />
            </div>
            {/* Row 2: Spain + France + Italy */}
            <div
              className="fade-up delay-3 w-full"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
            >
              <LocationCard name="Spain"  count="78 Properties" img={imgSpain}  height={240} />
              <LocationCard name="France" count="62 Properties" img={imgFrance} height={240} />
              <LocationCard name="Italy"  count="56 Properties" img={imgItaly}  height={240} />
            </div>
          </div>

          {/* ── Mobile: 3 cards only ── */}
          <div className="flex flex-col lg:hidden w-full fade-up delay-2" style={{ gap: "14px" }}>
            <LocationCard name="Dubai, UAE"     count="120 Properties" img={imgDubai}    height={200} />
            <LocationCard name="Abu Dhabi, UAE" count="95 Properties"  img={imgAbuDhabi} height={200} />
            <LocationCard name="Europe"         count="200+ Properties" img={imgFrance}  height={200} />
          </div>
        </div>
      </section>

      {/* ── Section 5: Invest in Premium Real Estate ── */}
      <section className="snap-section snap-s-phone bg-white overflow-hidden" data-label="invest" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "60px 24px" }}>
        {/* outer container: flex row, gap 64px, max 1400px, centred */}
        <div
          className="mx-auto flex flex-col lg:flex-row items-center"
          style={{ maxWidth: "1400px", padding: "0 32px", gap: "64px", width: "100%" }}
        >

          {/* ── LEFT column ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left" style={{ maxWidth: "636px", gap: "24px" }}>

            {/* Heading */}
            <h2 className="home-section-h2 fade-up" style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "40px",
              color: "#4285F4",
              margin: 0,
            }}>
              Invest in Premium Real Estate
            </h2>

            {/* Body */}
            <p className="home-section-body fade-up delay-1" style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#8E9196",
              margin: 0,
            }}>
              Our curated real estate investment opportunities offer exceptional returns in high-growth markets. With strategic locations across UAE and Europe, our properties combine luxury living with strong investment potential.
            </p>

            {/* 2 × 2 feature cards — responsive CSS grid */}
            <div className="fade-up delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", width: "100%" }}>
              {features.map((f) => (
                <div
                  key={f.title}
                  className="feature-card-item flex flex-col items-start"
                  style={{
                    padding: "21px",
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{ paddingBottom: "12px" }}>{f.icon}</div>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#020817",
                    margin: 0,
                    paddingBottom: "8px",
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#8E9196",
                    margin: 0,
                  }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA button — 273 × 48 */}
            <button
              onClick={goProperties}
              style={{
                width: "273px",
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
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(66,133,244,0.4)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0px 4px 6px -1px rgba(0,0,0,0.1)"
              }}
            >
              Explore Investment Opportunities
            </button>
          </div>

          {/* ── RIGHT: phone cluster — 505×425 container (scaled 0.68 from Figma) ── */}
          <div className="w-full lg:w-auto flex justify-center overflow-visible flex-shrink-0">
          <div
            ref={phone2ClusterRef}
            className="phone-cluster-s5-wrap fade-up delay-3"
            style={{ position: "relative", width: "505px", height: "425px", flexShrink: 0 }}
          >
            {/* Left phone — 289196 */}
            <img
              src={imgGroup289196}
              alt="App screenshot"
              className="phone-item"
              style={{ position: "absolute", left: 0, top: 72, width: 155, height: 318, objectFit: "contain", filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.18))" }}
            />
            {/* Center phone — 289195 (slightly larger, most prominent) */}
            <img
              src={imgGroup289195}
              alt="App screenshot"
              className="phone-item"
              style={{ position: "absolute", left: 168, top: 110, width: 168, height: 340, objectFit: "contain", filter: "drop-shadow(0px 24px 48px rgba(0,0,0,0.22))", zIndex: 2 }}
            />
            {/* Right phone — 289194 */}
            <img
              src={imgGroup289194}
              alt="App screenshot"
              className="phone-item"
              style={{ position: "absolute", left: 348, top: 8, width: 155, height: 318, objectFit: "contain", filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.18))" }}
            />
          </div>
          </div>

        </div>
      </section>

    </div>
  )
}

function LocationCard({
  name,
  count,
  img,
  height = 280,
}: {
  name: string
  count: string
  img: string
  height?: number
}) {
  return (
    <div
      className="location-card group relative overflow-hidden"
      style={{
        height: `${height}px`,
        borderRadius: "14px",
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Background image */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay — stronger at bottom */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)" }}
      />
      {/* Text pinned to bottom-left */}
      <div
        className="absolute left-0 right-0 bottom-0 flex flex-col items-start"
        style={{ padding: "20px 22px", gap: "3px" }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "26px",
            color: "#FFFFFF",
            margin: 0,
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
            color: "rgba(255,255,255,0.8)",
            margin: 0,
          }}
        >
          {count}
        </p>
      </div>
    </div>
  )
}
