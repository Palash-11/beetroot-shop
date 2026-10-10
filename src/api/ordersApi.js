import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // CRA হলে process.env.REACT_APP_API_URL
});

export const createOrder = (data) => API.post("/orders/checkout/", data);