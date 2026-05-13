import type { LegalPageContent } from "@/config/siteSettings";

export default function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <div style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1
          className="text-[34px] leading-[40px] mb-2"
          style={{ color: "#1E3A8A", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
        >
          {page.title}
        </h1>

        {page.effectiveDate ? (
          <p
            className="text-[14px] mb-10"
            style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Effective Date: {page.effectiveDate}
          </p>
        ) : null}

        {page.intro ? (
          <p
            className="text-[15px] leading-[24px] mb-10"
            style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {page.intro}
          </p>
        ) : null}

        {page.sections.map((s, idx) => (
          <section key={s.heading} className="mb-10">
            {idx > 0 && (
              <hr className="border-0 mb-8" style={{ borderTop: "1px solid #D4AF37" }} />
            )}
            <h2
              className="text-[22px] leading-[28px] mb-4"
              style={{ color: "#1E3A8A", fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              {s.heading}
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

            {s.bullets ? (
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
            ) : null}
          </section>
        ))}

        {page.sections.length > 0 && (
          <hr className="border-0 mb-6" style={{ borderTop: "1px solid #D4AF37" }} />
        )}

        {page.lastUpdated ? (
          <p
            className="text-[13px]"
            style={{ color: "#2C2C2C", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Last Updated: {page.lastUpdated}
          </p>
        ) : null}
      </div>
    </div>
  );
}
