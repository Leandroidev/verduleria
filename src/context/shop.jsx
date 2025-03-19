import React, { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { AuthContext } from "./auth"; // Usaremos el contexto de autenticación

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // Estado local del estado del local
  const [error, setError] = useState(null);

  // Cargar el estado inicial desde el localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("products");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setIsOpen(parsedData.isOpen); // Cargar el valor de isOpen desde el almacenamiento local
    }
  }, [isAuthenticated]);

  // Alternar el estado de "isOpen" llamando al backend
  const toggleShop = async () => {
    try {
      const response = await apiClient.post("/shop"); // Llama al endpoint backend
      const updatedData = response.data;
      setIsOpen(updatedData.isOpen); // Actualizar el estado local
      localStorage.setItem("products", JSON.stringify(updatedData)); // Actualizar el localStorage
    } catch (error) {
      setError(
        error.response?.data?.message || "Error al alternar el estado del local"
      );
    }
  };

  const value = {
    isOpen,
    toggleShop,
    error,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
