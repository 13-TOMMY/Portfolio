import React, { useContext } from "react";
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

function TechIcons({ techArr }) {
  const { darkMode } = useContext(ThemeContext);

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
      {techArr.map((tech, index) => (
        <div
          key={index}
          className={darkMode ? "dark-text m-font" : "light-text m-font"}
        >
          {techIconMap[tech.toLowerCase()] || techIconMap.default}
        </div>
      ))}
    </div>
  );
}

export default TechIcons;
