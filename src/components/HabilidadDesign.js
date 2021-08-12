import React from 'react';
import './styles/HabilidadDesign.css';

const HabilidadDesign = (props) => {

	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1
		}
		
		setStyle(newStyle);
	}, 100);
	
  return (
        <div className="cont" style={style}>
            <div className="containerh">
                <div className="container-img">
                    <div className="cont-animacion">
                        <img className="animar" src={props.imgAnimar} />
                        <img className="line" src={props.imgAnimado} />
                    </div>
                    <img className="img" src={props.img} alt="imageh" />
                </div>
                <div className="container-text">
                    <h3 className="titl"> {props.title} </h3>
                    <p className="text"> {props.text} </p>
                </div>
            </div>
        </div>
  );}

export default HabilidadDesign