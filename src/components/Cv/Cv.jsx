import { useContext } from "react";
import EnglishCv from "../../Assets/cv/cv-eng.pdf";
import PolishCv from "../../Assets/cv/cv-pl.pdf";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineFindInPage } from "react-icons/md";
import "./Cv.css";
import LanguageText from "../LanguageText/LanguageText";

function Cv() {
  const englishCVUrl = EnglishCv;
  const polishCVUrl = PolishCv;

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="cv-container">
      <div
        className={darkMode ? "cv div-dark" : "cv div-light"}
      >
        <h3 className={darkMode ? "dark-text" : "light-text"}>
          <LanguageText
            englishText={<>English CV</>}
            polishText={<>Angielskie CV</>}
          />
        </h3>
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
      <div className={darkMode ? "cv div-dark" : "cv div-light"}>
        <h3 className={darkMode ? "dark-text" : "light-text"}>
        <LanguageText
            englishText={<>Polish CV</>}
            polishText={<>Polskie CV</>}
          />
        </h3>
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
