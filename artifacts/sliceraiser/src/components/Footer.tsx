import type { ComponentType, SVGProps } from "react";
import { Link } from "wouter";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/sliceraiser/";

const BG = "#0F172A";
const DIVIDER = "#334155";
const TEXT = "#FFFFFF";
const MUTED = "#94A3B8";
const DIM = "#64748B";
const INACTIVE = "#475569";
const INTER = "'Inter', sans-serif";

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.42a8.16 8.16 0 004.77 1.52V6.49a4.85 4.85 0 01-1.84-.2z" />
    </svg>
  );
}

type SocialItem = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
};

const SOCIALS: SocialItem[] = [
  { name: "Instagram", Icon: Instagram, href: INSTAGRAM_URL },
  { name: "LinkedIn", Icon: Linkedin },
  { name: "X", Icon: Twitter },
  { name: "YouTube", Icon: Youtube },
  { name: "TikTok", Icon: TikTokIcon },
];

function SocialIcons({ size = "w-9 h-9", iconSize = "w-[18px] h-[18px]" }: { size?: string; iconSize?: string }) {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map(({ name, Icon, href }) => {
        const active = Boolean(href);
        const baseColor = active ? TEXT : INACTIVE;
        const baseBorder = active ? TEXT : INACTIVE;
        const className = `inline-flex items-center justify-center ${size} rounded-full transition-colors`;
        const style = {
          color: baseColor,
          border: `1px solid ${baseBorder}`,
          cursor: active ? "pointer" : "default",
          backgroundColor: "transparent",
        } as const;
        if (active && href) {
          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className={className}
              style={style}
            >
              <Icon className={iconSize} />
            </a>
          );
        }
        return (
          <span
            key={name}
            role="img"
            aria-label={`${name} (coming soon)`}
            aria-disabled
            title="Coming soon"
            className={className}
            style={style}
          >
            <Icon className={iconSize} />
          </span>
        );
      })}
    </div>
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
  const className = "text-[15px] leading-[28px] transition-colors";
  const style = { color: MUTED, fontFamily: INTER, fontWeight: 600 };
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
      className="text-[15px] leading-[28px] inline-flex items-center gap-2"
      style={{ color: DIM, fontFamily: INTER, fontWeight: 600, cursor: "not-allowed" }}
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
            <SocialIcons />
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
              <li><FooterLink href="/investor-relations">Investor Relations (IR)</FooterLink></li>
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
