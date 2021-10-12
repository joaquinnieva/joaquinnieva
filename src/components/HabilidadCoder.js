import React from 'react';
import './styles/HabilidadCoder.css';

const HabilidadCoder = (props) => {

	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1
		}
		
		setStyle(newStyle);
	}, 100);
	
  return (
        <div className="contc" style={style}>
            <div className="containerhc">
                <div className="container-imgc">
                    <div className="cont-animacioncode">
                        <div className="holamundo">Hola mundo<span>&#160;</span></div>
                    </div>
                    <img className="imgc" src={props.img} alt="imageh" />
                </div>
                <div className="container-textc">
                    <h3 className="titlc"> {props.title} </h3>
                    <p className="textc"> {props.text} </p>
                </div>
            </div>
        </div>
  )
}

export default HabilidadCoder;