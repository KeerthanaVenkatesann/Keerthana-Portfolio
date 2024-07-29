import React from "react";
import "./Goal.css";

const Goal = () => {
  return (
    <div className="third-page" id="goal">
      <h2>
        Its Not <span> Just About </span> Learning , <span> Its About</span>{" "}
        What <span> Learning</span> Creates! .
      </h2>
      <div className="goals">
        <div className="divv" id="bg">
          <h3>Future Plans</h3>
          <p>
            Full Stack Developer
            <br />
            Web💯
          </p>
          <p>Vlogger📸</p>
          <p>To Learn 🅰ℹ</p>
          <p>Proud My Parents🩵</p>
        </div>

        <div className="divv" id="bg">
          <h3>Hobbies</h3>
          <p>
            Reading Psychology
            <br /> Books📚
          </p>
          <p>Gaming🎮</p>
          <p>Cycling🚴🏻‍♀</p>
          <p>Dancing💃🏻</p>
        </div>

        <div className="divv" id="bg">
          <h3>Interest</h3>
          <p>Programming🖥</p>
          <p>Web Development🕸</p>
          <p>Animation🎭</p>
          <p>Cloud🏪</p>
        </div>

        <div className="divv" id="bg">
          <h3>Productivity</h3>
          <p>Working on Project👩🏻‍💻</p>
          <p>Learning Backend Tech💯</p>
          <p>communication📳</p>
          <p>Problem Solving🧩</p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
