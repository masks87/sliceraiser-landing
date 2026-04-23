import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useListOpportunities } from "@workspace/api-client-react";
import type { InvestmentOpportunity } from "@workspace/api-client-react";
import ProgressBar from "@/components/ProgressBar";
import RiskBadge from "@/components/RiskBadge";
import { formatCurrency, formatPercent } from "@/lib/format";

function fundedPct(o: InvestmentOpportunity): number {
  if (!o.targetAmount) return 0;
  return Math.round((o.fundedAmount / o.targetAmount) * 100);
}

function OpportunityCard({ o }: { o: InvestmentOpportunity }) {
  return (
    <Link
      href={`/opportunities/${o.id}`}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={o.imageUrl}
          alt={o.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <RiskBadge level={o.riskLevel} />
        </div>
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-[#020817]">
            {o.assetType}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-center gap-1.5 text-[12px] text-[#8e9196] mb-2">
          <svg className="w-3.5 h-3.5 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {o.location}
        </div>

        <h3 className="text-[#020817] font-semibold text-[16px] leading-snug mb-2 line-clamp-2">{o.title}</h3>
        <p className="text-[#8e9196] text-[13px] leading-[20px] mb-4 line-clamp-2">{o.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <div className="text-[11px] text-[#8e9196]">Expected return</div>
            <div className="text-[15px] font-bold text-[#4285f4]">{formatPercent(o.expectedReturn)}</div>
          </div>
          <div>
            <div className="text-[11px] text-[#8e9196]">Min. investment</div>
            <div className="text-[15px] font-bold text-[#020817]">{formatCurrency(o.minimumInvestment)}</div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-[#8e9196]">{formatCurrency(o.fundedAmount, { compact: true })} raised</span>
            <span className="font-semibold text-[#082f6f]">{fundedPct(o)}%</span>
          </div>
          <ProgressBar value={fundedPct(o)} />
          <div className="text-[11px] text-[#8e9196] mt-1.5">
            Target {formatCurrency(o.targetAmount, { compact: true })}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Opportunities() {
  const { data, isLoading, error } = useListOpportunities();
  const initialAsset =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("asset") ?? "All"
      : "All";
  const [assetType, setAssetType] = useState<string>(initialAsset);
  const [risk, setRisk] = useState<string>("All");
  const [incomeType, setIncomeType] = useState<string>("All");

  const opportunities = (data ?? []) as InvestmentOpportunity[];

  const assetTypes = useMemo(() => ["All", ...Array.from(new Set(opportunities.map((o) => o.assetType)))], [opportunities]);
  const incomeTypes = useMemo(() => ["All", ...Array.from(new Set(opportunities.map((o) => o.incomeType)))], [opportunities]);
  const risks = ["All", "Low", "Medium", "High"];

  const filtered = opportunities.filter(
    (o) =>
      (assetType === "All" || o.assetType === assetType) &&
      (risk === "All" || o.riskLevel === risk) &&
      (incomeType === "All" || o.incomeType === incomeType),
  );

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-[30px] font-bold text-[#4285f4] mb-3 leading-[36px]">Investment Opportunities</h1>
          <p className="text-[#8e9196] text-base leading-[24px] max-w-2xl">
            Browse our curated catalog of fractional real estate and alternative income deals. Filter by asset type and
            risk profile to find opportunities that match your strategy.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-[#020817]">Asset</span>
            <div className="flex gap-1.5 flex-wrap">
              {assetTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setAssetType(t)}
                  className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
                    assetType === t
                      ? "bg-[#4285f4] text-white border-[#4285f4]"
                      : "bg-white text-[#020817] border-gray-200 hover:border-[#4285f4]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-[#020817]">Risk</span>
            <div className="flex gap-1.5 flex-wrap">
              {risks.map((t) => (
                <button
                  key={t}
                  onClick={() => setRisk(t)}
                  className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
                    risk === t
                      ? "bg-[#082f6f] text-white border-[#082f6f]"
                      : "bg-white text-[#020817] border-gray-200 hover:border-[#082f6f]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-[#020817]">Income</span>
            <div className="flex gap-1.5 flex-wrap">
              {incomeTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setIncomeType(t)}
                  className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
                    incomeType === t
                      ? "bg-[#4285f4] text-white border-[#4285f4]"
                      : "bg-white text-[#020817] border-gray-200 hover:border-[#4285f4]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[420px] rounded-2xl bg-[#f1f0fb] animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div className="bg-rose-50 border border-rose-100 text-rose-700 rounded-xl p-4 text-sm">
            Failed to load opportunities. Please try again.
          </div>
        )}

        {!isLoading && !error && (
          <>
            <div className="text-[12px] text-[#8e9196] mb-4">
              Showing {filtered.length} of {opportunities.length} opportunities
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((o) => (
                <OpportunityCard key={o.id} o={o} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
