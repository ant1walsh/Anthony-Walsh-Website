import { useEffect, useRef, useState } from "react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { Reveal } from "@/components/StaggeredReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
    resetTimer();
  };

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      diff > 0 ? prev() : next();
    }
    setTouchStart(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section className="tst-section">
      <div className="wrap">
        <Reveal>
          <div className="section-head" style={{ textAlign: "center" }}>
            <span className="label" style={{ justifyContent: "center", display: "flex" }}>endorsements</span>
            <h2>What people say</h2>
          </div>
        </Reveal>
        <div className="tst-wrap reveal" style={{ position: "relative" }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onKeyDown={handleKeyDown} tabIndex={0} role="region" aria-label="Testimonials">
          <div
            className="tst-card"
            style={{
              border: "1px solid hsl(var(--border))",
              borderLeft: "2px solid hsl(var(--cobalt))",
              borderRadius: "var(--radius)",
              padding: "32px 34px",
              background: "hsl(var(--surface))",
              minHeight: "200px",
            }}
          >
            <blockquote
              className="tst-quote"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                lineHeight: "1.55",
                marginBottom: "18px",
                position: "relative",
                paddingLeft: "1.5rem",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", color: "hsl(var(--cobalt))", position: "absolute", left: 0 }}>» </span>
              {testimonials[index].quote}
            </blockquote>
            <p className="tst-author" style={{ fontFamily: "var(--font-mono)", color: "hsl(var(--muted))", fontSize: "0.85rem" }}>
              <b style={{ color: "hsl(var(--cobalt))", fontWeight: 500 }}>—</b> {testimonials[index].title}
            </p>
          </div>
          <div className="tst-controls" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", marginTop: "24px" }}>
            <button
              onClick={prev}
              className="icon-btn w-10 h-10 rounded-full border border-border-strong bg-transparent flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-cobalt hover:text-cobalt hover:-translate-y-0.5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="tst-dots" style={{ display: "flex", gap: "7px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIndex(i); resetTimer(); }}
                  className={`tst-dot transition-all duration-300 ${i === index ? "active" : ""}`}
                  style={{
                    width: i === index ? "22px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === index ? "hsl(var(--cobalt))" : "hsl(var(--border-2))",
                    cursor: "pointer",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="icon-btn w-10 h-10 rounded-full border border-border-strong bg-transparent flex items-center justify-center cursor-pointer transition-all duration-200 hover:border-cobalt hover:text-cobalt hover:-translate-y-0.5"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}