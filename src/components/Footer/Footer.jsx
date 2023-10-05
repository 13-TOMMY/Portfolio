import React, { useContext } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { LangContext } from "../../context/LangContext";
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
              darkMode
                ? "dark-text p-footer-left s-font"
                : "light-text p-footer-left s-font"
            }
          >
            <LanguageText
              englishText={
                <>Thank you for taking the time to view my projects ☺️</>
              }
              polishText={
                <>
                  Dziękuję za poświęcenie czasu na obejrzenie moich projektów ☺️
                </>
              }
            />
          </p>
        </div>
        <div className="footer-right">
          <FaRegCopyright className={
              darkMode
                ? "dark-text s-font"
                : "light-text s-font"
            }/>
          <p
            className={
              darkMode
                ? "dark-text p-footer-right s-font"
                : "light-text p-footer-right s-font"
            }
          >
            {" "}
            TOMMY-PORTFOLIO
          </p>

          <p
            className={
              darkMode
                ? "dark-text p-footer-right s-font"
                : "light-text p-footer-right s-font"
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
