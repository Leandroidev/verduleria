import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBarLink.css";
/**
 * Props:
 * - to: Ruta hacia donde redirige el enlace.
 * - icon: Ícono SVG o componente.
 * - label: Texto que se muestra debajo del ícono (y se usa para aria-label).
 * - showLabel: Booleano que indica si se debe mostrar el texto del label.
 */
function NavbarLink({
  to,
  icon,
  label,
  showLabel = true,
  showActive = true,
  fn,
}) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`navBarLink ${showActive && isActive ? "active" : ""}`}
      aria-label={label}
      onClick={fn}
    >
      <div className="navBarIcon">{icon}</div>
      {showLabel && <p>{label}</p>}
    </Link>
  );
}

export default NavbarLink;
