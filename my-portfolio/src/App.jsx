import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experiences from "./sections/Experiences"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import { ThemeProvider } from "./context/ThemeContext"

function AppContent() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
      </main>
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
