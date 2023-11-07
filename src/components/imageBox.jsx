import React from "react";

function ImageBox({ imglink }) {
  return (
    <div className="img-box-container">
      <img src={imglink} className="hp-bottom-img" />
      hello
    </div>
  );
}

export default ImageBox;
