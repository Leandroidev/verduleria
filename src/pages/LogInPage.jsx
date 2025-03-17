import React, { useContext, useEffect } from "react";
import LogInForm from "../components/LogIn/LogInForm";
import { LogInContext } from "../context/logIn";
import { useNavigate } from "react-router-dom";
function LogInPage(props) {
  const { owner } = props;

  const navigate = useNavigate();
  const { isAuthenticated } = useContext(LogInContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Productos");
    }
  }, [isAuthenticated]);
  if (owner) return <LogInForm owner={owner} />;
  else {
    return <LogInForm />;
  }
}

export default LogInPage;
