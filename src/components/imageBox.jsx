import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ImageBox({ imglink, intervalTime }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imglink.length);
  };

  const timeMs = (time = 5000) => time;

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, timeMs(intervalTime));
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className="img-box-container">
      <img src={imglink[currentImageIndex]} className="hp-bottom-img" />
    </div>
  );
}

export default ImageBox;
