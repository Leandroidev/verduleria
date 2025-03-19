import React, { useContext, useEffect, useState } from "react";
import "./ProductList.css";
import ProductAdmin from "../ProductAdmin/ProductAdmin";
import Product from "../Product/Product";
import { useFilters } from "../../hooks/useFilters";
import { ProductContext } from "../../context/products";
import { AuthContext } from "../../context/auth";
import { ShopContext } from "../../context/shop"; // Importamos el contexto de la tienda
import ClosedPage from "../../pages/ClosedPage";

function ProductList() {
  const { filteredProducts } = useFilters();
  const { products, loading } = useContext(ProductContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { isOpen, toggleShop } = useContext(ShopContext); // Usar estado y acción del ShopContext
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    console.log("cambio un producto");

    if (!loading) {
      setFiltered(filteredProducts(products.products)); // Filtrar los productos basados en los filtros
    }
  }, [loading, products, filteredProducts]);

  // Mostrar un indicador de carga mientras se cargan los productos
  if (!isAuthenticated && !loading && !isOpen) {
    // Mostrar ClosedPage si no está autenticado, no está cargando, y el local está cerrado
    return (
      <main className="productListContainer">
        <ClosedPage />
      </main>
    );
  }

  return (
    <main className="productListContainer">
      {isAuthenticated ? (
        <button
          onClick={toggleShop}
          className={`toggleShopButton ${isOpen ? "open" : "closed"}`}
        >
          {isOpen ? "Close Shop" : "Open Shop"}
        </button>
      ) : null}

      {/* Renderizar ul sólo si no corresponde ClosedPage */}
      <ul>
        {isAuthenticated && !loading ? (
          <>
            <ProductAdmin add={true} />
            {filtered.map((product) => (
              <ProductAdmin product={product} key={product.id} />
            ))}
          </>
        ) : !isAuthenticated && !loading && isOpen ? (
          filtered.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : null}
      </ul>
    </main>
  );
}

export default ProductList;
