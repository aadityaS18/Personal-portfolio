import { useTheme } from "../context/ThemeContext";
import { InView } from "../components/motion-primitives/in-view";
import { Badge } from "../components/watermelon-ui/badge";

const skillGroups = [
  {
    title: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "RAG", "QLoRA"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Django", "Flask", "REST APIs", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Tailwind CSS", "HTML", "CSS", "Vite"],
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS", "Docker", "Vercel", "Streamlit", "Git", "CI basics"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Graph databases"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Postman", "Jupyter", "Figma", "Driver.js"],
  },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Tech Stack</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Organized by how I build.</h2>
          <p className={`mt-4 text-base leading-7 ${darkMode ? "text-slate-300/70" : "text-slate-600"}`}>
            A practical stack for ML experimentation, API development, product interfaces, deployment, and data-heavy systems.
          </p>
        </div>

        <InView>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`rounded-2xl border p-6 ${darkMode ? "border-slate-800 bg-[#071025]" : "border-slate-200 bg-white"}`}
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
};

export default Skills;
