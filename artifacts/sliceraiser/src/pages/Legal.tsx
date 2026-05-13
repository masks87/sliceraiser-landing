const ROYAL = "#1E3A8A";
const GOLD = "#D4AF37";
const SOFT = "#F8F9FA";
const CHARCOAL = "#2C2C2C";

const sections = [
  {
    title: "Regulatory Framework",
    body: "SliceRaiser operates under applicable European regulatory frameworks. Our platform is designed to comply with investor protection standards across all operating markets.",
  },
  {
    title: "Operating Markets",
    body: "SliceRaiser lists real estate and investment opportunities located in UAE and Australia. Our platform is open to eligible investors from anywhere in the world.",
  },
  {
    title: "Risk Warning",
    body: "All investments carry risk. The value of your investment can go down as well as up. Capital invested is not guaranteed. You should not invest more than you can afford to lose.",
  },
  {
    title: "Investor Eligibility",
    body: "By registering on SliceRaiser you confirm that you are over 18 years of age and eligible to invest under the laws of your country of residence.",
  },
];

export default function Legal() {
  return (
    <div
      style={{ backgroundColor: SOFT, fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        {/* Gold accent label */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="inline-block rounded-full"
            style={{ width: 36, height: 3, backgroundColor: GOLD }}
            aria-hidden
          />
          <span
            className="uppercase tracking-[0.18em] text-[12px] font-semibold"
            style={{ color: GOLD }}
          >
            Legal &amp; Regulatory
          </span>
        </div>

        {/* Page title */}
        <h1
          className="font-bold mb-8 sm:mb-10"
          style={{
            color: ROYAL,
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Legal &amp; Regulatory Information
        </h1>

        {/* White content card */}
        <div
          className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 lg:p-10"
          style={{ borderColor: "#E5E7EB" }}
        >
          <div className="space-y-8 sm:space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2
                  className="font-semibold mb-3"
                  style={{ color: ROYAL, fontSize: 18, lineHeight: 1.3 }}
                >
                  {s.title}
                </h2>
                <p
                  className="font-normal"
                  style={{
                    color: CHARCOAL,
                    fontSize: 15,
                    lineHeight: 1.65,
                  }}
                >
                  {s.body}
                </p>
              </section>
            ))}

            <section>
              <h2
                className="font-semibold mb-3"
                style={{ color: ROYAL, fontSize: 18, lineHeight: 1.3 }}
              >
                Contact
              </h2>
              <p
                className="font-normal"
                style={{ color: CHARCOAL, fontSize: 15, lineHeight: 1.65 }}
              >
                For legal or regulatory inquiries, please contact us at{" "}
                <a
                  href="mailto:legal@sliceraiser.com"
                  className="font-medium underline underline-offset-2 hover:no-underline break-words"
                  style={{ color: ROYAL }}
                >
                  legal@sliceraiser.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
