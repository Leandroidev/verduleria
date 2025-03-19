// src/context/ProductContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/product.js";
import { LogInContext } from "./logIn.jsx";

const LOCAL_STORAGE_KEY = "products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const { isAuthenticated } = useContext(LogInContext);
  // Función para cargar los productos
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(Array.isArray(data) ? data : []); // Asegúrate de que data sea un array
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data)); // Guarda en localStorage
    } catch (err) {
      setError(err.message);
      setProducts([]); // Establece un array vacío en caso de error
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar un nuevo producto
  const addProduct = async (productData) => {
    try {
      await createProduct(productData); // Crea el producto en la API
      fetchProducts(); // Refresca los productos después de la creación
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para actualizar un producto existente
  const editProduct = async (productId, updatedData) => {
    try {
      await updateProduct(productId, updatedData); // Actualiza el producto en la API
      fetchProducts(); // Refresca los productos después de la actualización
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para eliminar un producto
  const removeProduct = async (productId) => {
    try {
      await deleteProduct(productId); // Elimina el producto en la API
      fetchProducts(); // Refresca los productos después de la eliminación
    } catch (err) {
      setError(err.message);
    }
  }; /*
  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    } // Carga desde la API
  }, [isAuthenticated]);*/
  // Cargar productos al inicializar
  useEffect(() => {
    fetchProducts(); // Carga desde la API
  }, [isAuthenticated]);

  // Valor del contexto
  const value = {
    products,
    loading,
    error,
    fetchProducts, // Mantener esta función
    addProduct, // Mantener esta función
    editProduct, // Mantener esta función
    removeProduct, // Mantener esta función
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
