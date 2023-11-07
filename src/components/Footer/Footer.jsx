import React, { useContext } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { LangContext } from "../../context/LangContext";
import LanguageText from "../LanguageText/LanguageText";

function Footer() {
  const { language } = useContext(LangContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="footer-container">
      <div className={darkMode ? "div-dark footer" : "div-light footer"}>
        <div className="footer-left">
          <p
            className={
              darkMode
                ? "dark-text p-footer-left s-font"
                : "light-text p-footer-left s-font"
            }
          >
            <LanguageText
              englishText={<>Thank you ☺️</>}
              polishText={<>Dziękuję ☺️</>}
            />
          </p>
        </div>
        <div className="footer-right">
          <p
            className={
              darkMode
                ? "dark-text p-footer-right s-font"
                : "light-text p-footer-right s-font"
            }
          >
            TOMMY-PORTFOLIO 2K23
          </p>
          <FaRegCopyright
            className={darkMode ? "dark-text s-font" : "light-text s-font"}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
