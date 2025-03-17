import React, { useState } from "react";
import "./Logo.css";
import brand from "./BrandLogo.png";

const Logo = () => {
  // Estados para la funcionalidad de mantener presionado
  const [pressTimer, setPressTimer] = useState(null);

  // Estados para la funcionalidad de clics múltiples
  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState(null);

  // Función para manejar el inicio de la presión (ratón o táctil)
  const handlePressStart = () => {
    const timer = setTimeout(() => {
      window.location.href = "/admin/logIn"; // Redirige al usuario a /logIn después de 3 segundos
    }, 3000); // 3000 ms = 3 segundos
    setPressTimer(timer); // Guardamos el temporizador en el estado
  };

  // Función para manejar el final de la presión (ratón o táctil)
  const handlePressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer); // Limpiamos el temporizador si se suelta antes de 3 segundos
      setPressTimer(null);
    }
  };

  // Función para manejar los clics en el logo
  const handleLogoClick = () => {
    setClickCount((prevCount) => prevCount + 1); // Incrementa el contador de clics

    if (clickCount === 2) {
      // Si se han hecho 3 clics (0, 1, 2), redirige a /admin/logIn
      window.location.href = "/logIn";
    }

    if (clickTimer) {
      clearTimeout(clickTimer); // Limpia el temporizador existente
    }

    // Configura un nuevo temporizador para reiniciar el contador después de 3 segundos
    const timer = setTimeout(() => {
      setClickCount(0); // Reinicia el contador después de 3 segundos
    }, 3000);

    setClickTimer(timer); // Guarda el temporizador en el estado
  };

  return (
    <div
      className="logoContainer"
      onClick={handleLogoClick}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
    >
      <img className="logo" src={brand} alt="Logo de la aplicación" />
    </div>
  );
};

export default Logo;
