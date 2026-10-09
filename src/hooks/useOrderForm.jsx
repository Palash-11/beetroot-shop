// src/hooks/useOrderForm.js
import { useState, useEffect } from 'react';
import { getDeliveryZones } from '../api/zonesApi';
import { validateCoupon } from '../api/couponsApi';

export const useOrderForm = (productPrice = 0) => {
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');

  useEffect(() => {
    getDeliveryZones()
      .then((res) => setZones(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deliveryCharge = selectedZone ? parseFloat(selectedZone.charge) : 0;
  const subtotal = productPrice * quantity;
  const total = Math.max(0, subtotal + deliveryCharge - discount);

  const handleApplyCoupon = async () => {
    try {
      const res = await validateCoupon(couponCode);
      setDiscount(res.data.discount_amount);
      setCouponError('');
    } catch (err) {
      setCouponError(err.response?.data?.message || 'Invalid Coupon');
      setDiscount(0);
    }
  };

  return {
    zones,
    selectedZone,
    setSelectedZone,
    quantity,
    setQuantity,
    couponCode,
    setCouponCode,
    discount,
    couponError,
    deliveryCharge,
    subtotal,
    total,
    handleApplyCoupon,
  };
};

export default useOrderForm;