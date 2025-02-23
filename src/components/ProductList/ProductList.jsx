import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
function ProductList({ products }) {
  return (
    <main className="productListContainer">
      <ul>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
