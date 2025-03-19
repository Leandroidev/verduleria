import React, { useContext, useEffect, useState } from "react";
import "./ProductList.css";
import ProductAdmin from "../ProductAdmin/ProductAdmin";
import Product from "../Product/Product";
import { useFilters } from "../../hooks/useFilters";
import { ProductContext } from "../../context/products";
import { AuthContext } from "../../context/auth";
function ProductList() {
  const { filteredProducts } = useFilters();
  const { products, loading } = useContext(ProductContext);
  const { isAuthenticated, role } = useContext(AuthContext);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!loading && Array.isArray(products)) {
      setFiltered(filteredProducts(products));
    }
  }, [loading]);

  // Mostrar un indicador de carga mientras se cargan los productos

  return (
    /*
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
    </main>*/
    <main className="productListContainer">
      <ul>
        {isAuthenticated && role === "owner"
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
