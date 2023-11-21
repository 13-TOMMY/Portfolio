import ProjectCard from "../components/ProjectCard";
import LanguageText from "../components/LanguageText";

function Portfolio() {
  //preperation for dynamic elements
  // need to comment this so i can commit it as a develop branch no to break current
  const projects = [
    {
      index: 1,
      photo: "/assets/potfolio/fox-remonty/fox-remonty.png",
      video: "/assets/potfolio/fox-remonty/fox-remonty.mp4",
      name: {
        englishText: <>Fox Remonty - Construction Company</>,
        polishText: <>Fox Remonty - Firmy Budowlanej</>,
      },
      description: {
        englishText: (
          <>
            Fox Remonty represents my first freelance project, developed for a
            construction company aiming to provide comprehensive information to
            prospective clients. This application was crafted using cutting-edge
            technologies, including REACT, TypeScript, SCSS, and extensive NPM
            packages to ensure responsiveness. For the development of this
            single-page application (SPA) website, I leveraged Vite, while Figma
            and Canva served as my design tools.
          </>
        ),
        polishText: (
          <>
            Fox Remonty to mój pierwszy niezależny projekt, opracowany dla firmy
            budowlanej, mający na celu dostarczenie informacji potencjalnym
            klientom. Ta aplikacja została stworzona przy użyciu
            najnowocześniejszych technologii, w tym REACT, TypeScript, SCSS i
            rozbudowane pakiety NPM w celu zapewnienia responsywności. Dla do
            stworzenia tej jednostronicowej aplikacji (SPA) wykorzystałem
            wykorzystałem Vite, a Figma i Canva posłużyły mi jako narzędzia
            projektowe.
          </>
        ),
      },
      visit: "https://fox-remonty.com/",
      view: "https://github.com/13-TOMMY/fox-remonty",
    },
    {
      index: 2,
      photo: "/assets/potfolio/re-serve/re-serve-img.jpg",
      video: "/assets/potfolio/re-serve/re-serve.mp4",
      name: {
        englishText: <>RE:serve - Simplify Reservations</>,
        polishText: <>RE:serve - Ułatw Rezerwacje</>,
      },
      description: {
        englishText: (
          <>
            Website in Progress. RE:serve is a user-friendly web app for
            effortless restaurant and venue table reservations, powered by
            React, three.js, Firebase, and responsive design. It offers a
            single-page application (SPA) experience with React-router for
            seamless navigation, robust Firebase-based CRUD functionality, and
            comprehensive user authentication.
          </>
        ),
        polishText: (
          <>
            Strona w trakcie realizacji. RE:serve to przyjazna dla użytkownika
            aplikacja webowa umożliwiająca łatwe rezerwacje stolików w
            restauracjach i lokalach, zasilana przez React, three.js, Firebase
            oraz responsywny design. Zapewnia wiele stron do eksploracji dzięki
            React-router, solidne funkcje CRUD oparte na Firebase oraz
            kompleksową autentykację użytkownika. Jest to aplikacja typu Single
            Page Application (SPA).
          </>
        ),
      },
      visit: "https://uni-life.netlify.app/",
      view: "https://github.com/13-TOMMY/Uni-Life",
    },
    {
      index: 3,
      photo: "/assets/potfolio/uni-life/uni-life-img.png",
      videoLink: "/assets/potfolio/uni-life/uni-life.mp4",
      projectName: {
        englishText: <>UniLife - Student Accommodation Search</>,
        polishText: <>UniLife - Wyszukiwanie Zakwaterowania Studenckiego</>,
      },
      projectDescription: {
        englishText: (
          <>
            UniLife streamlines the process of discovering student housing.
            Crafted with React and react-router, this responsive application
            retrieves data from an API, providing an array of pages for
            exploration. It showcases my expertise in React, React Router, and
            seamless API integration. This is a Single Page Application (SPA).
          </>
        ),
        polishText: (
          <>
            UniLife upraszcza proces poszukiwania zakwaterowania dla studentów.
            Stworzona przy użyciu React i react-router, responsywna aplikacja
            pobiera dane z API, oferując wiele stron do eksploracji. Prezentuje
            moją wiedzę w zakresie React, React Router oraz płynnej integracji z
            API. To jest aplikacja typu Single Page Application (SPA).
          </>
        ),
      },
      visitLink: "https://uni-life.netlify.app/",
      viewlink: "https://github.com/13-TOMMY/Uni-Life",
    },
    {
      index: 4,
      photo: "/assets/potfolio/blog/blog-img.png",
      videoLink: "/assets/potfolio/blog/blog.mp4",
      projectName: {
        englishText: <>Blog - Write Your Story</>,
        polishText: <>Blog - Napisz Swoją Historię</>,
      },
      projectDescription: {
        englishText: (
          <>
            Blog It is a single-page application (SPA) built using React, Firebase,
            JavaScript, and CSS. It offers users the ability to create accounts and
            share engaging articles. Visitors can not only read these articles but
            also interact by liking and commenting, creating a dynamic and engaging
            platform for sharing and discussing ideas.
          </>
        ),
        polishText: (
          <>
            Blog It to jednostronicowa aplikacja (SPA) stworzona przy użyciu React,
            Firebase, JavaScript i CSS. Umożliwia użytkownikom tworzenie kont i
            udostępnianie interesujących artykułów. Odwiedzający mogą nie tylko
            czytać te artykuły, ale także interagować, lajkować i komentować,
            tworząc dynamiczną i angażującą platformę do dzielenia się i dyskutowania
            na temat pomysłów.
          </>
        ),
      },
      visitLink: "https://b10g.netlify.app",
      viewlink: "https://github.com/13-TOMMY/blog",
    },
    {
      index: 5,
      photo: "/assets/potfolio/fake-store/fake-store-img.png",
      videoLink: "/assets/potfolio/fake-store/fake-store.mp4",
      projectName: {
        englishText: <>Fake store - Online Shopping</>,
        polishText: <>Fake Store - Zakupy Online</>,
      },
      projectDescription: {
        englishText: (
          <>
            Fake Store is an immersive shopping web app that offers users a
            personalized online shopping experience. Built using React, it's a
            responsive Single Page Application (SPA) crafted based on a Figma design.
            This project excels in implementing dynamic routing, conditional
            rendering, and efficient state management using React hooks. It also
            demonstrates fetching data from an API.
          </>
        ),
        polishText: (
          <>
            Fake Store to immersyjna aplikacja internetowa do zakupów, która
            zapewnia użytkownikom spersonalizowane doświadczenie zakupowe online.
            Zbudowana przy użyciu React, to responsywna aplikacja typu Single Page
            Application (SPA), stworzona na podstawie projektu z Figma. Ten projekt
            wyróżnia się w implementacji dynamicznego routingu, warunkowego
            renderowania oraz użyciu React hooks. Ponadto, prezentuje pobierania
            danych z API.
          </>
        ),
      },
      visitLink: "https://fake-store-e.netlify.app",
      viewlink: "https://github.com/13-TOMMY/Uni-Life", // Note: You might want to replace this with the correct GitHub link for the Fake Store project
    },
    {
      index: 6,
      photo: "/assets/potfolio/space-next/space-next-img.png",
      videoLink: "/assets/potfolio/space-next/space-next.mp4",
      projectName: {
        englishText: <>Space Next - Real Time Launches</>,
        polishText: <>Space Next - Starty na Żywo</>,
      },
      projectDescription: {
        englishText: (
          <>
            Space Next gives access to upcoming launch details, featuring
            countdowns, voting, and interactive maps. This website built using CSS,
            HTML, and JavaScript. We integrated APIs like the Rocket Launch API for
            launch data and the Bing Maps Locations API for mapping. Collaborated
            with talented individuals, Jungwon Jung and Paul Hondl, this project
            highlighted my skills in web development, responsive design, and data
            integration.
          </>
        ),
        polishText: (
          <>
            Space Next zapewnia dostęp do szczegółów nadchodzących startów,
            zawierających odliczania, głosowania i interaktywne mapy. Ta strona
            internetowa została stworzona przy użyciu CSS, HTML i JavaScript.
            Zintegrowaliśmy interfejsy API, takie jak Rocket Launch API i Bing Maps
            Locations API. Współpracując z utalentowanymi osobami, Jungwon Jung i
            Paul Hondl, ten projekt podkreślił moje umiejętności w zakresie rozwoju
            stron internetowych.
          </>
        ),
      },
      visitLink:
        "https://stupendous-mandazi-1fbde3.netlify.app/#info-container",
      viewlink: "https://github.com/jungwonJung/Space-Next",
    },
    {
      index: 7,
      photo: "/assets/potfolio/cine-trail/cine-trail-img.png",
      videoLink: "/assets/potfolio/cine-trail/cine-trail.mp4",
      projectName: {
        englishText: <>Cinetrail - Database of Movies</>,
        polishText: <>Cinetrail - Baza Filmów</>,
      },
      projectDescription: {
        englishText: (
          <>
            CineTrail is an engaging website based on React that utilizes NPM packages
            and a movie database API to deliver an immersive movie-watching
            experience to users. With built-in user authentication, it offers a
            personalized environment where users can discover movies, leave
            comments, and interact with the world of cinema.
          </>
        ),
        polishText: (
          <>
            CineTrail to atrakcyjna strona internetowa oparta na React, wykorzystująca
            pakiety NPM i bazę danych filmów API, aby zapewnić użytkownikom
            immersyjne doświadczenia związane z oglądaniem filmów. Dzięki wbudowanej
            autentykacji użytkowników, oferuje spersonalizowane środowisko, w którym
            użytkownicy mogą odkrywać filmy, zostawiać komentarze i interakcjonować
            z światem kina.
          </>
        ),
      },
      visitLink: "https://cine-trail.netlify.app",
      viewlink: "https://github.com/13-TOMMY/cinetrail",
    }
  ];
  return (
    <div className="portfolio-container">
      {/* <ProjectCard
        photo={"/assets/potfolio/fox-remonty/fox-remonty.png"}
        videoLink={"/assets/potfolio/fox-remonty/fox-remonty.mp4"}
        projectName={
          <LanguageText
            englishText={<>Fox Remonty - Construction Company</>}
            polishText={<>Fox Remonty - Firmy Budowlanej</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                Fox Remonty represents my first freelance project, developed for
                a construction company aiming to provide comprehensive
                information to prospective clients. This application was crafted
                using cutting-edge technologies, including REACT, TypeScript,
                SCSS, and extensive NPM packages to ensure responsiveness. For
                the development of this single-page application (SPA) website, I
                leveraged Vite, while Figma and Canva served as my design tools.
              </>
            }
            polishText={
              <>
                Fox Remonty to mój pierwszy niezależny projekt, opracowany dla
                firmy budowlanej, mający na celu dostarczenie informacji
                potencjalnym klientom. Ta aplikacja została stworzona przy
                użyciu najnowocześniejszych technologii, w tym REACT,
                TypeScript, SCSS i rozbudowane pakiety NPM w celu zapewnienia
                responsywności. Dla do stworzenia tej jednostronicowej aplikacji
                (SPA) wykorzystałem wykorzystałem Vite, a Figma i Canva
                posłużyły mi jako narzędzia projektowe.
              </>
            }
          />
        }
        visitLink={"https://fox-remonty.com/"}
        viewlink={"https://github.com/13-TOMMY/fox-remonty"}
      /> */}
      {/* <ProjectCard
        photo={"/assets/potfolio/re-serve/re-serve-img.jpg"}
        videoLink={"/assets/potfolio/re-serve/re-serve.mp4"}
        projectName={
          <LanguageText
            englishText={<>RE:serve - Simplify Reservations</>}
            polishText={<>RE:serve - Ułatw Rezerwacje</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                Website in Progress. RE:serve is a user-friendly web app for
                effortless restaurant and venue table reservations, powered by
                React, three.js, Firebase, and responsive design. It offers a
                single-page application (SPA) experience with React-router for
                seamless navigation, robust Firebase-based CRUD functionality,
                and comprehensive user authentication.
              </>
            }
            polishText={
              <>
                Strona w trakcie realizacji. RE:serve to przyjazna dla
                użytkownika aplikacja webowa umożliwiająca łatwe rezerwacje
                stolików w restauracjach i lokalach, zasilana przez React,
                three.js, Firebase oraz responsywny design. Zapewnia wiele stron
                do eksploracji dzięki React-router, solidne funkcje CRUD oparte
                na Firebase oraz kompleksową autentykację użytkownika. Jest to
                aplikacja typu Single Page Application (SPA).
              </>
            }
          />
        }
        visitLink={"https://re-serve.netlify.app/"}
        viewlink={"https://github.com/13-TOMMY/RE-serve"}
      /> */}
      {/* <ProjectCard
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
      /> */}
      {/* <ProjectCard
        photo={"/assets/potfolio/blog/blog-img.png"}
        videoLink={"/assets/potfolio/blog/blog.mp4"}
        projectName={
          <LanguageText
            englishText={<>Blog - Write Your Story</>}
            polishText={<>Blog - Napisz Swoją Historię</>}
          />
        }
        projectDescription={
          <LanguageText
            englishText={
              <>
                Blog It is a single-page application (SPA) built using React,
                Firebase, JavaScript, and CSS. It offers users the ability to
                create accounts and share engaging articles. Visitors can not
                only read these articles but also interact by liking and
                commenting, creating a dynamic and engaging platform for sharing
                and discussing ideas.
              </>
            }
            polishText={
              <>
                Blog It to jednostronicowa aplikacja (SPA) stworzona przy użyciu
                React, Firebase, JavaScript i CSS. Umożliwia użytkownikom
                tworzenie kont i udostępnianie interesujących artykułów.
                Odwiedzający mogą nie tylko czytać te artykuły, ale także
                interagować, lajkować i komentować, tworząc dynamiczną i
                angażującą platformę do dzielenia się i dyskutowania na temat
                pomysłów.
              </>
            }
          />
        }
        visitLink={"https://b10g.netlify.app"}
        viewlink={"https://github.com/13-TOMMY/blog"}
      /> */}
      {/* <ProjectCard
        photo={"/assets/potfolio/fake-store/fake-store-img.png"}
        videoLink={"/assets/potfolio/fake-store/fake-store.mp4"}
        projectName={
          <LanguageText
            englishText={<>Fake store - Online Shopping</>}
            polishText={<>Fake Store - Zakupy Online</>}
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
                management using React hooks. It also demonstrates fetching data
                from an API.
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
                React hooks. Ponadto, prezentuje pobierania danych z API.
              </>
            }
          />
        }
        visitLink={"https://fake-store-e.netlify.app"}
        viewlink={"https://github.com/13-TOMMY/Uni-Life"}
      /> */}
      {/* <ProjectCard
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
      /> */}
      {/* <ProjectCard
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
      /> */}
    </div>
  );
}

export default Portfolio;
