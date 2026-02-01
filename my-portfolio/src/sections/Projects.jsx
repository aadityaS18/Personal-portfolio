import React from "react";
import { FaGithub, FaPython, FaReact, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJs, FaBrain, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFastapi } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import aiTradingCoach from "../assets/Ai trading coach.png";
import aiJobAssistant from "../assets/Ai job assistant.png";
import academiaX from "../assets/Academiax.png";
import budgetTracker from "../assets/Budget tracker.png";
import studyTracker from "../assets/Studytracker.png";
import personalizedTutor from "../assets/tutor.jpg";
import knowledgeGraph from "../assets/knowledge graph.png";

const projects = [
  {
    id: 1,
    title: "AI Trading Coach",
    description:
      "An AI-powered paper trading platform with real-time market analysis, personalized coaching, and smart recommendations to help traders make informed decisions.",
    tagline: "Actionable analytics for trading",
    role: "Lead Developer, ML Engineer",
    image: aiTradingCoach,
    languages: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "AWS", icon: FaAws, color: "text-orange-400" },
      { name: "Docker", icon: FaDocker, color: "text-blue-400" },
      { name: "FastAPI", icon: SiFastapi, color: "text-green-400" },
    ],
    github: "https://github.com/JaiAnshSB26/JBAC_AI_Trading_Coach",
  },
  {
    id: 2,
    title: "AI Job Search Assistant",
    description:
      "A comprehensive web application that helps job seekers find, analyze, and prepare for job opportunities using AI-powered resume matching and interview preparation.",
    tagline: "AI-powered job search platform",
    role: "Full-Stack Developer, ML Engineer",
    image: aiJobAssistant,
    languages: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "FastAPI", icon: SiFastapi, color: "text-green-400" },
      { name: "AI/ML", icon: FaBrain, color: "text-purple-400" },
    ],
    github: "https://github.com/aadityaS18/Job-Prep-Agent",
  },
  {
    id: 3,
    title: "AcademiaX",
    description:
      "A comprehensive guidance platform designed specifically for Class 11th and 12th students in India who are planning to study abroad. Provides end-to-end support from university selection to application tracking.",
    tagline: "Gateway to global education",
    role: "Lead Frontend Developer",
    image: academiaX,
    languages: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
    github: "https://github.com/aadityaS18/academiax",
  },
  {
    id: 4,
    title: "Budget Tracker",
    description:
      "A modern web application designed to help users track their income, expenses, and balance. It offers an intuitive interface with features like transaction history, savings goals, expense breakdown charts, and a responsive design that works across devices.",
    tagline: "Personal finance management",
    role: "Full-Stack Developer",
    image: budgetTracker,
    languages: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    ],
    github: "https://github.com/aadityaS18/budget-tracker",
  },
  {
    id: 5,
    title: "Study Buddy Aide",
    description:
      "A clean, minimalist study companion designed to help students focus, plan, and track their academic progress with ease. Features include study sessions, progress tracking, and goal management.",
    tagline: "Smart study companion",
    role: "Frontend Developer",
    image: studyTracker,
    languages: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    ],
    github: "https://github.com/aadityaS18/study-buddy-aide",
  },
  {
    id: 6,
    title: "Personalized Tutor",
    description:
      "Fine-tuned Qwen2.5 (3B) on GSM8K dataset using QLoRA to create a personalized tutor utilizing user PDF input for tailored learning experiences. An AI-powered educational assistant that adapts to individual learning needs.",
    tagline: "AI-powered learning assistant",
    role: "ML Engineer, Backend Developer",
    image: personalizedTutor,
    languages: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "FastAPI", icon: SiFastapi, color: "text-green-400" },
    ],
    github: "https://github.com/AnubhavChoudhery/Personalized-Tutor",
  },
  {
    id: 7,
    title: "Knowledge Graph Extractor",
    description:
      "An advanced knowledge graph system that extracts entities and relationships from documents using LLMs. Leverages RAG and graph databases to create interconnected knowledge representations from unstructured data.",
    tagline: "LLM-powered knowledge extraction",
    role: "ML Engineer, Backend Developer",
    image: knowledgeGraph,
    languages: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Graph DB", icon: FaDatabase, color: "text-blue-400" },
    ],
    github: "https://github.com/aadityaS18/knowledge-graph",
  },
];

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`w-full min-h-screen py-56 md:py-64 transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Projects Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "bg-[#111111] border border-gray-800 hover:border-blue-500/50"
                  : "bg-white border border-gray-200 hover:border-blue-500/40"
              } shadow-lg hover:shadow-2xl flex flex-col`}
            >
              {/* Accent glow */}
              <div
                className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-500/40 to-purple-500/30"
                    : "bg-gradient-to-br from-blue-500/25 to-purple-500/20"
                }`}
              />

              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-7">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                    darkMode ? "text-gray-500" : "text-gray-600"
                  }`}>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {project.languages.map((lang, idx) => {
                      const IconComponent = lang.icon;
                      return (
                        <div
                          key={idx}
                          className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${
                            darkMode
                              ? "bg-black/30 hover:bg-black/50 border border-gray-800"
                              : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                          } hover:-translate-y-0.5`}
                          title={lang.name}
                        >
                          <IconComponent className={`text-2xl ${lang.color}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* GitHub Link Button */}
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      darkMode
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    } hover:gap-3`}
                  >
                    <FaGithub className="text-base" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
