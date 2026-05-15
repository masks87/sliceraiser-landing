import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Show, useClerk, useUser } from "@clerk/react";
import logoImg from "@/assets/logo.svg";
import { jurisdictionSettings } from "@/config/siteSettings";

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

function writeJurisdictionCookie(value: string) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${jurisdictionSettings.cookieName}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function JurisdictionSelector() {
  const [value, setValue] = useState<string>(jurisdictionSettings.defaultJurisdiction);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setValue(readJurisdictionCookie());
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const select = (next: string) => {
    setValue(next);
    setOpen(false);
    writeJurisdictionCookie(next);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(JURISDICTION_CHANGE_EVENT, { detail: next }));
    }
  };

  const current = jurisdictionSettings.options.find((o) => o.value === value);

  return (
    <div ref={ref} className="flex flex-col shrink-0" style={{ gap: "2px", position: "relative", zIndex: 50 }}>
      {/* Label */}
      <span
        className="flex items-center gap-1"
        style={{ fontSize: "10px", color: "#94A3B8", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        Regulatory
      </span>

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
          backgroundColor: open ? "#EFF6FF" : "#F8FAFC",
          border: `1px solid ${open ? "#4285F4" : "#E2E8F0"}`,
          color: "#122D4D",
          fontSize: "13px",
          fontWeight: 600,
          padding: "5px 10px",
          borderRadius: "8px",
          minWidth: "90px",
          cursor: "pointer",
          transition: "border-color 0.15s, background-color 0.15s",
          outline: "none",
        }}
      >
        <span>{current?.label ?? value}</span>
        <svg
          width="12" height="12" fill="none" stroke="#4285F4" strokeWidth="2.5"
          viewBox="0 0 24 24"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease", flexShrink: 0 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            minWidth: "140px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "12px",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12), 0px 2px 6px rgba(0,0,0,0.06)",
            overflow: "hidden",
            animation: "dropdownFade 0.15s ease",
          }}
        >
          {jurisdictionSettings.options.map((opt) => {
            const selected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={selected}
                onClick={() => select(opt.value)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 14px",
                  fontSize: "13px",
                  fontWeight: selected ? 600 : 400,
                  color: selected ? "#4285F4" : "#122D4D",
                  backgroundColor: selected ? "#EFF6FF" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.12s",
                  gap: "8px",
                }}
                onMouseEnter={(e) => { if (!selected) (e.currentTarget as HTMLDivElement).style.backgroundColor = "#F8FAFC"; }}
                onMouseLeave={(e) => { if (!selected) (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent"; }}
              >
                <span>{opt.label}</span>
                {selected && (
                  <svg width="13" height="13" fill="none" stroke="#4285F4" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function useAuthModal() {
  const { openSignIn, openSignUp } = useClerk();
  const fallbackRedirectUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/dashboard`;
  return {
    openSignIn: () => openSignIn({ fallbackRedirectUrl }),
    openSignUp: () => openSignUp({ fallbackRedirectUrl }),
  };
}

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "PROPERTIES INVESTMENTS", to: "/properties" },
  { label: "EQUITY INVESTMENTS", to: "/equity" },
  { label: "FIXED INCOME", to: "/fixed-income" },
  { label: "MARKETPLACE", to: "/properties" },
];

const mobileLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Equity", to: "/equity" },
  { label: "Fixed Income", to: "/fixed-income" },
  { label: "Marketplace", to: "/properties" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <img src={logoImg} alt="Slice Raiser" className="h-[16px] sm:h-[18px] lg:h-[22px] w-auto object-contain" />
    </Link>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-4 py-2 whitespace-nowrap group"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: active ? 800 : 500,
        color: active || hovered ? "#4285F4" : "#122D4D",
        transition: "color 0.18s ease",
      }}
    >
      {label}
      {/* underline bar */}
      <span
        className="absolute bottom-0 left-4 right-4 rounded-full"
        style={{
          height: "2px",
          backgroundColor: "#4285F4",
          transform: active || hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.2s ease",
        }}
      />
    </Link>
  );
}

function SignedInMenu() {
  const { signOut } = useClerk();
  const { user } = useUser();
  const initial =
    user?.firstName?.[0] ?? user?.username?.[0] ?? user?.primaryEmailAddress?.emailAddress?.[0] ?? "U";
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-8 h-8 rounded-full text-white text-[12px] font-semibold flex items-center justify-center"
        style={{ backgroundColor: "#082F6F" }}
        title={user?.primaryEmailAddress?.emailAddress ?? ""}
      >
        {initial.toUpperCase()}
      </div>
      <button
        onClick={() => signOut({ redirectUrl: import.meta.env.BASE_URL })}
        className="text-[12px] font-medium hover:text-[#4285f4] transition-colors"
        style={{ color: "#122D4D" }}
      >
        Sign out
      </button>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { openSignIn, openSignUp } = useAuthModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.07)]">

      {/* ── Desktop nav (80px height per Figma) ── */}
      <nav className="hidden lg:flex items-center justify-center h-[80px] px-6 gap-0">
        <div className="flex items-center gap-4 w-full max-w-[1600px]">

          <Logo />

          {/* Nav links */}
          <div className="flex items-center ml-4">
            {navLinks.map(({ label, to }) => {
              const isActive =
                label === "HOME"
                  ? location === "/"
                  : label === "MARKETPLACE"
                  ? false
                  : location === to;
              return (
                <NavLink key={label} href={to} active={isActive} label={label} />
              );
            })}
          </div>

          {/* Blue vertical divider */}
          <div
            className="shrink-0 mx-2"
            style={{ width: "1px", height: "36px", backgroundColor: "#4285F4" }}
          />

          {/* Location + Search — grouped and bottom-aligned so select & bar sit on the same line */}
          <div className="flex items-end gap-3 shrink-0">
            <JurisdictionSelector />

            {/* Search bar */}
            <div
              className="flex items-center gap-2 px-3"
              style={{
                width: "160px",
                height: "34px",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
              }}
            >
              <svg
                className="w-4 h-4 shrink-0"
                style={{ color: "#919295" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent outline-none w-full"
                style={{ fontSize: "12px", color: "#919295" }}
              />
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3 ml-2 shrink-0">
            <Show when="signed-out">
              <button
                type="button"
                onClick={() => openSignIn()}
                className="flex items-center justify-center whitespace-nowrap"
                style={{
                  width: "120px",
                  height: "48px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%), #4285F4",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "-0.01em",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(66,133,244,0.45)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => openSignUp()}
                className="flex items-center justify-center whitespace-nowrap"
                style={{
                  width: "120px",
                  height: "48px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%), #082F6F",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "-0.01em",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(8,47,111,0.45)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                Sign Up
              </button>
            </Show>
            <Show when="signed-in">
              <SignedInMenu />
            </Show>
          </div>
        </div>
      </nav>

      {/* ── Mobile nav ── */}
      <nav className="lg:hidden flex items-center justify-between px-4" style={{ height: "52px" }}>
        <Logo />
        {/* Animated hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex flex-col justify-center items-center w-10 h-10 rounded-xl gap-[5px] transition-colors shrink-0"
          style={{ background: menuOpen ? "#EFF6FF" : "transparent" }}
        >
          <span style={{ display: "block", width: "20px", height: "2px", background: "#122D4D", borderRadius: "2px", transition: "transform 0.28s ease", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#122D4D", borderRadius: "2px", transition: "opacity 0.28s ease", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#122D4D", borderRadius: "2px", transition: "transform 0.28s ease", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer + backdrop */}
      {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40"
            style={{ top: "52px", background: "rgba(0,0,0,0.22)", backdropFilter: "blur(2px)" }}
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="lg:hidden fixed left-0 right-0 z-50 bg-white flex flex-col"
            style={{ top: "52px", padding: "8px 20px 24px", boxShadow: "0 20px 50px rgba(0,0,0,0.13)", animation: "slideDown 0.22s ease" }}
          >
            {/* Nav links */}
            <div className="flex flex-col py-2">
              {mobileLinks.map((link) => {
                const isActive = link.to === "/" ? location === "/" : location === link.to;
                return (
                  <Link
                    key={link.label}
                    href={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center px-3 py-3.5 rounded-xl transition-colors"
                    style={{ fontSize: "15px", fontWeight: isActive ? 700 : 500, color: isActive ? "#4285F4" : "#122D4D", background: isActive ? "#EFF6FF" : "transparent" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div style={{ height: "1px", background: "#F1F5F9", margin: "4px 0 16px" }} />
            <Show when="signed-out">
              <div className="flex flex-col gap-3">
                <button type="button" onClick={() => { setMenuOpen(false); openSignIn(); }}
                  className="w-full flex items-center justify-center font-semibold rounded-xl transition-opacity hover:opacity-90"
                  style={{ height: "48px", fontSize: "15px", color: "#fff", background: "#4285F4", border: "none", cursor: "pointer" }}>
                  Log In
                </button>
                <button type="button" onClick={() => { setMenuOpen(false); openSignUp(); }}
                  className="w-full flex items-center justify-center font-semibold rounded-xl transition-opacity hover:opacity-90"
                  style={{ height: "48px", fontSize: "15px", color: "#fff", background: "#082F6F", border: "none", cursor: "pointer" }}>
                  Sign Up
                </button>
              </div>
            </Show>
            <Show when="signed-in">
              <div className="px-3"><SignedInMenu /></div>
            </Show>
          </div>
        </>
      )}
    </header>
  );
}
