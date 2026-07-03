import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TerminalHero } from "@/components/TerminalHero";
import { MetricsSection } from "@/components/MetricCard";
import { CommitTimeline } from "@/components/CommitTimeline";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Reveal } from "@/components/StaggeredReveal";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div>
      <ScrollProgress />
      <TerminalHero />
      <MetricsSection />
      <CommitTimeline />
      <TestimonialCarousel />
      <section style={{ background: "hsl(var(--bg-2))" }}>
        <div className="wrap cta-band reveal" style={{ textAlign: "center" }}>
          <span className="label" style={{ justifyContent: "center", display: "flex", marginBottom: "12px" }}>let's_build</span>
          <h2 style={{ marginTop: "12px" }}>Let's <span className="accent">work together</span></h2>
          <p style={{ color: "hsl(var(--muted))", marginBottom: "26px" }}>Interested in collaborating or learning more about my work?</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/projects"
              className="btn btn-primary"
            >
              view_projects <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="btn btn-ghost"
            >
              get_in_touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;