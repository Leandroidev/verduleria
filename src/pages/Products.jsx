import React, { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import initialProducts from "../components/data.json";
import ProductFilter from "../components/Filters/ProductFilter";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";
function Products() {
  const { cart, incrementProductQuantity, decrementProductQuantity } =
    useCart();

  const { filteredProducts } = useFilters();
  const [products] = useState(initialProducts);
  const filtered = filteredProducts(products);
  return (
    <>
      <ProductFilter />
      <ProductList
        products={filtered}
        incrementProductQuantity={incrementProductQuantity}
        decrementProductQuantity={decrementProductQuantity}
        cart={cart}
      />
    </>
  );
}

export default Products;
