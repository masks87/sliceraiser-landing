import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useClerk, useUser } from '@clerk/react'
import logoImg from '@/assets/logo.png'
import dashboardImg from '@/assets/dashboard.png'

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

// Figma assets
const imgLuxuryProperty = "https://www.figma.com/api/mcp/asset/763237e7-9544-47f2-95d3-d99e408f8ad6"
const imgFrame1000002023 = "https://www.figma.com/api/mcp/asset/023f3a49-d6a7-4116-bb4c-6dba771cabfc"
const imgMultipleLineGraph = "https://www.figma.com/api/mcp/asset/6cf1a34f-0dac-44a7-8703-82a603e88f10"
const imgGroup289192 = "https://www.figma.com/api/mcp/asset/61fc9281-116e-42cd-9a72-2edb3c71b3db"
const imgGroup289193 = "https://www.figma.com/api/mcp/asset/1c26a17f-cfda-43f2-acb1-85cb28883fbb"
const imgGroup289197 = "https://www.figma.com/api/mcp/asset/0b0f748f-1694-44cd-afce-0810215f25d0"
const imgDubaiUae = "https://www.figma.com/api/mcp/asset/042e7b36-e60b-4f1a-9670-8c7d2d095147"
const imgAbuDhabi = "https://www.figma.com/api/mcp/asset/1628a40a-ce8c-4aa2-9a2c-46334f6ffbc1"
const imgSpain = "https://www.figma.com/api/mcp/asset/90d1357c-0405-49b2-9b5f-8238ff3c56d0"
const imgFrance = "https://www.figma.com/api/mcp/asset/daa66c34-a192-456c-a7eb-8f403b001a57"
const imgItaly = "https://www.figma.com/api/mcp/asset/739b36ea-6929-4086-abae-bcb4346e0e71"
const imgGroup289194 = "https://www.figma.com/api/mcp/asset/abf2831e-ac22-426c-870d-b0d3417deb18"
const imgGroup289195 = "https://www.figma.com/api/mcp/asset/11c45383-8665-4c12-b134-d66c3dbf3c78"
const imgGroup289196 = "https://www.figma.com/api/mcp/asset/4ecc83fa-5659-4999-ae99-1e23767b07b0"
const imgIconHighROI = "https://www.figma.com/api/mcp/asset/cb2ee8a2-5aa2-4f4e-be1f-a7d3f709f684"
const imgIconSecure = "https://www.figma.com/api/mcp/asset/1f0da27d-da37-4abb-94c5-8ca1f7fc1901"
const imgIconManagement = "https://www.figma.com/api/mcp/asset/72d0a2d9-0aa4-4c05-b667-1412dfed994a"
const imgIconGlobal = "https://www.figma.com/api/mcp/asset/80b41464-6e0b-4952-a743-2dd559f7f93e"
const imgSocialTwitter = "https://www.figma.com/api/mcp/asset/cdbeb314-2cce-4b17-98f4-a17aa79aa1eb"
const imgSocialFacebook = "https://www.figma.com/api/mcp/asset/f437d7e8-0ada-421e-9f68-13c6a8b89536"
const imgSocialInstagram = "https://www.figma.com/api/mcp/asset/9bc11b59-4ea6-42d3-978c-8076bc4ebe80"
const imgSocialLinkedin = "https://www.figma.com/api/mcp/asset/dbf8da65-88e6-45a1-9f8e-54b197c90ec4"

const locations = [
  { name: 'Dubai, UAE', count: '120 Properties', img: imgDubaiUae },
  { name: 'Abu Dhabi, UAE', count: '95 Properties', img: imgAbuDhabi },
  { name: 'Spain', count: '78 Properties', img: imgSpain },
  { name: 'France', count: '62 Properties', img: imgFrance },
  { name: 'Italy', count: '56 Properties', img: imgItaly },
]

const features = [
  { icon: imgIconHighROI, title: 'High ROI', desc: 'Enjoy exceptional returns on your real estate investments in booming markets.' },
  { icon: imgIconSecure, title: 'Secure Investment', desc: 'Our properties are carefully vetted to ensure security and long-term value appreciation.' },
  { icon: imgIconManagement, title: 'Professional Management', desc: 'Full-service property management solutions to maximize your rental income.' },
  { icon: imgIconGlobal, title: 'Global Portfolio', desc: 'Diverse investment opportunities across premium locations in UAE and Europe.' },
]

const desktopNavLinks = [
  { label: 'HOME', to: '/', active: true },
  { label: 'PROPERTIES INVESTMENTS', to: '/opportunities', active: false },
  { label: 'EQUITY INVESTMENTS', to: '/equity', active: false },
  { label: 'FIXED INCOME', to: '/fixed-income', active: false },
  { label: 'DASHBOARD', to: '/dashboard', active: false },
]

const mobileNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties Investments', to: '/opportunities' },
  { label: 'Equity Investments', to: '/equity' },
  { label: 'Fixed Income', to: '/fixed-income' },
  { label: 'Dashboard', to: '/dashboard' },
]

function Logo() {
  return (
    <img src={logoImg} alt="Slice Raiser" className="h-[22px] w-auto object-contain" />
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [, setLocation] = useLocation()
  const { openSignIn, openSignUp } = useClerk()
  const { isSignedIn } = useUser()

  const goOpportunities = () => setLocation('/opportunities')
  const handleSignIn = () => {
    if (isSignedIn) {
      setLocation('/dashboard')
      return
    }
    openSignIn({ afterSignInUrl: `${basePath}/dashboard` } as Parameters<typeof openSignIn>[0])
  }
  const handleSignUp = () => {
    if (isSignedIn) {
      setLocation('/dashboard')
      return
    }
    openSignUp({ afterSignUpUrl: `${basePath}/dashboard` } as Parameters<typeof openSignUp>[0])
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.07)]">

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center justify-center h-[60px] px-6">
          <div className="flex items-center gap-3">

            {/* Logo */}
            <Logo />

            {/* Nav links */}
            <div className="flex items-center gap-5 ml-6">
              {desktopNavLinks.map(({ label, to, active }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setLocation(to)}
                  className={`text-[11px] font-semibold tracking-wide whitespace-nowrap transition-colors bg-transparent border-0 cursor-pointer ${
                    active ? 'text-[#4285f4]' : 'text-[#020817] hover:text-[#4285f4]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-200 mx-3 shrink-0" />

            {/* Location */}
            <div className="flex flex-col shrink-0">
              <span className="text-[10px] text-[#8e9196] leading-tight">Location</span>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-[#4285f4] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-[13px] font-semibold text-[#020817]">Dubai</span>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 w-40 shrink-0">
              <svg className="w-4 h-4 text-[#8e9196] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search here"
                className="text-[12px] text-[#8e9196] bg-transparent outline-none w-full placeholder-[#8e9196]"
              />
            </div>

            {/* Filter icon */}
            <button className="shrink-0 text-[#8e9196] hover:text-[#4285f4] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
              </svg>
            </button>

            {/* Auth buttons */}
            <div className="flex items-center gap-2">
              <button onClick={handleSignIn} className="bg-[#4285f4] text-white text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-[#3570d4] transition-colors whitespace-nowrap">
                Log In
              </button>
              <button onClick={handleSignUp} className="bg-[#082f6f] text-white text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-[#061f4a] transition-colors whitespace-nowrap">
                Sign Up
              </button>
            </div>

          </div>
        </nav>

        {/* Mobile nav */}
        <nav className="lg:hidden flex items-center justify-between h-14 px-6">
          <Logo />
          <button className="p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-[#020817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {mobileNavLinks.map(({ label, to }) => (
              <button
                key={label}
                type="button"
                onClick={() => { setMenuOpen(false); setLocation(to) }}
                className="text-sm text-left text-[#8e9196] hover:text-[#4285f4] transition-colors bg-transparent border-0 cursor-pointer p-0"
              >
                {label}
              </button>
            ))}
            <div className="flex gap-3 pt-2 border-t border-gray-100">
              <button onClick={() => { setMenuOpen(false); handleSignIn() }} className="flex-1 bg-[#4285f4] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-[#3570d4] transition-colors">
                Log In
              </button>
              <button onClick={() => { setMenuOpen(false); handleSignUp() }} className="flex-1 bg-[#082f6f] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-[#061f4a] transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-14 lg:pt-[60px] overflow-hidden">
        <img src={imgLuxuryProperty} alt="Luxury Property" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,31,44,0.8)] to-[rgba(0,0,0,0.92)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Discover Your Perfect<br />
            <span className="text-[#4285f4]">Property Investment</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed font-normal">
            Explore premium real estate opportunities in UAE and Europe with our curated selection of luxury properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={goOpportunities} className="bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors">
              Browse Properties
            </button>
            <button onClick={goOpportunities} className="bg-[#082f6f] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#061f4a] transition-colors">
              Investment Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* ── Discipline Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl md:text-[28px] font-bold text-[#4285f4] mb-6 leading-snug">
              Discipline will take you places motivation can't
            </h2>
            <p className="text-[#8e9196] text-base leading-relaxed mb-10 font-normal">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors">
                Schedule a Demo
              </button>
              <button className="border border-[#082f6f] text-[#082f6f] text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#082f6f] hover:text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Phone cluster */}
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

      {/* ── Featured Properties ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">Featured Properties</h2>
            <p className="text-[#8e9196] text-base max-w-md mx-auto leading-[24px] font-normal">
              Explore our handpicked selection of premium properties across luxury locations in UAE and Europe.
            </p>
          </div>
          {/* Dashboard screenshot */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img src={dashboardImg} alt="SliceRaiser Dashboard" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* ── Featured Locations ── */}
      <section className="bg-[#f1f0fb4d] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">Featured Locations</h2>
            <p className="text-[#8e9196] text-base max-w-sm mx-auto leading-[24px] font-normal">
              Explore our exquisite properties in these premium locations across UAE and Europe.
            </p>
          </div>
          {/* Row 1: 2 large cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {locations.slice(0, 2).map(loc => (
              <LocationCard key={loc.name} loc={loc} height="h-[260px]" />
            ))}
          </div>
          {/* Row 2: 3 smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {locations.slice(2).map(loc => (
              <LocationCard key={loc.name} loc={loc} height="h-[200px]" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Invest in Premium Real Estate ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

          {/* Left: text + 2x2 cards + button */}
          <div className="flex-1">
            <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">
              Invest in Premium Real Estate
            </h2>
            <p className="text-[#8e9196] text-base leading-[24px] mb-8 font-normal">
              Our curated real estate investment opportunities offer exceptional returns in high-growth markets.
              With strategic locations across UAE and Europe, our properties combine luxury living with strong
              investment potential.
            </p>
            {/* 2x2 feature cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map(f => (
                <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <img src={f.icon} alt="" className="w-6 h-6 mb-3" />
                  <h3 className="text-[#020817] font-semibold text-[15px] mb-2">{f.title}</h3>
                  <p className="text-[#8e9196] text-[13px] leading-[20px] font-normal">{f.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={goOpportunities} className="bg-[#4285f4] text-white text-[14px] font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors">
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

      {/* ── Footer ── */}
      <footer className="bg-white py-14 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-[#8e9196] text-[14px] leading-[20px] mb-5 font-normal">
                Discover your perfect property investment opportunity across UAE and Europe with our premium real estate marketplace.
              </p>
              <div className="flex items-center gap-4 mb-4">
                {[imgSocialTwitter, imgSocialFacebook, imgSocialInstagram, imgSocialLinkedin].map((src, i) => (
                  <a key={i} href="#" className="w-5 h-5 block hover:opacity-70 transition-opacity">
                    <img src={src} alt="" className="w-full h-full object-contain" />
                  </a>
                ))}
              </div>
              <button onClick={handleSignUp} className="bg-[#4285f4] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#3570d4] transition-colors">
                Sign Up
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#020817] font-semibold text-[16px] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Properties', 'Investments', 'About Us', 'Contact'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#8e9196] text-[14px] leading-[24px] font-normal hover:text-[#4285f4] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Markets */}
            <div>
              <h3 className="text-[#020817] font-semibold text-[16px] mb-4">Markets</h3>
              <p className="text-[#8e9196] text-[14px] leading-[24px] font-normal">
                UAE · Australia · Worldwide
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#020817] font-semibold text-[16px] mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-1 shrink-0 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span className="text-[#8e9196] text-[14px] leading-[20px] font-normal">Sheikh Zayed Road, Dubai, UAE</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 shrink-0 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  <span className="text-[#8e9196] text-[14px] leading-[20px] font-normal">+971 4 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 shrink-0 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <span className="text-[#8e9196] text-[14px] leading-[20px] font-normal">info@sliceraiser.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#8e9196] text-[13px] font-normal">© 2026 SliceRaiser. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end text-[#8e9196] text-[13px] font-normal">
              <a href="#" className="hover:text-[#4285f4] transition-colors">Privacy Policy</a>
              <span className="px-2">·</span>
              <a href="#" className="hover:text-[#4285f4] transition-colors">Terms of Service</a>
              <span className="px-2">·</span>
              <a href="#" className="hover:text-[#4285f4] transition-colors">Risk Disclosure</a>
              <span className="px-2">·</span>
              <Link href="/legal" className="hover:text-[#4285f4] transition-colors">Legal &amp; Regulatory</Link>
              <span className="px-2">·</span>
              <a href="#" className="hover:text-[#4285f4] transition-colors">Cookie Policy</a>
            </div>
          </div>

          <p className="mt-6 text-[#8e9196] text-[12px] leading-[18px] font-normal text-center sm:text-left">
            SliceRaiser is a regulated investment platform. Investing involves risk and capital is not guaranteed. Past performance is not indicative of future results. Please read our Risk Disclosure before investing. SliceRaiser operates under applicable European regulations. Open to eligible investors worldwide.
          </p>
        </div>
      </footer>
    </div>
  )
}

function LocationCard({ loc, height }: { loc: { name: string; count: string; img: string }; height: string }) {
  return (
    <a href="#" className={`group relative ${height} rounded-2xl overflow-hidden shadow-xl block`}>
      <img src={loc.img} alt={loc.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-[18px] leading-[26px]">{loc.name}</p>
        <p className="text-white/75 text-[13px] mt-0.5 font-normal">{loc.count}</p>
      </div>
    </a>
  )
}
