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
    <div className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div
        id="experience"
        className="flex justify-center items-center px-12 w-full mb-16"
      >
        <h2 className={`text-5xl md:text-7xl font-extrabold ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          EXPERIENCE
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center py-8 px-8 gap-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`w-full max-w-4xl p-8 rounded-xl border-2 transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-900/50 border-white/10 hover:border-blue-500/50' 
                : 'bg-gray-50/50 border-black/10 hover:border-blue-500/50'
            } shadow-lg hover:shadow-2xl`}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}>
                    {exp.title}
                  </h3>
                  <span className={`text-sm mt-1 md:mt-0 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="text-xl text-blue-400 hover:text-blue-500 transition-colors duration-300">
                    {exp.company}
                  </h4>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    📍 {exp.location}
                  </span>
                </div>
                <ul className="space-y-3 pt-2 mt-6">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className={`text-base flex items-start ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-3 text-blue-400 text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
