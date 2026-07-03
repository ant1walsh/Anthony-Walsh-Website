import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      id="scrollbar"
      className="fixed top-0 left-0 h-[2px] z-[110] bg-cobalt shadow-[0_0_10px_hsl(var(--cobalt))]"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}