import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import TechStack from "../components/TechStack";
import LanguageText from "../components/LanguageText";
import SocialMediaConnections from "../components/SocialMediaConnections";
import Lottie from "lottie-react";
import desktop from "../Assets/lottie/desk/desk-prgramming.json";

function Homepage() {
  const { darkMode } = useContext(ThemeContext);
  const lottieRef = useRef(null);
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
                  Hello, fellow tech enthusiasts! I&apos;m Tomasz Lis, a
                  Krakow-based Front-end Developer with a passion for code and
                  continuous learning. Driven by my insatiable curiosity,
                  I&apos;m on a journey to become a Full-stack Developer,
                  crafting user-centric interfaces that blend technology and
                  human interaction seamlessly. Join me on this path of
                  innovation as we push the boundaries of digital experiences.
                </>
              }
              polishText={
                <>
                  Hello, miłośnicy technologii! Jestem Tomasz Lis, Front-end
                  Developer z Krakowa z pasją do kodowania i ciągłego uczenia
                  się. Jestem napędzany nienasyconą ciekawością i planuję zostać
                  Full-stack Developerem. Tworzę interfejsy użytkownika
                  ukierunkowane na użytkownika, które łączą technologię i
                  interakcję człowieka w bezproblemowy sposób. Dołącz do mnie w
                  tej podróży innowacji, gdy przesuwamy granice doświadczeń
                  cyfrowych.
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
            src="/assets/photos/outsideMe.jpeg"
            alt="Photo of me"
            className="hp-top-right-img"
            loading="lazy"
          />
        </div>
      </div>
      <div className="hp-bottom">
        <TechStack />
        <div className="hp-bottom-img-links">
          <Lottie
            animationData={desktop}
            loop={true}
            lottieRef={lottieRef}
            onComplete={() => {
              // lottieRef.current.goToAndPlay(100, false);
              lottieRef.current.setSpeed(0.5);
            }}
          />
          <SocialMediaConnections />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
