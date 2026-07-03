import { useState, useEffect, useRef } from "react";
import { usePositioningGen } from "@/hooks/usePositioningGen";
import { Bolt, ChevronRight, Github } from "lucide-react";
import { Reveal } from "@/components/StaggeredReveal";

const DEMO_FIELDS = {
  product: [
    { id: "d-name", label: "Product name", value: "SalesIntel Enrichment", ta: false },
    { id: "d-cat", label: "Category", value: "data enrichment platform", ta: false },
    { id: "d-icp", label: "ICP / target persona", value: "RevOps and marketing teams", ta: false },
    { id: "d-prob", label: "Problem statement", value: "CRM records go stale, so teams waste spend on bad contacts", ta: true },
    { id: "d-diff", label: "Competitive differentiator", value: "human-verified contact data that is 95% accurate and re-verified every 90 days", ta: true },
    { id: "d-out", label: "Anticipated result", value: "clean, trustworthy CRM records", ta: false },
  ],
  feature: [
    { id: "d-fname", label: "Feature name", value: "Auto-Reverify", ta: false },
    { id: "d-parent", label: "Parent product", value: "SalesIntel Enrichment", ta: false },
    { id: "d-fpersona", label: "User persona", value: "RevOps managers", ta: false },
    { id: "d-fprob", label: "Problem it solves", value: "records silently decay between manual refreshes", ta: true },
    { id: "d-fhow", label: "How it works", value: "automatically re-verifies every contact on a rolling 90-day cycle", ta: true },
    { id: "d-fdiff", label: "Differentiator", value: "verification by humans, not just automated guesses", ta: true },
  ],
};

