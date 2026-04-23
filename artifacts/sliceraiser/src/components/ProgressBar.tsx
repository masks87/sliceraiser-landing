import { clamp } from "@/lib/format";

export default function ProgressBar({ value }: { value: number }) {
  const pct = clamp(value, 0, 100);
  return (
    <div className="w-full h-2 bg-[#f1f0fb] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#4285f4] transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
