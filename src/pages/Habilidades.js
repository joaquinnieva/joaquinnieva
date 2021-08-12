import HabilidadDesign from "../components/HabilidadDesign";
import HabilidadCoder from "../components/HabilidadCoder";
import Barras from "../components/Barras";
import images from "../components/images.js";

const Habilidades = () => (
  <div>
    <HabilidadCoder
      img={images.coder}
      title="Desarrollo"
      text="Las tecnologías que se mencionan están completamente estudiadas, 
            el progreso de la barra comprende la facilidad y rapidez con la que me desenvuelvo."
    />

    <Barras imagen={images.html}      barra="95%" />
    <Barras imagen={images.css}       barra="98%" />
    <Barras imagen={images.sass}      barra="75%" />
    <Barras imagen={images.bootstrap} barra="70%" />
    <Barras imagen={images.js}        barra="90%" />
    <Barras imagen={images.react}     barra="85%" />
    <Barras imagen={images.redux}     barra="77%" />
    <Barras imagen={images.wordpress} barra="70%" />

    <HabilidadDesign
      imgAnimar={images.cursord}
      imgAnimado={images.line}
      img={images.designer}
      title="Diseño"
      text="En el diseño trabajo con estos programas.    
            Acá el progreso de las barras comprenden mi conocimiento y mi manejo con los mismos."
    />

    <Barras imagen={images.photoshop}   barra="65%" />
    <Barras imagen={images.illustrator} barra="55%" />
    <Barras imagen={images.figma}       barra="80%" />
  </div>
);

export default Habilidades;
