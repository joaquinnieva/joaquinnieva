import Progress from '../components/Progress';
import Skill from '../components/Skill';
import { CODER_DESCRIPTION, CODER_TITLE, DESIGNER_DESCRIPTION, DESIGNER_TITLE } from '../data/constants';
import { coder, designer } from '../data/skillProgress.js';
import '../styles/SkillPage.css';

const SkillPage = () => (
  <section id="habilidades">
    <Skill skill="coder" title={CODER_TITLE} text={CODER_DESCRIPTION} />
    <div className="container-rings">
      <div className="rings-skills">
        {coder.map((skill, index) => (
          <Progress key={index} image={skill.image} progress={skill.progress} />
        ))}
      </div>
    </div>

    <Skill skill="designer" title={DESIGNER_TITLE} text={DESIGNER_DESCRIPTION} />
    <div className="container-rings">
      <div className="rings-skills">
        {designer.map((skill, index) => (
          <Progress key={index} image={skill.image} progress={skill.progress} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillPage;
