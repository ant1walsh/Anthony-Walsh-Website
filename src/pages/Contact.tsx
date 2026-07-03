import { Calendar, Linkedin, Github, Mail } from "lucide-react";
import { Reveal } from "@/components/StaggeredReveal";

const Contact = () => {
  return (
    <div className="page">
      <section className="detail-hero">
        <div className="hero-glow" />
        <div className="wrap">
          <span className="label reveal">say_hello</span>
          <h1 className="reveal" style={{ marginTop: "10px" }}>
            Contact <span className="accent">me</span>
          </h1>
          <p className="sub reveal" style={{ maxWidth: "640px" }}>
            Ready to connect? Schedule a meeting or reach out through any channel below.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "56px" }}>
        <div className="wrap">
          <Reveal>
            <div className="cal-frame" style={{ maxWidth: "900px", margin: "0 auto", border: "1px solid hsl(var(--border-2))", borderRadius: "10px", overflow: "hidden", boxShadow: "var(--card-shadow)", background: "hsl(var(--surface))" }}>
              <div className="term-bar" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "11px 14px", borderBottom: "1px solid hsl(var(--border))", background: "hsl(var(--surface-2))" }}>
                <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f57", display: "block" }} />
                <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#febc2e", display: "block" }} />
                <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28c840", display: "block" }} />
                <span className="fn mono text-sm" style={{ color: "hsl(var(--muted))" }}>calendly — book a meeting</span>
              </div>
              <div id="calendlyEmbed" style={{ minWidth: "320px", height: "700px" }}>
                <div className="cal-fallback" style={{ padding: "40px", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "hsl(var(--muted))" }}>
                  loading calendar… if it doesn't appear, <a className="accent" href="https://calendly.com/antrobertwalsh/pmm" target="_blank" rel="noopener">open Calendly ↗</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="contact-mini" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginTop: "22px", maxWidth: "800px", margin: "22px auto 0" }}>
              <a href="https://linkedin.com/in/anthonyrwalsh" target="_blank" rel="noopener noreferrer" className="contact-cta" style={{ display: "flex", alignItems: "center", gap: "18px", background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)", padding: "26px", transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s" }}>
                <div className="ico" style={{ width: "50px", height: "50px", borderRadius: "var(--radius)", border: "1px solid hsl(var(--border-2))", display: "grid", placeItems: "center", color: "hsl(var(--cobalt))", flexShrink: 0 }}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.08rem" }}>LinkedIn</h3>
                  <p className="mono text-sm" style={{ color: "hsl(var(--muted))" }}>connect</p>
                </div>
              </a>
              <a href="https://github.com/ant1walsh" target="_blank" rel="noopener noreferrer" className="contact-cta" style={{ display: "flex", alignItems: "center", gap: "18px", background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)", padding: "26px", transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s" }}>
                <div className="ico" style={{ width: "50px", height: "50px", borderRadius: "var(--radius)", border: "1px solid hsl(var(--border-2))", display: "grid", placeItems: "center", color: "hsl(var(--cobalt))", flexShrink: 0 }}>
                  <Github size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.08rem" }}>GitHub</h3>
                  <p className="mono text-sm" style={{ color: "hsl(var(--muted))" }}>see the code</p>
                </div>
              </a>
              <a href="mailto:antrobertwalsh@gmail.com" className="contact-cta" style={{ display: "flex", alignItems: "center", gap: "18px", background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)", padding: "26px", transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s" }}>
                <div className="ico" style={{ width: "50px", height: "50px", borderRadius: "var(--radius)", border: "1px solid hsl(var(--border-2))", display: "grid", placeItems: "center", color: "hsl(var(--cobalt))", flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.08rem" }}>Email</h3>
                  <p className="mono text-sm" style={{ color: "hsl(var(--muted))" }}>message me</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;