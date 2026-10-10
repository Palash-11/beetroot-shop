import API from './axios';

export const createOrder = async (orderData) => {
  try {
    const response = await API.post('checkout/', orderData);
    return response.data;
  } catch (error) {
    console.error("Order failed:", error);
    throw error;
  }
};