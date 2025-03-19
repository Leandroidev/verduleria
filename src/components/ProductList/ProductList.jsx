import React, { useContext, useEffect, useState } from "react";
import "./ProductList.css";
import ProductAdmin from "../ProductAdmin/ProductAdmin";
import Product from "../Product/Product";
import { useFilters } from "../../hooks/useFilters";
import { ProductContext } from "../../context/products";
import { LogInContext } from "../../context/logIn";

function ProductList() {
  const { filteredProducts } = useFilters();
  const { products, loading, error, fetchProducts } =
    useContext(ProductContext);
  const { isAuthenticated } = useContext(LogInContext);

  const [filtered, setFiltered] = useState([]);

  // Actualizar los productos filtrados cuando cambien los productos o el estado de carga
  useEffect(() => {
    if (!loading && Array.isArray(products)) {
      setFiltered(filteredProducts(products));
    }
  }, [loading]);

  // Mostrar un indicador de carga mientras se cargan los productos

  return (
    <main className="productListContainer">
      <ul>
        {isAuthenticated
          ? filtered.map((product) => (
              <ProductAdmin product={product} key={product.id} />
            ))
          : filtered.map((product) => (
              <Product product={product} key={product.id} />
            ))}
      </ul>
    </main>
  );
}

export default ProductList;
