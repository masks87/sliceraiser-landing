export default function RiskBadge({ level }: { level: string }) {
  const map: Record<string, string> = {
    Low: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Medium: "bg-amber-50 text-amber-700 border-amber-100",
    High: "bg-rose-50 text-rose-700 border-rose-100",
  };
  const cls = map[level] ?? "bg-gray-50 text-gray-700 border-gray-200";
  return (
    <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cls}`}>
      {level} risk
    </span>
  );
}
