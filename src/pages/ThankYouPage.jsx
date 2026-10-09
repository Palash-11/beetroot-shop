import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  const location = useLocation();
  // অর্ডার পেজ থেকে পাঠানো আসল Order Data গ্রহণ করবে, না থাকলে Fallback ব্যবহার করবে
  const orderData = location.state?.order || null;

  const orderId = orderData?.order_number || orderData?.id || '#BS-' + Math.floor(100000 + Math.random() * 900000);
  const estimatedDelivery = orderData?.delivery_zone_name?.includes('Inside') 
    ? '১-২ কর্মদিবস' 
    : '২-৪ কর্মদিবস';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
          ✓
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          ধন্যবাদ! আপনার অর্ডারটি সফল হয়েছে
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          আমরা খুব শীঘ্রই আপনার ঠিকানায় অর্ডারটি পৌঁছে দেওয়ার ব্যবস্থা করছি।
        </p>

        {/* Order Info Card */}
        <div className="bg-emerald-50 rounded-2xl p-5 mb-6 text-left border border-emerald-100">
          <div className="flex justify-between items-center py-2 border-b border-emerald-200/60">
            <span className="text-gray-600 text-sm font-medium">অর্ডার নম্বর:</span>
            <span className="text-emerald-800 font-bold text-sm">{orderId}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-emerald-200/60">
            <span className="text-gray-600 text-sm font-medium">পেমেন্ট মেথড:</span>
            <span className="text-emerald-800 font-bold text-sm">ক্যাশ অন ডেলিভারি</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600 text-sm font-medium">আনুমানিক ডেলিভারি সময়:</span>
            <span className="text-emerald-800 font-bold text-sm">{estimatedDelivery}</span>
          </div>
        </div>

        {/* Support Note */}
        <p className="text-xs text-gray-500 mb-8 leading-relaxed">
          আমাদের প্রতিনিধির পক্ষ থেকে আপনার নাম্বারে কল করে অর্ডারটি নিশ্চিত করা হতে পারে। কোনো প্রশ্ন থাকলে সরাসরি আমাদের সাথে যোগাযোগ করুন।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl transition duration-200 text-sm text-center shadow-md hover:shadow-lg"
          >
            হোমপেজে ফিরে যান
          </Link>
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition duration-200 text-sm text-center flex items-center justify-center gap-2 shadow-md"
          >
            WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;