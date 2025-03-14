import axios from "axios";
const URL = "http://localhost:5000" || process.env.APIURL;
//https://verduleria-restapi.onrender.com
// Crear una instancia de Axios
const apiClient = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token JWT a las solicitudes
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
