import React from "react";
import { Link } from "react-scroll";
import images from "../components/images.js";
import Landing from "../components/Landing.js";
import "../components/styles/Inicio.css";

const Inicio = () => {
  const [style, setStyle] = React.useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
    };
    setStyle(newStyle);
  }, 100);
  return (
    <div className="inicio" style={style} id="inicio">
      <div className="land">
        <header className="land-text">
          <div className="land-logo">
            <img className="logo-img" src={images.logoentero} alt="logo" />
          </div>
          <p className="land-title">Hola, me dedico a diseñar y crear aplicaciones.</p>
          <Link className="land-button" to="habilidades" smooth={true}>
            ¡Conóceme!
          </Link>
        </header>
        <div className="land-img">
          <Landing />
        </div>
      </div>

      <div className="scroll">
        <img className="scroll-flecha" src={images.flecha} alt="scroll" />
        <img className="scroll-flecha" src={images.flecha} alt="scroll" />
      </div>
    </div>
  );
};

export default Inicio;
