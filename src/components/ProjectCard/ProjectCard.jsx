import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./ProjectCard.css";

function ProjectCard({
  videoLink,
  projectName,
  projectDescription,
  viewlink,
  visitLink,
}) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode ? "div-dark portfolio-card" : "div-light portfolio-card"
      }
    >
      <img src={videoLink} alt={videoLink} />
      <h2 className={darkMode ? "dark-text" : "light-text"}>{projectName}</h2>
      <p className={darkMode ? "dark-text" : "light-text"}>{projectDescription}</p>
      <div className="pc-btn-container">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn pc-btn"
              : "light-text light-btn pc-btn"
          }
        >
          <a href={viewlink}>View</a>{" "}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn pc-btn"
              : "light-text light-btn pc-btn"
          }
        >
          <a href={visitLink}>Vist</a>
        </motion.button>
      </div>
    </div>
  );
}

export default ProjectCard;
