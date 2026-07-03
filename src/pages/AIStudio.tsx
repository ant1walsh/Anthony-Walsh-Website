import { AIDemo } from "@/components/AIDemo";
import { Reveal } from "@/components/StaggeredReveal";
import { ExternalLink, Github } from "lucide-react";

const agents = [
  {
    name: "Customer Story Generator",
    glyph: "“ story",
    desc: "Generates compelling customer case studies and social posts from interview transcripts.",
    link: "https://github.com/ant1walsh/Customer-Story-Generator",
  },
  {
    name: "Product Positioning Generator",
    glyph: "⚑ positioning",
    desc: "Generates taglines, positioning statements, and value propositions from product specs.",
    link: "https://github.com/ant1walsh/Product-Positioning-Generator",
  },
  {
    name: "ICP & Persona Analyzer",
    glyph: "◇ segmentation",
    desc: "Defines ideal customer profiles as well as buyer and user personas.",
    link: "https://github.com/ant1walsh/ICP-and-Persona-Analyzer",
  },
];

const AIStudio = () => {
  return (
    <div className="page">
      <section className="detail-hero">
        <div className="hero-glow" />
        <div className="wrap">
          <span className="label reveal">ai_studio</span>
          <h1 className="reveal" style={{ marginTop: "10px" }}>
            AI <span className="accent">agents</span>
          </h1>
          <p className="sub reveal" style={{ maxWidth: "640px" }}>
            Agents I've built to accelerate product marketing operations — from analysis to copywriting. Try a preview of one below.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="agents-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "60px" }}>
              {agents.map((agent) => (
                <div key={agent.name} className="agent-card reveal" style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)", padding: "24px", transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s" }}>
                  <div className="agent-ico" style={{ width: "42px", height: "42px", borderRadius: "var(--radius)", border: "1px solid hsl(var(--border-2))", display: "grid", placeItems: "center", color: "hsl(var(--cobalt))", marginBottom: "16px" }}>
                    <Github size={20} />
                  </div>
                  <div className="glyph mono text-xs" style={{ color: "hsl(var(--cobalt))", marginBottom: "10px" }}>
                    {agent.glyph}
                  </div>
                  <h3 style={{ fontSize: "1.08rem", marginBottom: "8px" }}>{agent.name}</h3>
                  <p style={{ color: "hsl(var(--muted))", fontSize: "0.88rem", marginBottom: "16px" }}>{agent.desc}</p>
                  <a href={agent.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 500, color: "hsl(var(--cobalt))", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    view_on_github <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          <AIDemo />
        </div>
      </section>
    </div>
  );
};

export default AIStudio;