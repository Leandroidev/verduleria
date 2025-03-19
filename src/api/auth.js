import apiClient from "./apiClient.js";

export const userLogin = async (credentials) => {
  const currentUrl = window.location.pathname;
  try {
    if (
      currentUrl == "/admin/login" ||
      currentUrl == "/admin/LogIn" ||
      currentUrl == "/admin/logIn"
    ) {
      const response = await apiClient.post("/admin/logIn", credentials);
      return response.data;
    } else {
      const response = await apiClient.post("/user/logIn", credentials);
      return response.data;
    }
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error al iniciar sesión como usuario"
    );
  }
};
export const sessionActive = async (role) => {
  try {
    const response = await apiClient.post(
      role == "owner" ? "/admin/sessionActive" : "/user/sessionActive"
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message || "Error al iniciar sesión como usuario");
  }
};
