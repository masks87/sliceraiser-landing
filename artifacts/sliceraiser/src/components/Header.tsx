import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Show, useClerk, useUser } from "@clerk/react";
import logoImg from "@/assets/logo.png";
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

  useEffect(() => {
    setValue(readJurisdictionCookie());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;
    setValue(next);
    writeJurisdictionCookie(next);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(JURISDICTION_CHANGE_EVENT, { detail: next }));
    }
  };

  return (
    <div className="flex flex-col shrink-0">
      <span style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.2 }}>
        Regulatory
      </span>
      <div className="relative mt-0.5">
        <select
          value={value}
          onChange={handleChange}
          aria-label="Regulatory Environment"
          className="appearance-none cursor-pointer transition-colors hover:bg-[#1E3A8A]"
          style={{
            backgroundColor: "transparent",
            border: "1px solid #334155",
            color: "#020817",
            fontSize: "13px",
            padding: "4px 26px 4px 10px",
            borderRadius: "6px",
          }}
        >
          {jurisdictionSettings.options.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ color: "#020817" }}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#020817]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
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
  { label: "PROPERTIES", to: "/properties" },
  { label: "EQUITY", to: "/equity" },
  { label: "FIXED INCOME", to: "/fixed-income" },
];

const mobileLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Equity", to: "/equity" },
  { label: "Fixed Income", to: "/fixed-income" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* CMS: logo image — replace logoImg src with CMS logoUrl when ready */}
      <img src={logoImg} alt="Slice Raiser" className="h-[22px] w-auto object-contain" />
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
        className="w-8 h-8 rounded-full bg-[#082f6f] text-white text-[12px] font-semibold flex items-center justify-center"
        title={user?.primaryEmailAddress?.emailAddress ?? ""}
      >
        {initial.toUpperCase()}
      </div>
      <button
        onClick={() => signOut({ redirectUrl: import.meta.env.BASE_URL })}
        className="text-[12px] font-medium text-[#020817] hover:text-[#4285f4] transition-colors"
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
      <nav className="hidden lg:flex items-center justify-center h-[60px] px-6">
        <div className="flex items-center gap-3">
          <Logo />

          <div className="flex items-center gap-5 ml-6">
            {navLinks.map(({ label, to }) => {
              const active = to === "/" ? location === "/" : location === to;
              return (
                <Link
                  key={label}
                  href={to}
                  className={`text-[11px] font-semibold tracking-wide whitespace-nowrap transition-colors ${
                    active ? "text-[#4285f4]" : "text-[#020817] hover:text-[#4285f4]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="w-px h-8 bg-gray-200 mx-3 shrink-0" />

          <JurisdictionSelector />

          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 w-40 shrink-0">
            <svg className="w-4 h-4 text-[#8e9196] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="text-[12px] text-[#8e9196] bg-transparent outline-none w-full placeholder-[#8e9196]"
            />
          </div>

          {(location === "/properties" || location === "/equity" || location === "/fixed-income") && (
            <button
              type="button"
              aria-label="Filter"
              className="shrink-0 text-[#8e9196] hover:text-[#4285f4] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
              </svg>
            </button>
          )}

          <div className="flex items-center gap-2">
            <Show when="signed-out">
              <button
                type="button"
                onClick={() => openSignIn()}
                className="bg-[#4285f4] text-white text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-[#3570d4] transition-colors whitespace-nowrap"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => openSignUp()}
                className="bg-[#082f6f] text-white text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-[#061f4a] transition-colors whitespace-nowrap"
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

      <nav className="lg:hidden flex items-center justify-between h-14 px-3 sm:px-6 gap-2">
        <Logo />
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Show when="signed-out">
            <button
              type="button"
              onClick={() => openSignIn()}
              className="bg-[#4285f4] text-white text-[11px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-1.5 rounded-md hover:bg-[#3570d4] transition-colors whitespace-nowrap"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => openSignUp()}
              className="bg-[#082f6f] text-white text-[11px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-1.5 rounded-md hover:bg-[#061f4a] transition-colors whitespace-nowrap"
            >
              Sign Up
            </button>
          </Show>
          <Show when="signed-in">
            <SignedInMenu />
          </Show>
          <button className="p-1 shrink-0" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-[#020817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {mobileLinks.map((link) => (
            <Link
              key={link.label}
              href={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-[13px] text-[#020817] hover:text-[#4285f4] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Show when="signed-out">
            <div className="flex gap-3 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openSignIn();
                }}
                className="flex-1 text-center bg-[#4285f4] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-[#3570d4] transition-colors"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openSignUp();
                }}
                className="flex-1 text-center bg-[#082f6f] text-white text-sm font-medium py-2.5 rounded-lg hover:bg-[#061f4a] transition-colors"
              >
                Sign Up
              </button>
            </div>
          </Show>
        </div>
      )}
    </header>
  );
}
