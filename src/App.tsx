import Navbar from "./components/layout/Navbar/Navbar"
import Background from "./components/layout/Background"
import Hero from "./components/Hero/Hero"


function App() {


  return (
    <div className="flex flex-col justify-center overflow-x-hidden transition-colors">
      <Background />
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
