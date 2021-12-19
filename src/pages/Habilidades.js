import { coder, designer } from "../components/data/progreso";
import HabilidadCoder from "../components/HabilidadCoder";
import HabilidadDesign from "../components/HabilidadDesign";
import images from "../components/images.js";
import Progreso from "../components/Progreso";
import "../components/styles/Progreso.css";

const Habilidades = () => (
  <div id="habilidades">
    <HabilidadCoder
      img={images.coder}
      title="Desarrollo"
      text="Las tecnologías que se mencionan están completamente estudiadas, 
            el progreso de la barra comprende la facilidad y rapidez con la que me desenvuelvo."
    />
    <div className="contenedorbarras">
      <div className="barras-barras">
        {coder.map((skill, index) => (
          <Progreso key={index} imagen={skill.logo} progreso={skill.progreso} />
        ))}
      </div>
    </div>

    <HabilidadDesign
      imgAnimar={images.cursord}
      imgAnimado={images.line}
      img={images.designer}
      title="Diseño"
      text="En el diseño trabajo con estos programas,
            el progreso de las barras comprende mi conocimiento y manejo con los mismos."
    />
    <div className="contenedorbarras">
      <div className="barras-barras">
        {designer.map((skill, index) => (
          <Progreso key={index} imagen={skill.logo} progreso={skill.progreso} />
        ))}
      </div>
    </div>
  </div>
);

export default Habilidades;
