import API from './axios';

// কুপন ভ্যালিডেট করার জন্য
export const validateCoupon = (code) => API.post('/catalog/coupons/validate/', { code });