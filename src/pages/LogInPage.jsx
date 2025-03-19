import React, { useContext, useEffect } from "react";
import LogInForm from "../components/LogIn/LogInForm";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
function LogInPage() {
  const navigate = useNavigate();
  const { isAuthenticated, userName } = useContext(AuthContext);

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
