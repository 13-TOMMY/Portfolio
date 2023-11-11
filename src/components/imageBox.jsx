import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function ImageBox({ imglink }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imglink.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imglink.length) % imglink.length
    );
  };
  return (
    <div className="img-box-container">
      <img src={imglink[currentImageIndex]} className="hp-bottom-img" />
      <div className="btns-carosel-container">
        <button onClick={prevImage}>
          <BsFillArrowLeftCircleFill className="left-arrow-carousel-btn m-font" />
        </button>
        <button onClick={nextImage}>
          <BsFillArrowRightCircleFill className="right-arrow-carousel-btn m-font" />
        </button>
      </div>
    </div>
  );
}

export default ImageBox;
