import React, { useState } from 'react';
import { Link } from 'react-scroll';
import navigation from '../data/navigation';
import jn from '../img/jn.png';
import menu from '../img/menu.png';
import '../styles/Navbar.css';

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
      <div className={click ? 'navbar' : 'navbar-open'}>
        <div className="navbar-container">
          <div className="menu-cont" onClick={handleClick}>
            <img className={click ? 'menuImg' : 'menuImg-open'} src={menu} alt="menu" />
          </div>
          <div className="logo-cont">
            <Link to="inicio" smooth={true} duration={400}>
              <img className="navbarImg" src={jn} alt="jn" />
            </Link>
          </div>

          <div className="fixnav" />
        </div>
        <nav className={click ? 'menut' : 'menut-open'}>
          <ul className={click ? 'menutext' : 'menutext-open'}>
            {navigation.map((link, index) => (
              <Link
                key={index}
                className={click ? 'menutl' : 'menutl-open'}
                to={link.hash}
                smooth={true}
                duration={400}
                onClick={handleClick}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <main onClick={handleClose}>{children}</main>
    </>
  );
}

export default Navbar;
