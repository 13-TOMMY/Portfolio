import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaSquareXTwitter,
  FaLinkedinIn,
  FaLinkedin,
  FaMedium,
  FaGithub,
  FaSquareGithub,
} from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";

function SocialMediaConnections() {
  const {darkMode} = useContext(ThemeContext);
  const [xHover, setXHoverOn] = useState(false);
  const [lHover, setLHoverOn] = useState(false);
  const [mHover, setMHoverOn] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="smc-container">
      <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
        {title || "Let's Connect "}
      </h3>
      <ul className="smc-unorderd-list">
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://twitter.com/13___tommy"
            target="_blank"
            rel="noopener noreferrer"
            className="rgb-border-circle smc-icon"
            onMouseEnter={() => setTitle("X")}
            onMouseLeave={() => setTitle("")}
          >
            {title === "X" ? (
              <FaXTwitter
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            ) : (
              <FaSquareXTwitter
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            )}
          </motion.a>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://www.linkedin.com/in/tomasz-lis-67b879261"
            target="_blank"
            rel="noopener noreferrer"
            className="rgb-border-circle smc-icon"
            onMouseEnter={() => setTitle("LinkedIn")}
            onMouseLeave={() => setTitle("")}
          >
            {title === "LinkedIn" ? (
              <FaLinkedinIn
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            ) : (
              <FaLinkedin
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            )}
          </motion.a>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://medium.com/@13__TOMMY"
            target="_blank"
            rel="noopener noreferrer"
            className="rgb-border-circle smc-icon"
            onMouseEnter={() => setTitle("Medium")}
            onMouseLeave={() => setTitle("")}
          >
            {title === "Medium" ? (
              <FaMedium
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            ) : (
              <IoLogoMedium
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            )}
          </motion.a>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://github.com/13-TOMMY"
            target="_blank"
            rel="noopener noreferrer"
            className="rgb-border-circle smc-icon"
            onMouseEnter={() => setTitle("Github")}
            onMouseLeave={() => setTitle("")}
          >
            {title === "Github" ? (
              <FaGithub
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            ) : (
              <FaSquareGithub
                className={
                  darkMode ? "dark-text sm-icon" : "light-text sm-icon"
                }
              />
            )}
          </motion.a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaConnections;
