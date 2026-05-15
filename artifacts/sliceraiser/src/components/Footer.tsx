import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import { Link } from "wouter";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";
// CMS: all text/link values read from siteSettings — replace with CMS/API values when ready
import {
  footerDescription,
  appDownloadHeading,
  appDownloadSubtext,
  iosAppText,
  iosAppUrl,
  googlePlayText,
  googlePlayUrl,
  socialLinks,
  footerLinkGroups,
  footerLegalLinks,
  copyrightText,
  jurisdictionSettings,
} from "@/config/siteSettings";

const JURISDICTION_CHANGE_EVENT = "sr-jurisdiction-change";

function readJurisdictionCookie(): string {
  if (typeof document === "undefined") return jurisdictionSettings.defaultJurisdiction;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${jurisdictionSettings.cookieName}=`));
  if (!match) return jurisdictionSettings.defaultJurisdiction;
  const value = decodeURIComponent(match.split("=")[1] ?? "");
  const isValid = jurisdictionSettings.options.some((o) => o.value === value);
  return isValid ? value : jurisdictionSettings.defaultJurisdiction;
}

function useJurisdictionDisclaimer(): string {
  const [jurisdiction, setJurisdiction] = useState<string>(
    jurisdictionSettings.defaultJurisdiction,
  );

  useEffect(() => {
    setJurisdiction(readJurisdictionCookie());
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") {
        setJurisdiction(detail);
      } else {
        setJurisdiction(readJurisdictionCookie());
      }
    };
    window.addEventListener(JURISDICTION_CHANGE_EVENT, handler);
    return () => window.removeEventListener(JURISDICTION_CHANGE_EVENT, handler);
  }, []);

  const disclaimers = jurisdictionSettings.disclaimers as Record<string, string>;
  return disclaimers[jurisdiction] ?? disclaimers[jurisdictionSettings.defaultJurisdiction];
}

function JurisdictionDisclaimer() {
  const text = useJurisdictionDisclaimer();
  return (
    <p className="text-[12px] leading-[20px]" style={{ color: "#6b7280", fontWeight: 400 }}>
      {text}
    </p>
  );
}

const APP_BAND_BG = "#1E3A8A";
const GOLD = "#D4AF37";

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.365 1.43c0 1.14-.42 2.23-1.13 3.04-.77.86-2.04 1.53-3.07 1.45-.13-1.11.43-2.27 1.12-3.02.78-.84 2.13-1.46 3.08-1.47zM20.5 17.49c-.55 1.27-.81 1.84-1.52 2.96-.99 1.56-2.39 3.51-4.12 3.52-1.54.02-1.94-1.01-4.03-1-2.09.01-2.53 1.02-4.07 1-1.73-.02-3.06-1.78-4.05-3.34-2.77-4.36-3.06-9.48-1.35-12.21 1.21-1.94 3.13-3.08 4.93-3.08 1.83 0 2.98 1 4.5 1 1.47 0 2.36-1 4.48-1 1.6 0 3.3.87 4.51 2.38-3.96 2.17-3.32 7.84.72 9.77z" />
    </svg>
  );
}

function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path fill="#00C6FF" d="M3.6 2.3C3.22 2.6 3 3.1 3 3.78v16.44c0 .68.22 1.18.6 1.48l8.66-8.7L3.6 2.3z" />
      <path fill="#FFCE00" d="M16.7 14.3l-2.92-2.94 2.92-2.94 3.46 1.96c1.13.65 1.13 1.7 0 2.36L16.7 14.3z" />
      <path fill="#FF3A44" d="M16.7 14.3l-3.7-3.7-9.4 9.42c.42.34 1 .36 1.66.02L16.7 14.3z" />
      <path fill="#00F076" d="M16.7 9.7l-11.44-6.5c-.66-.34-1.24-.32-1.66.02l9.4 9.42 3.7-2.94z" />
    </svg>
  );
}

// CMS: appDownload.storeButton — topLine, bottomLine, url come from siteSettings
function StoreButton({
  Icon,
  topLine,
  bottomLine,
  url,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  topLine: string;
  bottomLine: string;
  url: string;
}) {
  const inner = (
    <div className="w-full sm:w-auto sm:min-w-[180px] lg:w-[200px] h-[56px] inline-flex items-center justify-center sm:justify-start gap-3 bg-black text-white rounded-xl px-4 py-2 select-none"
      style={{ border: "1px solid rgba(255,255,255,0.12)" }}
    >
      <Icon className="w-7 h-7 shrink-0" />
      <div className="text-left leading-tight min-w-0">
        <div className="text-[11px] tracking-wide opacity-80">{topLine}</div>
        <div className="text-[15px] font-semibold leading-tight">{bottomLine}</div>
      </div>
    </div>
  );

  // If URL is empty, render non-navigating button
  if (!url) {
    return (
      <div role="button" aria-disabled title="Coming soon" style={{ cursor: "default" }}>
        {inner}
      </div>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}

function AppWaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
      const res = await fetch(`${basePath}/api/app-waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setEmail("");
      setStatus("success");
      window.setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-[14px] text-white/90" role="status">
        You are on the list! We will notify you when the app launches.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 h-11 px-4 rounded-lg bg-white text-[#0F172A] text-[14px] placeholder:text-[#64748B] outline-none border border-transparent focus:border-white/40"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 px-5 rounded-lg text-[14px] font-semibold transition-opacity disabled:opacity-60"
        style={{ backgroundColor: GOLD, color: "#0F172A" }}
      >
        {status === "submitting" ? "Sending…" : "Notify Me"}
      </button>
      {status === "error" ? (
        <p className="text-[12px] text-white/90 sm:basis-full" role="alert">
          {errorMsg}
        </p>
      ) : null}
    </form>
  );
}

