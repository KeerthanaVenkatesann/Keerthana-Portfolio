import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="fourth-page" id="skills">
      <div className="skill-frontend">
        <h2>Programming <span>Skills</span></h2>
        <div className="boc">1: Html <meter className="any" min="0" max="100" value="98"></meter> 1 Year</div>
        <div className="boc">2: CSS <meter className="any" min="0" max="100" value="90"></meter> 11 Months</div>
        <div className="boc">3: JavaScript <meter className="any" min="0" max="100" value="80"></meter> 10 Months</div>
        <div className="boc">4: TypeScript <meter className="any" min="0" max="100" value="70"></meter> 9 Months</div>
        <div className="boc">5: JQuery <meter className="any" min="0" max="100" value="70"></meter> 6 Months</div>
        <div className="boc">6: ReactJs <meter className="any" min="0" max="100" value="95"></meter> 8 Months</div>
        <div className="boc">7: ReactTs <meter className="any" min="0" max="100" value="60"></meter> 5 Months</div>
        <div className="boc">8: Redux & Saga <meter className="any" min="0" max="100" value="70"></meter> 9 Months</div>
        <div className="boc">9: Node Js <meter className="any" min="0" max="100" value="25"></meter> 1.5 Months</div>
        <div className="boc">10: Eclipse <meter className="any" min="0" max="100" value="30"></meter> 1 Month</div>
        <div className="boc">11: Swagger <meter className="any" min="0" max="100" value="30"></meter> 3 Months</div>
        <div className="boc">12: PostMan <meter className="any" min="0" max="100" value="30"></meter> 1 Month</div>
      </div>

      <div className="education">
        <span className="edu">
          <h1>TECHNICAL <span>SKILLS</span></h1>
        </span>
        <h3>{'{Qualification}'}</h3>
        <div className="ug">
          B.A <span>{'{English Literature}'}</span>
          Bharathidasan University
          <span>2020-2023</span>
        </div>
        <div className="pg">
          M.A <span>{'{English Literature}'}</span>
          Bharathidasan University
          <span>2023-Present </span><span id="abbr">[ " Corr " ]</span>
        </div>
        <div className="high-school">
          Higher Secondary Schooling
          G.H.S.School Kannukudi West
          <span>2019-2020</span>
        </div>
        <div className="high">
          Secondary Level Schooling
          G.H.S.School Kannukudi West
          <span>2018-2019</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
