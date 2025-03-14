import React, { createContext, useState } from "react";
import { userLogin } from "../api/auth";

// Crear el contexto
export const LogInContext = createContext();

// Proveedor del contexto
export const LogInProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null); // Token JWT
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  ); // Nombre de usuario
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setError(null);
    try {
      const { token: newToken, userName: newUserName } =
        await userLogin(credentials);

      localStorage.setItem("token", newToken);
      localStorage.setItem("userName", newUserName);

      setToken(newToken);
      setUserName(newUserName);
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setToken(null);
    setUserName(null);
  };

  // Valor del contexto
  const value = {
    token,
    userName,
    isAuthenticated: !!token, // Indica si el usuario está autenticado
    login,
    logout,
    error,
  };

  return (
    <LogInContext.Provider value={value}>{children}</LogInContext.Provider>
  );
};
