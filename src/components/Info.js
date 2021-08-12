import React from "react";
import images from "../components/images.js";
import "./styles/Info.css";

const Info = () => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
    };

    setStyle(newStyle);
  }, 100);

  return (
    <>
      <div className="conte" style={style}>
        <div className="text-cont">
          <h2 className="title">SERVICIOS</h2>
          <div className="serv-cont">
            <div className="card-container">
              <img className="card-img" src={images.pc} />
              <div className="card-title">
                Limpieza de hardware y software
              </div>
              <div className="card-desc">Limpieza de gabinete y componentes además de archivos o programas no deseados.</div>
            </div>
            <div className="card-container">
              <img className="card-img" src={images.hw} />
              <div className="card-title">
                Instalación de hardware y software
              </div>
              <div className="card-desc">Instalación y actualización de cualquier programa o componentes.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="conte" style={style}>
        <div className="text-cont">
          <h2 className="title">¿QUÉ ES TECHFIX?</h2>
          <p className="texto">
            Tech Fix es un microemprendimiento que busca ayudar a las personas
            que tengan problemas con su computadora brindandole un servicio
            técnico.
          </p>
        </div>
      </div>

      <div className="contact" style={style} id="contacto">
        <h2 className="contactame">CONTACTO</h2>
        <div className="cont-contact">
          <a href="https://www.instagram.com/tech__fix/" target="_blank">
            <div className="ig-contact">
              <img className="img-ig" src={images.ig} alt="instagram" />
              <div className="text-ig"> tech__fix </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Info;
