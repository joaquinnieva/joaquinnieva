import React from "react";
import { Link } from "react-scroll";
import images from "../components/images.js";
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
          <div className="vapor-cont">
            <img className="vapor1" src={images.vapor} alt="vapor" />
            <img className="vapor2" src={images.vapor} alt="vapor" />
          </div>
          <img className="cursor" src={images.cursor} alt="cursor" />
          <img className="landing" src={images.land} alt="landing" />
        </div>
      </div>

      <div className="scroll">
        <img className="scroll-flecha1" src={images.flecha} alt="scroll" />
        <img className="scroll-flecha2" src={images.flecha} alt="scroll" />
      </div>
    </div>
  );
};

export default Inicio;
