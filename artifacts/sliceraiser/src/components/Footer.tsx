import logoImg from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white py-14 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <img src={logoImg} alt="Slice Raiser" className="h-[22px] w-auto object-contain" />
            </div>
            <p className="text-[#8e9196] text-[14px] leading-[20px] mb-5 font-normal">
              Discover your perfect property investment opportunity across UAE and Europe with our premium real estate
              marketplace.
            </p>
          </div>

          <div>
            <h3 className="text-[#020817] font-semibold text-[16px] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Opportunities", "Dashboard", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#8e9196] text-[14px] leading-[24px] font-normal hover:text-[#4285f4] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#020817] font-semibold text-[16px] mb-4">Regions</h3>
            <ul className="space-y-2">
              {["Dubai, UAE", "Abu Dhabi, UAE", "Spain", "France", "Italy"].map((region) => (
                <li key={region}>
                  <a href="#" className="text-[#8e9196] text-[14px] leading-[24px] font-normal hover:text-[#4285f4] transition-colors">
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#020817] font-semibold text-[16px] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 shrink-0 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-[#8e9196] text-[14px] leading-[20px] font-normal">Sheikh Zayed Road, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-[#8e9196] text-[14px] leading-[20px] font-normal">+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-[#8e9196] text-[14px] leading-[20px] font-normal">info@sliceraiser.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8e9196] text-[13px] font-normal">© 2026 SliceRaiser. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Policy"].map((item) => (
              <a key={item} href="#" className="text-[#8e9196] text-[13px] font-normal hover:text-[#4285f4] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
