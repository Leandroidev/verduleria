import apiClient from "./apiClient.js";

// Obtener todos los productos
export const getUsers = async () => {
  try {
    const response = await apiClient.get("/user");
    return response.data; // Retorna la lista de productos
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al obtener los usuarios"
    );
  }
};

export const createUser = async (userData) => {
  try {
    const response = await apiClient.post("/user", userData);
    return response.data; // Retorna el producto creado
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al crear el usuario"
    );
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await apiClient.delete(`/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al eliminar el usuario"
    );
  }
};
