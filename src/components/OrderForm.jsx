import React from 'react';

export default function OrderForm({ formData, handleInputChange, handleSubmit, loading }) {
  return (
    <div className="p-4 bg-red-50/50 rounded-xl m-2 border border-red-100">
      <h2 className="text-xl font-bold text-center text-red-700 mb-4 tracking-wide">
        ORDER FORM
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            required
            value={formData.name || ''} 
            onChange={handleInputChange} 
            placeholder="আপনার নাম লিখুন" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
          <input 
            type="tel" 
            name="phone" 
            required
            value={formData.phone || ''} 
            onChange={handleInputChange} 
            placeholder="মোবাইল নম্বর" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Address / District</label>
          <input 
            type="text" 
            name="address" 
            required
            value={formData.address || ''} 
            onChange={handleInputChange} 
            placeholder="সম্পূর্ণ ঠিকানা ও জেলা" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          />
        </div>

        {/* সামারি কার্ড */}
        <div className="bg-white p-3 rounded-lg border text-sm text-gray-700 space-y-1">
          <p><span className="font-semibold">Package:</span> {formData.package || '1pack'}</p>
          <p><span className="font-semibold">Payment Summary:</span> Cash on Delivery</p>
        </div>

        {/* সাবমিট বাটন */}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-lg shadow-md transition-all active:scale-98 disabled:opacity-50"
        >
          {loading ? 'প্রসেসিং হচ্ছে...' : 'Confirm Order'}
        </button>
      </form>
    </div>
  );
}