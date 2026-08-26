import { useMemo, useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { InView } from "../components/motion-primitives/in-view";
import { Spotlight } from "../components/motion-primitives/spotlight";
import { Tilt } from "../components/motion-primitives/tilt";
import { Badge } from "../components/watermelon-ui/badge";
import { Button } from "../components/watermelon-ui/button";
import { Tabs, TabsList, TabsTrigger } from "../components/watermelon-ui/tabs";
import aiTradingCoach from "../assets/Ai trading coach.png";
import aiJobAssistant from "../assets/Ai job assistant.png";
import academiaX from "../assets/Academiax.png";
import budgetTracker from "../assets/Budget tracker.png";
import studyTracker from "../assets/Studytracker.png";
import personalizedTutor from "../assets/tutor.jpg";
import knowledgeGraph from "../assets/knowledge graph.png";
import homeLoanAgent from "../assets/home-loan-agent.png";

const projects = [
  {
    title: "Dailoqa Home Loan Agent",
    description: "Agentic home-loan origination system with deterministic underwriting tools, PostgreSQL persistence, Docker Compose, Ollama/Groq backends, and Opik evaluation.",
    image: homeLoanAgent,
    category: "Agents",
    year: "2026",
    tech: ["LangChain", "Opik", "PostgreSQL", "Docker"],
    github: "https://github.com/aadityaS18/home-loan-langgraph-opik",
  },
  {
    title: "AI Trading Coach",
    description: "AI-driven platform for financial analysis, trading insight generation, risk metrics, and interactive market dashboards.",
    image: aiTradingCoach,
    category: "AI / ML",
    year: "2025",
    tech: ["Python", "FastAPI", "Angular", "AWS"],
    github: "https://github.com/JaiAnshSB26/JBAC_AI_Trading_Coach",
  },
  {
    title: "AI Job Search Assistant",
    description: "Automation workflow for resume-job matching, interview preparation, web scraping, and IBM Watsonx-powered career insights.",
    image: aiJobAssistant,
    category: "Agents",
    year: "2025",
    tech: ["Python", "Django", "Gradio", "Watsonx"],
    github: "https://github.com/aadityaS18/Job-Prep-Agent",
  },
  {
    title: "Knowledge Graph Extractor",
    description: "LLM-assisted document intelligence system for extracting entities and relationships into graph-based representations.",
    image: knowledgeGraph,
    category: "Research",
    year: "2025",
    tech: ["Python", "LLMs", "RAG", "Graph DB"],
    github: "https://github.com/aadityaS18/knowledge-graph",
  },
  {
    title: "Personalized Tutor",
    description: "Fine-tuned Qwen2.5 3B with QLoRA on GSM8K and paired it with PDF-based learning context for tutoring.",
    image: personalizedTutor,
    category: "AI / ML",
    year: "2025",
    tech: ["Python", "FastAPI", "QLoRA"],
    github: "https://github.com/AnubhavChoudhery/Personalized-Tutor",
  },
  {
    title: "AcademiaX",
    description: "Guidance platform for Class 11 and 12 students in India planning international university applications.",
    image: academiaX,
    category: "Full Stack",
    year: "2025",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/aadityaS18/academiax",
  },
  {
    title: "Budget Tracker",
    description: "Personal finance app with transaction history, savings goals, expense breakdowns, and responsive UI.",
    image: budgetTracker,
    category: "Full Stack",
    year: "2024",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aadityaS18/budget-tracker",
  },
  {
    title: "Study Buddy Aide",
    description: "Study companion for focus sessions, academic planning, progress tracking, and goal management.",
    image: studyTracker,
    category: "Full Stack",
    year: "2024",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aadityaS18/study-buddy-aide",
  },
];

const categories = ["All", "Agents", "AI / ML", "Research", "Full Stack"];

const Projects = () => {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === "All" || project.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <div className="mb-8">
          <p className="section-kicker">Projects</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Projects, built end to end</h2>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="gap-0">
          <TabsList className="no-scrollbar mb-8 max-w-full overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <InView key={project.title} className="h-full">
              <Tilt className="h-full" rotationFactor={6}>
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border ${
                  darkMode ? "border-slate-800 bg-[#071025]" : "border-slate-200 bg-white"
                }`}
              >
                <Spotlight size={200} />
                <div className={`aspect-[16/10] overflow-hidden ${darkMode ? "bg-[#0d1730]" : "bg-slate-100"}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className={`h-full w-full object-cover ${project.title.includes("Home Loan") ? "object-top" : "object-center"}`}
                    />
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    <span>{String(index + 1).padStart(2, "0")} · {project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${darkMode ? "text-slate-300/75" : "text-slate-600"}`}>
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs font-bold">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-5">
                    <Button asChild className="rounded-full">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        View code
                        <FaArrowRight />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
              </Tilt>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
