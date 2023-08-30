import React from "react";
import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import LanguageText from "../../components/LanguageText/LanguageText";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <ProjectCard
        photo={"/assets/potfolio/re-serve/re-serve-img.jpg"}
        videoLink={"/assets/potfolio/re-serve/re-serve.mp4"}
        projectName={
          <LanguageText
            englishText={<> RE:serve - Simplify Reservations</>}
            polishText={<>RE:serve - Ułatw Rezerwacje</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                RE:serve is a user-friendly web app for effortless restaurant
                and venue table reservations, powered by React, three.js,
                Firebase, and responsive design. IOffering multiple pages for
                exploration with React-router, robust Firebase-based CRUD
                functionality, and comprehensive user authentication.
              </>
            }
            polishText={
              <>
                RE:serve to przyjazna użytkownikom aplikacja internetowa
                umożliwiająca łatwe rezerwacje stolików w restauracjach i
                lokalach, oparta na technologiach React, three.js, Firebase i
                responsywnym projektowaniu. Oferując wiele stron do eksploracj z
                React-router, solidną funkcjonalność CRUD opartą na Firebase
                oraz kompleksową autentykację użytkowników.
              </>
            }
          />
        }
        visitLink={"https://re-serve.netlify.app/"}
        viewlink={"https://cine-trail.netlify.app"}
      />
      <ProjectCard
        photo={"/assets/potfolio/uni-life/uni-life-img.png"}
        videoLink={"/assets/potfolio/uni-life/uni-life.mp4"}
        projectName={
          <LanguageText
            englishText={<>UniLife - Student Accommodation Search</>}
            polishText={<>UniLife - Wyszukiwanie Zakwaterowania Studenckiego</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                UniLife simplifies the process of finding student accommodation.
                Built using React and react-router, this responsive app fetches
                data from an API, offering multiple pages for exploration. It
                demonstrates my proficiency in React, React Router, and API
                integration.
              </>
            }
            polishText={
              <>
                UniLife upraszcza proces poszukiwania zakwaterowania dla
                studentów. Zbudowana przy użyciu React i react-router, ta
                responsywna aplikacja pobiera dane z interfejsu API, oferując
                wiele stron do eksploracji. Demonstrowuje moje umiejętności w
                zakresie React, React Router i integracji z interfejsem API.
              </>
            }
          />
        }
        visitLink={"https://uni-life.netlify.app/"}
        viewlink={"https://github.com/13-TOMMY/Uni-Life"}
      />
      <ProjectCard
        photo={"/assets/potfolio/uni-life/uni-life-img.png"}
        videoLink={"/assets/dark-background.avif"}
        projectName={
          <LanguageText
            englishText={<>Blog - Write Your Story</>}
            polishText={<>Blog - Napisz Swoją Historię</>}
          />
        }
        projectDescription={
          <LanguageText englishText={<>Todo</>} polishText={<>todo</>} />
        }
        visitLink={"https://b10g.netlify.app"}
        viewlink={"https://github.com/13-TOMMY/blog"}
      />
      <ProjectCard
        photo={"/assets/potfolio/fake-store/fake-store-img.png"}
        videoLink={"/assets/potfolio/fake-store/fake-store.mp4"}
        projectName={
          <LanguageText
            englishText={<>Fake store - Seamless Online Shopping</>}
            polishText={<>Fake Store - Bezproblemowe Zakupy Online</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                Fake Store is an immersive shopping web app that provides users
                with a personalized online shopping experience. Developed using
                React, it's a responsive Single Page Application (SPA) crafted
                from a Figma design. This project excels in implementing dynamic
                routing, conditional rendering, and React hooks for efficient
                state management. It also showcases expertise in using fetch to
                retrieve data from an API while demonstrating a deep
                understanding of React fundamentals, including component
                lifecycle, props, state, and event handling.
              </>
            }
            polishText={
              <>
                Fake Store to interaktywna aplikacja zakupowa, oferująca
                spersonalizowane doświadczenie online. Zbudowana w React, to
                responsywna Strona Jednej Strony (SPA). Projekt wyróżnia się
                dynamicznym routingiem, warunkowym renderowaniem i React Hooks
                do efektywnego zarządzania stanem. Pokazuje również umiejętność
                korzystania z fetch do pobierania danych z API, prezentując
                głęboką znajomość podstaw React, takich jak cykl życia
                komponentów, propsy, stan i obsługa zdarzeń.
              </>
            }
          />
        }
        visitLink={"https://fake-store-e.netlify.app"}
        viewlink={"https://github.com/13-TOMMY/Uni-Life"}
      />
      <ProjectCard
        photo={"/assets/potfolio/space-next/space-next-img.png"}
        videoLink={"/assets/potfolio/space-next/space-next.mp4"}
        projectName={
          <LanguageText
            englishText={<>Space Next - Real Time Launches</>}
            polishText={<>Space Next - Starty na Żywo</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                Space Next gives access to upcoming launch details, featuring
                countdowns, voting and interactive maps. This website built
                using CSS, HTML, and JavaScript. We integrated APIs like the
                Rocket Launch API for launch data and the Bing Maps Locations
                API for mapping. Collaboratined with talented individuals,
                Jungwon Jung and Paul Hondl, this project highlighted my skills
                in web development, responsive design, and data integration.
              </>
            }
            polishText={
              <>
                Space Next zapewnia dostęp do szczegółów nadchodzących startów,
                zawierających odliczania, głosowania i interaktywne mapy. Ta
                strona internetowa została stworzona przy użyciu CSS, HTML i
                JavaScript. Zintegrowaliśmy interfejsy API, takie jak Rocket
                Launch API i Bing Maps Locations API. Współpracując z
                utalentowanymi osobami, Jungwon Jung i Paul Hondl, ten projekt
                podkreślił moje umiejętności w zakresie rozwoju stron
                internetowych.
              </>
            }
          />
        }
        visitLink={
          "https://stupendous-mandazi-1fbde3.netlify.app/#info-container"
        }
        viewlink={"https://github.com/jungwonJung/Space-Next"}
      />
      <ProjectCard
        photo={"/assets/potfolio/cine-trail/cine-trail-img.png"}
        videoLink={"/assets/potfolio/cine-trail/cine-trail.mp4"}
        projectName={
          <LanguageText
            englishText={<>Cinetrail - Database of Movies</>}
            polishText={<>Cinetrail - Baza Filmów</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                CineTrail is an engaging React-based website that leverages NPM
                packages and a movie database API to offer users an immersive
                movie experience. Featuring user authentication, it provides a
                personalized environment where users can explore movies, leave
                comments, and interact with the cinematic world.
              </>
            }
            polishText={
              <>
                CineTrail to zaangażowana strona oparta na React, wykorzystująca
                pakiety NPM i bazę danych filmów API, by zapewnić użytkownikom
                wciągające doświadczenie filmowe. Z obsługą autentykacji,
                umożliwia spersonalizowane środowisko, w którym użytkownicy mogą
                odkrywać filmy, zostawiać komentarze i wchodzić w interakcje z
                kinowym światem.
              </>
            }
          />
        }
        visitLink={"https://cine-trail.netlify.app"}
        viewlink={"https://github.com/13-TOMMY/cinetrail"}
      />
    </div>
  );
}

export default Portfolio;
