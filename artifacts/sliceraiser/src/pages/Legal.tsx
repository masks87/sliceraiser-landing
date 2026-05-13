const BG = "#F8F9FA";
const PRIMARY = "#1E3A8A";
const TEXT = "#2C2C2C";
const GOLD = "#D4AF37";
const INTER = "'Inter', sans-serif";

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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2
        className="text-[26px] leading-[32px]"
        style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 700 }}
      >
        {children}
      </h2>
      <div className="mt-3 h-[2px] w-12" style={{ backgroundColor: GOLD }} />
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 bg-white h-full"
      style={{ border: `1px solid #E5E7EB`, borderTop: `3px solid ${GOLD}` }}
    >
      {children}
    </div>
  );
}

export default function Legal() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: INTER }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-14">
          <h1
            className="text-[40px] leading-[48px] mb-3"
            style={{ color: PRIMARY, fontFamily: INTER, fontWeight: 700 }}
          >
            Legal &amp; Regulatory Information
          </h1>
          <div className="h-[3px] w-20" style={{ backgroundColor: GOLD }} />
        </section>

        {/* Sections grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sections.map((s) => (
              <Card key={s.title}>
                <div
                  className="text-[16px] mb-3"
                  style={{ color: PRIMARY, fontWeight: 700 }}
                >
                  {s.title}
                </div>
                <p
                  className="text-[15px] leading-[24px]"
                  style={{ color: TEXT, fontWeight: 400 }}
                >
                  {s.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-4">
          <H2>Contact</H2>
          <Card>
            <p
              className="text-[15px] leading-[24px]"
              style={{ color: TEXT, fontWeight: 400 }}
            >
              For legal or regulatory inquiries, please contact us at{" "}
              <a
                href="mailto:legal@sliceraiser.com"
                className="font-semibold hover:underline break-words"
                style={{ color: PRIMARY }}
              >
                legal@sliceraiser.com
              </a>
              .
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
