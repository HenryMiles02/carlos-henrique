import Navbar from "./components/layout/Navbar/Navbar"
import Background from "./components/layout/Background"
import Hero from "./components/sections/Hero"
import Technologias from "./components/Technologias/Technologias"


function App() {


  return (
    <div className="flex flex-col justify-center overflow-x-hidden transition-colors">
      <Background />
      <Navbar />
      <Hero />
      <Technologias />
    </div>
  )
}

export default App
