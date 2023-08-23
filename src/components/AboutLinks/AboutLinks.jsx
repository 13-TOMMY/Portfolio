import React from "react";
import { motion } from "framer-motion";
import './AboutLinks.className';

function AboutLinks() {
  return (
    <div className="about-links-container">
      <div className="abl-icon-top-row">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -22.5 }}
          href="https://www.linkedin.com/in/tomasz-lis-67b879261"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/social-media/linkedin.svg"
            alt="LinkedIn profile tomasz-lis-67b879261"
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -365 }}
          href="https://twitter.com/13___tommy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/social-media/twitter.svg"
            alt="X/Twitter profile @13__tommy"
          />
        </motion.a>
      </div>
      <div className="abl-icon-bottom-row">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -365 }}
          href="https://medium.com/@13__TOMMY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/social-media/medium.svg"
            alt="Medium profile @13__tommy"
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -365 }}
          href="https://medium.com/@13__TOMMY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/social-media/github-dark.svg"
            alt="Github profile @13__tommy"
          />
        </motion.a>
      </div>
    </div>
  );
}

export default AboutLinks;
