import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
function LanguageText({ englishText, polishText }) {
  const { language } = useContext(LangContext);
  const textContent = language === "eng" ? polishText: englishText;

  return <p>{textContent}</p>;
}

export default LanguageText;
