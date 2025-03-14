import apiClient from "./apiClient.js";

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data; // Retorna la lista de productos
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al obtener los productos"
    );
  }
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await apiClient.post("/products", productData);
    return response.data; // Retorna el producto creado
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al crear el producto"
    );
  }
};

// Actualizar un producto existente
export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await apiClient.patch(
      `/products/${productId}`,
      updatedData
    );
    return response.data; // Retorna el producto actualizado
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al actualizar el producto"
    );
  }
};

// Eliminar un producto
export const deleteProduct = async (productId) => {
  try {
    const response = await apiClient.delete(`/products/${productId}`);
    return response.data; // Retorna un mensaje de éxito
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al eliminar el producto"
    );
  }
};
