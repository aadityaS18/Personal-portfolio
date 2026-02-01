import React from "react";
import profileImage from "../assets/personal.jpeg";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const { darkMode } = useTheme();

    return (
        <section id="home" className={`w-full min-h-screen flex items-center justify-center pt-20 pb-40 md:pb-48 transition-colors duration-300 ${
            darkMode ? 'bg-black' : 'bg-white'
        }`}>
            <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                {/* Profile Image - Centered */}
                <div className="flex justify-center mb-20">
                    <div className="relative">
                        <div className={`w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 shadow-xl ${
                            darkMode ? 'border-white/10 shadow-white/5' : 'border-black/10 shadow-black/5'
                        }`}>
                            <img 
                                src={profileImage}
                                alt="Aaditya Shankar" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Name - Centered */}
                <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
                    <span className={darkMode ? 'text-white' : 'text-black'}>Aaditya </span>
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Shankar</span>
                </h1>

                {/* Title - Centered */}
                <p className={`text-2xl md:text-3xl mb-24 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Computer Engineering Student | AI/ML Enthusiast
                </p>

                {/* Clickable Scroll indicator */}
                <a 
                    href="#about" 
                    className={`inline-flex justify-center mt-16 animate-bounce cursor-pointer hover:text-blue-400 transition-colors ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                >
                    <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default Home;