import React, { useContext, useState } from "react";
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaSass,
  FaNpm,
} from "react-icons/fa6";
import {
  TbApi,
  TbBrandFirebase,
  TbBrandVite,
  TbBrandTypescript,
} from "react-icons/tb";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import LanguageText from "./LanguageText";

function TechIcons({ techArr }) {
  const { darkMode } = useContext(ThemeContext);
  const [title, setTitle] = useState("");

  const techIconMap = {
    react: <FaReact />,
    javascript: <FaJs />,
    typescript: <TbBrandTypescript />,
    html: <FaHtml5 />,
    scss: <FaSass />,
    css: <FaCss3Alt />,
    npm: <FaNpm />,
    api: <TbApi />,
    firebase: <TbBrandFirebase />,
    vite: <TbBrandVite />,
    git: <FaGitAlt />,
  };

  return (
    <div className="tech-icons-container">
      <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
        {title || <LanguageText englishText={"Built Using"} polishText={"Zbudowane Używając"} />}
      </h3>
      <div className="tech-icons">
        {techArr.map((tech, index) => (
          <motion.div
          whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onMouseEnter={() => setTitle(`${tech}`)}
            onMouseLeave={() => setTitle("")}
            key={index}
            className={darkMode ? "dark-text m-font" : "light-text m-font"}
          >
            {techIconMap[tech.toLowerCase()] || techIconMap.default}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechIcons;
