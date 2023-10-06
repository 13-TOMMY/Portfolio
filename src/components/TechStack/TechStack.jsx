import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


function TechStack() {
  const { darkMode } = useContext(ThemeContext);
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
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
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
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
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
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
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
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
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
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
              htmlFor="css-icon"
            >
              CSS
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/sass.svg"
              alt="Firebase icon"
              className="sass-icon"
            />
            <label
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
              htmlFor="sass-icon"
            >
              Sass
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/git.svg"
              alt="Git icon"
              className="git-icon"
            />
            <label
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
              htmlFor="git-icon"
            >
              Git
            </label>
          </div>
          <div className="ts-icon-stack">
            <img
              src="/assets/tech-stack/figma-dark.svg"
              alt="figma icon"
              className="figma-icon"
            />
            <label
              className={darkMode ? "dark-text s-font" : "light-text s-font"}
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
