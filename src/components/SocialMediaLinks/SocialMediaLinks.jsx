import React, { useContext } from "react";
import "./SocialMediaLinks.css";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";

function SocialMediaLinks() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "div-dark social-media-links-container"
          : "div-light social-media-links-container"
      }
    >
      <h2 className={darkMode ? "dark-text " : "light-text "}>Find Me Here!</h2>
      <ul className="sml-list-links">
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8, rotate: -365}}
            href="https://twitter.com/13___tommy"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="/assets/social-media/twitter.svg"
              alt="X/Twitter profile @13__tommy"
            />
          </motion.a>

          <label
            htmlFor="sml-img-link"
            className={
              darkMode ? "dark-text sml-label" : "light-text sml-label"
            }
          >
            Twiiter / X
          </label>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8, rotate: -365}}
            href="https://www.linkedin.com/in/tomasz-lis-67b879261"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="/assets/social-media/linkedin.svg"
              alt="LinkedIn profile tomasz-lis-67b879261"
            />
          </motion.a>
          <label
            htmlFor="sml-img-link"
            className={
              darkMode ? "dark-text sml-label" : "light-text sml-label"
            }
          >
            LinkedIn
          </label>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8, rotate: -365}}
            href="https://medium.com/@13__TOMMY"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="/assets/social-media/medium.svg"
              alt="Medium profile @13__tommy"
            />
          </motion.a>
          <label
            htmlFor="sml-img-link"
            className={
              darkMode ? "dark-text sml-label" : "light-text sml-label"
            }
          >
            Medium
          </label>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaLinks;
