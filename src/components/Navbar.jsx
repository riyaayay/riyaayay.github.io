import { useState } from "react";
import { personalInfo } from "../data.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/80 dark:bg-nightbg/80 border-b border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-bold text-lg tracking-tight text-ink dark:text-[#EDE9F5]"
        >
          {personalInfo.name}
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 dark:text-[#EDE9F5]/70 hover:text-plum dark:hover:text-lavender transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          >
            <span className="sr-only">Toggle navigation</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden px-5 pb-4 flex flex-col gap-1 bg-cream dark:bg-nightbg border-b border-black/5 dark:border-white/5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-ink/80 dark:text-[#EDE9F5]/80"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function ThemeButton({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-lavender/40 dark:bg-lavender-dark/50 hover:bg-lavender/60 dark:hover:bg-lavender-dark/70 transition-colors"
    >
      {theme === "light" ? (
        <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 15a5 5 0 100-10 5 5 0 000 10zM10 1v2M10 17v2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M1 10h2M17 10h2M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4"
            stroke="#4A3F6B"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path
            d="M17 10.8A7.5 7.5 0 019.2 3a7.5 7.5 0 107.8 7.8z"
            fill="#EDE9F5"
          />
        </svg>
      )}
    </button>
  );
}
