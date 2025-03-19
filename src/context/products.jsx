// src/context/ProductContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/product.js";
import { AuthContext } from "./auth";

const LOCAL_STORAGE_KEY = "products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const { isAuthenticated } = useContext(AuthContext);
  // Función para cargar los productos
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();

      setProducts(data); // Asegúrate de que data sea un array
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data)); // Guarda en localStorage
    } catch (err) {
      setError(err.message);
      setProducts({ ...products, products: [] });
    } finally {
      setLoading(false);
    }
  };

  const updateLocalStorage = (updatedProducts) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProducts));
  };
  const addProduct = async (productData) => {
    try {
      const newProduct = await createProduct(productData);
      const newProducts = {
        ...products,
        products: [...products.products, newProduct],
      };
      setProducts(newProducts);
      updateLocalStorage(newProducts);
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para actualizar un producto existente
  const editProduct = async (productId, updatedData) => {
    console.log("editando");

    try {
      const updatedProduct = await updateProduct(productId, updatedData);
      const updatedProducts = products.products.map((product) =>
        product.id === productId ? updatedProduct : product
      );
      const newProducts = {
        ...updatedProduct,
        products: updatedProducts,
      };
      setProducts(newProducts);
      updateLocalStorage(newProducts);
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para eliminar un producto
  const removeProduct = async (productId) => {
    console.log("borrando");

    try {
      await deleteProduct(productId);
      const updatedProducts = products.products.filter(
        (product) => product.id !== productId
      ); // Remover del estado local
      const newProducts = {
        ...products,
        products: updatedProducts,
      };
      setProducts(newProducts);
      updateLocalStorage(newProducts);
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
    // Mantener esta función
    addProduct, // Mantener esta función
    editProduct, // Mantener esta función
    removeProduct, // Mantener esta función
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
