import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "home", path: "/" },
  { label: "projects", path: "/projects" },
  { label: "ai_agents", path: "/ai-agents" },
  { label: "blog", path: "/blog" },
  { label: "resume", path: "/resume" },
  { label: "contact", path: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-nav/80 border-b border-nav-foreground/10">
        <div className="max-w-[1180px] mx-auto flex items-center justify-between px-6 h-[64px]">
          <Link to="/" className="font-mono text-base font-semibold text-nav-foreground tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 bg-cobalt transform rotate-45" />
            anthony_walsh
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-sm font-normal px-3 py-2 rounded-[var(--radius)] transition-colors ${
                  location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-nav-foreground w-9 h-9 rounded-[var(--radius)] border border-border-strong bg-transparent flex items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-cobalt hover:text-cobalt"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-nav border-t border-nav-foreground/10 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-mono text-sm ${
                      location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                        ? "text-cobalt"
                        : "text-muted-foreground"
                    }`}
                  >
                {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-[73px]">{children}</main>

      <footer className="bg-nav text-nav-foreground/60 px-6 py-8">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-body">© {new Date().getFullYear()} Anthony Walsh. All rights reserved.</p>
          <div className="flex gap-6 font-mono text-sm">
            <a href="https://linkedin.com/in/anthonyrwalsh" target="_blank" rel="noopener noreferrer" className="hover:text-cobalt transition-colors">linkedin</a>
            <a href="https://github.com/ant1walsh" target="_blank" rel="noopener noreferrer" className="hover:text-cobalt transition-colors">github</a>
            <a href="https://calendly.com/antrobertwalsh/pmm" target="_blank" rel="noopener noreferrer" className="hover:text-cobalt transition-colors">contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;