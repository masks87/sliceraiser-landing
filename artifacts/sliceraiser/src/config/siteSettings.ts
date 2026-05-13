// ─────────────────────────────────────────────────────────────────────────────
// siteSettings.ts
// Central location for all hardcoded brand/content values.
// Future CMS: replace these exports with API calls or a CMS SDK fetch.
// ─────────────────────────────────────────────────────────────────────────────

// CMS: brand.name
export const brandName = "SliceRaiser";

// CMS: brand.logoUrl  (component still imports the asset; this is for reference)
export const logoPath = "/logo.png";

// CMS: brand.defaultLocation  (future: replace with geolocation or user profile)
export const defaultLocation = "Dubai";

// CMS: brand.mainSlogan
export const mainSlogan = "Invest in real assets from $100. UAE · Australia · Worldwide.";

// CMS: footer.description
export const footerDescription = "Unlocking access to properties, equity and fixed income opportunities, starting from USD 100.";

// CMS: appDownload.heading
export const appDownloadHeading = "Invest. Let Your Money Grow.";

// CMS: appDownload.subtext
export const appDownloadSubtext =
  "The SliceRaiser app is coming soon to iOS and Android. Join the waitlist and be the first to know when we launch.";

// CMS: appDownload.iosText
export const iosAppText = "Download on the App Store";

// CMS: appDownload.iosUrl  (empty = button visible but no navigation)
export const iosAppUrl = "";

// CMS: appDownload.googlePlayText
export const googlePlayText = "Get it on Google Play";

// CMS: appDownload.googlePlayUrl  (empty = button visible but no navigation)
export const googlePlayUrl = "";

// CMS: social.links  (empty href = icon visible but no navigation)
export const socialLinks: { name: string; href: string }[] = [
  { name: "Instagram", href: "https://www.instagram.com/sliceraiser/" },
  { name: "LinkedIn",  href: "" },
  { name: "X",         href: "" },
  { name: "YouTube",   href: "" },
  { name: "TikTok",    href: "" },
];

// CMS: footer.linkGroups
export const footerLinkGroups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Invest",
    links: [
      { label: "Properties",   href: "/opportunities" },
      { label: "Equity",       href: "/equity" },
      { label: "Fixed Income", href: "/fixed-income" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "FAQ",                      href: "/faq" },
      { label: "How It Works",             href: "/how-it-works" },
      { label: "About Us",                 href: "/about" },
      { label: "Investor Relations (IR)",  href: "/investor-relations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact",            href: "/contact" },
      { label: "Careers",            href: "/careers" },
      { label: "Legal & Regulatory", href: "/legal" },
    ],
  },
];

// CMS: footer.legalLinks
export const footerLegalLinks: { label: string; href: string }[] = [
  { label: "Terms of Use",     href: "/terms" },
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Risk Disclosure",  href: "/risk-disclosure" },
  { label: "Cookie Policy",    href: "/cookie-policy" },
];

// CMS: contact.email
export const contactEmail = "contact@sliceraiser.com";

// CMS: contact.phone
export const contactPhone = "+971 4 123 4567";

// CMS: contact.address
export const contactAddress = "Sheikh Zayed Road, Dubai, UAE";

// CMS: footer.copyrightText
export const copyrightText = "© 2025 SliceRaiser.com. All rights reserved.";
