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
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-[30px] font-bold text-[#4285f4] mb-10 leading-[36px]">
          Legal &amp; Regulatory Information
        </h1>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-[#020817] font-semibold text-[18px] mb-3">
                {s.title}
              </h2>
              <p className="text-[#8e9196] text-[15px] leading-[24px] font-normal">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
