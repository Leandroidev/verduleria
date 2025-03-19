import apiClient from "./apiClient.js";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al obtener los productos"
    );
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await apiClient.post("/products", productData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al crear el producto"
    );
  }
};

export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await apiClient.patch(
      `/products/${productId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al actualizar el producto"
    );
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await apiClient.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al eliminar el producto"
    );
  }
};
