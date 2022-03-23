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
        {toView === false ? (
          proyects.map((proyect) => (
            <>
              <ProyectCard key={proyect.id} info={proyect} />
            </>
          ))
        ) : (
          <>
            <ProyectCard key="0" info={proyects[0]} />
            <ProyectCard key="1" info={proyects[1]} />
            <ProyectCard key="2" info={proyects[2]} />
          </>
        )}
      </div>
      <button onClick={handleView} className="button-view">
        {toView === false ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  );
};
export default PortfolioPage;
