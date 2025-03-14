// src/context/ProductContext.js
import React, { createContext, useState, useEffect } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/product.js";

// Clave para localStorage
const LOCAL_STORAGE_KEY = "products";

// Crear el contexto
export const ProductContext = createContext();

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para cargar los productos
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data); // Actualiza el estado local
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data)); // Guarda en localStorage
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar productos al inicializar
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedProducts) {
      setProducts(savedProducts); // Carga desde localStorage
    } else {
      fetchProducts(); // Carga desde la API
    }
  }, []);

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
  };

  // Valor del contexto
  const value = {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    editProduct,
    removeProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
