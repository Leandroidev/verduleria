import React from "react";
import "./Product.css";
function Product({ product }) {
  return (
    <li className="product" key={product.id}>
      <div>
        <img src={product.img} alt={product.name}></img>
      </div>
      <div className="productName">
        <strong>{product.name}</strong>
      </div>
      <div className="productPrice">
        {product.promoPrice ? (
          <>
            <del>${product.price}</del>
            <br />
            <strong>${product.promoPrice}</strong>
          </>
        ) : (
          <strong>${product.price}</strong>
        )}
      </div>
      <div>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </li>
  );
}

export default Product;
