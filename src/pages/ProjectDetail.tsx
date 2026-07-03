import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/StaggeredReveal";
import { ScrollProgress } from "@/components/ScrollProgress";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="page">
        <section className="detail-hero">
          <div className="hero-glow" />
          <div className="wrap" style={{ textAlign: "center", padding: "80px 0" }}>
            <h1>Project not found</h1>
            <Link to="/projects" className="btn btn-ghost" style={{ marginTop: "20px" }}>
              <ChevronLeft size={14} className="mr-2" /> back_to_projects
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const sections = [
    { id: "scenario", title: "scenario", content: project.scenario },
    { id: "challenge", title: "challenge", content: project.challenge },
    { id: "objective", title: "objective", content: project.objective },
    { id: "solution", title: "solution", content: project.solution.join("\n\n") },
    { id: "impact", title: "impact", content: project.impact },
  ];

  // Scroll spy for active nav
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(`detail-${section.id}`);
        if (element && element.getBoundingClientRect().top < 160) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = sections.map((s) => (
    <a
      key={s.id}
      href={`#detail-${s.id}`}
      data-sec={s.id}
      className={`block px-3 py-2 font-mono text-sm transition-all ${activeSection === s.id ? "text-cobalt border-l-cobalt" : "text-muted-foreground border-l-border"}`}
      style={{ borderLeft: "2px solid" }}
    >
      {s.title}
    </a>
  ));

  const body = sections.map((s) => (
    <Reveal key={s.id} delay={80}>
      <div className="detail-section" id={`detail-${s.id}`}>
        <h2 className="text-xs font-mono tracking-wider uppercase" style={{ color: "hsl(var(--cobalt))", marginBottom: "14px" }}>
          <span style={{ opacity: 0.6 }}>// </span>{s.title}
        </h2>
        <div style={{ color: "hsl(var(--foreground) / 0.9)" }}>
          {s.content.split("\n\n").map((paragraph, j) =>
            s.id === "solution" ? (
              <ul key={j} style={{ listStyle: "none", paddingLeft: 0 }}>
                {paragraph.split("\n").map((item, k) => (
                  <li key={k} style={{ marginBottom: "14px", paddingLeft: "22px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 0, color: "hsl(var(--cobalt))", fontSize: "0.8rem" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={j} style={{ marginBottom: "14px" }}>{paragraph}</p>
            )
          )}
        </div>
      </div>
    </Reveal>
  ));

  return (
    <div className="page">
      <ScrollProgress />
      <section className="detail-hero">
        <div className="hero-glow" />
        <div className="wrap">
          <Link to="/projects" className="back-link mono text-sm" style={{ color: "hsl(var(--muted))", marginBottom: "22px", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
            <ChevronLeft size={14} /> back_to_projects
          </Link>
          <span className="co inline-block mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 600, padding: "0.26rem 0.6rem", borderRadius: "4px", background: project.company === "Meta" ? "hsl(var(--cobalt) / 0.14)" : project.company === "SalesIntel" ? "transparent" : "hsl(var(--muted) / 0.16)", color: project.company === "Meta" ? "hsl(var(--cobalt))" : project.company === "SalesIntel" ? "hsl(var(--foreground))" : "hsl(var(--muted))", border: project.company === "SalesIntel" ? "1px solid hsl(var(--border-2))" : "none" }}>
            {project.company}
          </span>
          <h1 className="text-3xl lg:text-4xl font-display font-semibold" style={{ margin: "8px 0 10px", position: "relative", zIndex: 2 }}>
            {project.subtitle}
          </h1>
          <p className="sub mono text-base" style={{ position: "relative", zIndex: 2 }}>
            {project.program} · <span className="accent">{project.metric}</span>
          </p>
        </div>
      </section>

      <section>
        <div className="detail-body" style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: "46px", maxWidth: "940px", margin: "0 auto", paddingTop: "52px" }}>
          <nav className="detail-nav" style={{ position: "sticky", top: "92px", alignSelf: "start" }}>
            {nav}
          </nav>
          <div>
            {body}
            <Link to="/projects" className="btn btn-primary mt-6 inline-flex items-center gap-2" style={{ marginTop: "12px" }}>
              <ChevronLeft size={14} /> all_projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;