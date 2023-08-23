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
        videoLink={"/assets/dark-background.avif"}
        projectName={"UniLife - Student Accommodation Search"}
        projectDescription={
          "UniLife simplifies the process of finding student accommodation. Built using React and react-router, this responsive app fetches data from an API, offering multiple pages for exploration. It demonstrates my proficiency in React, React Router, and API integration."
        }
        viewlink={"www.youtube.com"}
        visitLink={"www.google.com"}
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
        videoLink={"/assets/dark-background.avif"}
        projectName={"Space Next - Real Time Launches"}
        projectDescription={
          "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
        }
        viewlink={"www.youtube.com"}
        visitLink={"www.google.com"}
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
