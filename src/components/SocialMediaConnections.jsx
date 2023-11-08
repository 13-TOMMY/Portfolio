import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

function SocialMediaConnections() {
  const darkMode = useContext(ThemeContext);
  return (
    <div>
      <ul className="smc-unorderd-list">
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={
              darkMode ? "smc-icon-dark smc-icon" : "smc-icon-light smc-icon"
            }
          >
            <FaXTwitter />
          </motion.a>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={
              darkMode ? "smc-icon-dark smc-icon" : "smc-icon-light smc-icon"
            }
          >
            <FaXTwitter />
          </motion.a>
        </li>
        <li style={{ listStyle: "none" }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={
              darkMode ? "smc-icon-dark smc-icon" : "smc-icon-light smc-icon"
            }
          >
            <FaXTwitter />
          </motion.a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaConnections;
