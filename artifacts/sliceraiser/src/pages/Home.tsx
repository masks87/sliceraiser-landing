import { useLocation } from 'wouter'
import { Building2, TrendingUp, Landmark, CircleDollarSign, type LucideIcon } from 'lucide-react'
import dashboardImg from '@/assets/dashboard.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Figma assets
const imgLuxuryProperty = "https://www.figma.com/api/mcp/asset/763237e7-9544-47f2-95d3-d99e408f8ad6"
const imgFrame1000002023 = "https://www.figma.com/api/mcp/asset/023f3a49-d6a7-4116-bb4c-6dba771cabfc"
const imgMultipleLineGraph = "https://www.figma.com/api/mcp/asset/6cf1a34f-0dac-44a7-8703-82a603e88f10"
const imgGroup289192 = "https://www.figma.com/api/mcp/asset/61fc9281-116e-42cd-9a72-2edb3c71b3db"
const imgGroup289193 = "https://www.figma.com/api/mcp/asset/1c26a17f-cfda-43f2-acb1-85cb28883fbb"
const imgGroup289197 = "https://www.figma.com/api/mcp/asset/0b0f748f-1694-44cd-afce-0810215f25d0"
const imgDubaiUae = "https://www.figma.com/api/mcp/asset/042e7b36-e60b-4f1a-9670-8c7d2d095147"
const imgAbuDhabi = "https://www.figma.com/api/mcp/asset/1628a40a-ce8c-4aa2-9a2c-46334f6ffbc1"
const imgBrisbane = "https://images.unsplash.com/photo-1566734904496-9309bb1798ae?auto=format&fit=crop&w=1600&q=80"
const imgGroup289194 = "https://www.figma.com/api/mcp/asset/abf2831e-ac22-426c-870d-b0d3417deb18"
const imgGroup289195 = "https://www.figma.com/api/mcp/asset/11c45383-8665-4c12-b134-d66c3dbf3c78"
const imgGroup289196 = "https://www.figma.com/api/mcp/asset/4ecc83fa-5659-4999-ae99-1e23767b07b0"
const markets = [
  { name: 'Dubai, UAE', text: 'A leading investment market known for premium real estate, global connectivity and strong investor demand.', img: imgDubaiUae },
  { name: 'Abu Dhabi, UAE', text: 'A strategic capital market supported by long term planning, institutional growth and economic stability.', img: imgAbuDhabi },
  { name: 'Brisbane, Australia', text: 'A growing Australian market with strong lifestyle demand, infrastructure growth and long term investment potential.', img: imgBrisbane },
]

const features: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Building2, title: 'Property Opportunities', desc: 'Explore selected real estate opportunities across focus markets.' },
  { Icon: TrendingUp, title: 'Equity Access', desc: 'Discover opportunities connected to businesses and growth focused ventures.' },
  { Icon: Landmark, title: 'Fixed Income Options', desc: 'Access income focused opportunities designed for structured investment participation.' },
  { Icon: CircleDollarSign, title: 'Start from USD 100', desc: 'Begin exploring investment participation from USD 100 where available.' },
]

export default function Home() {
  const [, setLocation] = useLocation()

  const goProperties = () => setLocation('/properties')
  const goHowItWorks = () => setLocation('/how-it-works')
  const goContact = () => setLocation('/contact')

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      <Header />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-14 lg:pt-[60px] overflow-hidden">
        <img src={imgLuxuryProperty} alt="Luxury Property" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,31,44,0.8)] to-[rgba(0,0,0,0.92)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Invest for Income, Growth and Long Term Value
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed font-normal">
            SliceRaiser brings selected property, equity and fixed income opportunities into one digital platform, helping investors explore income potential, capital growth and diversification from USD 100.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={goProperties} className="bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors">
              Explore Investments
            </button>
            <button onClick={goHowItWorks} className="bg-[#082f6f] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#061f4a] transition-colors">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* ── Build Your SliceRaiser Investment Lifestyle ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl md:text-[28px] font-bold text-[#4285f4] mb-6 leading-snug">
              Build Your SliceRaiser Investment Lifestyle
            </h2>
            <p className="text-[#8e9196] text-base leading-relaxed mb-10 font-normal">
              SliceRaiser is built for people who want more than traditional saving. Explore selected property, equity and fixed income opportunities through a platform designed around income potential, capital growth, diversification and ownership mindset.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={goProperties} className="bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors">
                Explore Investments
              </button>
              <button onClick={goContact} className="border border-[#082f6f] text-[#082f6f] text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#082f6f] hover:text-white transition-colors">
                Contact Our Team
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

      {/* ── Featured Markets ── */}
      <section className="bg-[#f1f0fb4d] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">Featured Markets</h2>
            <p className="text-[#8e9196] text-base max-w-md mx-auto leading-[24px] font-normal">
              Explore selected opportunities across our focus markets, starting with the UAE and Australia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {markets.map(loc => (
              <MarketCard key={loc.name} loc={loc} height="h-[260px]" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SliceRaiser ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

          {/* Left: text + 2x2 cards + button */}
          <div className="flex-1">
            <h2 className="text-[30px] font-bold text-[#4285f4] mb-4 leading-[36px]">
              Why SliceRaiser
            </h2>
            <p className="text-[#8e9196] text-base leading-[24px] mb-8 font-normal">
              SliceRaiser connects selected investment opportunities with a modern platform built around income potential, capital growth, diversification and long term value creation.
            </p>
            {/* 2x2 feature cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map(f => (
                <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: '#F8F9FA' }}
                  >
                    <f.Icon className="w-5 h-5" style={{ color: '#1E3A8A' }} />
                  </div>
                  <h3 className="text-[#020817] font-semibold text-[15px] mb-2">{f.title}</h3>
                  <p className="text-[#8e9196] text-[13px] leading-[20px] font-normal">{f.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={goProperties} className="bg-[#4285f4] text-white text-[14px] font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors">
              Explore Investments
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

      <Footer />
    </div>
  )
}

function MarketCard({ loc, height }: { loc: { name: string; text: string; img: string }; height: string }) {
  return (
    <div className={`group relative ${height} rounded-2xl overflow-hidden shadow-xl block`}>
      <img src={loc.img} alt={loc.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-[18px] leading-[26px]">{loc.name}</p>
        <p className="text-white/85 text-[13px] mt-1 font-normal leading-[18px]">{loc.text}</p>
      </div>
    </div>
  )
}
