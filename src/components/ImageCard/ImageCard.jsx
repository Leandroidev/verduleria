import React from 'react';
import './ImageCard.css';

function ImageCard({ src, alt }) {
  return (
    <figure className="aboutUs-image">
      <img src={src} alt={alt} />
    </figure>
  );
}

export default ImageCard;