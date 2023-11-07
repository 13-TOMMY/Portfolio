import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

function Codewars() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode ? " div-dark cw-container" : " div-light cw-container"
      }
    >
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        href="https://www.codewars.com/users/13-TOMMY"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.codewars.com/users/13-TOMMY/badges/micro"
          alt="codewars bage 13-tommy"
          className="cw-icon"
        />
      </motion.a>
    </div>
  );
}

export default Codewars;
