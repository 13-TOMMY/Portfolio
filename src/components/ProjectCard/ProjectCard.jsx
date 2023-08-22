import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
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
      <h2>{projectName}</h2>
      <p>{projectDescription}</p>
      <div className="pc-btn-container">
        <button>
          <a href={viewlink}>View</a>
        </button>
        <button>
          <a href={visitLink}>Vist</a>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
