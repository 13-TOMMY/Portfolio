import React, { useContext } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { LangContext } from "../../context/LangContext";
import "./Footer.css";
import LanguageText from "../LanguageText/LanguageText";

function Footer() {
  const { language } = useContext(LangContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        darkMode ? "div-dark footer-container" : "div-light footer-container"
      }
    >
      <div className="footer">
        <div className="footer-left">
          <p
            className={
              darkMode ? "dark-text p-footer-left" : "light-text p-footer-left"
            }
          >
            <LanguageText
              englishText={<>Thank you for taking the time to view my projects ☺️</>}
              polishText={<>Dziękuję za poświęcenie czasu na obejrzenie moich projektów ☺️</>}
            />
          </p>
        </div>
        <div className="footer-right">
          <p
            className={
              darkMode
                ? "dark-text p-footer-right"
                : "light-text p-footer-right"
            }
          >
            <FaRegCopyright /> Tommy-Portfolio
          </p>
          <p
            className={
              darkMode
                ? "dark-text p-footer-right"
                : "light-text p-footer-right"
            }
          >
            2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
