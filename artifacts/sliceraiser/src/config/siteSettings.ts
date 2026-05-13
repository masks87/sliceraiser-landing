// ─────────────────────────────────────────────────────────────────────────────
// Brand / site settings
// ─────────────────────────────────────────────────────────────────────────────

export const brandName = "SliceRaiser";
export const logoPath = "/logo.png";
export const defaultLocation = "Dubai";
export const mainSlogan = "Unlocking access to properties, equity and fixed income opportunities, starting from USD 100.";
export const footerDescription = "Unlocking access to properties, equity and fixed income opportunities, starting from USD 100.";
export const appDownloadHeading = "Invest. Let Your Money Grow.";
export const appDownloadSubtext = "The SliceRaiser app is coming soon to iOS and Android. Join the waitlist and be the first to know when we launch.";
export const iosAppText = "Download on the App Store";
export const iosAppUrl = "";
export const googlePlayText = "Get it on Google Play";
export const googlePlayUrl = "";
export const socialLinks: { name: string; href: string }[] = [
  { name: "Instagram", href: "https://www.instagram.com/sliceraiser/" },
  { name: "LinkedIn", href: "" },
  { name: "X", href: "" },
  { name: "YouTube", href: "" },
  { name: "TikTok", href: "" },
];
export const footerLinkGroups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Invest",
    links: [
      { label: "Properties", href: "/properties" },
      { label: "Equity", href: "/equity" },
      { label: "Fixed Income", href: "/fixed-income" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "About Us", href: "/about" },
      { label: "Investor Relations (IR)", href: "/investor-relations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Legal & Regulatory", href: "/legal" },
    ],
  },
];
export const contactEmail = "contact@sliceraiser.com";
export const contactPhone = "+971 55 725 9299";
export const contactAddress = "Sheikh Zayed Road, Dubai, UAE";
export const copyrightText = "© 2025 SliceRaiser.com. All rights reserved.";

