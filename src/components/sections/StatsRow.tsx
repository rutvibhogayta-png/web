import { metrics } from "@/data/metrics";
import { MetricCard } from "@/components/common/MetricCard";

export function StatsRow() {
  const extendedMetrics = [
    { label: "Community Members", value: 500, suffix: "+", delta: "+28%", isLive: true },
    { label: "Workshops & Talks", value: 32, suffix: "+", delta: "+15%" },
    { label: "Production Projects", value: 15, suffix: "+", delta: "+40%" },
    { label: "Hackathon Teams", value: 24, suffix: "+", delta: "+35%" },
  ];

  return (
    <section className="relative py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {extendedMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
