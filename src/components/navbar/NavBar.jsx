import React from 'react';
import NavBarLink from './NavBarLink';
import Logo from '../Logo/Logo';
import './NavBar.css'

//import CartCounter from './CartCounter';
//import { useCart } from '../../context/CartContext';
//<CartCounter totalProductos={totalProductos} />
import { HomeIcon,CartIcon,ProductsIcon } from '../Icons/Icons.jsx';
function NavBar() {

  return (
    <div className="navBar">
      {/* Enlace Nosotros */}
      <NavBarLink
        to="/Nosotros"
        icon={
        <HomeIcon/>
        }
        label="Nosotros"
      />

      {/* Enlace Productos */}
      <NavBarLink
        to="/Productos"
        icon={
          <ProductsIcon/>
        }
        label="Productos"
      />

      {/* Enlace Carrito */}
      <NavBarLink
        to="/Carrito"
        icon={
          <CartIcon/>
        }
        label="Carrito"
      />
      <NavBarLink
        to="/Nosotros"
        icon={
          <Logo />
        }
        label="Logo"
        showLabel={false}
        showActive={false}
      />
      
    </div>
  );
}

export default NavBar;