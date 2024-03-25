import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"
import About from "./components/about"
import Contact from "./components/contact"
import Header from "./components/header"
import HeroIntroTitle from "./components/hero-intro-title"
import SelectedWork from "./components/selected-work"
import Services from "./components/services"
import Work from "./components/work"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="bg-coffee text-verge-black">
      <Header />
      <HeroIntroTitle />
      <About />
      <Services />
      <SelectedWork />
      <Work />
      <Contact />
    </div>
  )
}

export default App
