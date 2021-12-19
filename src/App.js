import Navbar from "./components/Navbar";
import Biografia from "./pages/Biografia";
import Habilidades from "./pages/Habilidades";
import Inicio from "./pages/Inicio";
import Portafolio from "./pages/Portafolio";

function App() {
  return (
    <>
      <Navbar>
        <Inicio />
        <Habilidades />
        <Portafolio />
        <Biografia />
      </Navbar>
    </>
  );
}

export default App;
