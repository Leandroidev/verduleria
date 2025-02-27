import React from "react";
import CartList from "../components/CartList/CartList";
import { useCart } from "../hooks/useCart";
import CartCheckOut from "../components/CartCheckout/CartCheckout";
import EmptyCartPopup from "../components/EmptyCartPopUp/EmptyCartPopUp";
function CartPage() {
  const { cart, clearCart, removeProduct } = useCart();
  if (cart.length === 0) {
    return <EmptyCartPopup />;
  }
  return (
    <>
      <CartList
        cart={cart}
        clearCart={clearCart}
        removeProduct={removeProduct}
      />
      <CartCheckOut cart={cart} />
    </>
  );
}

export default CartPage;
