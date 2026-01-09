import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className={`w-full min-h-screen flex items-center justify-center py-40 transition-colors duration-300 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-24">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className={`space-y-10 text-base md:text-lg leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          <p>
            I'm an Undergraduate Computer Engineering student at Trinity College Dublin, with a strong interest in artificial intelligence, machine learning, and software development. I enjoy building practical projects that combine ML, backend systems, and modern web technologies, and I'm always curious about how ideas turn into real, working applications.
          </p>
          <p>
            Throughout my studies, I've worked on projects ranging from machine learning models and data-driven systems to full stack web applications. I enjoy learning by building and experimenting, and I'm constantly exploring new tools and technologies to improve my technical skills and problem solving approach.
          </p>
          <p>
            Outside of academics and coding, I enjoy staying active and consistent with gym and fitness, which helps me stay disciplined and focused. I'm also a big cricket enthusiast .I love playing the sport and following matches and I enjoy listening to music to unwind. I believe maintaining a balance between technical work, fitness, and personal interests keeps me motivated and energized.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
