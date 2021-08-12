import React, { useState } from "react";
import "./styles/Navbar.css";
import jn from "./img/jn.png";
import menu from "./img/menu.png";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <nav className={click ? "navbar" : "navbar-open"}>
      <div className="navbar-container">
        <div className="menu-cont" onClick={handleClick}>
          <img
            className={click ? "menuImg" : "menuImg-open"}
            src={menu}
            alt="menu"
          />
        </div>

        <div className="logo-cont">
          <img className="navbarImg" src={jn} alt="jn" />
        </div>

        <div className="fixnav" />
      </div>

      <div className={click ? "menut" : "menut-open"}>
        <ul className={click ? "menutext" : "menutext-open"}>
          <Link
            className={click ? "menutl" : "menutl-open"}
            to="inicio"
            smooth={true}
            duration={400}
          >
            Inicio
          </Link>
          <Link
            className={click ? "menutl" : "menutl-open"}
            to="habilidades"
            smooth={true}
            duration={400}
          >
            Habilidades
          </Link>
          <Link
            className={click ? "menutl" : "menutl-open"}
            to="portfolio"
            smooth={true}
            duration={400}
          >
            Portafolio
          </Link>
          <Link
            className={click ? "menutl" : "menutl-open"}
            to="sobremi"
            smooth={true}
            duration={400}
          >
            Sobre mí
          </Link>
          <Link
            className={click ? "menutl" : "menutl-open"}
            to="contacto"
            smooth={true}
            duration={400}
          >
            Contacto
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
