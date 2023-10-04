import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import LanguageText from "../LanguageText/LanguageText";

function AboutLinks() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "div-dark about-links-container"
          : "div-light about-links-container"
      }
    >
      <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
        <LanguageText
          englishText={<>Find Me Here!</>}
          polishText={<>Znajdź mnie tutaj!</>}
        />
      </h3>
      <div className="abl-icon-container">
        <div className="abl-icon-row">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8,}}
            href="https://github.com/13-TOMMY"
            target="_blank"
            rel="noopener noreferrer"  
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
