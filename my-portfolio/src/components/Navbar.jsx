import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Detect active section with better precision
            const sections = ["home", "about", "skills", "experience", "projects", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        handleScroll(); // Call once on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-500 ${
            scrolled 
                ? darkMode 
                    ? 'bg-black/98 border-b border-white/20 shadow-2xl shadow-blue-500/20' 
                    : 'bg-white/98 border-b border-black/20 shadow-2xl shadow-gray-500/20'
                : darkMode 
                    ? 'bg-black/80 border-b border-white/5' 
                    : 'bg-white/80 border-b border-black/5'
        }`}>
            <div className="max-w-7xl mx-auto px-10 md:px-16">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a 
                        href="#home" 
                        className="text-3xl md:text-4xl font-bold group relative"
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300 transform group-hover:scale-105 inline-block">
                            AS
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-3">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.href} 
                                    className={`relative text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 inline-block tracking-wide ${
                                        activeSection === item.name.toLowerCase()
                                            ? darkMode 
                                                ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/20' 
                                                : 'text-black bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-black/20'
                                            : darkMode 
                                                ? 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent' 
                                                : 'text-gray-700 hover:text-black hover:bg-black/5 border border-transparent'
                                    }`}
                                >
                                    {item.name}
                                    {activeSection === item.name.toLowerCase() && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side: Theme Toggle + Mobile Menu */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle Button */}
                        <button 
                            onClick={toggleTheme}
                            className={`p-3 md:p-3.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
                                darkMode 
                                    ? 'bg-gradient-to-br from-yellow-400/10 to-orange-500/10 hover:from-yellow-400/20 hover:to-orange-500/20 border border-yellow-400/20' 
                                    : 'bg-gradient-to-br from-blue-500/10 to-purple-600/10 hover:from-blue-500/20 hover:to-purple-600/20 border border-blue-500/20'
                            }`}
                            aria-label="Toggle theme"
                            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {darkMode ? (
                                <FaSun className="w-5 h-5 text-yellow-400 animate-pulse" />
                            ) : (
                                <FaMoon className="w-5 h-5 text-blue-600" />
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={toggleMenu}
                            className={`md:hidden p-3 rounded-xl transition-all duration-300 active:scale-95 ${
                                darkMode 
                                    ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                                    : 'bg-black/10 hover:bg-black/20 border border-black/20'
                            }`}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <FaTimes className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
                            ) : (
                                <FaBars className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with Slide Animation */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className={`py-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
                        <ul className="flex flex-col gap-2">
                            {navItems.map((item, index) => (
                                <li 
                                    key={item.name}
                                    style={{ 
                                        animationDelay: `${index * 50}ms` 
                                    }}
                                    className={`${menuOpen ? 'animate-fade-in' : ''}`}
                                >
                                    <a 
                                        href={item.href} 
                                        className={`text-lg font-semibold transition-all duration-300 block py-3 px-5 rounded-xl ${
                                            activeSection === item.name.toLowerCase()
                                                ? darkMode 
                                                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/20' 
                                                    : 'text-black bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-black/20'
                                                : darkMode 
                                                    ? 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent' 
                                                    : 'text-gray-700 hover:text-black hover:bg-black/5 border border-transparent'
                                        }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span className="flex items-center justify-between">
                                            {item.name}
                                            {activeSection === item.name.toLowerCase() && (
                                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></span>
                                            )}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
