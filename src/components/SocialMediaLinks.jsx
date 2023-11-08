import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import LanguageText from "./LanguageText";

function SocialMediaLinks() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "div-dark social-media-links-container"
          : "div-light social-media-links-container"
      }
    >
      <h3 className={darkMode ? "dark-text " : "light-text "}>
        <LanguageText
          englishText={<>Find Me Here!</>}
          polishText={<>Znajdź mnie tutaj!</>}
        />
      </h3>
      <ul className="sml-list-links">
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://twitter.com/13___tommy"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link "
          >
            <img
              src="/assets/social-media/twitter.svg"
              alt="X/Twitter profile @13__tommy"
              className="rgb-border contact-icon"
            />
          </motion.a>

          <label
            htmlFor="sml-img-link"
            className={darkMode ? "dark-text s-font" : "light-text s-font"}
          >
            Twiiter / X
          </label>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://www.linkedin.com/in/tomasz-lis-67b879261"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="/assets/social-media/linkedin.svg"
              alt="LinkedIn profile tomasz-lis-67b879261"
              className="rgb-border contact-icon"
            />
          </motion.a>
          <label
            htmlFor="sml-img-link"
            className={darkMode ? "dark-text s-font" : "light-text s-font"}
          >
            LinkedIn
          </label>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://medium.com/@13__TOMMY"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="/assets/social-media/medium.svg"
              alt="Medium profile @13__tommy"
              className="rgb-border contact-icon"
            />
          </motion.a>
          <label
            htmlFor="sml-img-link"
            className={darkMode ? "dark-text s-font" : "light-text s-font"}
          >
            Medium
          </label>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaLinks;
