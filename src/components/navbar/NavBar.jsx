import React, { useContext } from "react";
import NavBarLink from "./NavBarLink";
import Logo from "../Logo/Logo";
import "./NavBar.css";
import {
  HomeIcon,
  CartIcon,
  ProductsIcon,
  LogoutIcon,
} from "../Icons/Icons.jsx";
import { useCart } from "../../hooks/useCart.jsx";
import { AuthContext } from "../../context/auth.jsx";
function NavBar() {
  const { getCartQuantity } = useCart();
  const { logout, isAuthenticated, role } = useContext(AuthContext);

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

      {!isAuthenticated ? (
        <NavBarLink
          to="/Nosotros"
          icon={<Logo />}
          label="Logo"
          showLabel={false}
          showActive={false}
        />
      ) : (
        <NavBarLink
          to="/Productos"
          icon={<LogoutIcon />}
          label="LogOut"
          showActive={false}
          fn={logout}
        />
      )}
    </div>
  );
}

export default NavBar;
