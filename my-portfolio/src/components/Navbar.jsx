import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Magnetic } from "./motion-primitives/magnetic";
import { Button } from "./watermelon-ui/button";

const MotionSpan = motion.span;

const navItems = [
  { name: "About", id: "about", href: "#about" },
  { name: "Experience", id: "experience", href: "#experience" },
  { name: "Projects", id: "projects", href: "#projects" },
  { name: "Skills", id: "skills", href: "#skills" },
  { name: "Contact", id: "contact", href: "#contact" },
];

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems.find((item) => {
        const element = document.getElementById(item.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        darkMode ? "border-white/5 bg-[#05070d]/80 text-slate-100" : "border-slate-200 bg-white/85 text-slate-950"
      }`}
    >
      <div className="portfolio-container flex h-[4.5rem] items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight md:text-xl"
          onClick={() => setMenuOpen(false)}
          aria-label="Aaditya Shankar home"
        >
          Aaditya S.
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    className={`relative z-10 block rounded-full px-1 py-1 text-sm font-semibold transition-colors ${
                      active
                        ? darkMode
                          ? "text-white"
                          : "text-slate-950"
                        : darkMode
                          ? "text-slate-300/70 hover:text-white"
                          : "text-slate-500 hover:text-slate-950"
                    }`}
                  >
                    {item.name}
                  </a>
                  {active && (
                    <MotionSpan
                      layoutId="nav-pill"
                      className={`absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full ${darkMode ? "bg-slate-100" : "bg-slate-950"}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <Magnetic intensity={0.35} range={70}>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Magnetic>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
          <Button type="button" variant="outline" size="icon" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-80 pb-5" : "max-h-0"}`}>
        <div className="portfolio-container">
          <div className={`grid gap-1 rounded-2xl border p-2 ${darkMode ? "border-white/10 bg-[#081126]" : "border-slate-200 bg-white"}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  activeSection === item.id
                    ? darkMode
                      ? "bg-white/10 text-white"
                      : "bg-slate-100 text-slate-950"
                    : darkMode
                      ? "text-slate-300/70"
                      : "text-slate-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
