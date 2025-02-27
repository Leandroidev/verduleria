import React from "react";
import "./CartCheckOut.css";

function CartCheckOut({ cart }) {
  // Function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity; // Multiply price by quantity and sum up
    }, 0);
  };

  // Function to calculate the total quantity of products
  const calculateQuantity = () => {
    return cart.reduce((total, product) => {
      return total + product.quantity; // Sum up the quantities of all products
    }, 0);
  };

  // Function to calculate the total weight (in grams)
  const calculateWeight = () => {
    return cart.reduce((total, product) => {
      return total + product.weight * product.quantity; // Multiply weight by quantity and sum up
    }, 0);
  };

  // Get the total weight
  const totalWeight = calculateWeight();

  // Determine how to display the weight (in grams or kg)
  const displayWeight = () => {
    if (totalWeight < 1000) {
      return `${totalWeight.toFixed(0)} g`; // Display in grams if less than 1 kg
    } else {
      return `${(totalWeight / 1000).toFixed(2)} kg`; // Convert to kg if 1 kg or more
    }
  };

  return (
    <div className="cartCheckout">
      <div className="cartResume">
        <p>
          <b>Total aproximado: </b>${calculateTotal().toFixed(2)}{" "}
          {/* Display total price with 2 decimal places */}
        </p>
        <p>
          <b>Cantidad de productos:</b> {calculateQuantity()}{" "}
          {/* Display total quantity */}
        </p>
        <p>
          <b>Peso aproximado:</b> {displayWeight()}{" "}
          {/* Display weight in grams or kg */}
        </p>
      </div>
      <button>Enviar pedido por WhatsApp</button>
    </div>
  );
}

export default CartCheckOut;
