import API from './axios';

export const createOrder = async (orderData) => {
  try {
    // এখানে আপনার ব্যাকএন্ডের সঠিক URL অনুযায়ী টেস্ট করুন
    const response = await API.post('/orders/orders/', orderData); 
    return response.data;
  } catch (error) {
    console.error("Order failed:", error);
    throw error;
  }
};