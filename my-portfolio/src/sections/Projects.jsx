import React from "react";
import { FaGithub } from "react-icons/fa";
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
    image: aiTradingCoach,
    languages: [
      { name: "Python" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "Google Cloud" },
      { name: "FastAPI" },
    ],
    github: "https://github.com/JaiAnshSB26/JBAC_AI_Trading_Coach",
  },
  {
    id: 2,
    title: "AI Job Search Assistant",
    description:
      "A comprehensive web application that helps job seekers find, analyze, and prepare for job opportunities using AI-powered resume matching and interview preparation.",
    image: aiJobAssistant,
    languages: [
      { name: "Python" },
      { name: "Gradio" },
      { name: "IBM Watsonx" },
      { name: "Web Scraping" },
    ],
    github: "https://github.com/aadityaS18/Job-Prep-Agent",
  },
  {
    id: 3,
    title: "AcademiaX",
    description:
      "A comprehensive guidance platform designed specifically for Class 11th and 12th students in India who are planning to study abroad. Provides end-to-end support from university selection to application tracking.",
    image: academiaX,
    languages: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    github: "https://github.com/aadityaS18/academiax",
  },
  {
    id: 4,
    title: "Budget Tracker",
    description:
      "A modern web application designed to help users track their income, expenses, and balance. It offers an intuitive interface with features like transaction history, savings goals, expense breakdown charts, and a responsive design that works across devices.",
    image: budgetTracker,
    languages: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    github: "https://github.com/aadityaS18/budget-tracker",
  },
  {
    id: 5,
    title: "Study Buddy Aide",
    description:
      "A clean, minimalist study companion designed to help students focus, plan, and track their academic progress with ease. Features include study sessions, progress tracking, and goal management.",
    image: studyTracker,
    languages: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    github: "https://github.com/aadityaS18/study-buddy-aide",
  },
  {
    id: 6,
    title: "Personalized Tutor",
    description:
      "Fine-tuned Qwen2.5 (3B) on GSM8K dataset using QLoRA to create a personalized tutor utilizing user PDF input for tailored learning experiences. An AI-powered educational assistant that adapts to individual learning needs.",
    image: personalizedTutor,
    languages: [
      { name: "Langchain" },
      { name: "RAG" },
      { name: "LoRA" },
      { name: "FastAPI" },
    ],
    github: "https://github.com/AnubhavChoudhery/Personalized-Tutor",
  },
  {
    id: 7,
    title: "LLM-Powered Document Knowledge Extractor",
    description:
      "An advanced knowledge graph system that extracts entities and relationships from documents using LLMs. Leverages RAG and graph databases to create interconnected knowledge representations from unstructured data.",
    image: knowledgeGraph,
    languages: [
      { name: "Python" },
      { name: "RAG" },
      { name: "Langchain" },
      { name: "PyMuPDF" },
      { name: "NetworkX" },
      { name: "Neo4j" },
    ],
    github: "https://github.com/aadityaS18/knowledge-graph",
  },
];

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`w-full pt-48 pb-32 transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2
            className={`text-5xl md:text-7xl font-extrabold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid - Show All Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-gray-700"
                  : "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300"
              } shadow-2xl hover:shadow-blue-500/10 p-8`}
            >
              {/* Title */}
              <h3
                className={`text-2xl md:text-3xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {project.title}
              </h3>

              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-2xl mb-6 ${
                  darkMode ? "bg-gray-800/50" : "bg-gray-100"
                } p-4`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              {/* Description */}
              <p
                className={`text-sm md:text-base leading-relaxed mb-6 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.description}
              </p>

              {/* Tech Stack Labels */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-800/80 text-blue-400 hover:bg-gray-700 border border-blue-500/30"
                        : "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200"
                    }`}
                  >
                    {lang.name}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-start">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } hover:scale-105`}
                >
                  <FaGithub className="text-lg" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
