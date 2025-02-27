import React from "react";
import "./CartItem.css";
import { DeleteCanSvg } from "../Icons/Icons";
function CartItem({ cartItem, removeProduct }) {
  return (
    <>
      <li className="cartItem">
        <div>
          <img src={cartItem.img} alt={cartItem.name}></img>
        </div>
        <div className="cartItemName">
          <small>{cartItem.name} </small>
          <br />
        </div>
        <div className="cartItemQuantity">
          <small>{cartItem.quantity} X </small>
        </div>
        <div className="cartItemPrice">
          <small>${cartItem.price}</small>
        </div>
        <div className="deleteProductCart">
          <button onClick={() => removeProduct(cartItem)}>
            <DeleteCanSvg />
          </button>
        </div>
      </li>
    </>
  );
}

export default CartItem;
