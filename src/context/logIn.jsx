import React, { createContext, useState, useEffect, useContext } from "react";
import { sessionActive, userLogin } from "../api/auth";
import { getUsers, deleteUser, createUser } from "../api/user.js";
// Crear el contexto
import { ProductContext } from "./products.jsx";
export const LogInContext = createContext();

// Proveedor del contexto
export const LogInProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null); // Token JWT
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  ); // Nombre de usuario
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
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
  const fetchUsers = async () => {
    setError(null);
    try {
      const data = await getUsers();

      setUsers(data); // Actualiza el estado local
      localStorage.setItem("users", JSON.stringify(data)); // Guarda en localStorage
    } catch (err) {
      setError(err.message);
    }
  };
  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("products");

    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("users"); // Guarda en localStorage
    setIsAuthenticated(false); // Actualizamos el estado de autenticación

    setToken(null);
    setUserName(null);
    setUsers(null);
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
  const addUser = async (newUser) => {
    setError(null);
    try {
      await createUser(newUser); // Crea el producto en la API
      fetchUsers(); // Refresca los productos después de la creación
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para actualizar un producto existente
  const removeUser = async (userId) => {
    setError(null);

    try {
      await deleteUser(userId); // Elimina el producto en la API
      fetchUsers(); // Refresca los productos después de la eliminación
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    checkAuthentication();
    if (isAuthenticated) {
      const saveUsers = JSON.parse(localStorage.getItem("users"));

      if (saveUsers) {
        setUsers(saveUsers);
      } else {
        fetchUsers();
      }
    }
  }, [token]);

  const value = {
    token,
    userName,
    isAuthenticated,
    login,
    logout,
    error,
    fetchUsers,
    users,
    addUser,
    removeUser,
  };

  return (
    <LogInContext.Provider value={value}>{children}</LogInContext.Provider>
  );
};
