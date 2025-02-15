import React from 'react';
import { Link, useLocation } from 'react-router-dom';
{/*
to:hacia donde redirige ejemplo /product
icon:svg del icono
label: lo que dice debajo del icono    
*/}
function NavbarLink({ to, icon, label }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`navBarLink ${isActive ? 'active' : ''}`}
      aria-label={label}
    >
      <div className="navBarIcon">
        {icon}
      </div>
      <p>{label}</p>
    </Link>
  );
}

export default NavbarLink;