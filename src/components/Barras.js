import React from 'react';
import './styles/Barras.css';


const Barras = ({barra,imagen}) => {
  
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${barra}`
		}
		
		setStyle(newStyle);
	}, 100);
	
  return (
    <div className="contenedorbarras">
      <div className="barras-barras"> 
        <div className="barras-cont">
            <div className="imgSkill" >
              <img className="img-" src={imagen} alt="skill" />
              <div className="info-label"></div>
              <div className="info-">
                  <div className="info-per">{barra}</div>
              </div>
            </div>
            <div className="barraSkill">
              <div className="barra-" style={style}> </div>
            </div>
        </div>
      </div> 
    </div>
);}

export default Barras