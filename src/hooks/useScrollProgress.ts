import { useEffect, useRef, useState } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        setScrollProgress((scrollTop / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
}

export function useTimelineProgress() {
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".timeline");
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;

      // Progress fill
      const progress = Math.min(1, Math.max(0, (vh * 0.7 - rect.top) / rect.height));
      setTimelineProgress(progress * 100);

      // Active nodes
      const nodes = document.querySelectorAll(".tl-item");
      const newActive = new Set<number>();
      nodes.forEach((node, index) => {
        if (node.getBoundingClientRect().top < vh * 0.78) {
          newActive.add(index);
        }
      });
      setActiveNodes(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { timelineProgress, activeNodes };
}