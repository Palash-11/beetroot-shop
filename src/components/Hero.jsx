import React from 'react';

export default function Hero({ onOrderClick }) {
  return (
    <section className="p-4 bg-red-50 text-center rounded-b-2xl">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-1">
        Pure Beetroot Powder
      </h1>
      <p className="text-gray-600 text-sm mb-4">
        ১০০% প্রাকৃতিক ও খাঁটি বিটরুট গুড়া
      </p>

      {/* প্রোডাক্ট ইমেজ */}
      <div className="mb-4 flex justify-center">
        <img 
          src="/images/placeholder-beetroot.jpg" 
          alt="Beetroot Powder" 
          className="w-full max-w-xs h-auto object-contain rounded-xl shadow-md border-2 border-red-200"
        />
      </div>

      {/* মূল্য ও অর্ডার বাটন */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="text-2xl font-bold text-gray-900">
          ৳ <span className="text-red-600">৪৫০</span>
        </div>
        <button 
          onClick={onOrderClick}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-lg text-base shadow-lg transition-transform active:scale-95 flex items-center gap-2"
        >
          Order Now ►
        </button>
      </div>
    </section>
  );
}