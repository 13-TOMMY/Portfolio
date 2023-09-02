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
                Firebase, and responsive design. It offers a single-page
                application (SPA) experience with React-router for seamless
                navigation, robust Firebase-based CRUD functionality, and
                comprehensive user authentication.
              </>
            }
            polishText={
              <>
                RE:serve to przyjazna dla użytkownika aplikacja webowa
                umożliwiająca łatwe rezerwacje stolików w restauracjach i
                lokalach, zasilana przez React, three.js, Firebase oraz
                responsywny design. Zapewnia wiele stron do eksploracji dzięki
                React-router, solidne funkcje CRUD oparte na Firebase oraz
                kompleksową autentykację użytkownika. Jest to aplikacja typu
                Single Page Application (SPA).
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
                UniLife streamlines the process of discovering student housing.
                Crafted with React and react-router, this responsive application
                retrieves data from an API, providing an array of pages for
                exploration. It showcases my expertise in React, React Router,
                and seamless API integration. This is a Single Page Application
                (SPA).
              </>
            }
            polishText={
              <>
                UniLife upraszcza proces poszukiwania zakwaterowania dla
                studentów. Stworzona przy użyciu React i react-router,
                responsywna aplikacja pobiera dane z API, oferując wiele stron
                do eksploracji. Prezentuje moją wiedzę w zakresie React, React
                Router oraz płynnej integracji z API. To jest aplikacja typu
                Single Page Application (SPA).
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
            englishText={<>Fake store - Online Shopping</>}
            polishText={<>Fake Store -  Zakupy Online</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                Fake Store is an immersive shopping web app that offers users a
                personalized online shopping experience. Built using React,
                it&apos;s a responsive Single Page Application (SPA) crafted
                based on a Figma design. This project excels in implementing
                dynamic routing, conditional rendering, and efficient state
                management using React hooks. It also demonstrates
                fetching data from an API.
              </>
            }
            polishText={
              <>
                Fake Store to immersyjna aplikacja internetowa do zakupów, która
                zapewnia użytkownikom spersonalizowane doświadczenie zakupowe
                online. Zbudowana przy użyciu React, to responsywna aplikacja
                typu Single Page Application (SPA), stworzona na podstawie
                projektu z Figma. Ten projekt wyróżnia się w implementacji
                dynamicznego routingu, warunkowego renderowania oraz użyciu
                React hooks. Ponadto, prezentuje pobierania danych z
                API.
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
                CineTrail is an engaging website based on React that utilizes
                NPM packages and a movie database API to deliver an immersive
                movie-watching experience to users. With built-in user
                authentication, it offers a personalized environment where users
                can discover movies, leave comments, and interact with the world
                of cinema.
              </>
            }
            polishText={
              <>
                CineTrail to atrakcyjna strona internetowa oparta na React,
                wykorzystująca pakiety NPM i bazę danych filmów API, aby
                zapewnić użytkownikom immersyjne doświadczenia związane z
                oglądaniem filmów. Dzięki wbudowanej autentykacji użytkowników,
                oferuje spersonalizowane środowisko, w którym użytkownicy mogą
                odkrywać filmy, zostawiać komentarze i interakcjonować z światem
                kina.
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
