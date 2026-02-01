import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="contact"
      className={`w-full min-h-screen flex items-center justify-center py-40 md:py-48 transition-colors duration-300 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-bold mb-16 leading-tight">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        {/* Description */}
        <p
          className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-20 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I’m always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to
          reach out.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
          <a
            href="mailto:aadityashankar21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-5 px-12 py-6 rounded-2xl border-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
              darkMode
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
                : "bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20 text-black"
            }`}
          >
            <FaEnvelope className="text-3xl" />
            <span className="font-semibold text-xl">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aadityas18"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-5 px-12 py-6 rounded-2xl border-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
              darkMode
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
                : "bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20 text-black"
            }`}
          >
            <FaLinkedin className="text-3xl" />
            <span className="font-semibold text-xl">LinkedIn</span>
          </a>

          <a
            href="https://github.com/aadityaS18"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-5 px-12 py-6 rounded-2xl border-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
              darkMode
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
                : "bg-black/5 border-black/10 hover:bg-black/10 hover:border-black/20 text-black"
            }`}
          >
            <FaGithub className="text-3xl" />
            <span className="font-semibold text-xl">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
