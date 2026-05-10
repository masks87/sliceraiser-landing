import { useEffect, useState } from "react";

const STORAGE_KEY = "sliceraiser:cookie-consent";
const GA_ID = "G-1G7XL59RTT";

type Choice = "all" | "essential";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (document.getElementById("ga-loader")) return;

  const loader = document.createElement("script");
  loader.id = "ga-loader";
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(loader);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable (private mode, etc.) — show banner this session only
    }
    if (stored === "all") {
      loadGoogleAnalytics();
    } else if (stored !== "essential") {
      setVisible(true);
    }
  }, []);

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore — choice still applied for this session
    }
    if (choice === "all") {
      loadGoogleAnalytics();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[200] px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div className="mx-auto max-w-5xl bg-[#020817] text-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(2,8,23,0.6)] border border-white/5 px-5 py-4 sm:px-6 sm:py-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-[13px] sm:text-sm leading-relaxed text-white/85 flex-1">
          We use cookies to improve your experience and comply with EU regulations.
          By continuing you accept our cookie policy.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="text-white/85 hover:text-white text-[13px] font-medium px-4 py-2 rounded-lg border border-white/15 hover:border-white/30 transition-colors whitespace-nowrap"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="bg-[#4285f4] hover:bg-[#3570d4] text-white text-[13px] font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
