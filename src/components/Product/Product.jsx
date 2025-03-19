import React from "react";
import "./Product.css";
import { useCart } from "../../hooks/useCart";

function Product({ product }) {
  const { cart, incrementProductQuantity, decrementProductQuantity } =
    useCart();

  let productInCartQuantity = 0;
  let productInCartIndex = cart.findIndex((item) => item.id === product.id);
  if (productInCartIndex >= 0) {
    productInCartQuantity = cart[productInCartIndex].quantity;
  }
  const displayWeight = (weight) => {
    if (weight < 1000) {
      return `${weight.toFixed(0)} g`;
    } else {
      return Number.isInteger(weight / 1000)
        ? `${Math.floor(weight / 1000)} kg`
        : `${(weight / 1000).toFixed(1)} kg`;
    }
  };
  if (!product.available) {
    return false;
  }

  return (
    <li className="product">
      <div>
        <img src={product.img || null} alt={product.name}></img>
      </div>
      <div className="productName">
        <strong>{product.name}</strong>
      </div>
      <div className="productPrice">
        {product.promoPrice ? (
          <>
            <del>${product.price}</del>
            <small className="discountText">
              {Math.trunc(product.discountPercentage)}% OFF
            </small>
            <strong>${product.promoPrice} </strong>{" "}
            <small className="weightText">
              {" "}
              x{displayWeight(product.weight)}
            </small>
          </>
        ) : (
          <>
            <strong className="productPriceWODiscount">${product.price}</strong>
            <small className="weightText">
              {" "}
              x{displayWeight(product.weight)}
            </small>
          </>
        )}
      </div>
      <div className="productPanel">
        <button onClick={() => decrementProductQuantity(product)}>-</button>
        <span>{productInCartQuantity} </span>
        <button onClick={() => incrementProductQuantity(product)}>+</button>
      </div>
    </li>
  );
}

export default Product;
