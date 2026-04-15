import Navbar from "./components/layout/Navbar/Navbar"
import Background from "./components/layout/Background"
import Hero from "./components/sections/Hero"
import Technologias from "./components/sections/Technologias"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"


function App() {


  return (
    <div className="flex flex-col justify-center overflow-x-hidden transition-colors">
      <Background />
      <Navbar />
      <Hero />
      <Technologias />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
