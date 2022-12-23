import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const API_URL = "http://localhost:5000/api";

const api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = config.headers ?? {};
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default api;
