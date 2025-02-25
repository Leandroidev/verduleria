import React, { useState } from "react";
import CartList from "../components/CartList/CartList";
function CartPage() {
  const { cart, clearCart, removeProduct } = useCart();

  return (
    <CartList cart={cart} clearCart={clearCart} removeProduct={removeProduct} />
  );
}

export default CartPage;
