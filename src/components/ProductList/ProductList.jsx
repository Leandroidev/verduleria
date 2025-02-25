import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
function ProductList({
  products,
  cart,
  incrementProductQuantity,
  decrementProductQuantity,
}) {
  console.log(cart);

  return (
    <main className="productListContainer">
      <ul>
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            incrementProductQuantity={incrementProductQuantity}
            decrementProductQuantity={decrementProductQuantity}
            cart={cart}
          />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
