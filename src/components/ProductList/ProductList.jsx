import React, { useState } from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { useFilters } from "../../hooks/useFilters";
import initialProducts from "../../components/data.json";

function ProductList() {
  const { filteredProducts } = useFilters();
  const [products] = useState(initialProducts);

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
