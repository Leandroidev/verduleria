import React, { useEffect } from "react";
import NavBarLink from "./NavBarLink";
import Logo from "../Logo/Logo";
import { useState } from "react";
import "./NavBar.css";
import { HomeIcon, CartIcon, ProductsIcon } from "../Icons/Icons.jsx";
import { useCart } from "../../hooks/useCart.jsx";

function NavBar() {
  const { getCartQuantity } = useCart();

  return (
    <div className="navBar">
      {/* Enlace Nosotros */}
      <NavBarLink to="/Nosotros" icon={<HomeIcon />} label="Nosotros" />

      {/* Enlace Productos */}
      <NavBarLink to="/Productos" icon={<ProductsIcon />} label="Productos" />

      {/* Enlace Carrito */}
      <NavBarLink
        to="/Carrito"
        icon={
          <div className="cartIconContainer">
            <CartIcon />
            <p className="cartBadge">{getCartQuantity()}</p>
          </div>
        }
        label="Carrito"
      />
      <NavBarLink
        to="/Nosotros"
        icon={<Logo />}
        label="Logo"
        showLabel={false}
        showActive={false}
      />
    </div>
  );
}

export default NavBar;
