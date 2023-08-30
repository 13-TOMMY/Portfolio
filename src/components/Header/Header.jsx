import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import {
  BiHomeAlt2,
  BiUser,
  BiLibrary,
  BiPaperPlane,
  BiSun,
  BiMoon,
  BiSolidMoon,
} from "react-icons/bi";
import Switch from "react-switch";
import { ThemeContext } from "../../context/ThemeContext";
import { LangContext } from "../../context/LangContext";

function NavBar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LangContext);
  const location = useLocation();
  const handleDarkChange = (isChecked) => {
    setDarkMode(isChecked);
  };

  const isHomepage = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isPortfolio = location.pathname === "/portfolio";
  const isContact = location.pathname === "/contact";

  return (
    <div
      className={
        darkMode ? "div-dark nav-container" : "div-light nav-container"
      }
    >
      <div className="top-icon-container">
        <div className="nb-icon-links">
          <Link to="/">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={
                darkMode
                  ? `icon ${isHomepage ? "selected-dark" : "dark-text"}`
                  : `icon ${isHomepage ? "selected-light" : "light-text"}`
              }
            >
              <BiHomeAlt2 />
            </motion.div>
          </Link>
          <Link to="/about">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={
                darkMode
                  ? `icon ${isAbout ? "selected-dark" : "dark-text"}`
                  : `icon ${isAbout ? "selected-light" : "light-text"}`
              }
            >
              <BiUser />
            </motion.div>
          </Link>
          <Link to="/portfolio">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={
                darkMode
                  ? `icon ${isPortfolio ? "selected-dark" : "dark-text"}`
                  : `icon ${isPortfolio ? "selected-light" : "light-text"}`
              }
            >
              <BiLibrary />
            </motion.div>
          </Link>
          <Link to="/contact">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={
                darkMode
                  ? `icon ${isContact ? "selected-dark" : "dark-text"}`
                  : `icon ${isContact ? "selected-light" : "light-text"}`
              }
            >
              <BiPaperPlane />
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="bottom-icon-container">
        <div className="dark-light-mode">
          <label htmlFor="material-switch">
            <Switch
              checked={darkMode}
              onChange={handleDarkChange}
              handleDiameter={28}
              offColor="#FFFFFF"
              onColor="#FFFFFF"
              offHandleColor="#FF5733"
              onHandleColor="#1CB2CC"
              height={40}
              width={70}
              borderRadius={12}
              activeBoxShadow="0px 0px 1px 2px #212121"
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 16,
                    color: "grey",
                    paddingRight: 2,
                    transform: "rotate(-90deg)",
                  }}
                >
                  <BiMoon />
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 16,
                    color: "gray",
                    paddingRight: 2,
                  }}
                >
                  <BiSun />
                </div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "White",
                    fontSize: 18,
                  }}
                >
                  <BiSun />
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "White",
                    fontSize: 18,
                    transform: "rotate(-90deg)",
                  }}
                >
                  <BiSolidMoon />
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </label>
        </div>
        <div className="language-mode">
          <label htmlFor="material-switch">
            <Switch
              checked={language === 'pl'}
              onChange={toggleLanguage}
              handleDiameter={28}
              offColor="#FFFFFF"
              onColor="#FFFFFF"
              offHandleColor="#FF5733"
              onHandleColor="#1CB2CC"
              height={40}
              width={70}
              borderRadius={12}
              activeBoxShadow="0px 0px 1px 2px #212121"
              uncheckedIcon={
                <div
                  className="rotate-switch"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 14,
                    color: "grey",
                    textAlign: "center",
                  }}
                >
                  <p>Eng</p>
                </div>
              }
              checkedIcon={
                <div
                className="rotate-switch"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 14,
                    color: "gray",
                    textAlign: "center",
                  }}
                >
                  <p>Pl</p>
                </div>
              }
              uncheckedHandleIcon={
                <div
                className="rotate-switch"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "White",
                    fontSize: 16,
                  }}
                >
                  <p>🇵🇱</p>
                </div>
              }
              checkedHandleIcon={
                <div
                className="rotate-switch"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "White",
                    fontSize: 16,
                  }}
                >
                  <p>🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </label>
        </div>
        <img src="/assets/tommy-logo.svg" alt="Logo: TOMMY" />
      </div>
    </div>
  );
}

export default NavBar;
