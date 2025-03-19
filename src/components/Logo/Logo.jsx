import React, { useState } from "react";
import "./Logo.css";
import brand from "./BrandLogo.png";

const Logo = () => {
  const [pressTimer, setPressTimer] = useState(null);

  const [clickCount, setClickCount] = useState(0);
  const [clickTimer, setClickTimer] = useState(null);

  const handlePressStart = () => {
    const timer = setTimeout(() => {
      window.location.href = "/admin/logIn";
    }, 3000);
    setPressTimer(timer);
  };

  const handlePressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleLogoClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 2) {
      window.location.href = "/logIn";
    }

    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    const timer = setTimeout(() => {
      setClickCount(0);
    }, 3000);

    setClickTimer(timer);
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
