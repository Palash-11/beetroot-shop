// src/api/ordersApi.js
import API from "./axios";

const PRODUCT_ID = 1;
const DELIVERY_ZONE_ID = 2; // Inside Dhaka

export const createOrder = (data) => {
  const quantity = data.package === "2_pack" ? 2 : 1;

  return API.post("/orders/checkout/", {
    customer_name: data.name,
    customer_phone: data.phone,
    customer_address: data.address,
    delivery_zone_id: DELIVERY_ZONE_ID,
    items: [{ product_id: PRODUCT_ID, quantity }],
    payment_method: "cod",
  });
};