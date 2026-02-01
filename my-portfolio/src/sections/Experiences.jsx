import React from "react";
import { useTheme } from "../context/ThemeContext";

const Experiences = () => {
  const { darkMode } = useTheme();

  const experiences = [
    {
      title: "Machine Learning Volunteer",
      company: "Ekaimpact NGO",
      period: "August 2025 - October 2025",
      location: "Delhi, India",
      description: [
        "Designed and deployed AI chatbot on NGO website, increasing visitor engagement by 50% and reducing manual query handling.",
        "Automated knowledge base creation through web scraping, saving staff 15+ hours per month.",
        "Integrated Mistral API for NLP, improving chatbot accuracy and response relevance by 35%.",
        "Integrated analytics dashboard to track user queries and performance metrics, enabling data-driven improvements.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Interra Systems",
      period: "May 2025 - July 2025",
      location: "Noida, India",
      description: [
        "Developed guided tours in Angular (v10) with Driver.js reducing new-user onboarding time by 40%.",
        "Resolved Angular build and dependency issues, ensuring 100% successful deployments across multiple projects.",
        "Designed custom UI components and step-based walkthroughs that improved user experience and reduced support queries by 25%.",
        "Authored integration and troubleshooting guides, cutting developer onboarding time by 30%.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "Eclerx",
      period: "July 2024 - August 2024",
      location: "Delhi, India",
      description: [
        "Applied generative AI techniques to streamline internal workflows, reducing report preparation time by 20%.",
        "Developed knowledge graphs using Python/ML frameworks, improving data retrieval efficiency for client projects.",
        "Automated AI-driven solutions with Python, enhancing productivity and reducing manual intervention.",
        "Collaborated with cross-functional teams to deploy AI-driven tools into client workflows, ensuring adoption and measurable business impact.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`w-full min-h-screen flex items-center justify-center py-56 md:py-64 transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-24">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experiences
          </span>
        </h2>

        <div className="relative">
          {/* subtle fade edges so horizontal scroll feels nicer */}
          <div
            className={`pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r ${
              darkMode ? "from-black" : "from-white"
            } to-transparent z-10`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l ${
              darkMode ? "from-black" : "from-white"
            } to-transparent z-10`}
          />

          <div
            className="overflow-x-auto pb-10"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
    <div className="flex gap-10 md:gap-12 min-w-max pr-10 snap-x snap-mandatory">
              {experiences.map((exp, index) => (
                <article
                  key={index}
      className={`snap-start w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 p-8 md:p-9 rounded-2xl border transition-all duration-300 ${
                    darkMode
                      ? "bg-[#111111] border-gray-800 hover:border-blue-500/50"
                      : "bg-white border-gray-200 hover:border-blue-500/40"
                  } shadow-lg hover:shadow-2xl`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className={`text-xl md:text-2xl font-bold leading-snug ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <span
                      className={`text-xs md:text-sm whitespace-nowrap ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-5">
                    <p className="text-base md:text-lg font-semibold text-blue-400">
                      {exp.company}
                    </p>
                    <span
                      className={`text-xs md:text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className={`text-sm md:text-base leading-relaxed flex items-start gap-3 ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                            darkMode ? "bg-blue-400" : "bg-blue-600"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiences;
