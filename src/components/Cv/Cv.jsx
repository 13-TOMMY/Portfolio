import { useContext } from "react";
import EnglishCv from "../../../public/assets/cv/cv-eng.pdf";
import PolishCv from "../../../public/assets/cv/cv-pl.pdf";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineFindInPage } from "react-icons/md";
import "./Cv.css";

function Cv() {
  const englishCVUrl = EnglishCv;
  const polishCVUrl = PolishCv;

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "div-dark cv-container"
          : "div-light ab-left-bottom cv-container"
      }
    >
      <div className="english-cv">
        <h3 className={darkMode ? "dark-text" : "light-text"}>English Cv</h3>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn cv-btn"
              : "light-text light-btn cv-btn"
          }
        >
          <a
            href="https://drive.google.com/file/d/1ihIHT8sSh7XQtcW77YDX1PlS7JiDcZmp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineFindInPage />
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn-two cv-btn"
              : "light-text light-btn-two cv-btn"
          }
        >
          <a href={englishCVUrl} download>
            <AiOutlineDownload />
          </a>
        </motion.button>
      </div>
      <div className="polish-cv">
        <h3 className={darkMode ? "dark-text" : "light-text"}>Polish Cv</h3>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn cv-btn"
              : "light-text light-btn cv-btn"
          }
        >
          <a
            href="https://drive.google.com/file/d/1iZb5p_xITa3JB604kwkpwsVk_hRpgh-U/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineFindInPage />
          </a>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={
            darkMode
              ? "dark-text dark-btn-two cv-btn"
              : "light-text light-btn-two cv-btn"
          }
        >
          <a href={polishCVUrl} download>
            <AiOutlineDownload />
          </a>
        </motion.button>
      </div>
    </div>
  );
}

export default Cv;
