import React from 'react';
import ProyectCard from '../components/ProyectCard';
import { PORTFOLIO_TITLE } from '../data/constants';
import proyects from '../data/proyectsInfo';
import '../styles/PortfolioPage.css';
const PortfolioPage = () => {
  return (
    <section className="container-proyectos" id="portfolio">
      <h3 className="proyectos-title">{PORTFOLIO_TITLE}</h3>
      <div data-aos="zoom-in" data-aos-duration="500" className="cont-proyectoscard">
        {proyects.map((proyect) => (
          <ProyectCard key={proyect.id} info={proyect} />
        ))}
      </div>
    </section>
  );
};
export default PortfolioPage;
