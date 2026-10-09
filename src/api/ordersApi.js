import axios from 'axios';

// যদি Django ব্যাকএন্ডে /api/orders/ থাকে:
const API_URL = `${process.env.REACT_APP_API_URL}/orders/`;

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(API_URL, orderData);
    return response.data;
  } catch (error) {
    console.error("Order failed:", error);
    throw error;
  }
};