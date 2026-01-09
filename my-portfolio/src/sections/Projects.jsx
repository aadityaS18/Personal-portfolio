import React from "react";
import { FaGithub, FaExternalLinkAlt, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiGooglecloud, SiFastapi } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import aiTradingCoach from "../assets/Ai trading coach.png";

const projects = [
  {
    id: 1,
    title: "AI Trading Coach",
    subtitle: "uses a hybrid model to predict Bitcoin prices based on 5 years of historical data",
    description:
      "An AI-powered paper trading platform with real-time market analysis, personalized coaching, and smart recommendations to help traders make informed decisions.",
    image: aiTradingCoach,
    techIcons: [
      <FaPython key="python" />,
      <FaAws key="aws" />,
      <FaDocker key="docker" />,
      <SiGooglecloud key="gcloud" />,
      <SiFastapi key="fastapi" />,
    ],
    link: null,
    github: "https://github.com/JaiAnshSB26/JBAC_AI_Trading_Coach",
  },
];

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`w-full pt-48 pb-32 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2
            className={`text-5xl md:text-7xl font-extrabold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group rounded-[2rem] transition-all duration-500 ${
                darkMode
                  ? "bg-[#1a1a1a] border-2 border-gray-800/80 hover:border-gray-700"
                  : "bg-white border-2 border-gray-200 hover:border-gray-300"
              } shadow-xl hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="p-10 md:p-14">
                {/* Header: Title and Subtitle */}
                <div className="mb-10">
                  <h3
                    className={`text-3xl md:text-4xl font-bold leading-tight ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title},{" "}
                    <span
                      className={`font-light ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {project.subtitle}
                    </span>
                  </h3>
                  
                  {/* Tech Icons - Below Title */}
                  <div className="flex gap-4 mt-6">
                    {project.techIcons.map((icon, iconIdx) => (
                      <span
                        key={iconIdx}
                        className={`text-2xl md:text-3xl transition-all duration-300 ${
                          darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
                        } hover:scale-125 cursor-pointer`}
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Image */}
                <div className={`relative overflow-hidden rounded-2xl mb-10 ${
                  darkMode ? "bg-gray-900/50" : "bg-gray-50"
                } p-6`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Description Text */}
                <p
                  className={`text-base md:text-lg leading-relaxed mb-10 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Bottom Section: GitHub Button - Right Aligned */}
                <div className="flex justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl group/btn ${
                      darkMode
                        ? "bg-white text-black hover:bg-blue-500 hover:text-white"
                        : "bg-black text-white hover:bg-blue-600"
                    } hover:scale-110`}
                  >
                    <FaGithub className="text-xl" />
                    <span>Github</span>
                    <FaExternalLinkAlt className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
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
