import React, { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import initialProducts from "../components/data.json";
import ProductFilter from "../components/Filters/ProductFilter";
import { useFilters } from "../hooks/useFilters";
function Products() {
  const { filteredProducts } = useFilters();
  const [products] = useState(initialProducts);
  const filtered = filteredProducts(products);
  return (
    <>
      <ProductFilter />
      <ProductList products={filtered} />
    </>
  );
}

export default Products;
