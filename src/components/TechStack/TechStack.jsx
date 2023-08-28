import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./TechStack.css";

function TechStack() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode
          ? "div-dark hp-bottom-container"
          : "div-light hp-bottom-container"
      }
    >
      <div className="ts-name">
        <h3
          className={
            darkMode ? "dark-text hp-ts-text" : "light-text hp-ts-text"
          }
        >
          TECH STACK
        </h3>
      </div>
      <div className="tech-stack">
        <div className="ts-top">
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/javascript.svg"
              alt="JavaScript icon"
              className="js-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="js-icon"
            >
              Java Script
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/react-dark.svg"
              alt="React icon"
              className="react-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="react-icon"
            >
              React
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/nodejs-light.svg"
              alt="Node Js"
              className="node-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="js-icon"
            >
              Node.Js
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/html.svg"
              alt="HTML icon"
              className="html-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="html-icon"
            >
              HTML
            </label>
          </div>
        </div>
        <div className="ts-bottom">
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/css.svg"
              alt="CSS icon"
              className="css-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="css-icon"
            >
              CSS
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/git.svg"
              alt="Git icon"
              className="git-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="git-icon"
            >
              Git
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/firebase.svg"
              alt="Firebase icon"
              className="firebase-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="firebase-icon"
            >
              Firebase
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/figma-dark.svg"
              alt="figma icon"
              className="figma-icon"
            />
            <label
              className={darkMode ? "dark-text" : "light-text"}
              htmlFor="figma-icon"
            >
              Figma
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
