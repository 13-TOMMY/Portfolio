import { useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../context/ThemeContext";
import AboutLinks from "../../components/AboutLinks/AboutLinks";
import Cv from "../../components/Cv/Cv";
import LanguageText from "../../components/LanguageText/LanguageText";
import Codewars from "../../components/Codewars/Codewars";

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="about-container">
      <div className="ab-left">
        <Cv />
        <div
          className={
            darkMode ? "div-dark ab-left-middle" : "div-light ab-left-middle"
          }
        >
          <img
            src="/assets/photos/d93e089e-eee7-46ea-9ff6-3c87830453b0.jpeg"
            alt="Photo of me"
            className="ab-left-middle-img"
          />
        </div>
        <Codewars />
        <AboutLinks />
      </div>
      <div className="ab-right">
        <div
          className={darkMode ? "div-dark ab-right-p" : "div-light ab-right-p"}
        >
          <h3 className={darkMode ? "dark-text" : "light-text"}>
            <LanguageText
              englishText={<>About Me:</>}
              polishText={<>O mnie:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
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
          <h3 className={darkMode ? "dark-text" : "light-text"}>
            <LanguageText
              englishText={<>Education and Skills:</>}
              polishText={<>Edukacja i Umiejętności:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
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
          <h3 className={darkMode ? "dark-text" : "light-text"}>
            <LanguageText
              englishText={<>Language Proficiency:</>}
              polishText={<>Znajomość Języków:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
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
          <h3 className={darkMode ? "dark-text" : "light-text"}>
            <LanguageText
              englishText={<>Future Goals:</>}
              polishText={<>Przyszłe Cele:</>}
            />
          </h3>
          <p className={darkMode ? "dark-text" : "light-text"}>
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
      </div>
    </div>
  );
}

export default About;