export function AIDemo() {
  const { mode, setMode, output, governanceNote, isGenerating, generate } = usePositioningGen();
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const outputRef = useRef<HTMLDivElement>(null);

  // Initialize form values
  useEffect(() => {
    const initialValues: Record<string, string> = {};
    DEMO_FIELDS[mode].forEach((field) => {
      initialValues[field.id] = field.value;
    });
    setFormValues(initialValues);
  }, [mode]);

  const handleChange = (id: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleGenerate = () => {
    // Update DOM values for the hook to read
    Object.entries(formValues).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("value", value);
    });
    generate();
  };

  return (
    <div>
      {/* Agent cards */}
      <Reveal>
        <div className="section-head" style={{ maxWidth: "none" }}>
          <span className="label">live_preview</span>
          <h2>Product Positioning Generator</h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div
          className="demo-note"
          style={{
            maxWidth: "920px",
            margin: "0 auto 20px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "hsl(var(--muted))",
            border: "1px solid hsl(var(--border))",
            borderLeft: "2px solid hsl(var(--cobalt))",
            borderRadius: "var(--radius)",
            padding: "14px 18px",
            lineHeight: "1.7",
          }}
        >
          <b className="accent">▸ front-end preview.</b> This mirrors the inputs and output structure of my{" "}
          <a href="https://github.com/ant1walsh/Product-Positioning-Generator" target="_blank" rel="noopener" style={{ color: "hsl(var(--cobalt))" }}>
            Product Positioning Generator
          </a>{" "}
          — the production agent runs on <b className="accent">n8n + Google Gemini + Gmail</b>, applies a banned-words governance prompt, and emails a Markdown file. This preview generates locally in your browser (no model call), so you can see the shape of the output instantly.
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div
          className="demo"
          style={{
            border: "1px solid hsl(var(--border-2))",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "var(--card-shadow)",
            maxWidth: "920px",
            margin: "0 auto",
            background: "hsl(var(--surface))",
          }}
        >
          <div
            className="demo-head"
            style={{
              padding: "12px 18px",
              borderBottom: "1px solid hsl(var(--border))",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "hsl(var(--surface-2))",
            }}
          >
            <span className="dots" style={{ display: "flex", gap: "6px" }}>
              <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f57", display: "block" }} />
              <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#febc2e", display: "block" }} />
              <i style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28c840", display: "block" }} />
            </span>
            <span className="fn mono font-medium text-sm" style={{ color: "hsl(var(--muted))" }}>
              positioning_generator.n8n
            </span>
            <span
              className="live mono text-[0.66rem] font-semibold"
              style={{ marginLeft: "auto", color: "hsl(var(--cobalt))", display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <span className="pulse pulse-glow" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "hsl(var(--cobalt))" }} />
              preview
            </span>
          </div>

          {/* Mode tabs */}
          <div className="mode-tabs" style={{ display: "flex", borderBottom: "1px solid hsl(var(--border))" }}>
            <button
              data-mode="product"
              onClick={() => setMode("product")}
              className={`flex-1 py-3 px-4 mono text-xs font-medium transition-colors border-b-2 ${
                mode === "product"
                  ? "text-cobalt border-cobalt bg-cobalt/6"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ◇ new product launch
            </button>
            <button
              data-mode="feature"
              onClick={() => setMode("feature")}
              className={`flex-1 py-3 px-4 mono text-xs font-medium transition-colors border-b-2 ${
                mode === "feature"
                  ? "text-cobalt border-cobalt bg-cobalt/6"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ⚑ feature release
            </button>
          </div>

          <div className="demo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* Form */}
            <div className="demo-form" style={{ padding: "22px", borderRight: "1px solid hsl(var(--border))" }}>
              {DEMO_FIELDS[mode].map((field) => (
                <div key={field.id}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "hsl(var(--muted))",
                      margin: "13px 0 5px",
                    }}
                  >
                    {field.label}
                  </label>
                  {field.ta ? (
                    <textarea
                      id={field.id}
                      value={formValues[field.id] || field.value}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.6rem 0.75rem",
                        borderRadius: "var(--radius)",
                        border: "1px solid hsl(var(--border-2))",
                        background: "hsl(var(--bg))",
                        color: "hsl(var(--text))",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                        resize: "vertical",
                        minHeight: "56px",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                    />
                  ) : (
                    <input
                      id={field.id}
                      value={formValues[field.id] || field.value}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.6rem 0.75rem",
                        borderRadius: "var(--radius)",
                        border: "1px solid hsl(var(--border-2))",
                        background: "hsl(var(--bg))",
                        color: "hsl(var(--text))",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                    />
                  )}
                </div>
              ))}

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn btn-primary"
                style={{
                  marginTop: "18px",
                  width: "100%",
                  justifyContent: "center",
                  opacity: isGenerating ? 0.7 : 1,
                }}
              >
                <Bolt size={14} className="mr-2" /> {isGenerating ? "generating..." : mode === "product" ? "generate positioning" : "generate release note"}
              </button>
            </div>

            {/* Output */}
            <div className="demo-out" style={{ padding: "22px", background: "hsl(var(--bg))", position: "relative", minHeight: "360px", fontFamily: "var(--font-mono)" }}>
              <div ref={outputRef} className="typewriter" style={{ fontSize: "0.86rem", whiteSpace: "pre-wrap", lineHeight: "1.7" }}>
                {output
                  ? output.replace(/«(.+?)»/g, '<span class="sec-title" style="color:hsl(var(--cobalt));font-size:0.7rem;letter-spacing:0.02em;text-transform:lowercase;display:block;margin:16px 0 5px;">$1</span>')
                  : '<div class="placeholder" style="color:hsl(var(--muted));font-size:0.85rem;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:12px;opacity:0.8;"><span style="display:flex;align-items:center;gap:5px;color:hsl(var(--muted));font-size:0.82rem;"><i style="width:7px;height:7px;border-radius:50%;background:hsl(var(--cobalt));animation:bounce-dots 1.2s infinite;"></i><i style="width:7px;height:7px;border-radius:50%;background:hsl(var(--cobalt));animation:bounce-dots 1.2s infinite;animation-delay:.15s"></i><i style="width:7px;height:7px;border-radius:50%;background:hsl(var(--cobalt));animation:bounce-dots 1.2s infinite;animation-delay:.3s"></i> <span style="margin-left:6px">running llm chain…</span></span></div>'}
                <span className="cursor blink" style={{ display: isGenerating ? "inline-block" : "none", width: "8px", height: "1.05em", background: "hsl(var(--cobalt))", verticalAlign: "text-bottom" }} />
              </div>
              {governanceNote && (
                <div
                  className="gov mono text-[0.66rem]"
                  style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px dashed hsl(var(--border-2))", color: "hsl(var(--muted))" }}
                >
                  <b style={{ color: "hsl(var(--cobalt))" }}>▸ governance</b> {governanceNote}
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}