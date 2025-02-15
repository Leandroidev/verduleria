import React from 'react';
import NavBarLink from './NavBarLink';
//import CartCounter from './CartCounter';
//import { useCart } from '../../context/CartContext';

function NavBar() {
  const { state: { carrito } } = useCart();
  const totalProductos = carrito.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navBar">
      {/* Enlace Nosotros */}
      <NavBarLink
        to="/Nosotros"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"/>
          </svg>
        }
        label="Nosotros"
      />

      {/* Enlace Productos */}
      <NavBarLink
        to="/products"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
            <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"/>
          </svg>
        }
        label="Productos"
      />

      {/* Enlace Carrito */}
      <NavBarLink
        to="/cart"
        icon={
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"/>
            </svg>
            <CartCounter totalProductos={totalProductos} />
          </div>
        }
        label="Carrito"
      />

      {/* Logo */}
      <Logo />
    </div>
  );
}

export default NavBar;