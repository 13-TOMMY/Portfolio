import ProjectCard from "../components/ProjectCard";
import LanguageText from "../components/LanguageText";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Portfolio() {
  const { darkMode } = useContext(ThemeContext);

  const projects = [
    {
      index: 1,
      photo: "/assets/potfolio/fox-remonty/fox-remonty.png",
      video: "/assets/potfolio/fox-remonty/fox-remonty.mp4",
      name: {
        englishText: <>Fox Remonty</>,
        polishText: <>Fox Remonty</>,
      },
      description: {
        englishText: (
          <>
            Fox Remonty, my debut freelance project, serves a construction
            company by delivering extensive client information. Crafted as a
            responsive single-page application (SPA) using Vite, the design
            process was guided by Figma and Canva. Explore the project's
            innovative features and design details.
          </>
        ),
        polishText: (
          <>
            Fox Remonty, mój debiutancki projekt freelancerski, obsługuje firmę
            budowlaną, dostarczając obszerne informacje klientowi. Stworzony
            jako responsywna aplikacja jednostronowa (SPA) przy użyciu narzędzia
            Vite, proces projektowania był prowadzony przy użyciu narzędzi Figma
            i Canva. Zapraszam do odkrywania innowacyjnych funkcji i szczegółów
            projektu.
          </>
        ),
      },
      techStack: ["React", "TypeScript", "SCSS", "NPM", "Vite"],
      visit: "https://fox-remonty.com/",
      view: "https://github.com/13-TOMMY/fox-remonty",
    },
    {
      index: 8,
      photo: "/assets/potfolio/portoflio/portoflio.png",
      video: "/assets/potfolio/portfolio/portoflio.mp4",
      name: {
        englishText: <>Tommy Portfolio</>,
        polishText: <>Tommy Portfolio</>,
      },
      description: {
        englishText: (
          <>
            The design on the website you are currently viewing was made with
            figma. Many pages served as the source of inspiration for the
            website's style. This website is continuously improving. You can
            look at my projects, get in touch with me, and learn more about me.
          </>
        ),
        polishText: (
          <>
            Projekt strony internetowej, którą właśnie przeglądasz, został
            wykonany w programie Figma. Wiele stron posłużyło jako źródło
            inspiracji dla stylu strony. Ta strona jest stale ulepszana. Możesz
            obejrzeć moje projekty, skontaktować się ze mną i dowiedzieć się
            więcej o mnie.
          </>
        ),
      },
      techStack: ["React", "JavaScript", "SCSS", "NPM", "Vite"],
      visit: "https://tommy-portfolio.dev/",
      view: "https://github.com/13-TOMMY/Portfolio",
    },
    {
      index: 2,
      photo: "/assets/potfolio/re-serve/re-serve-img.jpg",
      video: "/assets/potfolio/re-serve/re-serve.mp4",
      name: {
        englishText: <>RE:serve</>,
        polishText: <>RE:serve</>,
      },
      description: {
        englishText: (
          <>
            The project is still in progress. RE:serve is an easy to use web app
            that facilitates restaurant table reservations. React-router
            provides a seamless single-page application (SPA) experience by
            incorporating robust Firebase-based CRUD functionality and extensive
            user authentication for a streamlined reservation process.
          </>
        ),
        polishText: (
          <>
            Projekt jest wciąż w trakcie realizacji. RE:serve to łatwa w użyciu
            aplikacja internetowa ułatwiająca rezerwacje stolików w
            restauracjach. React-router zapewnia płynne doświadczenie aplikacji
            jednostronicowej (SPA), integrując solidną funkcjonalność CRUD
            opartą na Firebase oraz obszerną autentykację użytkownika, co
            sprawia, że proces rezerwacji jest przejrzysty i zoptymalizowany.
          </>
        ),
      },
      techStack: ["React", "JavaScript", "CSS", "NPM", "Vite", "Firebase"],
      visit: "https://uni-life.netlify.app/",
      view: "https://github.com/13-TOMMY/Uni-Life",
    },
    {
      index: 3,
      photo: "/assets/potfolio/uni-life/uni-life-img.png",
      video: "/assets/potfolio/uni-life/uni-life.mp4",
      name: {
        englishText: <>UniLife</>,
        polishText: <>UniLife</>,
      },
      description: {
        englishText: (
          <>
            UniLife simplifies the student housing discovery process by
            leveraging React and react-router for a responsive experience. This
            Single Page Application (SPA) integrates seamlessly with an API and
            provides various pages for exploring and finding the ideal rental.
            Filtering makes it simple to display what you like.
          </>
        ),
        polishText: (
          <>
            UniLife upraszcza proces odkrywania mieszkań dla studentów,
            wykorzystując React i react-router dla responsywnego doświadczenia.
            Ta aplikacja jednostronicowa (SPA) doskonale integruje się z
            interfejsem API, oferując różne strony do eksploracji i znalezienia
            idealnego wynajmu. Dzięki funkcji filtrowania łatwo można wyświetlać
            to, co cię interesuje.
          </>
        ),
      },
      techStack: ["React", "JavaScript", "CSS", "NPM", "Vite", "API"],
      visit: "https://uni-life.netlify.app/",
      view: "https://github.com/13-TOMMY/Uni-Life",
    },
    {
      index: 4,
      photo: "/assets/potfolio/blog/blog-img.png",
      video: "/assets/potfolio/blog/blog.mp4",
      name: {
        englishText: <>Blog</>,
        polishText: <>Blog</>,
      },
      description: {
        englishText: (
          <>
            The Blog web application allows users to easily create, share, and
            interact with articles. The app utilises Firebase to provide robust
            CRUD functionality, allowing users to write, read, edit, and delete
            articles. Engage further by commenting on and liking articles,
            building a dynamic and interactive platform for content sharing.
          </>
        ),
        polishText: (
          <>
            Aplikacja internetowa Blog umożliwia użytkownikom łatwe tworzenie,
            udostępnianie i interakcję z artykułami. Aplikacja wykorzystuje
            Firebase, aby dostarczyć solidną funkcjonalność CRUD, umożliwiając
            użytkownikom pisanie, czytanie, edytowanie i usuwanie artykułów.
            Zaangażuj się jeszcze bardziej, dodając komentarze i polubienia
            artykułów, tworząc dynamiczną i interaktywną platformę do dzielenia
            się treściami.
          </>
        ),
      },
      techStack: ["React", "JavaScript", "CSS", "NPM", "Vite", "Firebase"],
      visit: "https://b10g.netlify.app",
      view: "https://github.com/13-TOMMY/blog",
    },
    {
      index: 5,
      photo: "/assets/potfolio/fake-store/fake-store-img.png",
      video: "/assets/potfolio/fake-store/fake-store.mp4",
      name: {
        englishText: <>Fake store</>,
        polishText: <>Fake Store</>,
      },
      description: {
        englishText: (
          <>
            Fake Store, a web app designed for personalised online shopping,
            immerses you in its world. Browse a wide range of products, save
            your favourites, and then proceed to checkout when you've made your
            decision. Take advantage of a user-friendly interface that improves
            your online shopping experience.
          </>
        ),
        polishText: (
          <>
            Fake Store, aplikacja internetowa zaprojektowana do
            spersonalizowanych zakupów online, zanurza Cię w swoim świecie.
            Przeglądaj szeroką gamę produktów, zapisuj ulubione, a następnie
            przejdź do procesu zamówienia, gdy już podjąłeś decyzję. Skorzystaj
            z przyjaznego interfejsu, który poprawia Twoje doświadczenie zakupów
            online.
          </>
        ),
      },
      techStack: ["React", "JavaScript", "CSS", "NPM", "Vite", "API"],
      visit: "https://fake-store-e.netlify.app",
      view: "https://github.com/13-TOMMY/fakeStore-eCommerce",
    },
    {
      index: 6,
      photo: "/assets/potfolio/space-next/space-next-img.png",
      video: "/assets/potfolio/space-next/space-next.mp4",
      name: {
        englishText: <>Space Next</>,
        polishText: <>Space Next</>,
      },
      description: {
        englishText: (
          <>
            Explore the cosmos with Space Next, a website that provides
            information on upcoming launches, including countdowns, voting, and
            interactive maps. We integrated APIs such as Rocket Launch for
            launch data and Bing Maps Locations for mapping seamlessly. This
            project, which I worked on with talented individuals Jungwon Jung
            and Paul Hondl, showcases my expertise in web development,
            responsive design, and data integration.
          </>
        ),
        polishText: (
          <>
            Odkrywaj kosmos z Space Next, stroną internetową dostarczającą
            informacji o nadchodzących startach, w tym odliczaniach,
            głosowaniach i interaktywnych mapach. Zintegrowaliśmy interfejsy
            API, takie jak Rocket Launch dla danych o startach i Bing Maps
            Locations do mapowania. Ten projekt, nad którym pracowałem z osobami
            - Jungwon i Paul, prezentuje moje umiejętności w tworzenia stron,
            responsywnego projektowania i integracji danych.
          </>
        ),
      },
      techStack: ["JavaScript", "CSS", "HTML", "API"],
      visit: "https://stupendous-mandazi-1fbde3.netlify.app/#info-container",
      view: "https://github.com/jungwonJung/Space-Next",
    },
    {
      index: 7,
      photo: "/assets/potfolio/cine-trail/cine-trail-img.png",
      video: "/assets/potfolio/cine-trail/cine-trail.mp4",
      name: {
        englishText: <>Cinetrail</>,
        polishText: <>Cinetrail</>,
      },
      description: {
        englishText: (
          <>
            Immerse yourself in the world of cinema with CineTrail, a
            captivating React-based website that includes NPM packages and a
            movie database API. CineTrail, with its seamless user
            authentication, creates a personalised environment for users to
            explore, discover, and interact within the immersive world of
            cinema."
          </>
        ),
        polishText: (
          <>
            Zanurz się w świecie kina z CineTrail, fascynującą stroną
            internetową opartą na React, zawierającą paczki NPM oraz interfejs
            API bazodanowy filmów. CineTrail, dzięki płynnej autentykacji
            użytkownika, tworzy spersonalizowane środowisko, które pozwala
            użytkownikom eksplorować, odkrywać i interweniować w fascynującym
            świecie kina.
          </>
        ),
      },
      techStack: ["React", "JavaScript", "CSS", "NPM", "Vite", "API"],
      visit: "https://cine-trail.netlify.app",
      view: "https://github.com/13-TOMMY/cinetrail",
    },
  ];
  return (
    <div className="portfolio-container">
      <div
        className={
          darkMode
            ? " div-dark portfolio-header"
            : " div-light portfolio-header"
        }
      >
        <h3 className={darkMode ? "dark-text m-font" : "light-text m-font"}>
          <LanguageText
            englishText={<>Play video on hover</>}
            polishText={<>Odtwarzanie wideo po najechaniu</>}
          />
        </h3>
      </div>
      <div className="portfolio-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            photo={project.photo}
            videoLink={project.video}
            projectName={
              <LanguageText
                englishText={project.name?.englishText}
                polishText={project.name?.polishText}
              />
            }
            projectDescription={
              <LanguageText
                englishText={project.description?.englishText}
                polishText={project.description?.polishText}
              />
            }
            techStack={project.techStack}
            visitLink={project.visit}
            viewlink={project.view}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
