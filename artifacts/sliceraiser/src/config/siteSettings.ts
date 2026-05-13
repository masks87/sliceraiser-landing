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

// CMS: footer.copyrightText
export const copyrightText = "© 2025 SliceRaiser.com. All rights reserved.";

// ─────────────────────────────────────────────────────────────────────────────
// Contact page settings
// ─────────────────────────────────────────────────────────────────────────────

// CMS: contact.publicContactEmail  — shown to users; internal recipient is backend-only (CONTACT_RECIPIENT_EMAIL env var)
export const publicContactEmail = "contact@sliceraiser.com";

// CMS: contact.internalContactRecipientKeyName — name of the backend env var holding the private recipient email
export const internalContactRecipientKeyName = "CONTACT_RECIPIENT_EMAIL";

// CMS: contact.pageTitle
export const contactPageTitle = "Contact SliceRaiser";

// CMS: contact.pageSubtitle
export const contactPageSubtitle =
  "Investors, partners, press, and candidates — pick the inquiry type that fits and we'll route your message to the right team.";

// CMS: contact.cardTitle
export const contactCardTitle = "Get in Touch";

// CMS: contact.cardDescription
export const contactCardDescription =
  "Reach our founder directly, or schedule a meeting at a time that works for you.";

// CMS: contact.phone  — shown publicly in the contact card
export const contactPhone = "+971 55 725 9299";

// CMS: contact.address
export const contactAddress = "Sheikh Zayed Road, Dubai, UAE";

// CMS: contact.linkedInUrl
export const contactLinkedInUrl = "https://www.linkedin.com/in/mamoon-alkhatib-77541639/";

// CMS: contact.formTitle
export const contactFormTitle = "Send us a message";

// CMS: contact.inquiryTypes — drives the inquiry type dropdown; must match InquiryType enum in openapi.yaml
export const contactInquiryTypes = [
  "Investor",
  "Property Sponsor",
  "Enterprise Raising Capital",
  "Partner",
  "Press",
  "Career",
  "General Inquiry",
] as const;

// CMS: contact.autoReplySubject
export const contactAutoReplySubject = "We received your message — SliceRaiser";

// CMS: contact.autoReplyMessage — shown on screen and sent as confirmation email body to requester
export const contactAutoReplyMessage =
  "Thank you for contacting SliceRaiser. We have received your request and our team will review it. If the request is suitable, we will contact you with the next steps.";

// CMS: contact.meetingRequestEnabled
export const meetingRequestEnabled = true;
