import React from 'react';

const reviews = [
  {
    name: 'ফারজানা আক্তার',
    location: 'ঢাকা',
    comment: 'নিয়মিত ২ সপ্তাহ খাওয়ার পর থেকে ত্বকের উজ্জ্বলতা সত্যিই বেড়েছে। প্রোডাক্টটি একদম খাঁটি!',
    rating: 5,
  },
  {
    name: 'মো: রফিকুল ইসলাম',
    location: 'চট্টগ্রাম',
    comment: 'রক্তস্বল্পতার সমস্যার জন্য নিয়েছিলাম। ডা. এর পরামর্শে প্রতিদিন খেয়ে বেশ উপকার পাচ্ছি।',
    rating: 5,
  },
  {
    name: 'সাবরিনা সুলতানা',
    location: 'উত্তরা, ঢাকা',
    comment: 'ডেলিভারি খুব দ্রুত ছিল এবং পাউডারের কোয়ালিটি অনেক ভালো। ধন্যবাদ বিটরুট শপকে!',
    rating: 5,
  },
];

const ReviewsCarousel = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">গ্রাহকদের রিভিউ</h2>
          <p className="text-gray-600">আমাদের কাস্টমাররা কী বলছেন দেখে নিন</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-3">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{review.comment}"
                </p>
              </div>
              <div className="border-t pt-3 border-gray-100">
                <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
                <span className="text-xs text-gray-500">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;