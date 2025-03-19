import React, { useContext, useEffect } from "react";
import LogInForm from "../components/LogIn/LogInForm";
import { LogInContext } from "../context/logIn";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/products";
function LogInPage() {
  const navigate = useNavigate();
  const { fetchProducts } = useContext(ProductContext);
  const { isAuthenticated, userName } = useContext(LogInContext);

  useEffect(() => {
    if (isAuthenticated && userName != "owner") {
      navigate("/Productos");
    }
    if (isAuthenticated && userName == "owner") {
      navigate("/admin/home");
    }
  }, [isAuthenticated]);
  return <LogInForm />;
}

export default LogInPage;
