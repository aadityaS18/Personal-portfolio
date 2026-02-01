import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaJava, FaCode, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiVite, SiCplusplus, SiC, SiMysql, SiPostgresql, SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy, SiPandas, SiFlask, SiDjango, SiPostman, SiFigma, SiReact, SiAngular, SiStreamlit, SiVercel, SiJupyter, SiPostman as SiRender } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { MdCloudQueue } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Skills=() =>{
    const { darkMode } = useTheme();

    const skillCategories = [
        {
            title: "Languages",
            color: "text-blue-400",
            skills: [
                { icon: <FaPython />, name: "Python", color: "text-yellow-400" },
                { icon: <SiC />, name: "C", color: "text-blue-500" },
                { icon: <SiCplusplus />, name: "C++", color: "text-blue-600" },
                { icon: <FaJs />, name: "JavaScript", color: "text-yellow-300" },
                { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
                { icon: <FaHtml5 />, name: "HTML/CSS", color: "text-orange-500" },
            ]
        },
        {
            title: "AI / ML & Data Science",
            color: "text-purple-400",
            skills: [
                { icon: <SiPytorch />, name: "PyTorch", color: "text-orange-500" },
                { icon: <SiTensorflow />, name: "TensorFlow", color: "text-orange-400" },
                { icon: <SiKeras />, name: "Keras", color: "text-red-500" },
                { icon: <SiScikitlearn />, name: "Scikit-learn", color: "text-orange-400" },
                { icon: <SiPandas />, name: "Pandas", color: "text-blue-300" },
                { icon: <SiNumpy />, name: "NumPy", color: "text-blue-400" },
            ]
        },
        {
            title: "Web Development",
            color: "text-green-400",
            skills: [
                { icon: <SiDjango />, name: "Django", color: "text-green-600" },
                { icon: <SiFlask />, name: "Flask", color: darkMode ? "text-white" : "text-gray-800" },
                { icon: <SiAngular />, name: "Angular", color: "text-red-500" },
                { icon: <SiReact />, name: "React", color: "text-cyan-400" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
                { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
            ]
        },
        {
            title: "Tools & Deployment",
            color: "text-cyan-400",
            skills: [
                { icon: <FaGitAlt />, name: "Git", color: "text-orange-600" },
                { icon: <SiVercel />, name: "Vercel", color: darkMode ? "text-white" : "text-gray-800" },
                { icon: <SiStreamlit />, name: "Streamlit", color: "text-red-400" },
            ]
        },
    ];

    return(
        <section id="skills" className={`w-full min-h-screen flex flex-col items-center justify-center py-40 md:py-48 px-6 transition-colors duration-300 ${
            darkMode ? 'bg-black' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        <span className={`${darkMode ? 'text-white' : 'text-black'}`}>Skills & </span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Technologies</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
                </div>
                
                {/* Skills Grid */}
                <div className="space-y-10">
                    {skillCategories.map((category, categoryIndex) => (
                        <div 
                            key={categoryIndex} 
                            className={`p-10 md:p-14 rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl ${
                                darkMode 
                                    ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/10 hover:border-white/25 hover:shadow-blue-500/10' 
                                    : 'bg-gradient-to-br from-black/[0.08] to-black/[0.02] border-black/10 hover:border-black/25 hover:shadow-gray-500/10'
                            }`}
                        >
                            {/* Category Header */}
                            <h3 className={`text-2xl md:text-3xl font-bold ${category.color} mb-14 tracking-wide`}>
                                {category.title}
                            </h3>
                            
                            {/* Skills Row Layout */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-12 md:gap-16">
                                {category.skills.map((skill, index) => (
                                    <div 
                                        key={index} 
                                        className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-125 cursor-pointer"
                                    >
                                        {/* Icon */}
                                        <div className={`text-6xl md:text-7xl ${skill.color} group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                                            {skill.icon}
                                        </div>
                                        {/* Name */}
                                        <p className={`text-sm md:text-base font-semibold text-center tracking-wide ${
                                            darkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-black'
                                        } transition-colors`}>
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;