import React, { useContext, useEffect, useState } from "react";
import "./ProductList.css";
import ProductAdmin from "../ProductAdmin/ProductAdmin";
import Product from "../Product/Product";
import { useFilters } from "../../hooks/useFilters";
import { ProductContext } from "../../context/products";
import { AuthContext } from "../../context/auth";
import { ShopContext } from "../../context/shop";
import ClosedPage from "../../pages/ClosedPage";

function ProductList() {
  const { filteredProducts } = useFilters();
  const { products, loading } = useContext(ProductContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { isOpen, toggleShop } = useContext(ShopContext);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFiltered(filteredProducts(products.products));
    }
  }, [loading, products, filteredProducts, isOpen]);

  if (!isAuthenticated && !loading && !isOpen) {
    return (
      <main className="productListContainer">
        <ClosedPage />
      </main>
    );
  }

  return (
    <main className="productListContainer">
      {isAuthenticated ? (
        <div>
          <button
            onClick={toggleShop}
            className={`toggleShopButton ${isOpen ? "open" : "closed"}`}
          >
            {isOpen ? "Cerrar local" : "Abrir local"}
          </button>
        </div>
      ) : null}

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
