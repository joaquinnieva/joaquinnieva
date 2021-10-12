import React from "react";
import images from "../components/images.js";
import "../components/styles/Biografia.css";
import myPDF from "../components/img/CV-JoaquínNieva.pdf";

const Biografia = () => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
    };

    setStyle(newStyle);
  }, 100);

  return (
    <>
      <div className="conte" style={style} id="sobremi">
        <div className="img-cont">
          <img className="img-avatar" src={images.perfil} alt="avatar" />
        </div>
        <div className="text-cont">
          <p className="texto">
            Tengo 19 años y vivo en Córdoba, Argentina. Soy desarrollador web y estudio Licenciatura
            en Ciencias de la Computación en la Universidad Nacional de Córdoba. Soy un apasionado
            por la tecnología y siempre disfruto aprender lo que más pueda de ella.
          </p>
          <a className="cv" href={myPDF} download="CV-JoaquínNieva.pdf">
            Descargar CV
          </a>
        </div>
      </div>

      <div className="contact" style={style} id="contacto">
        <h2 className="contactame">CONTACTO</h2>
        <img className="trama" src={images.trama} alt="trama" />
        <div className="cont-contact">
          <a href="mailto:joacoo.nieva@gmail.com" target="_blank" rel="noreferrer">
            <abbr title="joacoo.nieva@gmail.com">
              <img className="img-cgmail" src={images.gmail} alt="mail" />
            </abbr>
          </a>
          <a href="https://www.linkedin.com/in/joaqu%C3%ADnnieva/" target="_blank" rel="noreferrer">
            <img className="img-clinkedin" src={images.linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/joaquinnieva" target="_blank" rel="noreferrer">
            <img className="img-cgmail" src={images.github} alt="mail" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Biografia;
