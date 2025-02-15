import React from 'react';
import './Logo.css';
import brand from './BrandLogo.png';

const Logo = () => {
  return (
    <div className="logoContainer">
      <img className="logo" src={brand} alt="Logo de la aplicación" />
    </div>
  );
};

export default Logo;