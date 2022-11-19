import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Biography from './sections/Biography/Biography'
import Footer from './sections/Footer/Footer'
import Landing from './sections/Landing/Landing'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Biography />
      <Footer />
    </div>
  )
}

export default App
