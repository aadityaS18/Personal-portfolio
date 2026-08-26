import { useTheme } from "../context/ThemeContext";
import { InView } from "../components/motion-primitives/in-view";
import { AnimatedGroup } from "../components/motion-primitives/animated-group";

const focusAreas = [
  "AI / ML Systems",
  "Agentic AI",
  "Backend Engineering",
  "Full-stack Products",
];

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className="relative z-10 isolate scroll-mt-[5.75rem] py-14 md:py-16">
      <div className="portfolio-container">
        <InView>
          <div
            className={`rounded-3xl border px-5 py-14 sm:px-8 md:px-10 md:py-16 lg:px-12 ${
              darkMode ? "border-slate-800/80 bg-[#071025]" : "border-slate-200 bg-white"
            }`}
          >
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 lg:gap-14">
              <AnimatedGroup className="min-w-0">
                <p className="section-kicker">About Me</p>
                <h2 className="mt-2 max-w-sm text-3xl font-bold tracking-tight text-balance sm:text-[2rem] md:text-[2.15rem] lg:text-[2.35rem]">
                  Building at the edge of AI and software.
                </h2>
                <div className="mt-8 grid max-w-sm grid-cols-1 gap-3 sm:grid-cols-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-xs font-medium ${
                        darkMode
                          ? "border-white/10 bg-white/5 text-slate-300/85"
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </AnimatedGroup>

              <div className={`min-w-0 max-w-prose space-y-5 text-[0.95rem] leading-7 md:text-base ${darkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                <p>
                  I'm a Computer Engineering student at Trinity College Dublin focused on AI, machine learning, and full-stack product engineering. I enjoy turning complex ideas into practical systems people can actually use.
                </p>
                <p>
                  My work spans AI agents, RAG systems, backend APIs, automation, and production web applications. Through internships and personal projects, I've worked across both AI engineering and user-facing software development.
                </p>
                <p>
                  I'm especially interested in AI/ML engineering and product-focused software roles where I can build intelligent, reliable systems with real-world impact.
                </p>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default About;
