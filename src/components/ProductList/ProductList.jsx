import React, { useContext, useEffect, useState } from "react";
import "./ProductList.css";
import ProductAdmin from "../ProductAdmin/ProductAdmin";
import Product from "../Product/Product";
import { useFilters } from "../../hooks/useFilters";
import { ProductContext } from "../../context/products";
import { LogInContext } from "../../context/logIn";
import { useNavigate } from "react-router-dom";
function ProductList() {
  const navigate = useNavigate();

  const { filteredProducts } = useFilters();
  const { products } = useContext(ProductContext);
  const { isAuthenticated, userName } = useContext(LogInContext); // Consumimos el estado de autenticación
  const filtered = filteredProducts(products);
  useEffect(() => {
    if (isAuthenticated && userName != "owner") {
      navigate("/Productos");
    }
    if (isAuthenticated && userName == "owner") {
      navigate("/admin/home");
    }
  }, [isAuthenticated]);
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
