import React, { createRef, useContext, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = createRef();

  const handleVideoHover = () => {
    setIsHovered(true);
    videoRef.current.play();
  };

  const handleVideoLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className={
        darkMode ? "div-dark portfolio-card" : "div-light portfolio-card"
      }
    >
      <video
        ref={videoRef}
        src={videoLink}
        loop
        muted
        onMouseEnter={handleVideoHover}
        onMouseLeave={handleVideoLeave}
        className={isHovered ? "hovered-video" : ""}
      />
      <h2 className={darkMode ? "dark-text" : "light-text"}>{projectName}</h2>
      <p className={darkMode ? "dark-text" : "light-text"}>
        {projectDescription}
      </p>
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
          <a href={viewlink} target="_blank" rel="noopener noreferrer">
            View
          </a>{" "}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn-two pc-btn"
              : "light-text light-btn-two pc-btn"
          }
        >
          <a href={visitLink} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </motion.button>
      </div>
    </div>
  );
}

export default ProjectCard;
