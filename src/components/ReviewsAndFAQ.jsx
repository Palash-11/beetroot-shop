import React from 'react';

export default function ReviewsAndFAQ() {
  return (
    <section className="py-8 px-4 bg-white border-t border-gray-200 space-y-8">
      {/* Reviews */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Reviews</h3>
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-xs">
            <p className="font-semibold text-gray-800">★★★★★ শরিফুল ইসলাম</p>
            <p className="text-gray-600 mt-1">"প্রোডাক্ট ১০০% খাঁটি, ডেলিভারিও বেশ দ্রুত পেয়েছি।"</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">FAQ</h3>
        <div className="space-y-2 text-xs">
          <details className="bg-gray-50 p-3 rounded-lg border border-gray-100 cursor-pointer">
            <summary className="font-semibold text-gray-800">এটি কীভাবে সংরক্ষণ করব?</summary>
            <p className="text-gray-600 mt-2">শুষ্ক এবং ঠাণ্ডা স্থানে আলো থেকে দূরে সংরক্ষণ করুন।</p>
          </details>
        </div>
      </div>
    </section>
  );
}