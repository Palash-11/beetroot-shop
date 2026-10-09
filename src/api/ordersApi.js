import API from './axios';

export const createOrder = async (orderData) => {
  try {
    const response = await API.post('/orders/orders/', orderData);
    return response.data;
  } catch (error) {
    console.error("Order failed:", error);
    throw error;
  }
};