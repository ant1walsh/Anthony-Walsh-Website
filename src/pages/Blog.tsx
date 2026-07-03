import { ExternalLink, Play } from "lucide-react";
import { Reveal } from "@/components/StaggeredReveal";

const blogPosts = [
  {
    title: "The Dangers of Data Egress and Ingress for LLM Usage",
    date: "March 5, 2025",
    url: "https://www.linkedin.com/pulse/dangers-data-egress-ingress-llm-usage-anthony-walsh-dr3vc/",
    excerpt: "Generative AI is quickly becoming a pervasive utility in the workplace. This presents a concern for employers that may not have properly vetted the models or applied the appropriate privacy, security, and compliance controls.",
  },
  {
    title: "How AI Apps Use and Misuse Data",
    date: "February 21, 2025",
    url: "https://www.linkedin.com/pulse/how-ai-apps-use-misuse-your-data-anthony-walsh-5tcjc/",
    excerpt: "Although LLM and AI application developers have implemented privacy and security protocols, data leaks caused by LLMs and AI apps pose significant risks to consumers and businesses.",
  },
  {
    title: "Ethical AI Policies and Their Unintended Consequences",
    date: "January 22, 2025",
    url: "https://www.linkedin.com/pulse/ethical-ai-policies-unintended-consequences-anthony-walsh-1xa9c/",
    excerpt: "The imposition of AI policy in global jurisdictions has disrupted product launches for some of the largest corporations, with far-reaching societal implications.",
  },
  {
    title: "How to Improve LLM Outputs with AI Agents for RAG",
    date: "June 24, 2024",
    url: "https://www.linkedin.com/pulse/how-optimize-llm-performance-agents-anthony-walsh-tilwf/",
    excerpt: "Agents can automate actions and improve the output of large language models — including frameworks for retrieval augmented generation.",
  },
];

const Blog = () => {
  return (
    <div className="page">
      <section className="detail-hero">
        <div className="hero-glow" />
        <div className="wrap">
          <span className="label reveal">writing</span>
          <h1 className="reveal" style={{ marginTop: "10px" }}>
            The <span className="accent">blog</span>
          </h1>
          <p className="sub reveal" style={{ maxWidth: "640px" }}>
            Insights on AI infrastructure, data privacy, and product marketing strategy.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <span className="label" style={{ display: "block", marginBottom: "20px" }}>
              product_marketing_posts
            </span>
          </Reveal>
          <div className="blog-list" style={{ display: "grid", gap: "14px", maxWidth: "760px" }}>
            {blogPosts.map((post, i) => (
              <Reveal key={post.url} delay={i * 80}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    background: "hsl(var(--surface))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    padding: "22px",
                    transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s",
                  }}
                >
                  <div>
                    <p className="date mono text-xs" style={{ color: "hsl(var(--cobalt))", marginBottom: "8px" }}>
                      {post.date}
                    </p>
                    <h3 style={{ fontSize: "1.08rem", marginBottom: "8px" }}>{post.title}</h3>
                    <p style={{ color: "hsl(var(--muted))", fontSize: "0.88rem" }}>{post.excerpt}</p>
                  </div>
                  <ExternalLink size={18} className="arrow" style={{ color: "hsl(var(--muted))", flexShrink: 0, transition: "transform 0.25s, color 0.25s" }} />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <span className="label" style={{ display: "block", marginBottom: "20px", marginTop: "52px" }}>
              product_marketing_podcast
            </span>
            <a
              href="https://youtu.be/T5lnVUNiVYY"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              style={{
                maxWidth: "760px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                background: "hsl(var(--surface))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                padding: "22px",
                transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s",
              }}
            >
              <div
                className="agent-ico"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "var(--radius)",
                  border: "1px solid hsl(var(--border-2))",
                  display: "grid",
                  placeItems: "center",
                  color: "hsl(var(--cobalt))",
                  margin: 0,
                }}
              >
                <Play size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.08rem" }}>Q&A with Bitboundaire</h3>
                <p style={{ margin: 0, color: "hsl(var(--muted))", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                  watch on youtube
                </p>
              </div>
              <ExternalLink size={18} className="arrow" style={{ color: "hsl(var(--muted))", flexShrink: 0, transition: "transform 0.25s, color 0.25s" }} />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;