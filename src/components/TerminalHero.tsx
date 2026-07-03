import { Bolt, ArrowRight } from "lucide-react";
import { useTerminalType } from "@/hooks/useTerminalType";
import { Reveal } from "@/components/StaggeredReveal";

const terminalLines = [
  { type: "cmd" as const, html: '<span class="pr">$</span> whoami' },
  { type: "out" as const, html: '<b>Anthony Walsh</b> — technical product marketer' },
  { type: "cmd" as const, html: '<span class="pr">$</span> cat focus.txt' },
  { type: "out" as const, html: 'AI infrastructure & applications' },
  { type: "out" as const, html: 'go-to-market · positioning · demand gen' },
  { type: "cmd" as const, html: '<span class="pr">$</span> ls impact/' },
  { type: "out" as const, html: '<b>$120M</b> revenue   <b>16</b> products   <b>10y</b> exp' },
];

export function TerminalHero() {
  const { displayedLines, showCursor, reset } = useTerminalType(terminalLines);

  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="wrap">
        <div className="hero-layout">
          {/* Left column - Hero copy */}
          <div className="hero-copy">
            <div className="term-status">
              <span className="live pulse-glow" />
              <span>marketing director @ demodoc — ai automation studio</span>
            </div>
            <h1>
              Hi, my name is <span className="accent">Anthony</span>. <span className="inline-block">👋🏼</span>
            </h1>
            <p className="lead">
              I'm a technical product marketer with experience directing go-to-market strategy for AI infrastructure and applications. I've managed campaigns that increase recurring revenue, user engagement, and customer satisfaction at pre-IPO startups and Fortune 50 enterprises. I'm also a father, writer, and former rugby player based in California.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#/projects">explore_work <ArrowRight size={14} /></a>
              <a className="btn btn-ghost" href="https://linkedin.com/in/anthonyrwalsh" target="_blank" rel="noopener">linkedin</a>
              <a className="btn btn-ghost" href="https://github.com/ant1walsh" target="_blank" rel="noopener">github</a>
            </div>
          </div>

          {/* Right column - Terminal + Portrait */}
          <div className="hero-photo-col reveal">
            <div className="portrait-wrap" id="portraitWrap">
              <img
                className="portrait"
                id="heroPortrait"
                src="/anthony-hero.png"
                alt="Anthony Walsh speaking at a conference"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  document.getElementById("termFallback")?.style.removeProperty("display");
                  reset();
                }}
              />
            </div>
            <div className="terminal" id="termFallback" style={{ display: "none" }}>
              <div className="term-bar">
                <i style={{ background: "#ff5f57" }} />
                <i style={{ background: "#febc2e" }} />
                <i style={{ background: "#28c840" }} />
                <span className="fn">anthony@portfolio: ~/bin/whoami</span>
              </div>
              <div className="term-body" id="termBody">
                {displayedLines.map((line, i) => (
                  <div key={i} className={line.type}>
                    <span dangerouslySetInnerHTML={{ __html: line.html }} />
                  </div>
                ))}
                {showCursor && (
                  <div className="cmd">
                    <span className="pr">$</span> <span className="cursor-blk blink" />
                  </div>
                )}
              </div>
            </div>
            <div className="hero-metrics">
              <div className="hmx"><b>$120M</b><span>revenue</span></div>
              <div className="hmx"><b>16</b><span>products</span></div>
              <div className="hmx"><b>10 yrs</b><span>experience</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}