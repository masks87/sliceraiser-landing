import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { useGetOpportunity } from "@workspace/api-client-react";
import ProgressBar from "@/components/ProgressBar";
import RiskBadge from "@/components/RiskBadge";
import { formatCurrency, formatPercent } from "@/lib/format";

function ExpressInterestDialog({
  open,
  onClose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/55 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-7 relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#8e9196] hover:text-[#020817]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[20px] font-bold text-[#020817] mb-2">Interest registered</h2>
            <p className="text-[13.5px] text-[#8e9196] leading-relaxed mb-6">
              Thanks — our investor relations team will reach out shortly with full deal documents and next steps for{" "}
              <span className="text-[#020817] font-medium">{title}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#4285f4] text-white text-sm font-medium px-6 py-2.5 rounded-[12px] hover:bg-[#3570d4] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-[20px] font-bold text-[#020817] mb-2">Express interest</h2>
            <p className="text-[13.5px] text-[#8e9196] leading-relaxed mb-5">
              Confirm you'd like to express non-binding interest in <span className="text-[#020817] font-medium">{title}</span>.
              This is a demo flow — no payment is taken and no commitment is made.
            </p>
            <div className="rounded-xl bg-[#f7f9ff] border border-gray-100 p-3 text-[12px] text-[#8e9196] mb-6">
              Investor relations will follow up by email with the deal memo, subscription documents and minimum
              ticket requirements.
            </div>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="border border-gray-200 text-[#020817] text-sm font-medium px-5 py-2.5 rounded-[12px] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="bg-[#4285f4] text-white text-sm font-medium px-5 py-2.5 rounded-[12px] hover:bg-[#3570d4] transition-colors"
              >
                Confirm interest
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function OpportunityDetail() {
  const [interestOpen, setInterestOpen] = useState(false);
  const [, params] = useRoute("/opportunities/:id");
  const id = params?.id ? Number(params.id) : NaN;
  const { data, isLoading, error } = useGetOpportunity(id, {
    query: { enabled: Number.isFinite(id) },
  });
  const o = data;

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="h-[400px] rounded-2xl bg-[#f1f0fb] animate-pulse" />
      </div>
    );
  }

  if (error || !o) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#020817] mb-3">Opportunity not found</h1>
        <p className="text-[#8e9196] mb-6">The opportunity you're looking for doesn't exist or is no longer available.</p>
        <Link
          href="/opportunities"
          className="inline-block bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors"
        >
          Back to opportunities
        </Link>
      </div>
    );
  }

  const fundedPct = Math.round((o.fundedAmount / o.targetAmount) * 100);

  return (
    <div className="bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/opportunities"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#8e9196] hover:text-[#4285f4] transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to opportunities
        </Link>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 mb-8">
          <div className="relative h-[360px] overflow-hidden">
            <img src={o.imageUrl} alt={o.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute top-5 left-5 flex gap-2">
              <RiskBadge level={o.riskLevel} />
              <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#020817]">
                {o.assetType}
              </span>
              <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#020817]">
                {o.incomeType}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-1.5 text-[13px] mb-1.5 opacity-90">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {o.location}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl">{o.title}</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-[20px] font-bold text-[#020817] mb-3">About this opportunity</h2>
              <p className="text-[#8e9196] text-[15px] leading-[24px] whitespace-pre-line">{o.description}</p>
            </div>

            <div>
              <h2 className="text-[20px] font-bold text-[#020817] mb-4">Key terms</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Asset type", value: o.assetType },
                  { label: "Income type", value: o.incomeType },
                  { label: "Risk level", value: o.riskLevel },
                  { label: "Location", value: o.location },
                ].map((row) => (
                  <div key={row.label} className="bg-[#f1f0fb4d] border border-gray-100 rounded-xl p-4">
                    <div className="text-[11px] uppercase tracking-wide text-[#8e9196] mb-1">{row.label}</div>
                    <div className="text-[14px] font-semibold text-[#020817]">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md h-fit lg:sticky lg:top-24">
            <div className="mb-5">
              <div className="text-[12px] text-[#8e9196]">Expected annual return</div>
              <div className="text-[32px] font-bold text-[#4285f4] leading-tight">
                {formatPercent(o.expectedReturn)}
              </div>
            </div>

            <div className="space-y-3 mb-5 text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#8e9196]">Minimum investment</span>
                <span className="font-semibold text-[#020817]">{formatCurrency(o.minimumInvestment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e9196]">Target raise</span>
                <span className="font-semibold text-[#020817]">{formatCurrency(o.targetAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e9196]">Funded so far</span>
                <span className="font-semibold text-[#082f6f]">{formatCurrency(o.fundedAmount)}</span>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between text-[12px] mb-1.5">
                <span className="text-[#8e9196]">{fundedPct}% funded</span>
                <span className="text-[#8e9196]">
                  {formatCurrency(Math.max(o.targetAmount - o.fundedAmount, 0), { compact: true })} remaining
                </span>
              </div>
              <ProgressBar value={fundedPct} />
            </div>

            <button
              type="button"
              onClick={() => setInterestOpen(true)}
              className="w-full bg-[#4285f4] text-white text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#3570d4] transition-colors mb-2"
            >
              Express interest
            </button>
            <button className="w-full border border-[#082f6f] text-[#082f6f] text-sm font-medium px-6 py-3 rounded-[14px] hover:bg-[#082f6f] hover:text-white transition-colors">
              Add to watchlist
            </button>
            <p className="text-[11px] text-[#8e9196] mt-3 text-center leading-relaxed">
              Demo only — no real funds are processed.
            </p>
          </aside>
        </div>
      </div>

      <ExpressInterestDialog open={interestOpen} onClose={() => setInterestOpen(false)} title={o.title} />
    </div>
  );
}
