import apiClient from "./apiClient.js";

export const userLogin = async (credentials) => {
  const currentUrl = window.location.pathname;
  console.log(currentUrl);
  try {
    if (currentUrl == "/admin/logIn") {
      console.log("logeando admin");

      const response = await apiClient.post("/admin/logIn", credentials);
      return response.data; // Retorna el token JWT
    } else {
      console.log("logeando user");

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
    console.log("Respuesta del servidor:", response.data); // Agrega este log
    return response.data; // Retorna el token JWT
  } catch (error) {
    console.error("Error en sessionActive:", error); // Muestra detalles del error
    throw new Error(error.message || "Error al iniciar sesión como usuario");
  }
};