export const footerLegalLinks: { label: string; href: string }[] = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Risk Disclosure", href: "/risk-disclosure" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const publicContactEmail = "contact@sliceraiser.com";
export const contactLinkedInUrl = "https://www.linkedin.com/in/mamoon-alkhatib-77541639/";

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
    effectiveDate: "May 2025",
    lastUpdated: "May 2025",
    intro: "This Privacy Policy explains how SliceRaiser collects, uses and shares personal information from users of our Platform. By using our services, you consent to the collection and use of your personal data as described below.",
    sections: [
      {
        heading: "1. Information We Collect",
        paragraphs: ["We may collect the following types of information:"],
        bullets: [
          "Registration Information: Your name, email address, phone number, date of birth, nationality, government issued identification and other details necessary to verify your identity and eligibility.",
          "Financial Information: Bank account details and investment data needed to facilitate transactions and comply with anti money laundering and know your customer requirements.",
          "Usage Data: Information about how you use the Platform, such as device identifiers, IP address, browser type, referring and exit pages and timestamps.",
          "Communications: Records of your correspondence with us, including support requests, surveys and feedback.",
          "Cookies and Similar Technologies: We use cookies and similar technologies to enable core functionality, analyse performance and personalise your experience. For more details, see our Cookie Policy.",
        ],
      },
      {
        heading: "2. How We Use Your Information",
        paragraphs: ["We use personal information to:"],
        bullets: [
          "Provide Services: Register and manage your account, process transactions, perform KYC and AML checks and communicate with you.",
          "Improve the Platform: Analyse usage patterns to improve features, measure performance and address technical issues.",
          "Marketing and Communications: Send service updates, newsletters and promotional messages. You may opt out at any time.",
          "Compliance and Risk Management: Comply with legal obligations, respond to lawful requests from regulators, prevent fraud and enforce our Terms.",
          "Corporate Transactions: In the event of a merger, acquisition or sale of assets, user information may be transferred to another entity subject to this Privacy Policy.",
        ],
      },
      {
        heading: "3. Legal Basis for Processing",
        paragraphs: ["For users in the European Economic Area, our processing bases include:"],
        bullets: [
          "Performance of a contract: To provide the services you request.",
          "Compliance with legal obligations: Such as AML, KYC, tax and regulatory reporting.",
          "Legitimate interests: For example, to improve the Platform and communicate with users.",
          "Consent: For optional processing activities like marketing communications, which you can withdraw at any time.",
        ],
      },
      {
        heading: "4. Data Sharing",
        paragraphs: ["We may share your information with:"],
        bullets: [
          "Service Providers: Third party vendors who perform services for us, including payment processors, identity verification providers, cloud hosting and analytics services.",
          "Business Partners: Companies that co market or offer integrated services through the Platform.",
          "Regulators and Law Enforcement: To comply with legal obligations or respond to lawful requests.",
          "Corporate Transactions: As part of a merger, acquisition or transfer of assets.",
        ],
      },
      {
        heading: "5. Third Party Protection",
        paragraphs: ["We require third parties to protect your information and use it only for the purposes we specify."],
      },
      {
        heading: "6. Data Transfers",
        paragraphs: ["Your information may be transferred to and processed in countries outside your country of residence, including countries that may not offer the same level of data protection. Where legally required, we will implement appropriate safeguards, such as standard contractual clauses, to protect your data."],
      },
      {
        heading: "7. Data Security and Retention",
        paragraphs: [
          "We employ administrative, technical and physical measures to safeguard personal information. However, no system is completely secure.",
          "We retain personal data for as long as necessary to fulfil the purposes described in this Policy or as required by law, after which we securely delete or anonymise it.",
        ],
      },
      {
        heading: "8. Your Rights",
        paragraphs: ["Depending on your jurisdiction, you may have the right to:"],
        bullets: [
          "Access, rectify or delete your personal data.",
          "Object to or restrict the processing of your data.",
          "Receive a copy of your data in a portable format.",
          "Withdraw consent for marketing communications.",
        ],
      },
      {
        heading: "9. Exercising Your Rights",
        paragraphs: ["To exercise your rights, please contact [privacy@sliceraiser.com](mailto:privacy@sliceraiser.com)."],
      },
      {
        heading: "10. Children",
        paragraphs: ["The Platform is not intended for individuals under 18. We do not knowingly collect personal data from children."],
      },
      {
        heading: "11. Changes to This Policy",
        paragraphs: ["We may update this Privacy Policy from time to time. We will post the updated policy and indicate the Last Updated date. Your continued use of the Platform constitutes acceptance of the revised Policy."],
      },
    ],
  },
  riskDisclosure: {
    title: "Risk Disclosure",
    effectiveDate: "May 2025",
    lastUpdated: "May 2025",
    intro: "Investing involves significant risk. The value of any investment may fall as well as rise, and you may lose some or all of your invested capital. Past performance is not indicative of future results. You should carefully consider whether an investment is suitable in light of your financial circumstances and objectives and only invest money you can afford to lose. Diversification and independent advice can help manage risk.",
    sections: [
      {
        heading: "1. General Risk Warning",
        paragraphs: [
          "Investing involves significant risk. The value of any investment may fall as well as rise, and you may lose some or all of your invested capital.",
          "Past performance is not indicative of future results. You should carefully consider whether an investment is suitable in light of your financial circumstances and objectives and only invest money you can afford to lose.",
          "Diversification and independent advice can help manage risk.",
        ],
      },
      {
        heading: "2. Market Risk",
        paragraphs: [
          "Changes in economic conditions, interest rates, property values and market sentiment can cause asset values to fluctuate.",
          "Real estate prices can rise or fall, equity investments can be volatile and fixed income instruments may experience price changes or defaults.",
        ],
      },
      {
        heading: "3. Liquidity Risk",
        paragraphs: [
          "Investments offered through the Platform may be illiquid.",
          "There may be no secondary market, and you may not be able to exit or transfer your investment before the end of the term.",
          "You should be prepared to hold investments to maturity.",
        ],
      },
      {
        heading: "4. Credit and Default Risk",
        paragraphs: [
          "For debt and fixed income investments, borrowers or issuers may fail to make interest or principal payments.",
          "Even with collateral or asset backed structures, losses may occur.",
        ],
      },
      {
        heading: "5. Project and Operational Risk",
        paragraphs: [
          "Property developments and business projects may face delays, cost overruns, management issues or regulatory changes that affect returns.",
          "Our Platform itself is in development, and there is a risk that our services or the underlying projects may not perform as expected.",
        ],
      },
      {
        heading: "6. Regulatory Risk",
        paragraphs: [
          "Laws and regulations governing investment platforms differ by jurisdiction and may change over time.",
          "Changes in regulation could restrict or prohibit certain activities or require modifications to the Platform.",
        ],
      },
      {
        heading: "7. Currency and Exchange Rate Risk",
        paragraphs: [
          "Investments denominated in a currency other than your home currency may expose you to exchange rate fluctuations.",
          "Movements in currency rates can affect your returns.",
        ],
      },
      {
        heading: "8. Platform Risk",
        paragraphs: [
          "Although we seek to maintain robust systems and controls, the Platform may experience interruptions, cybersecurity incidents or operational failures.",
          "In extreme circumstances, platform failure could result in delayed payments or loss of data.",
        ],
      },
      {
        heading: "9. No Guarantee and No Insurance",
        paragraphs: [
          "Neither SliceRaiser nor the issuers of opportunities guarantee the performance of any investment.",
          "Investments offered through the Platform are not deposits, are not insured and do not carry any government protection such as deposit guarantees or investment compensation schemes.",
        ],
      },
      {
        heading: "10. Regulatory Status",
        paragraphs: [
          "SliceRaiser is not currently regulated. We intend to obtain licences from relevant authorities but cannot guarantee the timing or outcome.",
          "Until then, you should treat all information as indicative and non binding.",
        ],
      },
      {
        heading: "11. Professional Advice",
        paragraphs: [
          "We do not provide financial, legal or tax advice.",
          "You should consult a qualified professional before making any investment decisions.",
          "By investing, you acknowledge that you understand the risks involved and accept sole responsibility for the outcomes.",
        ],
      },
    ],
  },
  cookiePolicy: {
    title: "Cookie Policy",
    effectiveDate: "May 2025",
    lastUpdated: "May 2025",
    intro: "This Cookie Policy explains how SliceRaiser may use cookies and similar technologies on the Platform.",
    sections: [
      {
        heading: "1. What Are Cookies?",
        paragraphs: [
          "Cookies are small text files that websites place on your device to store information.",
          "They can make websites work more efficiently and provide useful information to the site owners.",
        ],
      },
      {
        heading: "2. Types of Cookies We Use",
        paragraphs: ["We may use the following types of cookies:"],
        bullets: [
          "Strictly Necessary Cookies: Required for the basic operation of the Platform and to enable core functionality such as secure login and navigation.",
          "Performance and Analytics Cookies: These collect information about how visitors use our Platform, such as pages visited and error messages, to help us improve performance.",
          "Functional Cookies: These remember choices you make, such as language or region, and provide enhanced, more personalised features.",
          "Marketing Cookies: These are used to deliver advertisements relevant to you and measure the effectiveness of our marketing campaigns.",
        ],
      },
      {
        heading: "3. Third Party Cookies",
        paragraphs: ["We may also use third party cookies, such as Google Analytics, to provide analytics and improve our services."],
      },
      {
        heading: "4. Managing Cookies",
        paragraphs: [
          "You can control and delete cookies through your browser settings.",
          "Most browsers allow you to refuse or accept cookies and to delete existing cookies.",
          "However, disabling cookies may affect the functionality of the Platform.",
          "You can also adjust cookie preferences through any cookie consent tools we provide.",
        ],
      },
      {
        heading: "5. Changes to This Policy",
        paragraphs: [
          "We may update this Cookie Policy from time to time.",
          "When we do, we will post the updated policy and indicate the Last Updated date.",
        ],
      },
      {
        heading: "6. Contact Us",
        paragraphs: ["If you have any questions about this Cookie Policy, please contact us at contact@sliceraiser.com."],
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Contact page settings
// ─────────────────────────────────────────────────────────────────────────────

export const internalContactRecipientKeyName = "CONTACT_RECIPIENT_EMAIL";
export const contactPageTitle = "Contact SliceRaiser";
export const contactPageSubtitle = "Investors, partners, press, and candidates — pick the inquiry type that fits and we'll route your message to the right team.";
export const contactCardTitle = "Get in Touch";
export const contactCardDescription = "Reach our founder directly, or schedule a meeting at a time that works for you.";
export const contactFormTitle = "Send us a message";
export const contactInquiryTypes = [
  "Investor",
  "Property Sponsor",
  "Enterprise Raising Capital",
  "Partner",
  "Press",
  "Career",
  "General Inquiry",
] as const;
export const contactAutoReplySubject = "We received your message — SliceRaiser";
export const contactAutoReplyMessage = "Thank you for contacting SliceRaiser. We have received your request and our team will review it. If the request is suitable, we will contact you with the next steps.";
export const meetingRequestEnabled = true;

export const aboutPage = {
  hero: {
    title: "About SliceRaiser",
    subtitle: "A global investment lifestyle platform for property, equity and fixed income opportunities"
  },
  whoWeAre: {
    heading: "Who We Are",
    paragraphs: [
      "SliceRaiser is a global investment platform and lifestyle ecosystem built for a new generation of investors. We provide access to selected property, equity and fixed income opportunities through one digital platform, helping users explore ownership, income and long term value creation with lower entry barriers.",
      "SliceRaiser is not only about transactions. It is about building an investment lifestyle where people become SliceRaisers, individuals who think beyond saving, look for ownership opportunities and want to participate in assets, businesses and income focused opportunities that were traditionally harder to access.",
      "The platform brings together investment access, digital onboarding, marketplace functionality, investor education and community identity. Users are not only browsing opportunities, they are becoming part of a brand built around access, ownership, financial confidence and long term value creation."
    ]
  },
  vision: {
    heading: "Our Vision",
    text: "Our vision is to build a global investment lifestyle ecosystem where everyday people can become SliceRaisers by accessing selected opportunities, building financial confidence and participating in long term value creation."
  },
  mission: {
    heading: "Our Mission",
    text: "Our mission is to turn everyday users into informed co investors by connecting them with selected property, equity and fixed income opportunities through a clear, digital and community driven investment experience."
  },
  whyUs: {
    heading: "Why SliceRaiser",
    cards: [
      {
        title: "Lower Entry Barriers",
        text: "Access selected property, equity and fixed income opportunities with lower minimum entry points compared to traditional investment routes."
      },
      {
        title: "Multi Asset Platform",
        text: "One digital platform connecting users to property, equity and fixed income opportunities across selected markets."
      },
      {
        title: "Investment Lifestyle",
        text: "SliceRaiser is built around ownership, access and long term value creation, not just transactions."
      },
      {
        title: "Community Identity",
        text: "Join a new generation of co investors building financial confidence and participating in a smarter ownership culture."
      }
    ]
  },
  team: {
    heading: "Our Team",
    members: [
      {
        name: "Mamoon Alkhatib",
        title: "Founder and CEO",
        bio: "Mamoon Alkhatib is the Founder and CEO of SliceRaiser. He brings practical experience across property investment, IT infrastructure, business development and digital platform planning, with a focus on building scalable ecosystems that connect investors, sponsors and businesses through structured investment opportunities.",
        linkedin: "https://www.linkedin.com/in/mamoon-alkhatib-77541639/"
      }
    ]
  },
  markets: {
    heading: "Our Markets",
    text: "Our initial focus markets are the UAE and Australia. As SliceRaiser grows, we aim to expand into selected international markets through the right legal, operational and regulatory pathways.",
    list: ["UAE", "Australia", "Selected international markets planned"]
  },
  cta: {
    heading: "Ready to become a SliceRaiser?",
    text: "Explore selected property, equity and fixed income opportunities and join a new investment lifestyle built around access, ownership and long term value creation.",
    primaryButton: "Become a SliceRaiser",
    primaryLink: "/sign-up",
    secondaryButton: "Explore Opportunities",
    secondaryLink: "/properties"
  }
};
