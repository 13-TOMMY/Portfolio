import React from "react";
import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <ProjectCard
        videoLink={"/assets/potfolio/re-serve/re-serve-img.jpg"}
        projectName={"RE:serve - Table Reservation System"}
        projectDescription={
          "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
        }
        viewlink={"www.youtube.com"}
        visitLink={"www.google.com"}
      />
      <ProjectCard
        videoLink={"/assets/potfolio/uni-life/uni-life.mp4"}
        projectName={"UniLife - Student Accommodation Search"}
        projectDescription={
          "UniLife simplifies the process of finding student accommodation. Built using React and react-router, this responsive app fetches data from an API, offering multiple pages for exploration. It demonstrates my proficiency in React, React Router, and API integration."
        }
        viewlink={"https://github.com/13-TOMMY/Uni-Life"}
        visitLink={"https://uni-life.netlify.app/"}
      />
      <ProjectCard
        videoLink={"/assets/dark-background.avif"}
        projectName={"Blog - Write Your Story"}
        projectDescription={
          "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
        }
        viewlink={"www.youtube.com"}
        visitLink={"www.google.com"}
      />
      <ProjectCard
        videoLink={"/assets/dark-background.avif"}
        projectName={"Fake store - E-Commerce"}
        projectDescription={
          "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
        }
        viewlink={"www.youtube.com"}
        visitLink={"www.google.com"}
      />
      <ProjectCard
        videoLink={"/assets/potfolio/space-next/space-next.mp4"}
        projectName={"Space Next - Real Time Launches"}
        projectDescription={
          "Space Next gives access to upcoming launch details, featuring countdowns, voting and interactive maps. This website built using CSS, HTML, and JavaScript. We integrated APIs like the Rocket Launch API for launch data and the Bing Maps Locations API for mapping. Collaboratined with talented individuals,  Jungwon Jung and Paul Hondl, this project highlighted my skills in web development, responsive design, and data integration."
        }
        viewlink={"https://github.com/jungwonJung/Space-Next"}
        visitLink={
          "https://stupendous-mandazi-1fbde3.netlify.app/#info-container"
        }
      />
      <ProjectCard
        videoLink={"/assets/dark-background.avif"}
        projectName={"Cinetrail - Database of Movies "}
        projectDescription={
          "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
        }
        viewlink={"www.youtube.com"}
        visitLink={"www.google.com"}
      />
    </div>
  );
}

export default Portfolio;
