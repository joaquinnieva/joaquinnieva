import React from 'react';
import { BIO_BUTTON, BIO_DESCRIPTION } from '../data/constants.js';
import images from '../data/images.js';
import myPDF from '../img/JoaquínNievaCV.pdf';
import '../styles/BiographyPage.css';

const BiographyPage = () => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
    };

    setStyle(newStyle);
  }, 100);

  return (
    <section className="conte" style={style} id="sobremi">
      <div className="img-cont">
        <img className="img-avatar" src={images.perfil} alt="avatar" />
      </div>
      <div className="text-cont">
        <p className="texto">{BIO_DESCRIPTION}</p>
        <a className="cv" href={myPDF} download="JoaquínNievaCV.pdf">
          {BIO_BUTTON}
        </a>
      </div>
    </section>
  );
};

export default BiographyPage;
