import React from 'react';
import images from '../components/images.js';
import './styles/BioCard.css';

const BioCard = (bio) => {

	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1
		}
		
		setStyle(newStyle);
	}, 100);
	
  return (
    <>
        <div className="conte" style={style}>
            <div className="img-cont"> <img className="img-avatar" src={images.perfil} alt="avatar" /> </div>
            <div className="text-cont"> 
                <p className="texto">
                {bio.text}
                </p>
            </div>
        </div>

        <div className="contact" style={style} id="contacto">
         <h2 className="contactame">CONTACTO</h2>
         <img className="trama" src={ images.trama } />
          <div className="cont-contact">

          <a href="https://www.linkedin.com/in/joaqu%C3%ADnnieva/" target="_blank">
            <div className="linkedin-contact">
                <img className="img-clinkedin" src={images.linkedin}  alt="linkedin"/>
                 
            </div>
          </a>
          <a href="mailto:joacoo.nieva@gmail.com" target="_blank">
            <div className="mail-contact">
                <img className="img-cgmail" src={images.gmail} alt="mail"/>
            </div>
          </a>
          </div>
        </div>
    </>
  );}

export default BioCard;
