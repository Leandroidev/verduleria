import React from "react";
import "./NotFoundPage.css";
function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <h2>Lo sentimos, no hemos encontrado lo que buscas</h2>
      <figure className="notFound-image">
        <img className="notFoundImg" src="/404.png" alt="404 Not Found" />
      </figure>
    </div>
  );
}

export default NotFoundPage;
