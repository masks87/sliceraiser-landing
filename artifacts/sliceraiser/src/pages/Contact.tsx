import { useMemo, useState, type ReactNode } from "react";
import {
  useSubmitContact,
  useSubmitMeetingRequest,
} from "@workspace/api-client-react";

type InquiryType =
  | "Platform Investor"
  | "Capital Investor / VC"
  | "Enterprise / Partnership"
  | "SME / Fundraiser"
  | "Press / Media"
  | "Career Application"
  | "Complaint or Support";

type FieldKind = "text" | "email" | "tel" | "textarea" | "select" | "url" | "datetime-local";

type FieldDef = {
  name: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

const INQUIRY_TYPES: InquiryType[] = [
  "Platform Investor",
  "Capital Investor / VC",
  "Enterprise / Partnership",
  "SME / Fundraiser",
  "Press / Media",
  "Career Application",
  "Complaint or Support",
];

const SCHEMAS: Record<InquiryType, FieldDef[]> = {
  "Platform Investor": [
    { name: "fullName", label: "Full name", kind: "text", required: true },
    { name: "email", label: "Email", kind: "email", required: true },
    { name: "phone", label: "Phone (with country code)", kind: "tel", required: true, placeholder: "+971 50 000 0000" },
    { name: "country", label: "Country of residence", kind: "text", required: true },
    { name: "message", label: "Message", kind: "textarea", required: true },
  ],
  "Capital Investor / VC": [
    { name: "fullName", label: "Full name", kind: "text", required: true },
    { name: "fundCompany", label: "Fund or company name", kind: "text", required: true },
    {
      name: "ticketSize",
      label: "Estimated ticket size",
      kind: "select",
      required: true,
      options: ["$50k - $250k", "$250k - $1M", "$1M - $5M", "$5M+"],
    },
    { name: "email", label: "Email", kind: "email", required: true },
    { name: "phone", label: "Phone", kind: "tel", required: true },
    { name: "message", label: "Message", kind: "textarea", required: true },
  ],
  "Enterprise / Partnership": [
    { name: "fullName", label: "Full name", kind: "text", required: true },
    { name: "company", label: "Company name", kind: "text", required: true },
    { name: "sector", label: "Sector", kind: "text", required: true },
    { name: "partnershipType", label: "Partnership type", kind: "text", required: true },
    { name: "email", label: "Email", kind: "email", required: true },
    { name: "message", label: "Message", kind: "textarea", required: true },
  ],
  "SME / Fundraiser": [
    { name: "fullName", label: "Full name", kind: "text", required: true },
    { name: "company", label: "Company name", kind: "text", required: true },
    { name: "sector", label: "Sector", kind: "text", required: true },
    { name: "raiseAmount", label: "Amount seeking to raise", kind: "text", required: true, placeholder: "e.g. $500k" },
    {
      name: "stage",
      label: "Stage",
      kind: "select",
      required: true,
      options: ["Pre-seed", "Seed", "Series A", "Other"],
    },
    { name: "email", label: "Email", kind: "email", required: true },
    { name: "phone", label: "Phone", kind: "tel", required: true },
    { name: "message", label: "Message", kind: "textarea", required: true },
  ],
  "Press / Media": [
    { name: "fullName", label: "Full name", kind: "text", required: true },
    { name: "publication", label: "Publication name", kind: "text", required: true },
    { name: "topic", label: "Topic", kind: "text", required: true },
    { name: "deadline", label: "Deadline", kind: "text", required: true, placeholder: "e.g. 30 May 2026" },
    { name: "email", label: "Email", kind: "email", required: true },
    { name: "message", label: "Message", kind: "textarea", required: true },
  ],
  "Career Application": [
    { name: "fullName", label: "Full name", kind: "text", required: true },
    { name: "role", label: "Role you are interested in", kind: "text", required: true },
    { name: "linkedin", label: "LinkedIn profile URL", kind: "url", required: true, placeholder: "https://linkedin.com/in/..." },
    { name: "email", label: "Email", kind: "email", required: true },
    { name: "message", label: "Message", kind: "textarea", required: true },
  ],
  "Complaint or Support": [
    { name: "fullName", label: "Full name", kind: "text", required: true },
    { name: "accountEmail", label: "Account email", kind: "email", required: true },
    {
      name: "issueType",
      label: "Issue type",
      kind: "select",
      required: true,
      options: ["Account", "Investment", "Payment", "Other"],
    },
    { name: "description", label: "Description", kind: "textarea", required: true },
  ],
};

const inputBase =
  "w-full bg-white border border-gray-200 rounded-xl text-[#020817] text-sm h-11 px-3.5 focus:border-[#4285f4] focus:ring-2 focus:ring-[#4285f4]/15 outline-none transition";

function Field({
  def,
  value,
  onChange,
}: {
  def: FieldDef;
  value: string;
  onChange: (v: string) => void;
}) {
  const id = `f-${def.name}`;
  const label = (
    <label htmlFor={id} className="block text-[12.5px] font-semibold text-[#020817] tracking-wide mb-1.5">
      {def.label}
      {def.required ? <span className="text-[#4285f4]"> *</span> : null}
    </label>
  );
  let control: ReactNode;
  if (def.kind === "textarea") {
    control = (
      <textarea
        id={id}
        required={def.required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={def.placeholder}
        rows={5}
        className={inputBase + " !h-auto py-3 resize-y"}
      />
    );
  } else if (def.kind === "select") {
    control = (
      <select
        id={id}
        required={def.required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputBase}
      >
        <option value="">Select…</option>
        {def.options?.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  } else {
    control = (
      <input
        id={id}
        type={def.kind}
        required={def.required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={def.placeholder}
        className={inputBase}
      />
    );
  }
  return (
    <div>
      {label}
      {control}
    </div>
  );
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-12px_rgba(8,47,111,0.18)] ${className}`}>
      {children}
    </section>
  );
}

function MeetingModal({ onClose }: { onClose: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [preferredDateTime, setPreferredDateTime] = useState("");
  const [done, setDone] = useState(false);
  const mutation = useSubmitMeetingRequest();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(
      { data: { fullName, email, purpose, preferredDateTime } },
      { onSuccess: () => setDone(true) },
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#020817]/55 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md shadow-[0_30px_80px_-20px_rgba(8,47,111,0.35)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 pt-6 pb-2">
          <div>
            <div className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#4285f4]">SliceRaiser</div>
            <h3 className="text-[#082f6f] text-xl font-bold mt-1">Request a Meeting</h3>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-[#8e9196] hover:text-[#020817] text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {done ? (
          <div className="px-6 pb-7 pt-2">
            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-emerald-800 text-sm">
              Thanks — your meeting request has been sent. The team will reach out shortly.
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 w-full bg-[#082f6f] hover:bg-[#061f4a] text-white text-sm font-semibold rounded-xl h-11 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 pb-6 pt-2 space-y-4">
            <Field
              def={{ name: "fullName", label: "Full name", kind: "text", required: true }}
              value={fullName}
              onChange={setFullName}
            />
            <Field
              def={{ name: "email", label: "Email", kind: "email", required: true }}
              value={email}
              onChange={setEmail}
            />
            <Field
              def={{ name: "purpose", label: "Purpose of meeting", kind: "textarea", required: true }}
              value={purpose}
              onChange={setPurpose}
            />
            <Field
              def={{ name: "preferredDateTime", label: "Preferred date & time", kind: "datetime-local", required: true }}
              value={preferredDateTime}
              onChange={setPreferredDateTime}
            />
            {mutation.isError ? (
              <div className="rounded-xl bg-rose-50 border border-rose-100 p-3 text-rose-700 text-xs">
                Sorry — we couldn't send your request. Please try again or email mamoon@sliceraiser.com directly.
              </div>
            ) : null}
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-gradient-to-r from-[#4285f4] to-[#3570d4] hover:from-[#3570d4] hover:to-[#2a5fc0] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl h-11 shadow-[0_8px_20px_-8px_rgba(66,133,244,0.55)] transition-all"
            >
              {mutation.isPending ? "Sending…" : "Send meeting request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function CeoCard({ onRequestMeeting }: { onRequestMeeting: () => void }) {
  return (
    <Section className="p-7">
      <div className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#4285f4]">Get in Touch</div>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#082f6f]">Talk to our team</h2>
      <p className="mt-2 text-sm text-[#8e9196]">
        Reach our founder directly, or schedule a meeting at a time that works for you.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#082f6f] text-white text-xl font-bold flex items-center justify-center shrink-0">
          MA
        </div>
        <div>
          <div className="text-[#020817] font-semibold">Mamoon Alkhatib</div>
          <div className="text-[#8e9196] text-sm">Founder &amp; CEO</div>
        </div>
      </div>

      <div className="mt-5 space-y-2.5 text-sm">
        <a
          href="mailto:mamoon@sliceraiser.com"
          className="flex items-center gap-2.5 text-[#020817] hover:text-[#4285f4] transition-colors"
        >
          <svg className="w-4 h-4 text-[#4285f4] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          mamoon@sliceraiser.com
        </a>
        <a
          href="tel:+971557259299"
          className="flex items-center gap-2.5 text-[#020817] hover:text-[#4285f4] transition-colors"
        >
          <svg className="w-4 h-4 text-[#4285f4] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.5a1 1 0 01.96.73l1.2 4.2a1 1 0 01-.5 1.16L7.5 10.3a12 12 0 006.2 6.2l1.2-1.66a1 1 0 011.16-.5l4.2 1.2a1 1 0 01.74.96V19a2 2 0 01-2 2A18 18 0 013 5z" />
          </svg>
          +971 55 725 9299
        </a>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="https://www.linkedin.com/in/mamoon-alkhatib-77541639/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#082f6f] hover:bg-[#061f4a] text-white text-sm font-semibold rounded-xl h-11 px-5 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
          LinkedIn
        </a>
        <button
          type="button"
          onClick={onRequestMeeting}
          className="inline-flex items-center justify-center gap-2 bg-[#4285f4] hover:bg-[#3570d4] text-white text-sm font-semibold rounded-xl h-11 px-5 transition-colors"
        >
          Request a Meeting
        </button>
      </div>
    </Section>
  );
}

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("Platform Investor");
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [meetingOpen, setMeetingOpen] = useState(false);

  const fields = useMemo(() => SCHEMAS[inquiryType], [inquiryType]);
  const mutation = useSubmitContact();

  const onTypeChange = (t: InquiryType) => {
    setInquiryType(t);
    setValues({});
    setSubmitted(false);
    mutation.reset();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payloadFields = fields.map((f) => ({
      label: f.label,
      value: (values[f.name] ?? "").trim(),
    }));
    mutation.mutate(
      { data: { inquiryType, fields: payloadFields } },
      {
        onSuccess: () => {
          setSubmitted(true);
          setValues({});
        },
      },
    );
  };

  return (
    <div className="bg-[#f7f9ff] min-h-[calc(100vh-60px)]">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4285f4]">Contact SliceRaiser</h1>
          <p className="mt-2 text-[#8e9196] max-w-2xl">
            Investors, partners, press, and candidates — pick the inquiry type that fits and we'll route your message to the right team.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <CeoCard onRequestMeeting={() => setMeetingOpen(true)} />
          </div>

          <div className="lg:col-span-3">
            <Section className="p-7">
              <div className="text-[11px] tracking-[0.12em] uppercase font-semibold text-[#4285f4]">Smart Contact Form</div>
              <h2 className="mt-2 text-2xl font-bold text-[#082f6f]">Send us a message</h2>

              <div className="mt-5">
                <label htmlFor="inquiry-type" className="block text-[12.5px] font-semibold text-[#020817] tracking-wide mb-1.5">
                  Inquiry type <span className="text-[#4285f4]">*</span>
                </label>
                <select
                  id="inquiry-type"
                  value={inquiryType}
                  onChange={(e) => onTypeChange(e.target.value as InquiryType)}
                  className={inputBase}
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-emerald-800 text-sm">
                  Thanks — your message has been sent. The SliceRaiser team will get back to you shortly.
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="ml-2 underline font-semibold hover:no-underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 space-y-4">
                  {fields.map((f) => (
                    <Field
                      key={f.name}
                      def={f}
                      value={values[f.name] ?? ""}
                      onChange={(v) => setValues((s) => ({ ...s, [f.name]: v }))}
                    />
                  ))}

                  {mutation.isError ? (
                    <div className="rounded-xl bg-rose-50 border border-rose-100 p-3 text-rose-700 text-xs">
                      Sorry — we couldn't send your message. Please try again or email mamoon@sliceraiser.com directly.
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#4285f4] to-[#3570d4] hover:from-[#3570d4] hover:to-[#2a5fc0] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl h-11 px-8 shadow-[0_8px_20px_-8px_rgba(66,133,244,0.55)] transition-all"
                  >
                    {mutation.isPending ? "Sending…" : "Submit"}
                  </button>
                </form>
              )}
            </Section>
          </div>
        </div>
      </div>

      {meetingOpen ? <MeetingModal onClose={() => setMeetingOpen(false)} /> : null}
    </div>
  );
}
