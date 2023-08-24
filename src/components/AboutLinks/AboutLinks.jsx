import React from "react";
import { motion } from "framer-motion";
import "./AboutLinks.css";

function AboutLinks() {
  return (
    <div className="about-links-container">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -365 }}
          href="https://github.com/13-TOMMY"
          target="_blank"
          rel="noopener noreferrer"
          className="abl-icon-top"
        >
          <img
            src="/assets/social-media/github-dark.svg"
            alt="Github profile @13__tommy"
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -365 }}
          href="https://twitter.com/13___tommy"
          target="_blank"
          rel="noopener noreferrer"
          className="abl-icon-top"
        >
          <img
            src="/assets/social-media/twitter.svg"
            alt="X/Twitter profile @13__tommy"
          />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -365 }}
          href="https://www.linkedin.com/in/tomasz-lis-67b879261"
          target="_blank"
          rel="noopener noreferrer"
          className="abl-icon-bottom"
        >
          <img
            src="/assets/social-media/linkedin.svg"
            alt="LinkedIn profile tomasz-lis-67b879261"
          />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -365 }}
          href="https://medium.com/@13__TOMMY"
          target="_blank"
          rel="noopener noreferrer"
          className="abl-icon-bottom"
        >
          <img
            src="/assets/social-media/medium.svg"
            alt="Medium profile @13__tommy"
          />
        </motion.a>
    </div>
  );
}

export default AboutLinks;
