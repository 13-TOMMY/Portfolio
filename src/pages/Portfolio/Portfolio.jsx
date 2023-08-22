import React from "react";
import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-row">
        <ProjectCard
          videoLink={"src/assets/dark-background.jpeg"}
          projectName={"RE:serve - Table Reservation System"}
          projectDescription={
            "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
          }
          viewlink={"www.youtube.com"}
          visitLink={"www.google.com"}
        />
        <ProjectCard
          videoLink={"src/assets/dark-background.jpeg"}
          projectName={"RE:serve - Table Reservation System"}
          projectDescription={
            "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
          }
          viewlink={"www.youtube.com"}
          visitLink={"www.google.com"}
        />
        <ProjectCard
          videoLink={"src/assets/dark-background.jpeg"}
          projectName={"RE:serve - Table Reservation System"}
          projectDescription={
            "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
          }
          viewlink={"www.youtube.com"}
          visitLink={"www.google.com"}
        />
        <ProjectCard
          videoLink={"src/assets/dark-background.jpeg"}
          projectName={"RE:serve - Table Reservation System"}
          projectDescription={
            "RE:serve is a web application that simplifies table reservations at restaurants and venues. Users can effortlessly find and book tables, manage their reservations, and enjoy a seamless dining experience. Powered by users by the and Firebase, this project showcases my skills in React, three.js, Firebase Authentication, Firebase Firestore and responsive web design."
          }
          viewlink={"www.youtube.com"}
          visitLink={"www.google.com"}
        />
      </div>
    </div>
  );
}

export default Portfolio;
