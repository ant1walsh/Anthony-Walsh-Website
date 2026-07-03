import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <button className="icon-btn w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="icon-btn w-9 h-9 rounded-[var(--radius)] border border-border-strong bg-transparent flex items-center justify-center cursor-pointer text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-cobalt hover:text-cobalt"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}