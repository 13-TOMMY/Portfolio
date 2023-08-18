import React, { useContext } from "react";
import "./Homepage.css";
import { ThemeContext } from "../../context/ThemeContext";

function Homepage() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="Homepage-container">
      <div className="hp-top">
        <div
          className={
            darkMode ? "div-dark hp-top-left" : "div-light hp-top-left"
          }
        >
          <h1 className={darkMode ? "dark-text hp-h1-text" : "light-text hp-h1-text"}>
            Front-end Developer
          </h1>
          <p className={darkMode ? "dark-text hp-p-text" : "light-text hp-p-text"}>
            Hey there, I&apos;m Tomasz Lis, a Front-end Developer based in lively
            Krakow, Poland. I&apos;m all about coding and continuous learning. Right
            now, I&apos;m focused on leveling up to become a Full Stack Developer
            because I believe in pushing my limits. Coding isn&apos;t just a job for
            me – it&apos;s a passion that drives me to learn and grow every day.
          </p>
        </div>
        <div
          className={
            darkMode ? "div-dark hp-top-right" : "div-light hp-top-right"
          }
        >
          <img
            src="src/assets/photos/IMG_8014.jpeg"
            alt="Photo of me"
            className="hp-top-right-img"
          />
        </div>
      </div>
      <div className="hp-bottom">
        <div
          className={
            darkMode
              ? "div-dark hp-bottom-container"
              : "div-light hp-bottom-container"
          }
        >
          <div className="hp-bottom-techStack">
            <div className="ts-name">
              <h3 className={darkMode ? "dark-text hp-ts-text" : "light-text hp-ts-text"}>
                TECH STACK
              </h3>
            </div>
            <div className="tech-stack">
              <img
                src="src/assets/Tech-Stack/javascript.svg"
                alt="JavaScript icon"
              />
              <img
                src="src/assets/Tech-Stack/react-dark.svg"
                alt="React icon"
              />
              <img src="src/assets/Tech-Stack/html.svg" alt="HTML icon" />
              <img src="src/assets/Tech-Stack/css.svg" alt="CSS icon" />
              <img src="src/assets/Tech-Stack/git.svg" alt="Git icon" />
              <img src="src/assets/Tech-Stack/oading-one.svg" alt="loading" />
              <img src="src/assets/Tech-Stack/oading-one.svg" alt="loading" />
              <img src="src/assets/Tech-Stack/oading-one.svg" alt="loading" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
