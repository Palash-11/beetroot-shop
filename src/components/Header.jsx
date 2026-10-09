import React from 'react';

export default function Header({ onOrderClick }) {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white border-b sticky top-0 z-10">
      {/* আসল লোগো বা টেক্সট নেম */}
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-xl text-red-600">SHOTOTA STORE</span>
      </div>
      
      {/* অর্ডার করুন বাটন */}
      <button 
        onClick={onOrderClick}
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-full text-sm transition-all shadow-md"
      >
        অর্ডার করুন
      </button>
    </header>
  );
}