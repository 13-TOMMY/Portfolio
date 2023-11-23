import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaTs,
  FaCss3Alt,
  FaSass,
  FaNpm,
} from "react-icons/fa6";
import { TbApi, TbBrandFirebase, TbBrandVite } from "react-icons/tb";

function TechIcons({ techArr }) {
  const techIconMap = {
    react: <FaReact />,
    javascript: <FaJs />,
    typescript: <FaTs />,
    html: <FaHtml5 />,
    scss: <FaSass />,
    css: <FaCss3Alt />,
    npm: <FaNpm />,
    api: <TbApi />,
    firebase: <TbBrandFirebase />,
    vite: <TbBrandVite />,
    git: <FaGitAlt />,
  };

  return <div>TechIcons</div>;
}

export default TechIcons;
