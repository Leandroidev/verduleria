import React from "react";
import "./Banner.css";
function Banner({ src, alt }) {
  return (
    <figure className="aboutUs-banner">
      <img src={src} alt={alt} />
    </figure>
  );
}

export default Banner;
