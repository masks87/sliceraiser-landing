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
// Legal pages
// ─────────────────────────────────────────────────────────────────────────────

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
};

export const legalPages: Record<"terms" | "privacy" | "riskDisclosure" | "cookiePolicy", LegalPageContent> = {
  terms: {
    title: "Terms and Conditions",
    effectiveDate: "May 2025",
    lastUpdated: "May 2025",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "These website terms and conditions govern your use of the SliceRaiser.com website. By accessing or using the Website, you agree to comply with and be bound by these Terms, our Cookie Notice, and our Privacy Policy.",
          "The Website is operated by SliceRaiser.com, a regulated fractional investment platform dedicated to providing access to diversified real estate and SME investment opportunities starting from USD 100.",
        ],
      },
      {
        heading: "Key Highlights",
        bullets: [
          "Investment Platform: SliceRaiser.com provides an advanced fractional investment platform accessible via web and mobile applications.",
          "Diversified Portfolio: Investments are made in various properties and projects to ensure a diversified investment portfolio.",
          "Regulatory Compliance: We adhere strictly to applicable European regulatory frameworks to ensure compliance with financial regulations.",
          "Global Reach: Our platform is open to eligible investors worldwide, providing access to investment opportunities in UAE and Australia.",
          "Broad Asset Coverage: Investments encompass real estate and SME opportunities located in UAE and Australia.",
          "Transparency and Accountability: We prioritize transparency in all investment activities, providing regular updates on investment progress and performance to our investors.",
          "Risk Management: We employ robust risk management strategies to mitigate potential financial risks associated with investments.",
          "Sustainable Growth: SliceRaiser.com is dedicated to sustainable growth and strives to create long term value for investors and the broader community.",
        ],
      },
      {
        heading: "Prohibited Uses",
        paragraphs: ["You may use our Website only for lawful purposes. You must not:"],
        bullets: [
          "Use our Website in any way that violates applicable local, national, or international laws or regulations.",
          "Engage in unlawful or fraudulent activities.",
          "Harm or attempt to harm minors.",
          "Send unsolicited advertising or spam.",
          "Transmit data containing viruses or malware.",
          "Interfere with other users access to our Website.",
          "Post false, misleading, or offensive content.",
        ],
      },
      {
        heading: "Content Standards",
        paragraphs: [
          "You are responsible for all material you contribute. Contributions must be accurate, reflect genuinely held opinions, and comply with applicable laws.",
          "Contributions must not defame any person, contain offensive or hateful material, promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age, or infringe any intellectual property rights.",
        ],
      },
      {
        heading: "Disclaimer and Risk Warning",
        paragraphs: [
          "SliceRaiser.com operates as a regulated fractional investment platform that provides access to real estate and SME investment opportunities. We facilitate investment transactions between investors and asset owners.",
          "The content available on our Website is for informational purposes only and should not be considered personalized advice or recommendations. We do not provide specific investment advice. You should seek independent financial advice before making any investment decisions.",
          "Investments can fluctuate in value, and past performance is not indicative of future results. Returns advertised on our Website are indicative and subject to various factors beyond our control.",
          "Nothing on our Website constitutes an offer or solicitation to buy or sell investments, securities, or financial services in any jurisdiction where such activity is not permitted.",
        ],
      },
      {
        heading: "Disclaimers of Warranties",
        paragraphs: [
          "Our Website is provided as is without any express or implied warranties. We do not warrant the accuracy, reliability, or completeness of the information provided. Your use of our Website is at your own risk.",
        ],
      },
      {
        heading: "Eligibility and Registration",
        paragraphs: [
          "To access our Website and invest, you must be at least eighteen years old and have full legal capacity under the laws of your country of residence. You must provide accurate and current information during the registration process.",
        ],
      },
      {
        heading: "Your Login Details",
        paragraphs: [
          "You are responsible for the security of your login details. Do not share your login details with third parties. Notify us immediately if you suspect any unauthorized use of your account.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "We and our affiliates will not be liable for inaccuracies, delays, interruptions, or errors. We will not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of our Website or any investment decisions made based on information found on our Website.",
          "Our total liability to you shall not exceed USD 2,500.",
        ],
      },
      {
        heading: "Intellectual Property Rights",
        paragraphs: [
          "We own all intellectual property rights related to our Website. You shall not reproduce, modify, or distribute any part of our Website without our prior written consent.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These Terms are governed by applicable European law. Any disputes arising from these Terms will be subject to applicable European jurisdiction.",
        ],
      },
      {
        heading: "Changes to these Terms",
        paragraphs: [
          "We may revise these Terms at any time by updating this page. Please check periodically for updates as continued use of our Website constitutes acceptance of any revised Terms.",
        ],
      },
      {
        heading: "Contacting Us",
        paragraphs: [
          "If you have any questions please contact us at: legal@sliceraiser.com",
        ],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    effectiveDate: "",
    lastUpdated: "",
    sections: [],
  },

  riskDisclosure: {
    title: "Risk Disclosure",
    effectiveDate: "",
    lastUpdated: "",
    sections: [],
  },

  cookiePolicy: {
    title: "Cookie Policy",
    effectiveDate: "",
    lastUpdated: "",
    sections: [],
  },
};

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
