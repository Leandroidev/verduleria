import React from "react";
import "./Product.css";
function Product({ product }) {
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
            <small className="weightText"> x{product.weight} grs</small>
          </>
        ) : (
          <>
            <strong className="productPriceWODiscount">
              ${product.price}
              <small className="weightText"> x{product.weight} grs</small>
            </strong>
          </>
        )}
      </div>
      <div className="productPanel">
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </li>
  );
}

export default Product;
