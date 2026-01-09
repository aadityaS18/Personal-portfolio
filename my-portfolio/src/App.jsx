import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experiences from "./sections/Experiences"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import { ThemeProvider, useTheme } from "./context/ThemeContext"

function AppContent() {
  const { darkMode } = useTheme();

  return(
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  )
}

export default function App(){
  return(
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
