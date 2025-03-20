import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">Cargando tus frutas y verduras frescas...</p>
    </div>
  );
}

export default Loader;
