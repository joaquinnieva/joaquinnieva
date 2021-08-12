import Sobremi from './pages/Sobremi'
import Habilidades from './pages/Habilidades'
import Biografia from './pages/Biografia'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portafolio'

function App() {
  return (
    <>
      <Navbar />
      <div id="inicio" ></div>
      <Sobremi />
      <div id="habilidades" ></div>
      <Habilidades />
      <div id="portfolio" ></div>
      <Portfolio />
      <div id="sobremi" ></div>
      <Biografia />
    </>
  );
}

export default App;
