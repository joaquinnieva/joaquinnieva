import React from "react";
import "./styles/Proyectos.css";
import images from "./images";

const Proyectos = () => (
  <>
    <div className="container-proyectos">
      <h3 className="proyectos-title">Portafolio</h3>

      <div className="cont-proyectoscard">
        <a className="proyectoscard pro1" href="#inicio">
          <img className="proyectoscard-img" src={images.proyecto1} alt="web" />
          <div className="card-link" href="#inicio">
            <div className="card-hover">
              <p className="card-hover-text">"Portafolio JN"</p>
              <p className="card-hover-text">Página actual.</p>
            </div>
          </div>
        </a>
        <a
          className="proyectoscard pro2"
          href="https://joaquinnieva.github.io/ecommerce-proyecto/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="proyectoscard-img" src={images.proyecto2} alt="web" />
          <div
            className="card-link"
            href="https://joaquinnieva.github.io/ecommerce-proyecto/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-hover">
              <p className="card-hover-text">"ecommerce"</p>
              <p className="card-hover-text">Página Comercial.</p>
            </div>
          </div>
        </a>
        <a
          className="proyectoscard pro3"
          href="https://joaquinnieva.github.io/done-proyect/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="proyectoscard-img" src={images.proyecto3} alt="web" />
          <div
            className="card-link"
            href="https://joaquinnieva.github.io/done-proyect/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-hover">
              <p className="card-hover-text">"Done"</p>
              <p className="card-hover-text">Aplicacion de tareas.</p>
            </div>
          </div>
        </a>
        <a
          className="proyectoscard pro4"
          href="https://joaquinnieva.github.io/techfix/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="proyectoscard-img" src={images.proyecto4} alt="web" />
          <div
            className="card-link"
            href="https://joaquinnieva.github.io/techfix/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-hover">
              <p className="card-hover-text">"Tech Fix"</p>
              <p className="card-hover-text">Página informativa.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </>
);
export default Proyectos;