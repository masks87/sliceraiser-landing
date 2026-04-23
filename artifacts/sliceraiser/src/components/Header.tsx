import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Show, useClerk, useUser } from "@clerk/react";

function useAuthModal() {
  const { openSignIn, openSignUp } = useClerk();
  const afterSignInUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/dashboard`;
  return {
    openSignIn: () => openSignIn({ afterSignInUrl }),
    openSignUp: () => openSignUp({ afterSignInUrl }),
  };
}
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "OPPORTUNITIES", to: "/opportunities" },
  { label: "DASHBOARD", to: "/dashboard" },
];

const mobileLinks = [
  { label: "Home", to: "/" },
  { label: "Opportunities", to: "/opportunities" },
  { label: "Dashboard", to: "/dashboard" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center">
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
              const active = location === to || (to !== "/" && location.startsWith(to));
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

          <div className="flex flex-col shrink-0">
            <span className="text-[10px] text-[#8e9196] leading-tight">Location</span>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-[#4285f4] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-[13px] font-semibold text-[#020817]">Dubai</span>
            </div>
          </div>

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

          <button className="shrink-0 text-[#8e9196] hover:text-[#4285f4] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M11 20h2" />
            </svg>
          </button>

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

      <nav className="lg:hidden flex items-center justify-between h-14 px-6">
        <Logo />
        <div className="flex items-center gap-3">
          <Show when="signed-in">
            <SignedInMenu />
          </Show>
          <button className="p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
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
              className="text-sm text-[#020817] hover:text-[#4285f4] transition-colors"
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
