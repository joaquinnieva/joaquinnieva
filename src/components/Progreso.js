import React from 'react';
import './styles/Progreso.css';

const Progreso = ({progreso,imagen}) => {

  const offset = 314.16 - progreso / 100 * 314.16;
  
  return (
        <div className="barras-cont">
          <p className="porcentaje"> {progreso}% </p>
          <img className="img-" src={imagen} alt="skill" />
          <svg
          className="ring"
>
          <circle
              className="progress-ring"
              strokeDasharray= "314, 314"
              strokeDashoffset= {offset}
              stroke="#ff5656"
              strokeWidth="7"
              strokeLinecap="round"
              fill="transparent"
              r="50"
              cx="60"
              cy="60"/>
              
          </svg>
        </div>
);}

export default Progreso