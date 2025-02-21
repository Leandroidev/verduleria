import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
function ProductList({ products }) {
  return (
    <main className="productListContainer">
      <ul>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
