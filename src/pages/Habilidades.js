import HabilidadDesign from "../components/HabilidadDesign";
import HabilidadCoder from "../components/HabilidadCoder";
import Progreso from "../components/Progreso";
import images from "../components/images.js";
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
        <Progreso imagen={images.html} progreso="92" />
        <Progreso imagen={images.css} progreso="95" />
        <Progreso imagen={images.sass} progreso="75" />
        <Progreso imagen={images.bootstrap} progreso="70" />
        <Progreso imagen={images.js} progreso="85" />
        <Progreso imagen={images.react} progreso="82" />
        <Progreso imagen={images.redux} progreso="80" />
        <Progreso imagen={images.wordpress} progreso="75" />
        <Progreso imagen={images.node} progreso="60" />
        <Progreso imagen={images.express} progreso="60" />
        <Progreso imagen={images.mysql} progreso="70" />
        <Progreso imagen={images.php} progreso="60" />
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
        <Progreso imagen={images.photoshop} progreso="65" />
        <Progreso imagen={images.illustrator} progreso="55" />
        <Progreso imagen={images.figma} progreso="80" />
      </div>
    </div>
  </div>
);

export default Habilidades;
