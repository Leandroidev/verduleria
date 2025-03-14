import apiClient from "./apiClient.js";

// Inicio de sesión para administradores
export const adminLogin = async (credentials) => {
  try {
    const response = await apiClient.post("/admin/logIn", credentials);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error al iniciar sesión como administrador"
    );
  }
};

// Inicio de sesión para usuarios
export const userLogin = async (credentials) => {
  try {
    const response = await apiClient.post("/user/logIn", credentials);
    console.log(response);

    return response.data; // Retorna el token JWT
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al iniciar sesión como usuario"
    );
  }
};
