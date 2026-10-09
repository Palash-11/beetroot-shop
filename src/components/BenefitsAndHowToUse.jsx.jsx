import React from 'react';

export default function BenefitsAndHowToUse() {
  const benefits = [
    {
      id: 1,
      title: "রক্তচাপ নিয়ন্ত্রণে সাহায্য করে",
      desc: "ন্যাচারাল নাইট্রেটস সমৃদ্ধ, যা রক্ত সঞ্চালন স্বাভাবিক রাখে।",
      icon: "❤️"
    },
    {
      id: 2,
      title: "ত্বকের উজ্জ্বলতা বাড়ায়",
      desc: "অ্যান্টি-অক্সিডেন্ট ও ভিটামিন সি যুক্ত, যা ত্বকের লাবণ্য বজায় রাখে।",
      icon: "✨"
    },
    {
      id: 3,
      title: "স্ট্যামিনা ও এনার্জি বৃদ্ধি করে",
      desc: "ওয়ার্কআউট বা সারাদিনের কাজের ক্লান্তি দূর করতে অত্যন্ত কার্যকরী।",
      icon: "⚡"
    },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto space-y-12">
      {/* Benefits Section */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            বিটরুট পাউডারের উপকারিতা
          </h2>
          <div className="w-16 h-1 bg-rose-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-rose-50 text-2xl flex items-center justify-center rounded-xl mb-4 border border-rose-100">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How To Use Section */}
      <div className="bg-gradient-to-br from-rose-900 to-rose-800 text-white rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-rose-700/30 rounded-full blur-xl pointer-events-none"></div>

        <h2 className="text-2xl font-bold text-center mb-6 tracking-tight">
          কিভাবে ব্যবহার করবেন? (How to use)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start space-x-3">
            <span className="text-2xl">🥛</span>
            <div>
              <h4 className="font-bold text-rose-100 text-base mb-1">শরবত বানিয়ে</h4>
              <p className="text-sm text-rose-50/90 leading-relaxed">
                ১ গ্লাস কুসুম গরম বা সাধারণ পানিতে ১ চামচ বিটরুট পাউডার ও সামান্য মধু মিশিয়ে প্রতিদিন সকালে পান করুন।
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start space-x-3">
            <span className="text-2xl">🥤</span>
            <div>
              <h4 className="font-bold text-rose-100 text-base mb-1">স্মুদি বা জুসে</h4>
              <p className="text-sm text-rose-50/90 leading-relaxed">
                আপনার দৈনন্দিন যেকোনো জুস, স্মুদি বা প্রোটিন শেকের সাথে ১ চামচ মিশিয়ে পুষ্টিগুণ বাড়িয়ে নিন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}