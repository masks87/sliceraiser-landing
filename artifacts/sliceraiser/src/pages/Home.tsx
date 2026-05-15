import { useLocation } from 'wouter'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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

/* ── Shared animation variants ──────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay },
  }),
}

const phoneContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.1 } },
}

const phoneItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease } },
}

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

const vp = { once: true, amount: 0.1 } as const

export default function Home() {
  const [, setLocation] = useLocation()
  const goProperties = () => setLocation('/properties')
  const goContact = () => setLocation('/contact')

  const heroImgRef = useRef<HTMLImageElement>(null)

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

    const currentIndex = () => {
      const sections = getSections()
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        return sections.length
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

    const onWheel = (e: WheelEvent) => {
      if (isMobile()) return
      if (locked) { e.preventDefault(); return }
      e.preventDefault()
      lock()
      goTo(currentIndex() + (e.deltaY > 0 ? 1 : -1))
    }

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

        <div
          className="relative z-10 w-full flex flex-col items-center"
          style={{ maxWidth: "1400px", padding: "40px 24px 0", gap: "48px" }}
        >
          <div
            className="flex flex-col items-center"
            style={{ width: "100%", maxWidth: "768px", gap: "24px" }}
          >
            <motion.h1
              className="home-hero-title"
              style={{
                width: "100%",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "60px",
                lineHeight: "60px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Discover Your Perfect<br />
              <span style={{ color: "#4285F4" }}>Property Investment</span>
            </motion.h1>

            <motion.p
              style={{
                width: "100%",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "28px",
                textAlign: "center",
                color: "rgba(255,255,255,0.9)",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
            >
              Explore premium real estate opportunities in UAE and Europe with our curated selection of luxury properties.
            </motion.p>

            <motion.div
              className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center"
              style={{ gap: "16px", paddingTop: "8px", paddingBottom: "80px" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.30}
            >
              <motion.button
                onClick={goProperties}
                className="flex items-center justify-center"
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
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(66,133,244,0.45)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                Browse Properties
              </motion.button>

              <motion.button
                onClick={goProperties}
                className="flex items-center justify-center"
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
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(8,47,111,0.45)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                Investment Opportunities
              </motion.button>
            </motion.div>
          </div>

          {/* Search filter form — hidden per Figma */}
          <div style={{ display: "none" }} />
        </div>
      </section>

      {/* ── Section 2: Build Your Investment Lifestyle ── */}
      <section className="snap-section snap-s-phone bg-white overflow-hidden" data-label="overview" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "60px 24px" }}>
        <div className="mx-auto flex flex-col lg:flex-row items-center" style={{ maxWidth: "1400px", gap: "58px" }}>
          {/* Left: content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left" style={{ maxWidth: "687px", gap: "20px" }}>
            <motion.h2
              className="home-section-h2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "117.7%",
                letterSpacing: "-0.03em",
                color: "#4285F4",
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0}
            >
              Build Your SliceRaiser Investment Lifestyle
            </motion.h2>

            <motion.p
              className="home-section-body"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "158.7%",
                letterSpacing: "-0.03em",
                color: "#000000",
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.12}
            >
              SliceRaiser is built for people who want more than traditional saving. Explore selected property, equity and fixed income opportunities through a platform designed around income potential, capital growth, diversification and ownership mindset.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start"
              style={{ gap: "20px" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.24}
            >
              <motion.button
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
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(66,133,244,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                Schedule a Demo
              </motion.button>

              <motion.button
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
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(8,47,111,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>

          {/* Right: phone cluster */}
          <div className="w-full lg:w-auto flex justify-center overflow-visible flex-shrink-0">
            <motion.div
              className="phone-cluster-wrap"
              style={{ position: "relative", width: "668px", height: "614px", flexShrink: 0 }}
              variants={phoneContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.img src={imgPhone289193} alt="" className="phone-item" variants={phoneItem}
                style={{ position:"absolute", left:91, top:35, width:176, height:360, objectFit:"contain", filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }} />
              <motion.img src={imgPhone289197} alt="" className="phone-item" variants={phoneItem}
                style={{ position:"absolute", left:291, top:215, width:176, height:360, objectFit:"contain", filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }} />
              <motion.img src={imgPhone289192} alt="" className="phone-item" variants={phoneItem}
                style={{ position:"absolute", left:491, top:21, width:177, height:360, objectFit:"contain", filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.18))" }} />
              <motion.img src={imgPhoneFrame} alt="" className="phone-item" variants={phoneItem}
                style={{ position:"absolute", left:298, top:0, width:169, height:187, objectFit:"contain", filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.14))" }} />
              <motion.img src={imgLineGraph} alt="" className="phone-item" variants={phoneItem}
                style={{ position:"absolute", left:0, top:427, width:182, height:187, objectFit:"contain", filter:"drop-shadow(0 8px 20px rgba(0,0,0,0.12))" }} />
              <motion.img src={imgPhoneBg} alt="" className="phone-item" variants={phoneItem}
                style={{ position:"absolute", left:540, top:395, width:109, height:174, objectFit:"contain", filter:"drop-shadow(0 8px 20px rgba(0,0,0,0.12))" }} />
            </motion.div>
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
          <div className="flex flex-col items-center w-full" style={{ gap: "14px" }}>
            <motion.h2
              className="home-section-h2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#4285F4",
                margin: 0,
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0}
            >
              Featured Properties
            </motion.h2>
            <motion.p
              className="home-section-body"
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.12}
            >
              Explore our handpicked selection of premium properties across luxury locations in UAE and Europe.
            </motion.p>
          </div>

          <motion.div
            className="w-full"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0.24}
          >
            <img
              src={imgBrowserMockup}
              alt="SliceRaiser platform — Featured Properties"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </motion.div>
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
          <div className="flex flex-col items-center w-full" style={{ gap: "14px" }}>
            <motion.h2
              className="home-section-h2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#4285F4",
                margin: 0,
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0}
            >
              Featured Locations
            </motion.h2>
            <motion.p
              className="home-section-body"
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.12}
            >
              Explore our exquisite properties in these premium locations across UAE and Europe.
            </motion.p>
          </div>

          {/* ── Desktop: 5 cards in 2 rows ── */}
          <div className="hidden lg:flex flex-col w-full" style={{ gap: "16px" }}>
            <motion.div
              className="w-full"
              style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <motion.div variants={cardItem}><LocationCard name="Dubai, UAE"     count="120 Properties" img={imgDubai}    height={280} /></motion.div>
              <motion.div variants={cardItem}><LocationCard name="Abu Dhabi, UAE" count="95 Properties"  img={imgAbuDhabi} height={280} /></motion.div>
            </motion.div>
            <motion.div
              className="w-full"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <motion.div variants={cardItem}><LocationCard name="Spain"  count="78 Properties" img={imgSpain}  height={240} /></motion.div>
              <motion.div variants={cardItem}><LocationCard name="France" count="62 Properties" img={imgFrance} height={240} /></motion.div>
              <motion.div variants={cardItem}><LocationCard name="Italy"  count="56 Properties" img={imgItaly}  height={240} /></motion.div>
            </motion.div>
          </div>

          {/* ── Mobile: 3 cards only ── */}
          <motion.div
            className="flex flex-col lg:hidden w-full"
            style={{ gap: "14px" }}
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.div variants={cardItem}><LocationCard name="Dubai, UAE"     count="120 Properties" img={imgDubai}    height={200} /></motion.div>
            <motion.div variants={cardItem}><LocationCard name="Abu Dhabi, UAE" count="95 Properties"  img={imgAbuDhabi} height={200} /></motion.div>
            <motion.div variants={cardItem}><LocationCard name="Europe"         count="200+ Properties" img={imgFrance}  height={200} /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: Invest in Premium Real Estate ── */}
      <section className="snap-section snap-s-phone bg-white overflow-hidden" data-label="invest" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "60px 24px" }}>
        <div
          className="mx-auto flex flex-col lg:flex-row items-center"
          style={{ maxWidth: "1400px", padding: "0 32px", gap: "64px", width: "100%" }}
        >
          {/* ── LEFT column ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left" style={{ maxWidth: "636px", gap: "24px" }}>

            <motion.h2
              className="home-section-h2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "40px",
                color: "#4285F4",
                margin: 0,
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0}
            >
              Invest in Premium Real Estate
            </motion.h2>

            <motion.p
              className="home-section-body"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#8E9196",
                margin: 0,
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.12}
            >
              Our curated real estate investment opportunities offer exceptional returns in high-growth markets. With strategic locations across UAE and Europe, our properties combine luxury living with strong investment potential.
            </motion.p>

            {/* 2 × 2 feature cards — staggered */}
            <motion.div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", width: "100%" }}
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  className="feature-card-item flex flex-col items-start"
                  variants={cardItem}
                  style={{
                    padding: "21px",
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "16px",
                  }}
                  whileHover={{ y: -3, boxShadow: "0px 28px 36px -6px rgba(66,133,244,0.15), 0px 12px 16px -6px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.22 }}
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
                </motion.div>
              ))}
            </motion.div>

            <motion.button
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
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              custom={0.36}
              whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(66,133,244,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              Explore Investment Opportunities
            </motion.button>
          </div>

          {/* ── RIGHT: phone cluster — 505×425 ── */}
          <div className="w-full lg:w-auto flex justify-center overflow-visible flex-shrink-0">
            <motion.div
              className="phone-cluster-s5-wrap"
              style={{ position: "relative", width: "505px", height: "425px", flexShrink: 0 }}
              variants={phoneContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.img src={imgGroup289196} alt="App screenshot" className="phone-item" variants={phoneItem}
                style={{ position: "absolute", left: 0, top: 72, width: 155, height: 318, objectFit: "contain", filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.18))" }} />
              <motion.img src={imgGroup289195} alt="App screenshot" className="phone-item" variants={phoneItem}
                style={{ position: "absolute", left: 168, top: 110, width: 168, height: 340, objectFit: "contain", filter: "drop-shadow(0px 24px 48px rgba(0,0,0,0.22))", zIndex: 2 }} />
              <motion.img src={imgGroup289194} alt="App screenshot" className="phone-item" variants={phoneItem}
                style={{ position: "absolute", left: 348, top: 8, width: 155, height: 318, objectFit: "contain", filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.18))" }} />
            </motion.div>
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
    <motion.div
      className="location-card group relative overflow-hidden"
      style={{
        height: `${height}px`,
        borderRadius: "14px",
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)" }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 flex flex-col items-start"
        style={{ padding: "20px 22px", gap: "3px" }}
      >
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "26px", color: "#FFFFFF", margin: 0 }}>
          {name}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "rgba(255,255,255,0.8)", margin: 0 }}>
          {count}
        </p>
      </div>
    </motion.div>
  )
}
