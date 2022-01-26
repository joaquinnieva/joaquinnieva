import Skill from '../components/Skill';
import SVGProgress from '../components/SVGProgress';
import { CODER_DESCRIPTION, CODER_TITLE, DESIGNER_DESCRIPTION, DESIGNER_TITLE } from '../data/constants';
import { coder, designer } from '../data/skillProgress.js';
import '../styles/SkillPage.css';

const SkillPage = () => (
  <section id="habilidades">
    <Skill skill="coder" title={CODER_TITLE} text={CODER_DESCRIPTION} />
    <div data-aos="fade-in" className="container-rings">
      <div className="rings-skills">
        {coder.map((skill, index) => (
          <SVGProgress key={index} image={skill.image} progress={skill.progress} name={skill.name} />
        ))}
      </div>
    </div>

    <Skill skill="designer" title={DESIGNER_TITLE} text={DESIGNER_DESCRIPTION} />
    <div data-aos="fade-in" className="container-rings">
      <div className="rings-skills">
        {designer.map((skill, index) => (
          <SVGProgress key={index} image={skill.image} progress={skill.progress} name={skill.name} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillPage;
