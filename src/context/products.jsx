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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();

      setProducts(data);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
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

  const editProduct = async (productId, updatedData) => {
    try {
      const updatedProduct = await updateProduct(productId, updatedData);
      const updatedProducts = products.products.map((product) =>
        product.id === productId ? updatedProduct : product
      );
      const newProducts = {
        ...products,
        products: [...updatedProducts],
      };
      console.log(newProducts);

      setProducts(newProducts);
      updateLocalStorage(newProducts);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      const updatedProducts = products.products.filter(
        (product) => product.id !== productId
      );
      const newProducts = {
        ...products,
        products: [...updatedProducts],
      };
      setProducts(newProducts);
      updateLocalStorage(newProducts);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [isAuthenticated]);

  const value = {
    products,
    loading,
    error,
    addProduct,
    editProduct,
    removeProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
