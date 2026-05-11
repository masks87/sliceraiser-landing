type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    title: "Introduction",
    paragraphs: [
      "These website terms and conditions govern your use of the SliceRaiser.com website. By accessing or using the Website, you agree to comply with and be bound by these Terms, our Cookie Notice, and our Privacy Policy.",
      "The Website is operated by SliceRaiser.com, a regulated fractional investment platform dedicated to providing access to diversified real estate and SME investment opportunities starting from USD 100.",
    ],
  },
  {
    title: "Key Highlights",
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
    title: "Prohibited Uses",
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
    title: "Content Standards",
    paragraphs: [
      "You are responsible for all material you contribute. Contributions must be accurate, reflect genuinely held opinions, and comply with applicable laws.",
      "Contributions must not defame any person, contain offensive or hateful material, promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age, or infringe any intellectual property rights.",
    ],
  },
  {
    title: "Disclaimer and Risk Warning",
    paragraphs: [
      "SliceRaiser.com operates as a regulated fractional investment platform that provides access to real estate and SME investment opportunities. We facilitate investment transactions between investors and asset owners.",
      "The content available on our Website is for informational purposes only and should not be considered personalized advice or recommendations. We do not provide specific investment advice. You should seek independent financial advice before making any investment decisions.",
      "Investments can fluctuate in value, and past performance is not indicative of future results. Returns advertised on our Website are indicative and subject to various factors beyond our control.",
      "Nothing on our Website constitutes an offer or solicitation to buy or sell investments, securities, or financial services in any jurisdiction where such activity is not permitted.",
    ],
  },
  {
    title: "Disclaimers of Warranties",
    paragraphs: [
      "Our Website is provided as is without any express or implied warranties. We do not warrant the accuracy, reliability, or completeness of the information provided. Your use of our Website is at your own risk.",
    ],
  },
  {
    title: "Eligibility and Registration",
    paragraphs: [
      "To access our Website and invest, you must be at least eighteen years old and have full legal capacity under the laws of your country of residence. You must provide accurate and current information during the registration process.",
    ],
  },
  {
    title: "Your Login Details",
    paragraphs: [
      "You are responsible for the security of your login details. Do not share your login details with third parties. Notify us immediately if you suspect any unauthorized use of your account.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "We and our affiliates will not be liable for inaccuracies, delays, interruptions, or errors. We will not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of our Website or any investment decisions made based on information found on our Website.",
      "Our total liability to you shall not exceed USD 2,500.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    paragraphs: [
      "We own all intellectual property rights related to our Website. You shall not reproduce, modify, or distribute any part of our Website without our prior written consent.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by applicable European law. Any disputes arising from these Terms will be subject to applicable European jurisdiction.",
    ],
  },
  {
    title: "Changes to these Terms",
    paragraphs: [
      "We may revise these Terms at any time by updating this page. Please check periodically for updates as continued use of our Website constitutes acceptance of any revised Terms.",
    ],
  },
  {
    title: "Contacting Us",
    paragraphs: [
      "If you have any questions please contact us at: contact@sliceraiser.com",
    ],
  },
];

export default function Terms() {
  return (
    <div style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1
          className="text-[34px] leading-[40px] mb-2"
          style={{ color: "#1E3A8A", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
        >
          Terms and Conditions
        </h1>
        <p
          className="text-[14px] mb-10"
          style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          Effective Date: May 2025
        </p>

        {sections.map((s, idx) => (
          <section key={s.title} className="mb-10">
            {idx > 0 && (
              <hr
                className="border-0 mb-8"
                style={{ borderTop: "1px solid #D4AF37" }}
              />
            )}
            <h2
              className="text-[22px] leading-[28px] mb-4"
              style={{ color: "#1E3A8A", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              {s.title}
            </h2>

            {s.paragraphs?.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-[24px] mb-4"
                style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                {p}
              </p>
            ))}

            {s.bullets && (
              <ul className="list-disc pl-6 space-y-2">
                {s.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-[15px] leading-[24px]"
                    style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <hr className="border-0 mb-6" style={{ borderTop: "1px solid #D4AF37" }} />
        <p
          className="text-[13px]"
          style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          Last Updated: May 2025
        </p>
      </div>
    </div>
  );
}
