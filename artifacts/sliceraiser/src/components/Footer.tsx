import { Link } from "wouter";
import logoImg from "@/assets/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/sliceraiser/";
const LINKEDIN_URL = "https://www.linkedin.com/in/mamoon-alkhatib-77541639/";

const BG = "#0F172A";
const DIVIDER = "#334155";
const TEXT = "#FFFFFF";
const MUTED = "#94A3B8";
const DIM = "#64748B";
const INTER = "'Inter', sans-serif";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11.001-4.121 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[13px] tracking-[0.14em] uppercase mb-5"
      style={{ color: TEXT, fontFamily: INTER, fontWeight: 600 }}
    >
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className = "text-[14px] leading-[28px] transition-colors";
  const style = { color: MUTED, fontFamily: INTER, fontWeight: 400 };
  const onEnter = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = TEXT);
  const onLeave = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = MUTED);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
    </Link>
  );
}

function ComingSoon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[14px] leading-[28px] inline-flex items-center gap-2"
      style={{ color: DIM, fontFamily: INTER, fontWeight: 400, cursor: "not-allowed" }}
      aria-disabled
      title="Coming soon"
    >
      {children}
      <span
        className="text-[10px] uppercase tracking-[0.12em] px-1.5 py-[2px] rounded"
        style={{ border: `1px solid ${DIVIDER}`, color: DIM }}
      >
        Soon
      </span>
    </span>
  );
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors"
      style={{ color: MUTED, border: `1px solid ${DIVIDER}` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = TEXT;
        e.currentTarget.style.borderColor = TEXT;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = MUTED;
        e.currentTarget.style.borderColor = DIVIDER;
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BG, fontFamily: INTER }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div>
            <img
              src={logoImg}
              alt="SliceRaiser"
              className="h-[24px] w-auto object-contain mb-5"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p
              className="text-[14px] leading-[22px] mb-6"
              style={{ color: MUTED, fontWeight: 400 }}
            >
              Invest in real assets from $100. UAE · Australia · Worldwide.
            </p>
            <div className="flex items-center gap-3">
              <SocialIconLink href={INSTAGRAM_URL} label="Instagram">
                <InstagramIcon />
              </SocialIconLink>
              <SocialIconLink href={LINKEDIN_URL} label="LinkedIn">
                <LinkedInIcon />
              </SocialIconLink>
            </div>
          </div>

          {/* Column 2 — Invest */}
          <div>
            <ColHeading>Invest</ColHeading>
            <ul className="space-y-1">
              <li><FooterLink href="/opportunities">Properties</FooterLink></li>
              <li><ComingSoon>Equity</ComingSoon></li>
              <li><ComingSoon>Fixed Income</ComingSoon></li>
            </ul>
          </div>

          {/* Column 3 — Learn */}
          <div>
            <ColHeading>Learn</ColHeading>
            <ul className="space-y-1">
              <li><FooterLink href="/faq">FAQ</FooterLink></li>
              <li><FooterLink href="/how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/ir">Investor Relations (IR)</FooterLink></li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <ColHeading>Company</ColHeading>
            <ul className="space-y-1">
              <li><FooterLink href="/contact">Contact</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/legal">Legal &amp; Regulatory</FooterLink></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${DIVIDER}` }} className="pt-6">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 text-[13px]">
            <p style={{ color: MUTED, fontWeight: 400 }}>
              © 2025 SliceRaiser.com. All rights reserved.
            </p>

            <div
              className="flex flex-wrap items-center justify-center"
              style={{ color: MUTED, fontWeight: 400 }}
            >
              <FooterLink href="/terms">Terms of Use</FooterLink>
              <span className="px-2" style={{ color: DIVIDER }}>·</span>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <span className="px-2" style={{ color: DIVIDER }}>·</span>
              <FooterLink href="/risk-disclosure">Risk Disclosure</FooterLink>
              <span className="px-2" style={{ color: DIVIDER }}>·</span>
              <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
            </div>

            <div className="flex items-center gap-3">
              <SocialIconLink href={INSTAGRAM_URL} label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </SocialIconLink>
              <SocialIconLink href={LINKEDIN_URL} label="LinkedIn">
                <LinkedInIcon className="w-4 h-4" />
              </SocialIconLink>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${DIVIDER}` }} className="mt-6 pt-6 space-y-4">
          <p className="text-[12px] leading-[20px]" style={{ color: DIM, fontWeight: 400 }}>
            All investments carry risk. Past performance is not a reliable indicator of future results. Capital invested is not guaranteed.
          </p>
          <p className="text-[12px] leading-[20px]" style={{ color: DIM, fontWeight: 400 }}>
            SliceRaiser operates as a regulated fractional investment platform under applicable European regulatory frameworks. By using SliceRaiser you agree to our Terms and Conditions, Privacy Policy, and Cookie Notice. All investments through SliceRaiser carry risk and are not guaranteed.
          </p>
          <p className="text-[12px] leading-[20px]" style={{ color: DIM, fontWeight: 400 }}>
            SliceRaiser lists investment opportunities in UAE and Australia. Our platform is open to eligible investors worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
