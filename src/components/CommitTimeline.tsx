import { timeline, type TimelineEntry } from "@/data/timeline";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/StaggeredReveal";

export function CommitTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;

      // Fill progress
      const prog = Math.min(1, Math.max(0, (vh * 0.7 - rect.top) / rect.height));
      setFillHeight(prog * 100);

      // Activate nodes
      const items = timeline.querySelectorAll(".tl-item");
      items.forEach((item, index) => {
        if (item.getBoundingClientRect().top < vh * 0.78) {
          setActiveItems((prev) => new Set([...prev, index]));
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ background: "hsl(var(--bg-2))" }}>
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="label">career_log</span>
            <h2>The path</h2>
          </div>
        </Reveal>
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-fill" style={{ height: `${fillHeight}%` }} />
          {timeline.map((entry, i) => (
            <Reveal key={entry.date} delay={i * 80}>
              <div
                className={`tl-item ${activeItems.has(i) ? "in" : ""}`}
                style={{
                  transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
                }}
              >
                <div
                  className="tl-node"
                  style={{
                    borderColor: activeItems.has(i) ? "hsl(var(--cobalt))" : "hsl(var(--border-2))",
                    background: activeItems.has(i) ? "hsl(var(--cobalt))" : "hsl(var(--bg))",
                    boxShadow: activeItems.has(i) ? "0 0 0 5px hsl(var(--cobalt) / 0.16)" : "none",
                    transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
                  }}
                />
                <div className="tl-date mono" style={{ color: "hsl(var(--cobalt))" }}>
                  {entry.date}
                </div>
                <div className="tl-role display font-semibold">{entry.role || entry.description.split(" at ")[0]}</div>
                <div className="tl-desc" style={{ color: "hsl(var(--muted))" }}>
                  {entry.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}