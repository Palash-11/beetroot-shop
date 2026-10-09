import React from 'react';

export default function TrustBadges() {
  return (
    <section className="bg-white py-4 border-y border-gray-200">
      <div className="max-w-md mx-auto flex justify-around items-center text-xs md:text-sm font-semibold text-gray-700">
        <div className="flex items-center gap-1">
          <span className="text-green-600">✓</span> Cash on Delivery
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-600">✓</span> Fast Delivery
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-600">✓</span> Quality Tested
        </div>
      </div>
    </section>
  );
}