import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AboutLinks from "../components/AboutLinks";
import Cv from "../components/Cv";
import LanguageText from "../components/LanguageText";
import Codewars from "../components/Codewars";
import ImageBox from "../components/imageBox";

function About() {
  const { darkMode } = useContext(ThemeContext);
  const darkImg = [
    "/assets/svg-imgs/top-view-laptop-dark.svg",
    "/assets/svg-imgs/Innovation-amico-blue.svg",
    "/assets/svg-imgs/programming-amico-dark.svg",
    "/assets/svg-imgs/static-website-cuate-dark.svg",
  ];
  const lightImg = [
    "/assets/svg-imgs/top-view-laptop.svg",
    "/assets/svg-imgs/Innovation-amico-green.svg",
    "/assets/svg-imgs/programming-amico-light.svg",
    "/assets/svg-imgs/static-website-cuate-light.svg",
  ];
  const myPictures = [
    "/assets/photos/outsideMe.jpeg",
    "/assets/photos/meVsLama.jpeg",
    "/assets/photos/krakowMe.jpeg",
  ];

  return (
    <div className="about-container">
      <div className="ab-left">
        <Cv />
        <div
          className={
            darkMode ? "div-dark ab-left-middle" : "div-light ab-left-middle"
          }
        >
          <ImageBox imglink={myPictures} />
        </div>
        <Codewars />
        <AboutLinks />
      </div>
      <div className="ab-right">
        <div
          className={darkMode ? "div-dark ab-right-p" : "div-light ab-right-p"}
        >
          <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <LanguageText
              englishText={<>About Me:</>}
              polishText={<>O mnie:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
            <LanguageText
              englishText={
                <>
                  I&apos;m a London native with an enduring love for technology.
                  From a young age, I immersed myself in building and repairing
                  computers, gaming consoles, and phones, developing my
                  problem-solving skills and deepening my understanding of these
                  devices. The COVID-19 pandemic sparked a new direction for me,
                  leading me to explore programming. It all began with a
                  fascination for Google Ads and the concept of crafting
                  websites. To pursue this newfound passion, I embarked on a
                  transformative journey with Mimo, starting with Python and
                  gradually diving into web development.
                </>
              }
              polishText={
                <>
                  Jestem rodowitym Londyńczykiem z trwałą miłością do
                  technologii. Od młodego wieku zanurzałem się w budowaniu i
                  naprawianiu komputerów, konsol do gier i telefonów, rozwijając
                  umiejętności rozwiązywania problemów oraz pogłębiając moje
                  zrozumienie tych urządzeń. Pandemia COVID-19 skierowała mnie w
                  nowym kierunku, prowadząc mnie do eksploracji programowania.
                  Wszystko zaczęło się od fascynacji Google Ads i koncepcji
                  tworzenia stron internetowych. Aby podążać za tą nowo odkrytą
                  pasją, rozpocząłem przełomową podróż z Mimo, zaczynając od
                  Pythona i stopniowo zagłębiając się w rozwijanie stron
                  internetowych
                </>
              }
            />
          </p>
          <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <LanguageText
              englishText={<>Education and Skills:</>}
              polishText={<>Edukacja i Umiejętności:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
            <LanguageText
              englishText={
                <>
                  I completed my education in London, from Reception to Collage,
                  and my passion for technology led me to embark on a 7-month
                  front-end development bootcamp, where I mastered HTML, CSS,
                  JavaScript, React, and Git. With a hands-on experience
                  encompassing over 8 projects, I&apos;ve become proficient in
                  Git for version control and gained familiarity with design
                  tools such as Figma and Firebase. My specialization lies in
                  crafting responsive, mobile-friendly projects. Currently,
                  I&apos;m actively broadening my skill set by participating in
                  a back-end development bootcamp. This endeavor is helping me
                  acquire expertise in Node.js, Next.js, and PostgreSQL
                </>
              }
              polishText={
                <>
                  Ukończyłem swoją edukację w Londynie, od przedszkola po szkołę
                  średnią, a moja pasja do technologii skłoniła mnie do podjęcia
                  7-miesięcznego bootcampu z zakresu front-end developmentu,
                  gdzie opanowałem HTML, CSS, JavaScript, React oraz Git. Dzięki
                  praktycznym doświadczeniom obejmującym ponad 8 projektów,
                  stałem się biegły w korzystaniu z Gita do kontroli wersji i
                  zaznajomiłem się z narzędziami projektowania takimi jak Figma
                  i Firebase. Moją specjalizacją jest tworzenie responsywnych
                  projektów przyjaznych dla urządzeń mobilnych. Obecnie aktywnie
                  poszerzam swoje umiejętności uczestnicząc w bootcampie z
                  zakresu back-end developmentu. To przedsięwzięcie pomaga mi
                  zdobyć wiedzę z zakresu Node.js, Next.js i PostgreSQL.
                </>
              }
            />
          </p>
          <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <LanguageText
              englishText={<>Language Proficiency:</>}
              polishText={<>Znajomość Języków:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
            <LanguageText
              englishText={
                <>
                  I&apos;m fluent in English, a skill I&apos;ve cultivated
                  during my 18-year residency in London. This proficiency
                  enhances my capacity to convey technical concepts and
                  collaborate effectively within diverse teams.
                </>
              }
              polishText={
                <>
                  Jestem biegły w języku angielskim, umiejętność tę doskonaliłem
                  przez 18 lat pobytu w Londynie. Ta biegłość w języku pomaga mi
                  w przekazywaniu koncepcji technicznych i efektywnej współpracy
                  w zróżnicowanych zespołach.
                </>
              }
            />
          </p>
          <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
            <LanguageText
              englishText={<>Future Goals:</>}
              polishText={<>Przyszłe Cele:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text s-font" : "light-text s-font"}>
            <LanguageText
              englishText={
                <>
                  I&apos;m actively seeking challenging opportunities that will
                  enable me to harness and expand my front-end and back-end
                  development skills. I&apos;m passionate about technology and
                  committed to advancing my career as a junior developer, eager
                  to absorb knowledge and contribute to innovative projects.
                </>
              }
              polishText={
                <>
                  Aktywnie poszukuję wyzwań, które pozwolą mi wykorzystać i
                  rozwijać moje umiejętności w zakresie front-end i back-end
                  developmentu. Jestem zafascynowany technologią i zobowiązany
                  do rozwijania swojej kariery jako Junior programista, gotowy
                  do przyswajania wiedzy i wkładania jej w innowacyjne projekty.
                </>
              }
            />
          </p>
        </div>
        <div className="about-carousel-img">
          <ImageBox imglink={darkMode ? darkImg : lightImg} intervalTime={3500}/>
        </div>
      </div>
    </div>
  );
}

export default About;
