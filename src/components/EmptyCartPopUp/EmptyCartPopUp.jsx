import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmptyCartPopup.css";

const EmptyCartPopup = () => {
  const navigate = useNavigate();

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>
          No tienes productos agregados al carrito aún, por favor agrega un
          producto
        </p>
        <button className="popup-button" onClick={() => navigate("/Productos")}>
          Ir a la lista de productos
        </button>
      </div>
    </div>
  );
};

export default EmptyCartPopup;
