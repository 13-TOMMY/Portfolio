import React, { useContext } from "react";
import "./SocialMediaLinks.css";
import { ThemeContext } from "../../context/ThemeContext";

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
      <ul className="sml-list-links">
        <li style={{ listStyle: "none" }}>
          <a
            href="https://twitter.com/13___tommy"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="src/assets/social-media/twitter.svg"
              alt="X/Twitter profile @13__tommy"
            />
          </a>
          <label
            htmlFor="sml-img-link"
            className={darkMode ? "dark-text sml-label" : "light-text sml-label"}
          >
            Twiiter / X
          </label>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            href="https://www.linkedin.com/in/tomasz-lis-67b879261"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="src/assets/social-media/linkedin.svg"
              alt="LinkedIn profile tomasz-lis-67b879261"
            />
          </a>
          <label
            htmlFor="sml-img-link"
            className={darkMode ? "dark-text sml-label" : "light-text sml-label"}
          >
            LinkedIn
          </label>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            href="https://medium.com/@13__TOMMY"
            target="_blank"
            rel="noopener noreferrer"
            className="sml-img-link"
          >
            <img
              src="src/assets/social-media/medium.svg"
              alt="Medium profile @13__tommy"
            />
          </a>
          <label
            htmlFor="sml-img-link"
            className={darkMode ? "dark-text sml-label" : "light-text sml-label"}
          >
            Medium
          </label>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaLinks;
