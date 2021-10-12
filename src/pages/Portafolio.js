import React from "react";
import "../components/styles/Proyectos.css";
import proyectos from "../components/data/proyectos";
import ProyectosCard from "../components/ProyectosCard";

const Portafolio = () => {
  return (
    <>
      <div className="container-proyectos" id="portfolio">
        <h3 className="proyectos-title">Portafolio</h3>
        <div className="cont-proyectoscard">
          {proyectos.map((proyecto) => (
            <ProyectosCard key={proyecto.id} info={proyecto} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Portafolio;
