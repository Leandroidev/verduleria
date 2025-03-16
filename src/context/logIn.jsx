import React, { createContext, useState, useEffect } from "react";
import { sessionActive, userLogin } from "../api/auth";

// Crear el contexto
export const LogInContext = createContext();

// Proveedor del contexto
export const LogInProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null); // Token JWT
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  ); // Nombre de usuario
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  // Función para iniciar sesión
  const login = async (credentials) => {
    setError(null);
    try {
      const { token: newToken, userName: newUserName } =
        await userLogin(credentials);

      localStorage.setItem("token", newToken);
      localStorage.setItem("userName", newUserName);

      setToken(newToken);
      setUserName(newUserName);
      setIsAuthenticated(true); // Actualizamos el estado de autenticación
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
    setIsAuthenticated(false); // Actualizamos el estado de autenticación
  };
  const checkAuthentication = async () => {
    if (token) {
      try {
        await sessionActive();
        setIsAuthenticated(true);
      } catch (error) {
        logout();
      }
    } else {
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    checkAuthentication();
  }, [token]);

  const value = {
    token,
    userName,
    isAuthenticated,
    login,
    logout,
    error,
  };

  return (
    <LogInContext.Provider value={value}>{children}</LogInContext.Provider>
  );
};
