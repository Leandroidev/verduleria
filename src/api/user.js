import apiClient from "./apiClient.js";

export const getUsers = async () => {
  try {
    const response = await apiClient.get("/user");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al obtener los usuarios"
    );
  }
};

export const createUser = async (userData) => {
  try {
    const response = await apiClient.post("/user", userData);
    return response.data;
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
