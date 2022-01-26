import React from 'react';
import '../styles/SVGProgess.css';

const Progress = ({ progress, image, name }) => {
  const offset = 170 - (progress / 100) * 170;
  return (
    <div className="container-progress">
      <span className="progress-name"> {name} </span>
      <p className="progress-percentage"> {progress}% </p>
      <img className="img-" src={image} alt="skill" />
      <svg className="ring">
        <circle
          className="progress-ring"
          strokeDasharray="178, 178"
          strokeDashoffset={offset}
          stroke="#ff5656"
          strokeWidth="5"
          strokeLinecap="round"
          fill="transparent"
          r="30"
          cx="45"
          cy="45"
        />
      </svg>
    </div>
  );
};

export default Progress;
