import { Bolt } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";
import { Reveal } from "@/components/StaggeredReveal";

interface MetricCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
}

export function MetricCard({ label, value, prefix = "", suffix = "", icon }: MetricCardProps) {
  const { ref, displayValue } = useCounter(value, 1400, prefix, suffix);

  return (
    <Reveal delay={0}>
      <div ref={ref} className="stat-card">
        {icon && <div className="stat-icon">{icon}</div>}
        <div className="stat-num mono font-bold text-3xl lg:text-4xl" style={{ color: "hsl(var(--cobalt))" }}>
          {displayValue}
        </div>
        <div className="stat-label" style={{ color: "hsl(var(--muted))" }}>
          {label}
        </div>
      </div>
    </Reveal>
  );
}

export function MetricsSection() {
  const stats = [
    { label: "of product marketing experience", value: 10, suffix: " yrs" },
    { label: "products shipped to thousands of users", value: 16 },
    { label: "in revenue generated", value: 120, prefix: "$", suffix: "M" },
  ];

  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="label">by_the_numbers</span>
          <h2>A decade of measurable impact</h2>
        </div>
        <div className="stats" data-stagger>
          {stats.map((stat, i) => (
            <MetricCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}