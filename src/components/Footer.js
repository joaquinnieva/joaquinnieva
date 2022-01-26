import { useState } from 'react';
import { CONTACT_COPYRIGHT, CONTACT_TITLE } from '../data/constants.js';
import images from '../data/images.js';
import '../styles/Footer.css';

function Footer() {
  const [pressButton, setPressButton] = useState('Pulsa para copiar');
  const handleCopy = () => {
    navigator.clipboard.writeText('joacoo.nieva@gmail.com');
    setPressButton('Mail copiado!');
  };
  return (
    <footer className="container-contact" id="contacto">
      <h2 className="contact-title">{CONTACT_TITLE}</h2>
      <div className="contact-links">
        <button type="button" className="btn-gmail" onClick={handleCopy}>
          <span className="tooltip-gmail">{pressButton}</span>
          <img className="img-gmail" src={images.gmail} alt="mail" />
        </button>
        <a href="https://www.linkedin.com/in/joaqu%C3%ADnnieva/" target="_blank" rel="noreferrer">
          <img className="img-linkedin" src={images.linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/joaquinnieva" target="_blank" rel="noreferrer">
          <img className="img-github" src={images.github} alt="mail" />
        </a>
      </div>
      <p className="copyright">{CONTACT_COPYRIGHT}</p>
    </footer>
  );
}
export default Footer;
