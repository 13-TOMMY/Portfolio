import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./AboutLinks.css";
import LanguageText from "../LanguageText/LanguageText";

function AboutLinks() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "div-dark about-links-container"
          : "div-light about-links-container"
      }
    >
      <h2 className={darkMode ? "dark-text " : "light-text "}>
        {" "}
        <LanguageText
          englishText={<>Find Me Here!</>}
          polishText={<>Znajdź mnie tutaj!</>}
        />
      </h2>
      <div className="abl-icon-container">
        <div className="abl-icon-row">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8,}}
            href="https://github.com/13-TOMMY"
            target="_blank"
            rel="noopener noreferrer"  
            className="abl-img-link "
          >
            <img
              src="/assets/social-media/github-dark.svg"
              alt="Github profile @13__tommy"
              className="rgb-border about-icon"
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8,}}
            href="https://twitter.com/13___tommy"
            target="_blank"
            rel="noopener noreferrer"  
            className="sml-img-link "
          >
            <img
              src="/assets/social-media/twitter.svg"
              alt="X/Twitter profile @13__tommy"
              className="rgb-border about-icon"
            />
          </motion.a>
        </div>
        <div className="abl-icon-row">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8,}}
            href="https://www.linkedin.com/in/tomasz-lis-67b879261"
            target="_blank"
            rel="noopener noreferrer"  
            className="sml-img-link "
          >
            <img
              src="/assets/social-media/linkedin.svg"
              alt="LinkedIn profile tomasz-lis-67b879261"
              className="rgb-border about-icon"
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8,}}
            href="https://medium.com/@13__TOMMY"
            target="_blank"
            rel="noopener noreferrer"  
            className="sml-img-link "
          >
            <img
              src="/assets/social-media/medium.svg"
              alt="Medium profile @13__tommy"
              className="rgb-border about-icon"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default AboutLinks;
