import React from "react";
import "./SidebarWithIcons.css";

const Sidenav = () => {
  return (
    <div className="card">
      <nav className="sidnav">
        <a href="#home">
          <span>
            <i className="bx bx-home"></i>
          </span>
        </a>
        <a href="#about">
          <span>
            <i className="bx bx-user-pin"></i>
          </span>
        </a>
        <a href="#goal">
          <span>
            <i className="bx bx-cog"></i>
          </span>
        </a>
        <a href="#skills">
          <span>
            <i className="bx bxs-graduation"></i>
          </span>
        </a>
        <a href="#project">
          <span>
            <i className="bx bx-code-alt"></i>
          </span>
        </a>
        <a href="#contact">
          <span>
            <i className="bx bxs-contact"></i>
          </span>
        </a>
      </nav>

      <div className="first-page" id="home">
        <div className="bg-text">
          "Hi, I'm Keerthana, a frontend web developer."
        </div>
        <div className="icons">
          <a
            href="https://www.instagram.com/keert_hanavenkatesan/#"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:kirthana0715@gmail.com">
            <i className="fa-regular fa-envelope" target="_blank"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/keerthana-venkatesan-61078b291/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/KeerthanaVenkatesann" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
