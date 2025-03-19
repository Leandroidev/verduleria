import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import ProductFilter from "../components/Filters/ProductFilter";
import { AuthContext } from "../context/auth";
import { ShopContext } from "../context/shop";
function Products() {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useContext(AuthContext);
  const { isOpen, toggleShop } = useContext(ShopContext);

  useEffect(() => {
    if (isAuthenticated && role === "owner") {
      navigate("/admin/home");
    }
  }, [isAuthenticated]);
  return (
    <>
      {!isAuthenticated && !isOpen ? <></> : <ProductFilter />}
      <ProductList />
    </>
  );
}

export default Products;
