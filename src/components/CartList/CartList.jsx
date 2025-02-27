import React from "react";
import "./CartList.css";
import CartItem from "../CartItem/CartItem";
function CartList({ cart, clearCart, removeProduct }) {
  return (
    <main className="cartListContainer">
      <ul>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            clearCart={clearCart}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
    </main>
  );
}

export default CartList;
