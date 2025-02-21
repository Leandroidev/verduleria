import React from "react";
import "./ArticleCard.css";

function ArticleCard({ text }) {
  return (
    <article className="aboutUs-article">
      <p>{text}</p>
    </article>
  );
}

export default ArticleCard;
