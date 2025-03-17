import React, { useContext, useEffect } from "react";
import LogInForm from "../components/LogIn/LogInForm";
import { LogInContext } from "../context/logIn";
import { useNavigate } from "react-router-dom";
function OwnerLogInPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(LogInContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Productos");
    }
  }, [isAuthenticated]);

  return <LogInForm owner={true} />;
}

export default OwnerLogInPage;
