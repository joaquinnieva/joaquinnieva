import Navbar from './components/Navbar/Navbar'
import Biography from './sections/Biography/Biography'
import Experience from './sections/Experience/Experience'
import Footer from './sections/Footer/Footer'
import Landing from './sections/Landing/Landing'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Biography />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}

export default App
