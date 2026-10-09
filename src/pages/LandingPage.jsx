import React, { useState } from 'react';
import { 
  CheckCircle, ShieldCheck, Heart, Zap, Award, 
  Clock, Truck, Star, ArrowRight, ShoppingBag 
} from 'lucide-react';

export default function BeetrootLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    package: '1_pack'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/v1/orders/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setOrderSuccess(true);
      } else {
        alert('অর্ডার প্রক্রিয়াভুক্ত করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
    } catch (err) {
      alert('সার্ভার ত্রুটি! ইন্টারনেটের সংযোগ পরীক্ষা করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">

      {/* 🟢 SECTION 1: Hook & Headline */}
      <section className="bg-gradient-to-r from-rose-900 to-red-800 text-white py-4 px-4 text-center sticky top-0 z-50 shadow-md">
        <p className="text-sm md:text-base font-semibold flex items-center justify-center gap-2">
          <Zap className="w-5 h-5 text-amber-300 animate-pulse" />
          ক্লান্তি ও রক্তস্বল্পতায় ভুগছেন? প্রতিদিন ১ চামচ অর্গানিক বিটরুট পাউডারেই পান প্রাকৃতিকভাবে দ্বিগুণ এনার্জি!
        </p>
      </section>

      {/* 🟢 SECTION 2: Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            🌿 ১০০% প্রিমিয়াম ও অর্গানিক
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            শরীরের রক্তস্বল্পতা ও ক্লান্তি দূর করুন প্রাকৃতিকভাবে!
          </h1>
          <p className="text-slate-600 text-base md:text-lg mb-6">
            বিটরুট পাউডার রক্তের হিমোগ্লোবিন বাড়াতে, ব্লাড প্রেশার নিয়ন্ত্রণে রাখতে এবং প্রাকৃতিক স্ট্যামিনা বৃদ্ধিতে অত্যন্ত কার্যকরী।
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#order-form" 
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-xl text-center shadow-lg transition flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" /> এখনই অর্ডার করুন
            </a>
            <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
              <Truck className="w-5 h-5 text-emerald-600" /> ক্যাশ অন ডেলিভারি
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/images/beetroot-hero.jpg" 
            alt="Beetroot Powder Packaging" 
            className="rounded-2xl shadow-2xl object-cover w-full h-80 md:h-[400px]"
          />
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
            <Award className="w-10 h-10 text-amber-500" />
            <div>
              <p className="font-bold text-slate-900 text-sm">১০০% কেমিক্যালমুক্ত</p>
              <p className="text-xs text-slate-500">বিজ্ঞানসম্মতভাবে প্রক্রিয়াজাত</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 SECTION 3: Problem & Pain Amplification */}
      <section className="bg-rose-50/60 py-12 border-y border-rose-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
            আপনি কি প্রতিদিন এই সমস্যাগুলোর মুখোমুখি হচ্ছেন?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "সারাদিন অল্পতেই অতিরিক্ত ক্লান্তি ও অলসতা বোধ হওয়া?",
              "রক্তে হিমোগ্লোবিনের মাত্রা কম বা এনিমিয়ার লক্ষণ থাকা?",
              "উচ্চ রক্তচাপ এবং অনিয়মিত হজমপ্রক্রিয়া?",
              "ত্বক নিস্তেজ হয়ে পড়া ও অকালে বয়সের ছাপ দেখা দেওয়া?"
            ].map((problem, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-rose-200 flex items-start gap-3 shadow-sm">
                <span className="text-red-500 font-bold text-lg">✕</span>
                <p className="text-slate-700 text-sm md:text-base">{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-rose-700 font-medium mt-6 text-sm md:text-base">
            ⚠️ অবহেলা করলে এই সাধারণ সমস্যাগুলোই পরবর্তীতে বড় ধরনের স্বাস্থ্যঝুঁকি তৈরি করতে পারে!
          </p>
        </div>
      </section>

      {/* 🟢 SECTION 4: Solution & Value Proposition */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
          কেন আমাদের এই অর্গানিক বিটরুট পাউডার ব্যবহার করবেন?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "হিমোগ্লোবিন বৃদ্ধি",
              desc: "প্রচুর আয়রন ও নাইট্রেট সমৃদ্ধ, যা দ্রুত রক্তস্বল্পতা ও এনিমিয়া দূর করতে সাহায্য করে।"
            },
            {
              title: "ন্যাচারাল এনার্জি বোস্টার",
              desc: "শরীরের অক্সিজেনের ব্যবহার বাড়িয়ে সারাদিন কাজের শক্তি ও স্ট্যামিনা জোগায়।"
            },
            {
              title: "ত্বক ও হজম স্বাস্থ্য",
              desc: "রক্ত পরিচ্ছন্ন করে ত্বকে প্রাকৃতির উজ্জ্বলতা আনে এবং হজমশক্তি উন্নত করে।"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
              <CheckCircle className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 SECTION 5: Social Proof & Trust Builders */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">৫,০০০+ সন্তুষ্ট গ্রাহকের বিশ্বাস</h2>
            <div className="flex justify-center items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-slate-300 text-sm ml-2">(৪.৯/৫ রেটিং)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <p className="text-slate-300 text-sm mb-3">
                "বিটরুট পাউডারটি গত ১৫ দিন ধরে সকালে খাচ্ছি। আমার হিমোগ্লোবিনের সমস্যা ছিল, এখন অলসতা ভাব একদমই নেই। কোয়ালিটি সত্যিই চমৎকার!"
              </p>
              <p className="font-bold text-white text-sm">— ড. তানিয়া আহমেদ, ঢাকা</p>
            </div>
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
              <p className="text-slate-300 text-sm mb-3">
                "১০০% খাঁটি জিনিস। প্যাকেজিংও সুন্দর ছিল। দ্রুত ডেলিভারি পেয়েছি। ধন্যবাদ আপনাদের!"
              </p>
              <p className="font-bold text-white text-sm">— মাহমুদুল হাসান, চট্টগ্রাম</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 SECTION 6: Offer & Bonuses */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-6 md:p-8 text-center shadow-lg">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            আজকের বিশেষ অফার
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            সীমিত সময়ের ছাড় এবং বোনাস অফার!
          </h2>
          <div className="my-4">
            <span className="text-slate-400 line-through text-lg mr-3">৳১২০০</span>
            <span className="text-3xl md:text-4xl font-extrabold text-rose-700">৳৭৯০</span>
            <span className="text-sm text-emerald-600 font-bold ml-2">(Save ৳৪১০)</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-amber-200 inline-block text-left text-sm text-slate-700 mb-4">
            <p className="font-bold text-amber-800 mb-1">🎁 আজকের অর্ডারে সাথে পাচ্ছেন:</p>
            <p>✓ ফ্রি ডিজিটাল ই-বুক: "১০টি পাওয়ারফুল হেলথ রেসিপি"</p>
            <p>✓ ২ প্যাক অর্ডারে সম্পূর্ণ ফ্রি ডেলিভারি!</p>
          </div>
        </div>
      </section>

      {/* 🟢 SECTION 7: Final Call-to-Action (Checkout Form) */}
      <section id="order-form" className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">অর্ডার নিশ্চিত করতে নিচের ফর্মটি পূরণ করুন</h2>
            <p className="text-slate-500 text-sm mt-1">ক্যাশ অন ডেলিভারিতে পণ্য বুঝে পেয়ে টাকা পরিশোধ করুন</p>
          </div>

          {orderSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold mb-1">ধন্যবাদ! আপনার অর্ডারটি গৃহীত হয়েছে।</h3>
              <p className="text-sm">আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে কল করে অর্ডারটি কনফার্ম করবেন।</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">আপনার নাম *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="যেমন: রহিম আহমেদ"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">মোবাইল নম্বর *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="যেমন: 017xxxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">সম্পূর্ণ ঠিকানা *</label>
                <textarea 
                  name="address" 
                  required 
                  rows="3"
                  placeholder="জেলা, থানা ও এলাকার নাম লিখুন"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none text-sm"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">প্যাকেজ নির্বাচন করুন *</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-3 border rounded-xl cursor-pointer text-center text-sm ${formData.package === '1_pack' ? 'border-rose-600 bg-rose-50 text-rose-800 font-bold' : 'border-slate-200'}`}>
                    <input 
                      type="radio" 
                      name="package" 
                      value="1_pack" 
                      checked={formData.package === '1_pack'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    ১টি প্যাক - ৳৭৯০
                  </label>
                  <label className={`p-3 border rounded-xl cursor-pointer text-center text-sm ${formData.package === '2_pack' ? 'border-rose-600 bg-rose-50 text-rose-800 font-bold' : 'border-slate-200'}`}>
                    <input 
                      type="radio" 
                      name="package" 
                      value="2_pack" 
                      checked={formData.package === '2_pack'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    ২টি প্যাক - ৳১৫০০ (ফ্রি ডেলিভারি)
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl shadow-lg transition text-base mt-2"
              >
                {isSubmitting ? 'প্রসেস করা হচ্ছে...' : 'অর্ডার কনফার্ম করুন'}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}