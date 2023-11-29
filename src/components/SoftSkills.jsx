import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SoftSkills() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode ? " div-dark ss-container" : " div-light ss-container"
      }
    >
          <h3>My Soft Skills</h3>
          <ul>
              <li>Communication</li>
              <li>Time Managment</li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
    </div>
  );
}

export default SoftSkills;
