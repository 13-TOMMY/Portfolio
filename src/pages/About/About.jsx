import React from "react";
import { useState, useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../context/ThemeContext";
import AboutLinks from "../../components/AboutLinks/AboutLinks";
import Cv from "../../components/Cv/Cv";

function About() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="about-container">
      <div className="ab-left">
        <Cv />
        <div
          className={
            darkMode ? "div-dark ab-left-middle" : "div-light ab-left-middle"
          }
        >
          <img
            src="/assets/photos/d93e089e-eee7-46ea-9ff6-3c87830453b0.jpeg"
            alt="Photo of me"
            className="ab-left-middle-img"
          />
        </div>
        <AboutLinks />
      </div>
      <div className="ab-right">
        <div
          className={darkMode ? "div-dark ab-right-p" : "div-light ab-right-p"}
        >
          <h3 className={darkMode ? "dark-text" : "light-text"}>About Me:</h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
            I'm a London native with a lifelong passion for technology. I
            started building and repairing computers, gaming consoles, and
            phones from a young age, which honed my problem-solving skills and
            deepened my understanding of these devices. During the COVID-19
            pandemic, I sought a new direction and found it in programming. It
            all began with a fascination for Google Ads and the idea of creating
            websites. To pursue this newfound passion, I embarked on a journey
            with Mimo, starting with Python and gradually diving into web
            development.
          </p>
          <h3 className={darkMode ? "dark-text" : "light-text"}>
            Education and Skills:
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
            I graduated from a 7-month front-end development bootcamp, mastering
            HTML, CSS, JavaScript, React, and Git. I have hands-on experience
            with over 8 projects. Also i am proficient in Git for version
            control, and familiar with design tools like Figma and Firebase. I
            specialize in creating responsive, mobile-friendly projects.
            Currently, I&apos;m expanding my skill set by participating in a
            back-end development bootcamp, where I&apos;m learning Node.js,
            Next.js, and PostgreSQL.
          </p>
          <h3 className={darkMode ? "dark-text" : "light-text"}>
            Language Proficiency:
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
            I&apos;m fluent in English, a skill I&apos;ve honed during my
            18-year stay in London. This proficiency enhances my ability to
            communicate technical concepts and collaborate effectively in
            diverse teams.
          </p>
          <h3 className={darkMode ? "dark-text" : "light-text"}>
            Future Goals:
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
            I'm on the lookout for challenging opportunities that allow me to
            leverage my front-end and back-end development skills, contributing
            to innovative projects and fueling my passion for technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
