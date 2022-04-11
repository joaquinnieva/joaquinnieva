import { useState } from 'react';
import ProyectCard from '../components/ProyectCard';
import { PORTFOLIO_TITLE } from '../data/constants';
import proyects from '../data/proyectsInfo';
import '../styles/PortfolioPage.css';
const PortfolioPage = () => {
  const [toView, setToView] = useState(true);
  function handleView() {
    if (toView === true) {
      return setToView(false);
    }
    setToView(true);
  }

  return (
    <section className="container-proyectos" id="portfolio">
      <h3 className="proyectos-title">{PORTFOLIO_TITLE}</h3>
      <div data-aos="fade-zoom-in" data-aos-duration="500" className="cont-proyectoscard">
        {toView === true ? (
          <>
            <ProyectCard info={proyects[0]} />
            <ProyectCard info={proyects[1]} />
            <ProyectCard info={proyects[2]} />
          </>
        ) : (
          proyects.map((proyect, index) => <ProyectCard key={index} info={proyect} />)
        )}
      </div>
      <button onClick={handleView} className="button-view">
        {toView === false ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  );
};
export default PortfolioPage;
