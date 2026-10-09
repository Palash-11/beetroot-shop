import API from './axios';

// ডেলিভারি জোনের তালিকা পাওয়ার জন্য
export const getDeliveryZones = () => API.get('/catalog/zones/');