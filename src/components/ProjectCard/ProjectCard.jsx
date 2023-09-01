import { createRef, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./ProjectCard.css";
import LanguageText from "../LanguageText/LanguageText";

function ProjectCard({
  photo,
  videoLink,
  projectName,
  projectDescription,
  viewlink,
  visitLink,
}) {
  const { darkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = createRef();
  const [width, setWidth] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth < 1024);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

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
      {width ? (
        <img src={photo} className="portfolio-img"/> 
      ) : (
        <video
          ref={videoRef}
          src={videoLink}
          loop
          muted
          onMouseEnter={handleVideoHover}
          onMouseLeave={handleVideoLeave}
          className={isHovered ? "hovered-video" : ""}
        />
      )}
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
          <a href={ visitLink} target="_blank" rel="noopener noreferrer">
          <LanguageText englishText={<>Visit</>} polishText={<>Odwiedz</>} />
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
          <a href={viewlink} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </motion.button>
      </div>
    </div>
  );
}

export default ProjectCard;
