import API from './axios';

// ১. সব প্রোডাক্ট পাওয়ার জন্য
export const getProducts = () => API.get('/catalog/products/');

// ২. নির্দিষ্ট একটি প্রোডাক্টের বিস্তারিত পাওয়ার জন্য
export const getProductById = (id) => API.get(`/catalog/products/${id}/`);