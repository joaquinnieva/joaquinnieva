import React from 'react';
import '../styles/Progess.css';

const Progress = ({ progress, image }) => {
  const offset = 314.16 - (progress / 100) * 314.16;
  return (
    <div className="barras-cont">
      <p className="porcentaje"> {progress}% </p>
      <img className="img-" src={image} alt="skill" />
      <svg className="ring">
        <circle
          className="progress-ring"
          strokeDasharray="314, 314"
          strokeDashoffset={offset}
          stroke="#ff5656"
          strokeWidth="7"
          strokeLinecap="round"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
      </svg>
    </div>
  );
};

export default Progress;
