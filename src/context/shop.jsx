import React, { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api/apiClient";
import { AuthContext } from "./auth";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("products");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setIsOpen(parsedData.isOpen);
    }
  }, [isAuthenticated]);

  const toggleShop = async () => {
    try {
      const response = await apiClient.post("/shop");
      const updatedData = response.data;
      setIsOpen(updatedData.isOpen);
      localStorage.setItem("products", JSON.stringify(updatedData));
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
