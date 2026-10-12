// src/api/axios.js
import axios from 'axios';

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    'https://landingpage-3s1f.onrender.com/api/v1',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;