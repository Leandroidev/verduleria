import React from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductFilter from "../components/Filters/ProductFilter";
function Products() {
  return (
    <>
      <ProductFilter />
      <ProductList />
    </>
  );
}

export default Products;
