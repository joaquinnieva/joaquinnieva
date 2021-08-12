import React from "react";
import "./styles/Landing.css";
import images from "../components/images.js";
import { Link } from "react-scroll";

const Landing = (props) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
    };

    setStyle(newStyle);
  }, 100);

  return (
    <div className="landing-page">
      <div className="inicio" style={style}>
        <Link className="land-button" to="habilidades" smooth={true}>
          Ver más
        </Link>
      </div>
      <div className="separator"><img className="waves" src={images.waves} /></div>
    </div>
  );
};

export default Landing;
