import React from "react";
import { FaCss3Alt, FaGithub, FaGitAlt, FaHtml5, FaJs, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { SiAmazonwebservices, SiAngular, SiC, SiCplusplus, SiDjango, SiDocker, SiFastapi, SiFlask, SiKeras, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPytorch, SiScikitlearn, SiStreamlit, SiTailwindcss, SiTensorflow, SiTypescript, SiVercel } from "react-icons/si";
import profileImage from "../assets/personal.jpeg";
import resumePdf from "../assets/Aaditya_Cv.pdf";
import { useTheme } from "../context/ThemeContext";
import { InfiniteSlider } from "../components/motion-primitives/infinite-slider";
import { Button } from "../components/watermelon-ui/button";

const techStack = [
  { name: "Python", icon: FaPython, className: "bg-slate-100 text-blue-700" },
  { name: "C", icon: SiC, className: "bg-blue-700 text-white" },
  { name: "C++", icon: SiCplusplus, className: "bg-blue-800 text-white" },
  { name: "JavaScript", icon: FaJs, className: "bg-yellow-300 text-slate-950" },
  { name: "TypeScript", icon: SiTypescript, className: "bg-blue-600 text-white" },
  { name: "HTML", icon: FaHtml5, className: "bg-orange-500 text-white" },
  { name: "CSS", icon: FaCss3Alt, className: "bg-sky-500 text-white" },
  { name: "PyTorch", icon: SiPytorch, className: "bg-orange-600 text-white" },
  { name: "TensorFlow", icon: SiTensorflow, className: "bg-amber-500 text-white" },
  { name: "Keras", icon: SiKeras, className: "bg-red-600 text-white" },
  { name: "Scikit-learn", icon: SiScikitlearn, className: "bg-orange-400 text-slate-950" },
  { name: "Pandas", icon: SiPandas, className: "bg-slate-100 text-indigo-900" },
  { name: "NumPy", icon: SiNumpy, className: "bg-sky-100 text-blue-700" },
  { name: "Django", icon: SiDjango, className: "bg-emerald-800 text-white" },
  { name: "Flask", icon: SiFlask, className: "bg-slate-100 text-slate-950" },
  { name: "Angular", icon: SiAngular, className: "bg-red-600 text-white" },
  { name: "React", icon: FaReact, className: "bg-slate-900 text-cyan-300" },
  { name: "Tailwind", icon: SiTailwindcss, className: "bg-slate-900 text-cyan-300" },
  { name: "FastAPI", icon: SiFastapi, className: "bg-emerald-500 text-white" },
  { name: "Docker", icon: SiDocker, className: "bg-sky-600 text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, className: "bg-sky-800 text-white" },
  { name: "MySQL", icon: SiMysql, className: "bg-sky-700 text-white" },
  { name: "AWS", icon: SiAmazonwebservices, className: "bg-amber-400 text-slate-950" },
  { name: "Git", icon: FaGitAlt, className: "bg-orange-100 text-orange-700" },
  { name: "Vercel", icon: SiVercel, className: "bg-white text-slate-950" },
  { name: "Streamlit", icon: SiStreamlit, className: "bg-red-500 text-white" },
];

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <section id="home" className="hero-section">
      <div className="portfolio-container flex min-h-[calc(100svh-4.5rem)] flex-col py-12 md:py-16">
        <div className="flex flex-1 flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20 lg:pt-4">
          <aside className="w-full max-w-[20rem] shrink-0 text-center lg:max-w-[22rem]">
            <img
              src={profileImage}
              alt="Aaditya Shankar"
              className={`mx-auto h-44 w-44 rounded-full object-cover object-center sm:h-52 sm:w-52 ${darkMode ? "ring-1 ring-slate-700" : "ring-1 ring-slate-200"}`}
            />
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Aaditya Shankar</h1>
            <div className={`mt-4 space-y-1.5 text-sm leading-6 sm:text-base ${darkMode ? "text-slate-300/80" : "text-slate-600"}`}>
              <p>Ex AI Eng @ Dailoqa</p>
              <p>Final-year Computer Engineering @ TCD</p>
              <p>AI / ML + Full-stack Engineer</p>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild size="icon" className="size-11 rounded-full">
                <a href="https://github.com/aadityaS18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="size-5" />
                </a>
              </Button>
              <Button asChild size="icon" className="size-11 rounded-full">
                <a href="https://www.linkedin.com/in/aadityas18" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="size-5" />
                </a>
              </Button>
            </div>
          </aside>

          <div className="min-w-0 w-full flex-1 text-center lg:text-left">
            <h2 className="max-w-xl text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-[3.15rem]">
              AI/ML systems, intelligent agents, and full-stack software engineering.
            </h2>
            <p className={`mx-auto mt-6 max-w-xl text-base leading-8 md:text-lg lg:mx-0 ${darkMode ? "text-slate-300/85" : "text-slate-600"}`}>
              I build full-stack products that turn complex workflows into reliable, usable software, from intelligent tools and backend systems to production web applications.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:items-start">
              <Button asChild size="lg" className="h-12 min-w-[10.5rem] rounded-full px-8 text-base">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 min-w-[10.5rem] rounded-full px-8 text-base">
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Aaditya_Shankar_Resume.pdf">
                  Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 min-w-[10.5rem] rounded-full px-8 text-base">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>
        </div>

        <div className={`relative z-0 mt-14 min-w-0 overflow-hidden border-t pt-8 pb-2 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <p className="section-kicker mb-5">Tech stack</p>
          <div className="relative z-0 space-y-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <InfiniteSlider gap={12} speed={70} speedOnHover={0}>
              {techStack.map(({ name, icon, className }) => (
                <div
                  key={name}
                  aria-label={name}
                  className={`grid h-11 w-11 flex-none place-items-center rounded-xl text-lg shadow-sm ${className}`}
                >
                  {React.createElement(icon, { title: "", "aria-hidden": true, focusable: false })}
                </div>
              ))}
            </InfiniteSlider>
            <InfiniteSlider gap={12} speed={55} speedOnHover={0} reverse>
              {[...techStack].reverse().map(({ name, icon, className }) => (
                <div
                  key={`${name}-reverse`}
                  aria-label={name}
                  className={`grid h-11 w-11 flex-none place-items-center rounded-xl text-lg shadow-sm ${className}`}
                >
                  {React.createElement(icon, { title: "", "aria-hidden": true, focusable: false })}
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
