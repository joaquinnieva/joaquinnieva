import React, { useState } from "react";
import { Link } from "react-scroll";
import jn from "./img/jn.png";
import menu from "./img/menu.png";
import "./styles/Navbar.css";

function Navbar({ children }) {
  const keyEscape = (event) => {
    const tecla = event.keyCode;
    if (tecla === 27) {
      setClick(true);
    }
  };
  window.onkeydown = keyEscape;
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(true);
  return (
    <>
      <header className={click ? "navbar" : "navbar-open"}>
        <div className="navbar-container">
          <div className="menu-cont" onClick={handleClick}>
            <img className={click ? "menuImg" : "menuImg-open"} src={menu} alt="menu" />
          </div>

          <div className="logo-cont">
            <Link to="inicio" smooth={true} duration={400}>
              <img className="navbarImg" src={jn} alt="jn" />
            </Link>
          </div>

          <div className="fixnav" />
        </div>

        <nav className={click ? "menut" : "menut-open"}>
          <ul className={click ? "menutext" : "menutext-open"}>
            <Link className={click ? "menutl" : "menutl-open"} to="inicio" smooth={true} duration={400} onClick={handleClick}>
              Inicio
            </Link>
            <Link className={click ? "menutl" : "menutl-open"} to="habilidades" smooth={true} duration={400} onClick={handleClick}>
              Habilidades
            </Link>
            <Link className={click ? "menutl" : "menutl-open"} to="portfolio" smooth={true} duration={400} onClick={handleClick}>
              Portafolio
            </Link>
            <Link className={click ? "menutl" : "menutl-open"} to="sobremi" smooth={true} duration={400} onClick={handleClick}>
              Sobre mí
            </Link>
            <Link className={click ? "menutl" : "menutl-open"} to="contacto" smooth={true} duration={400} onClick={handleClick}>
              Contacto
            </Link>
          </ul>
        </nav>
      </header>
      <main onClick={handleClose}>{children}</main>
    </>
  );
}

export default Navbar;
