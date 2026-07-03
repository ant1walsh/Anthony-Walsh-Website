import { useReveal, useStaggeredReveal } from "@/hooks/useReveal";
import { ReactNode } from "react";

interface StaggeredRevealProps {
  children: ReactNode;
  className?: string;
  itemCount?: number;
}

export function StaggeredReveal({ children, className = "", itemCount }: StaggeredRevealProps) {
  const childArray = Array.isArray(children) ? children : [children];
  const count = itemCount || childArray.length;
  const { ref, visibleItems } = useStaggeredReveal(count);

  return (
    <div ref={ref} className={className} data-stagger>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: visibleItems.has(index) ? 1 : 0,
            transform: visibleItems.has(index) ? "none" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(30px)",
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}