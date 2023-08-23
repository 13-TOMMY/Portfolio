import React from "react";
import { useState, useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../context/ThemeContext";

function About() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="about-container">
      <div className="ab-left">
        <div
          className={
            darkMode ? "div-dark ab-left-top" : "div-light ab-left-top"
          }
        >
          <img
            src="src/assets/photos/d93e089e-eee7-46ea-9ff6-3c87830453b0.jpeg"
            alt="Photo of me"
            className="ab-left-top-img"
          />
        </div>
        <div
          className={
            darkMode ? "div-dark ab-left-bottom" : "div-light ab-left-bottom"
          }
        >
          <img src="src/assets/social-media/linkedin.svg" alt="loading" />
          <img src="src/assets/social-media/twitter.svg" alt="loading" />
          <img src="src/assets/social-media/medium.svg" alt="loading" />
          <img src="src/assets/social-media/github-dark.svg" alt="loading" />
        </div>
      </div>
      <div className="ab-right">
        <div
          className={darkMode ? "div-dark ab-right-p" : "div-light ab-right-p"}
        >
          <p className={darkMode ? "dark-text" : "light-text"}>
            Growing up in London, my early exposure to technology sparked a deep
            passion within me. Through building and repairing computers, gaming
            consoles, and phones, I honed my problem-solving skills and gained a
            strong understanding of these devices. To further enhance my
            expertise, I completed the comprehensive front-end development
            bootcamp, Mimo. During this intensive seven-month program, I
            mastered HTML, CSS, JavaScript, React, and Git, solidifying my
            skills and expanding my knowledge of web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
