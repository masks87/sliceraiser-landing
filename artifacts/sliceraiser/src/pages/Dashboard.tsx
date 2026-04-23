import { useUser } from "@clerk/react";
import { useGetPortfolio } from "@workspace/api-client-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { formatCurrency, formatPercent } from "@/lib/format";

const COLORS = ["#4285f4", "#082f6f", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function Dashboard() {
  const { user } = useUser();
  const { data, isLoading, error } = useGetPortfolio();
  const portfolio = data;

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="h-[120px] rounded-2xl bg-[#f1f0fb] animate-pulse mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[360px] rounded-2xl bg-[#f1f0fb] animate-pulse" />
          <div className="h-[360px] rounded-2xl bg-[#f1f0fb] animate-pulse" />
        </div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#020817] mb-3">Portfolio unavailable</h1>
        <p className="text-[#8e9196]">We couldn't load your portfolio. Please try refreshing the page.</p>
      </div>
    );
  }

  const { totals, holdings, allocation, returnsHistory } = portfolio;
  const positiveReturn = totals.totalReturn >= 0;
  const isEmpty = holdings.length === 0;

  if (isEmpty) {
    return (
      <div className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[30px] font-bold text-[#4285f4] leading-[36px]">
            Welcome{user?.firstName ? `, ${user.firstName}` : ""}
          </h1>
          <p className="text-[#8e9196] text-[14px] mt-1 mb-8">
            Let's get your SliceRaiser portfolio started.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto w-14 h-14 rounded-full bg-[#f1f0fb] flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-[20px] font-semibold text-[#020817] mb-2">No investments yet</h2>
            <p className="text-[14px] text-[#8e9196] max-w-md mx-auto mb-6">
              Browse our curated marketplace and acquire your first slice. Your portfolio analytics will appear here as soon as you invest.
            </p>
            <a
              href="/opportunities"
              className="inline-block bg-[#4285f4] text-white text-[14px] font-medium px-6 py-2.5 rounded-lg hover:bg-[#3570d4] transition-colors"
            >
              Browse Opportunities
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[30px] font-bold text-[#4285f4] leading-[36px]">
              Welcome back{user?.firstName ? `, ${user.firstName}` : ""}
            </h1>
            <p className="text-[#8e9196] text-[14px] mt-1">
              Here's how your SliceRaiser portfolio is performing today.
            </p>
          </div>
          <div className="text-[12px] text-[#8e9196]">
            Updated {new Date(portfolio.updatedAt).toLocaleString()}
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <KpiCard label="Total invested" value={formatCurrency(totals.totalInvested)} />
          <KpiCard label="Current value" value={formatCurrency(totals.totalCurrentValue)} highlight />
          <KpiCard
            label="Total return"
            value={`${positiveReturn ? "+" : ""}${formatCurrency(totals.totalReturn)}`}
            valueClass={positiveReturn ? "text-emerald-600" : "text-rose-600"}
          />
          <KpiCard
            label="Return %"
            value={`${positiveReturn ? "+" : ""}${formatPercent(totals.totalReturnPct)}`}
            valueClass={positiveReturn ? "text-emerald-600" : "text-rose-600"}
          />
        </div>

        {/* Returns chart + allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-[16px] font-semibold text-[#020817] mb-1">Portfolio value over time</h2>
            <p className="text-[12px] text-[#8e9196] mb-4">Last 12 months of valuations.</p>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={returnsHistory}>
                  <defs>
                    <linearGradient id="returnsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4285f4" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#4285f4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#f1f0fb" vertical={false} />
                  <XAxis dataKey="date" stroke="#8e9196" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#8e9196"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    formatter={(v: number) => formatCurrency(v)}
                    contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb" }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#4285f4" strokeWidth={2.5} fill="url(#returnsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-[16px] font-semibold text-[#020817] mb-1">Allocation</h2>
            <p className="text-[12px] text-[#8e9196] mb-4">By asset category.</p>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocation}
                    dataKey="percentage"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={2}
                  >
                    {allocation.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    wrapperStyle={{ fontSize: 11, color: "#8e9196" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Compliance / onboarding checklist */}
        <ComplianceChecklist />

        {/* Holdings table */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-[16px] font-semibold text-[#020817]">Your holdings</h2>
            <p className="text-[12px] text-[#8e9196] mt-0.5">
              Investments active across the SliceRaiser marketplace.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead className="bg-[#f1f0fb4d]">
                <tr className="text-left text-[11px] uppercase tracking-wide text-[#8e9196]">
                  <th className="px-6 py-3 font-semibold">Opportunity</th>
                  <th className="px-6 py-3 font-semibold">Units</th>
                  <th className="px-6 py-3 font-semibold">Invested</th>
                  <th className="px-6 py-3 font-semibold">Current value</th>
                  <th className="px-6 py-3 font-semibold">P/L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {holdings.map((h) => {
                  const pl = h.currentValue - h.investedAmount;
                  const plPct = h.investedAmount ? (pl / h.investedAmount) * 100 : 0;
                  const positive = pl >= 0;
                  return (
                    <tr key={h.opportunityId} className="hover:bg-[#f1f0fb4d]">
                      <td className="px-6 py-4 text-[#020817] font-medium">{h.title}</td>
                      <td className="px-6 py-4 text-[#020817]">{h.units.toLocaleString()}</td>
                      <td className="px-6 py-4 text-[#020817]">{formatCurrency(h.investedAmount)}</td>
                      <td className="px-6 py-4 font-semibold text-[#082f6f]">{formatCurrency(h.currentValue)}</td>
                      <td className={`px-6 py-4 font-semibold ${positive ? "text-emerald-600" : "text-rose-600"}`}>
                        {positive ? "+" : ""}
                        {formatCurrency(pl)}{" "}
                        <span className="text-[11px] font-medium opacity-80">
                          ({positive ? "+" : ""}
                          {formatPercent(plPct)})
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplianceChecklist() {
  const steps = [
    {
      title: "Identity verification",
      desc: "Upload a government ID and proof of address so we can satisfy KYC requirements.",
    },
    {
      title: "Funding account",
      desc: "Link a funding account so you can subscribe to deals when allocations open.",
    },
    {
      title: "Accredited-investor status",
      desc: "Confirm your accreditation to unlock private and institutional-grade offerings.",
    },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-8">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h2 className="text-[16px] font-semibold text-[#020817]">Onboarding & compliance</h2>
          <p className="text-[12px] text-[#8e9196] mt-0.5">
            Complete these steps to unlock investing. Demo placeholders — not connected to real regulated workflows.
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
          Demo
        </span>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <li
            key={s.title}
            className="border border-gray-100 rounded-xl p-4 bg-[#f7f9ff]"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13.5px] font-semibold text-[#020817]">{s.title}</span>
              <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Pending
              </span>
            </div>
            <p className="text-[12px] text-[#8e9196] leading-relaxed mb-3">{s.desc}</p>
            <button
              type="button"
              disabled
              className="text-[12px] font-medium text-[#4285f4] opacity-70 cursor-not-allowed"
            >
              Start step →
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function KpiCard({
  label,
  value,
  highlight = false,
  valueClass = "",
}: {
  label: string;
  value: string;
  highlight?: boolean;
  valueClass?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-5 border shadow-sm ${
        highlight ? "bg-[#082f6f] text-white border-[#082f6f]" : "bg-white border-gray-200"
      }`}
    >
      <div className={`text-[12px] mb-1 ${highlight ? "text-white/70" : "text-[#8e9196]"}`}>{label}</div>
      <div className={`text-[24px] font-bold ${highlight ? "text-white" : valueClass || "text-[#020817]"}`}>
        {value}
      </div>
    </div>
  );
}
