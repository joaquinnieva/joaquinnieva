import { Link } from 'react-scroll';
import Landing from '../components/Landing.js';
import { LANDING_BUTTON, LANDING_TITLE } from '../data/constants.js';
import images from '../data/images.js';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <section data-aos="fade-down" className="container-home" id="inicio">
      <div className="land">
        <header className="land-text">
          <div className="land-logo">
            <img className="logo-img" src={images.logoentero} alt="logo" />
          </div>
          <p className="land-title">{LANDING_TITLE}</p>
          <Link className="land-button" to="habilidades" smooth={true}>
            {LANDING_BUTTON}
          </Link>
        </header>
        <div className="land-img">
          <Landing />
        </div>
      </div>

      <div className="scroll">
        <img className="scroll-flecha" src={images.flecha} alt="scroll" />
        <img className="scroll-flecha" src={images.flecha} alt="scroll" />
      </div>
    </section>
  );
};

export default HomePage;
