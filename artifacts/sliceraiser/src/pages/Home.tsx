import { useLocation } from 'wouter'
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

export default function Home() {
  const [, setLocation] = useLocation()

  const goOpportunities = () => setLocation('/opportunities')

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      <Header />

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

      <Footer />
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
