import { CONTACT_COPYRIGHT, CONTACT_TITLE } from '../data/constants.js';
import images from '../data/images.js';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="container-contact" id="contacto">
      <h2 className="contact-title">{CONTACT_TITLE}</h2>
      <img className="contact-background" src={images.trama} alt="trama" />
      <div className="contact-links">
        <a href="mailto:joacoo.nieva@gmail.com" target="_blank" rel="noreferrer">
          <abbr title="joacoo.nieva@gmail.com">
            <img className="img-gmail" src={images.gmail} alt="mail" />
          </abbr>
        </a>
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
