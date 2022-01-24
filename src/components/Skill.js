import React, { useState } from 'react';
import '../styles/Skill.css';
import Coder from './Coder';
import Designer from './Designer';

const Skill = ({ title, text, skill }) => {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
    };
    setStyle(newStyle);
  }, 100);
  return (
    <div className="container-skill" style={style}>
      <div className="skill">
        <div className="container-img">
          {(skill === 'designer' && <Designer className="skill-img" />) ||
            (skill === 'coder' && <Coder className="skill-img" />)}
        </div>
        <div className="container-text">
          <h3 className="skill-title"> {title} </h3>
          <p className="skill-text"> {text} </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
