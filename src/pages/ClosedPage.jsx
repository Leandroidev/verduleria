import React from "react";
import "./ClosedPage.css";
function ClosedPage() {
  return (
    <div className="closedPage">
      <h2>¡Lo sentimos! El local esta cerrado</h2>
      <figure className="closed-image">
        <img className="closedImg" src="/closed.png" alt="Closed Shop" />
      </figure>
    </div>
  );
}

export default ClosedPage;
