import React, { useContext } from "react";
import "./ProductList.css";
import Product from "../ProductAdmin/ProductAdmin";
import { useFilters } from "../../hooks/useFilters";
import { ProductContext } from "../../context/products";
function ProductList() {
  const { filteredProducts } = useFilters();
  const { products } = useContext(ProductContext);
  const filtered = filteredProducts(products);

  return (
    <main className="productListContainer">
      <ul>
        {filtered.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