function AppDownloadBand() {
  return (
    <>
      <section style={{ backgroundColor: APP_BAND_BG }} className="w-full text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-[24px] font-bold leading-tight" style={{ color: "#FFFFFF" }}>
              {appDownloadHeading}
            </h2>
            <p className="mt-3 text-[15px] leading-[24px] max-w-xl mx-auto lg:mx-0" style={{ color: "rgba(255,255,255,0.9)" }}>
              {appDownloadSubtext}
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-4 lg:items-end">
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end w-full">
              <StoreButton Icon={AppleIcon} topLine="Download on the" bottomLine="App Store" url={iosAppUrl} />
              <StoreButton Icon={GooglePlayIcon} topLine="Get it on" bottomLine="Google Play" url={googlePlayUrl} />
            </div>
            <div className="w-full lg:max-w-md">
              <AppWaitlistForm />
            </div>
          </div>
        </div>
      </section>
      {/* Gradient bridge — mobile only */}
      <div className="lg:hidden" style={{ background: "linear-gradient(to bottom, #1E3A8A 0%, #0F172A 100%)", height: "48px" }} />
    </>
  );
}

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

// Icon registry — maps siteSettings social names to lucide/custom icons
const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Instagram,
  LinkedIn: Linkedin,
  X: Twitter,
  YouTube: Youtube,
  TikTok: TikTokIcon,
};

// CMS: socialLinks — reads from siteSettings; empty href = icon shown but no navigation
function SocialIcons({ size = "w-9 h-9", iconSize = "w-[18px] h-[18px]" }: { size?: string; iconSize?: string }) {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ name, href }) => {
        const Icon = ICON_MAP[name];
        if (!Icon) return null;
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
        if (active) {
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

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BG, fontFamily: INTER }}>
      <AppDownloadBand />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 Brand */}
          <div>
            {/* CMS: brand.logoUrl — replace logoImg with CMS logoUrl when ready */}
            <img
              src={logoImg}
              alt="SliceRaiser"
              className="h-[24px] w-auto object-contain mb-5"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            {/* CMS: footerDescription */}
            <p className="text-[14px] leading-[22px] mb-6" style={{ color: MUTED, fontWeight: 400 }}>
              {footerDescription}
            </p>
            {/* CMS: socialLinks */}
            <SocialIcons />
          </div>

          {/* Columns 2-4: CMS: footerLinkGroups */}
          {footerLinkGroups.map((group) => (
            <div key={group.heading}>
              <ColHeading>{group.heading}</ColHeading>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid ${DIVIDER}` }} className="pt-6">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 text-[13px]">
            {/* CMS: copyrightText */}
            <p style={{ color: MUTED, fontWeight: 400 }}>{copyrightText}</p>

            {/* CMS: footerLegalLinks */}
            <div className="flex flex-wrap items-center justify-center" style={{ color: MUTED, fontWeight: 400 }}>
              {footerLegalLinks.map((link, i) => (
                <span key={link.href} className="flex items-center">
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                  {i < footerLegalLinks.length - 1 && (
                    <span className="px-2" style={{ color: DIVIDER }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${DIVIDER}` }} className="mt-6 pt-6 space-y-4">
          <p className="text-[12px] leading-[20px]" style={{ color: DIM, fontWeight: 400 }}>
            All investments carry risk. Past performance is not a reliable indicator of future results. Capital invested is not guaranteed.
          </p>
          <JurisdictionDisclaimer />
          <p className="text-[12px] leading-[20px]" style={{ color: DIM, fontWeight: 400 }}>
            By using SliceRaiser you agree to our Terms and Conditions, Privacy Policy, and Cookie Notice. All investments through SliceRaiser carry risk and are not guaranteed.
          </p>
          <p className="text-[12px] leading-[20px]" style={{ color: DIM, fontWeight: 400 }}>
            SliceRaiser lists investment opportunities in UAE and Australia. Our platform is open to eligible investors worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
