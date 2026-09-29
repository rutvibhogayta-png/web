import type { Metric } from "@/types";
import { PillBadge } from "@/components/common/PillBadge";
import { TrendingUp } from "lucide-react";

export function MetricCard({ label, value, suffix, delta, isLive }: Metric) {
  const sparklinePoints = "0,24 12,18 24,20 36,10 48,14 60,4 72,8";

  return (
    <div className="group relative overflow-hidden rounded-card border border-graphite/60 bg-carbon-card/90 p-24 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lavender-pulse/50 hover:shadow-[0_8px_30px_rgba(153,132,216,0.12)]">
      {/* Subtle top border glow */}
      <div
        className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-pulse/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between">
        <p className="text-body-sm font-medium text-ash-gray">{label}</p>
        {isLive ? (
          <PillBadge tone="mint" live className="bg-mint-signal/5">Live</PillBadge>
        ) : (
          <span className="flex items-center gap-4 text-caption text-steel-gray">
            <TrendingUp className="h-10 w-10 text-mint-signal" />
            Active
          </span>
        )}
      </div>

      <div className="mt-12 flex items-baseline gap-2">
        <span className="text-[36px] font-semibold tabular-nums text-ghost-white tracking-tight">
          {value.toLocaleString()}
        </span>
        {suffix && (
          <span className="text-[26px] font-bold text-lavender-pulse">{suffix}</span>
        )}
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-graphite/40 pt-12">
        <span className="inline-flex items-center gap-4 text-caption font-medium text-mint-signal">
          <span>{delta}</span>
          <span className="text-steel-gray font-normal">vs last term</span>
        </span>

        <svg width="68" height="24" viewBox="0 0 72 28" fill="none" aria-hidden="true" className="opacity-80 transition-opacity group-hover:opacity-100">
          <polyline
            points={sparklinePoints}
            fill="none"
            stroke="#9984d8"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}