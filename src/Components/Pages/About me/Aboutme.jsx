import React from 'react';
import './Aboutme.css'; // Ensure you have this CSS file

const Aboutme = () => {
  return (
    <div className="second-page" id="about">
      <div className="about-me">
        <h1>About <span>Me</span></h1>
        <div className="about">
          Hey, I'm Keerthana!👋 , Passionate React developer with a knack for crafting seamless user experiences through clean and efficient code. Eager to contribute my skills to innovative projects and collaborate with like-minded individuals. Seeking exciting opportunities to bring my expertise to a dynamic team. Let's code something amazing together!<i className="fa-solid fa-laptop"></i>
        </div>
      </div>
      <div className="image1">
        <img src="/Assets/keerthana2.jpg" alt="keerthu" className="my-image" width="400px" height="470px" />
      </div>
    </div>
  );
};

export default Aboutme;
