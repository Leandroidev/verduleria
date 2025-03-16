import React, { use, useContext, useEffect, useState } from "react";
import LogInForm from "../components/LogIn/LogInForm";
import { LogInContext } from "../context/logIn";
import { useNavigate } from "react-router-dom";
function LogInPage() {
  const navigate = useNavigate();
  const { isAuthenticated, error } = useContext(LogInContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Productos");
    }
  }, [isAuthenticated]);

  return <LogInForm />;
}

export default LogInPage;
