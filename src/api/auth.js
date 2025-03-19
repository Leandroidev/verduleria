import apiClient from "./apiClient.js";

export const userLogin = async (credentials) => {
  const currentUrl = window.location.pathname;
  try {
    if (currentUrl == "/admin/logIn") {
      const response = await apiClient.post("/admin/logIn", credentials);
      return response.data; // Retorna el token JWT
    } else {
      const response = await apiClient.post("/user/logIn", credentials);
      return response.data; // Retorna el token JWT
    }
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al iniciar sesión como usuario"
    );
  }
};
export const sessionActive = async () => {
  try {
    const response = await apiClient.post("/user/sessionActive");
    return response.data; // Retorna el token JWT
  } catch (error) {
    throw new Error(error.message || "Error al iniciar sesión como usuario");
  }
};
