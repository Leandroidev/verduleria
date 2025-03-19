import axios from "axios";
const URL = "http://localhost:5000" || process.env.APIURL;
//const URL = "https://verduleria-restapi.onrender.com" || process.env.APIURL;

//https://verduleria-restapi.onrender.com
const apiClient = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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
