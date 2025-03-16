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

  // Verificar la autenticación al cargar el contexto o cuando cambia el token
  useEffect(() => {
    const checkAuthentication = async () => {
      if (token) {
        try {
          await sessionActive(); // Verificar si la sesión está activa
          setIsAuthenticated(true); // Si la sesión es válida, actualizamos el estado
        } catch (error) {
          console.error("La sesión no es válida:", error.message);
          setIsAuthenticated(false); // Si falla, limpiamos el estado de autenticación
          setToken(null); // Limpiamos el token inválido
          setUserName(null); // Limpiamos el nombre de usuario
        }
      } else {
        setIsAuthenticated(false); // Si no hay token, asumimos que no está autenticado
      }
    };

    checkAuthentication();
  }, [token]); // Observamos cambios en el token

  // Valor del contexto
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
