import React from "react";
import "./CartCheckOut.css";

function CartCheckOut({ cart }) {
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const calculateQuantity = () => {
    return cart.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  };

  const calculateWeight = () => {
    return cart.reduce((total, product) => {
      return total + product.weight * product.quantity;
    }, 0);
  };

  const totalWeight = calculateWeight();

  const displayWeight = () => {
    if (totalWeight < 1000) {
      return `${totalWeight.toFixed(0)} g`;
    } else {
      return Number.isInteger(totalWeight / 1000)
        ? `${Math.floor(totalWeight / 1000)} kg`
        : `${(totalWeight / 1000).toFixed(1)} kg`;
    }
  };

  return (
    <div className="cartCheckout">
      <div className="cartResume">
        <p>
          <b>Total aproximado: </b>${calculateTotal().toFixed(2)}{" "}
        </p>
        <p>
          <b>Cantidad de productos:</b> {calculateQuantity()}{" "}
        </p>
        <p>
          <b>Peso aproximado:</b> {displayWeight()}{" "}
        </p>
      </div>
      <button>Enviar pedido por WhatsApp</button>
    </div>
  );
}

export default CartCheckOut;
