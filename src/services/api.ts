import axios from 'axios';
import { AUTH_CONFIG } from 'utils/authConfig';

const api = axios.create({
  baseURL: AUTH_CONFIG.backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;
