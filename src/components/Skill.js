import '../styles/Skill.css';
import Coder from './Coder';
import Designer from './Designer';

const Skill = ({ title, text, skill }) => {
  return (
    <div className="container-skill">
      <div className="skill">
        <div data-aos="fade-right" data-aos-duration="800" className="container-img">
          {(skill === 'designer' && <Designer />) || (skill === 'coder' && <Coder />)}
        </div>
        <div data-aos="fade-left" data-aos-duration="800" className="container-text">
          <h3 className="skill-title"> {title} </h3>
          <p className="skill-text"> {text} </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
