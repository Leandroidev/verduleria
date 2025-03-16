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

    return response.data; // Retorna el token JWT
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al iniciar sesión como usuario"
    );
  }
};
export const sessionActive = async () => {
  try {
    const response = await apiClient.post("/user/sessionActive");
    console.log("Respuesta del servidor:", response.data); // Agrega este log
    return response.data; // Retorna el token JWT
  } catch (error) {
    console.error("Error en sessionActive:", error); // Muestra detalles del error
    throw new Error(error.message || "Error al iniciar sesión como usuario");
  }
};
