import { useEffect, useRef, useState } from "react";

export function useTerminalType(lines: Array<{ type: "cmd" | "out"; html: string }>, delay = 420) {
  const [displayedLines, setDisplayedLines] = useState<Array<{ type: "cmd" | "out"; html: string }>>([]);
  const [showCursor, setShowCursor] = useState(false);
  const lineIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const addLine = () => {
      if (lineIndexRef.current >= lines.length) {
        setShowCursor(true);
        return;
      }

      setDisplayedLines((prev) => [...prev, lines[lineIndexRef.current]]);
      lineIndexRef.current++;
      timeoutRef.current = setTimeout(addLine, delay);
    };

    addLine();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lines, delay]);

  const reset = () => {
    lineIndexRef.current = 0;
    setDisplayedLines([]);
    setShowCursor(false);
  };

  return { displayedLines, showCursor, reset };
}