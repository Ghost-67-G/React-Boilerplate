import axios from "axios";
import { basePath } from "./constants.js";

const apiService = axios.create();
apiService.defaults.baseURL = basePath;
apiService.defaults.timeout = 350000;
apiService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("app-access-token-auth0")
    config.headers = {
      Accept: "application/json, text/plain, */*",
      Authorization: token ? `Bearer ${token}` : '',
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "access-control-allow-headers": "*",
      "access-control-allow-methods": "*",
      "access-control-allow-origin": "*"
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
