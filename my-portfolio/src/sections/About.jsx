import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className={`w-full min-h-screen flex items-center justify-center py-40 md:py-48 transition-colors duration-300 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className={`space-y-8 text-base md:text-lg leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          <p>
            I'm an Undergraduate Computer Engineering student at <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Trinity College Dublin</span>, with a strong passion for artificial intelligence, machine learning, and software development. I thrive on building practical solutions that bridge the gap between cutting-edge ML research and real-world applications, combining backend systems with modern web technologies to create impactful products.
          </p>
          
          <p>
            My journey in tech has been driven by curiosity and hands-on experimentation. I've developed projects ranging from <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AI-powered trading platforms</span> and <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>knowledge graph systems</span> to <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>full-stack web applications</span>. Each project has taught me something new about problem-solving, system design, and the importance of writing clean, maintainable code.
          </p>

          <p>
            During my internships at <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Interra Systems</span> and <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>eClerx</span>, I gained valuable experience in production environments, working with teams to deploy AI-driven solutions and improve user experiences. I learned that great software isn't just about algorithms—it's about understanding user needs, optimizing workflows, and delivering measurable business impact.
          </p>

          <p>
            I'm particularly interested in the intersection of <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>generative AI</span>, <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>natural language processing</span>, and <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>knowledge representation</span>. I believe that as AI continues to evolve, the ability to build systems that can understand, reason, and learn from data will become increasingly important—and I want to be at the forefront of that evolution.
          </p>

          <p>
            Beyond coding, I maintain balance through regular gym sessions and fitness routines, which help me stay disciplined and mentally sharp. I'm also a passionate cricket enthusiast—whether it's playing the sport or analyzing matches, cricket has taught me valuable lessons about strategy, teamwork, and perseverance. Music is my go-to for unwinding and staying creative, providing a mental reset after intense coding sessions.
          </p>

          <p>
            Currently, I'm exploring opportunities in <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>machine learning engineering</span>, <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AI research</span>, and <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>full-stack development roles</span> where I can contribute to building innovative products that solve real problems. I'm always eager to learn, collaborate, and push the boundaries of what's possible with technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
