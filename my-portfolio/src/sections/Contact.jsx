import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { InView } from "../components/motion-primitives/in-view";
import { Magnetic } from "../components/motion-primitives/magnetic";
import { Spotlight } from "../components/motion-primitives/spotlight";
import { BorderTrail } from "../components/motion-primitives/border-trail";
import { Button } from "../components/watermelon-ui/button";

const Contact = () => {
  const { darkMode } = useTheme();

  const links = [
    { label: "Email", href: "mailto:aadityashankar21@gmail.com", icon: FaEnvelope },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aadityas18", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/aadityaS18", icon: FaGithub },
  ];

  return (
    <>
      <section id="contact" className="portfolio-section pb-12 md:pb-16">
        <div className="portfolio-container">
          <InView>
            <div
              className={`relative overflow-hidden rounded-3xl border px-6 py-12 md:px-10 md:py-16 ${
                darkMode ? "border-slate-800 bg-[#071025]" : "border-slate-200 bg-white"
              }`}
            >
              <BorderTrail size={72} className="bg-sky-400" />
              <Spotlight size={300} />
              <p className="section-kicker">Contact</p>
              <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <div>
                  <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Let's build something.</h2>
                  <p className={`mt-5 max-w-xl text-base leading-7 md:text-lg ${darkMode ? "text-slate-300/75" : "text-slate-600"}`}>
                    I'm open to graduate opportunities, internships, and thoughtful collaborations around AI/ML products, agents, and full-stack systems.
                  </p>
                </div>
                <div className="grid gap-3">
                  {links.map(({ label, href, icon }) => (
                    <Magnetic key={label} intensity={0.16} range={90}>
                    <Button asChild variant="outline" className="h-12 w-full justify-between rounded-2xl px-4">
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        <span className="inline-flex items-center gap-3">
                          {React.createElement(icon, { className: "h-4 w-4" })}
                          {label}
                        </span>
                        <span aria-hidden="true">-&gt;</span>
                      </a>
                    </Button>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          </InView>
        </div>
      </section>

      <footer className="pb-8 text-muted-foreground">
        <div className="portfolio-container">
          <div className="flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>Designed and built by Aaditya Shankar.</p>
            <div className="flex gap-4">
              <a href="mailto:aadityashankar21@gmail.com" className="hover:text-foreground">Email</a>
              <a href="https://www.linkedin.com/in/aadityas18" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
              <a href="https://github.com/aadityaS18" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
