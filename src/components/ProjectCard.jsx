import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import LanguageText from "./LanguageText";
import Lottie from "lottie-react";
import orangeLoading from "../Assets/lottie/loading /orange-ball-loading.json";
import TechIcons from "./TechIcons";

function ProjectCard({
  photo,
  videoLink,
  projectName,
  projectDescription,
  techStack,
  viewlink,
  visitLink,
}) {
  const { darkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef();
  const imgRef = useRef();
  const [width, setWidth] = useState(window.innerWidth < 1024);
  const [loading, setLoading] = useState(false);

  const handleImgLoad = () => {
    if (imgRef.current.complete) {
      setLoading(false);
    }
  };
  
  const handleVideoLoad = () => {
    if (videoRef.current.readyState >= 2) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [])
  
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
        loading ? (
          <Lottie animationData={orangeLoading} loop={true} className="portfolio-video"/>
        ) : (
          <img
            src={photo}
            ref={imgRef}
            className="portfolio-img"
            loading="lazy"
            onLoad={handleImgLoad}
          />
        )
      ) : loading ? (
        <Lottie animationData={orangeLoading} loop={true} className="portfolio-video"/>
      ) : (
        <video
          ref={videoRef}
          src={videoLink}
          loop
          muted
          onMouseEnter={handleVideoHover}
          onMouseLeave={handleVideoLeave}
          onLoadedData={handleVideoLoad}
          className={
            isHovered ? "hovered-video portfolio-video" : "portfolio-video"
          }
          loading="lazy"
        />
      )}
      <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
        {projectName}
      </h3>
      <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
        {projectDescription}
      </p>
      <TechIcons techArr={techStack} className="tech-icons-hover"/>
      <div className="pc-btn-container">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn pc-btn m-font rgb-border"
              : "light-text light-btn pc-btn m-font rgb-border"
          }
        >
          <a href={visitLink} target="_blank" rel="noopener noreferrer">
            <LanguageText englishText={<>Visit</>} polishText={<>Odwiedz</>} />
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={
            darkMode
              ? "dark-text dark-btn-two pc-btn m-font rgb-border"
              : "light-text light-btn-two pc-btn m-font rgb-border"
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
