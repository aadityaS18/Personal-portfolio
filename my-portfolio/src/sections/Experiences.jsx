import { useTheme } from "../context/ThemeContext";
import { InView } from "../components/motion-primitives/in-view";

const experiences = [
  {
    title: "AI Engineering Intern",
    company: "Dailoqa",
    period: "May 2026 - Jul 2026",
    location: "Noida, India",
    bullets: [
      "Built an agentic home-loan origination system using LangChain create_agent with tools for EMI, DTI, FOIR, LTV, KYC/CIBIL, document verification, and underwriting.",
      "Engineered PostgreSQL persistence for application state, tool events, and assessment results, then containerized the system with Docker Compose.",
      "Integrated Ollama and Groq backends while keeping underwriting logic deterministic, with Opik evaluation reaching 100% pass scores across validated flows.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Interra Systems",
    period: "May 2025 - Jul 2025",
    location: "Noida, India",
    bullets: [
      "Developed guided tours in Angular v10 with Driver.js, reducing new-user onboarding time by 40%.",
      "Resolved Angular build and dependency issues, ensuring 100% successful deployments across multiple projects.",
      "Designed custom UI components and step-based walkthroughs that reduced support queries by 25%.",
      "Authored integration and troubleshooting guides, cutting developer onboarding time by 30%.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "eClerx",
    period: "Jul 2024 - Aug 2024",
    location: "Delhi, India",
    bullets: [
      "Applied generative AI techniques to streamline internal workflows, reducing report preparation time by 20%.",
      "Developed knowledge graphs using Python and ML frameworks, improving data retrieval efficiency for client projects.",
      "Automated AI-driven solutions with Python and collaborated with cross-functional teams to support client workflow adoption.",
    ],
  },
];

const Experiences = () => {
  const { darkMode } = useTheme();

  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Experience</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Roles that shaped how I build.</h2>
        </div>

        <div className="grid gap-5">
          {experiences.map((exp) => (
            <InView key={exp.company}>
              <article
                className={`rounded-3xl border p-6 md:p-8 ${
                  darkMode ? "border-slate-800 bg-[#071025]" : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight md:text-2xl">{exp.title}</h3>
                    <p className="mt-1 text-base font-semibold text-sky-400">{exp.company}</p>
                  </div>
                  <div className={`shrink-0 text-sm sm:text-right ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    <p className="whitespace-nowrap">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-5 max-w-3xl space-y-3">
                  {exp.bullets.map((item) => (
                    <li key={item} className={`grid grid-cols-[0.65rem_1fr] gap-x-3 text-sm leading-7 md:text-[0.95rem] ${darkMode ? "text-slate-300/80" : "text-slate-600"}`}>
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
