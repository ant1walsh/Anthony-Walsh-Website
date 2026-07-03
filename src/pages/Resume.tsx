import { Download, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/StaggeredReveal";

const RESUME_RAW = "https://www.dropbox.com/scl/fi/p8lh2cfhsj2s82t6kislr/Anthony-Walsh-AI-PMM-Resume.pdf?rlkey=ssp7f8t9jxweh4ettpl1isz5m&raw=1";
const RESUME_DL = "https://www.dropbox.com/scl/fi/p8lh2cfhsj2s82t6kislr/Anthony-Walsh-AI-PMM-Resume.pdf?rlkey=ssp7f8t9jxweh4ettpl1isz5m&dl=1";
const RESUME_VIEW = "https://docs.google.com/viewer?embedded=true&url=" + encodeURIComponent(RESUME_DL);

const Resume = () => {
  return (
    <div className="page">
      <section className="detail-hero">
        <div className="hero-glow" />
        <div className="wrap">
          <span className="label reveal">experience</span>
          <h1 className="reveal" style={{ marginTop: "10px" }}>
            <span className="accent">Resume</span>
          </h1>
          <p className="sub reveal" style={{ maxWidth: "640px" }}>
            A full history of product marketing experience — preview below, or download the PDF.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="resume-frame" style={{ maxWidth: "800px", margin: "0 auto", border: "1px solid hsl(var(--border-2))", borderRadius: "10px", overflow: "hidden", boxShadow: "var(--card-shadow)", background: "hsl(var(--surface))" }}>
              <div className="term-bar" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "11px 14px", borderBottom: "1px solid hsl(var(--border))", background: "hsl(var(--surface-2))" }}>
                <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f57", display: "block" }} />
                <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#febc2e", display: "block" }} />
                <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28c840", display: "block" }} />
                <span className="fn mono text-sm" style={{ color: "hsl(var(--muted))", flex: 1 }}>
                  Anthony-Walsh-AI-PMM-Resume.pdf
                </span>
                <div className="term-actions" style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
                  <a href={RESUME_RAW} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ fontSize: "0.72rem", padding: "0.5rem 0.8rem" }}>
                    open <ExternalLink size={13} />
                  </a>
                  <a href={RESUME_DL} className="btn btn-primary btn-sm" style={{ fontSize: "0.72rem", padding: "0.5rem 0.8rem" }}>
                    <Download size={13} style={{ width: 13, height: 13 }} /> download
                  </a>
                </div>
              </div>
              <div className="pdf-holder" style={{ position: "relative", width: "100%", aspectRatio: "8.5 / 11", background: "hsl(var(--bg))" }}>
                <iframe src={RESUME_VIEW} title="Anthony Walsh Resume" loading="lazy" style={{ width: "100%", height: "100%", border: 0, display: "block" }} />
                <div className="pdf-fallback" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center", padding: "30px", zIndex: -1, color: "hsl(var(--muted))", fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
                  <Download size={48} />
                  <div>preview couldn't load in this browser.<br />use <b>open</b> or <b>download</b> above to view the PDF.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Resume;