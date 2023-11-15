import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import TechStack from "../components/TechStack";
import LanguageText from "../components/LanguageText";
import ImageBox from "../components/imageBox";
import SocialMediaConnections from "../components/SocialMediaConnections";

function Homepage() {
  const { darkMode } = useContext(ThemeContext);

  // const imgLink =

  const darkImg = ["/assets/svg-imgs/top-view-laptop-dark.svg", "/assets/svg-imgs/Innovation-amico-blue.svg", "/assets/svg-imgs/programming-amico-dark.svg", "/assets/svg-imgs/static-website-cuate-dark.svg"];
  const lightImg = ["/assets/svg-imgs/top-view-laptop.svg", "/assets/svg-imgs/Innovation-amico-green.svg", "/assets/svg-imgs/programming-amico-light.svg", "/assets/svg-imgs/static-website-cuate-light.svg"];

  return (
    <div className="Homepage-container">
      <div className="hp-top">
        <div
          className={
            darkMode ? "div-dark hp-top-left" : "div-light hp-top-left"
          }
        >
          <h1 className={darkMode ? "dark-text l-font" : "light-text l-font"}>
            Front-end Developer
          </h1>
          <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
            <LanguageText
              englishText={
                <>
                  Hello! I&apos;m Tomasz Lis, a Krakow-based Front-end
                  Developer. My world revolves around code and continuous
                  learning. Currently, I&apos;m on a journey to become a Full
                  Stack Developer, driven by my passion for pushing boundaries.
                  Coding isn&apos;t just my job; it&apos;s a daily source of
                  inspiration for me, fuelling my growth.
                </>
              }
              polishText={
                <>
                  Cześć! Jestem Tomasz Lis, Front-end Developer z Krakowa. Moje
                  życie kręci się wokół kodu i nieustannej nauki. Obecnie dążę
                  do zostania Deweloperem Full Stack, kierując się pasją do
                  przekraczania własnych ograniczeń. Programowanie to nie tylko
                  moja praca; to codzienne źródło inspiracji, które napędza mój
                  rozwój.
                </>
              }
            />
          </p>
        </div>
        <div
          className={
            darkMode ? "div-dark hp-top-right" : "div-light hp-top-right"
          }
        >
          <img
            src="/assets/photos/IMG_8014.jpeg"
            alt="Photo of me"
            className="hp-top-right-img"
            loading="lazy"
          />
        </div>
      </div>
      <div className="hp-bottom">
        <TechStack />
        <div className="hp-bottom-img-links">
          <ImageBox
            imglink={
              darkMode
                ? darkImg
                : lightImg
            }
          />
          <SocialMediaConnections />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
