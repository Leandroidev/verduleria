import React from "react";
import "./CartList.css";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart";
function CartList({ cart, clearCart, removeProduct }) {
  console.log(cart);

  return (
    <main className="cartListContainer">
      <ul>
        <CartItem />
      </ul>

      <div className="cartCheckout">
        <div className="cartResume">
          <p>
            <b>Total: </b>$5000
          </p>
          <p>
            <b>Cantidad de productos:</b> 4
          </p>
          <p>
            <b>Peso aproximado:</b> 2kg
          </p>
        </div>

        <button>Enviar pedido por WhatsApp</button>
      </div>
    </main>
  );
}

export default CartList;
