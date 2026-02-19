"use client";
import React from "react";
import { Star, ChevronRight, MessageSquare } from "lucide-react";

const Testimonials = () => {
  const aboutTestimonials = [
    {
      text: "Travis has done an awesome job working on my ac units at my apartments. He was efficient to get the tenants comfortable. He has replaced a condenser and serviced the other units.",
      author: "Property Owner",
      location: "Multi-Unit Building",
      rating: 5
    },
    {
      text: "Travis has far been my number one go-to HVAC guy! He is responsive, clear, transparent, trustworthy, and reliable. For simple questions or big projects he has helped me.",
      author: "Real Estate Investor",
      location: "Multiple Properties",
      rating: 5
    }
  ];

    return (
              <section className="bg-[#001d3d] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/40 skew-x-[-20deg] translate-x-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">TESTIMONIALS</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Our Clients Feedback</h2>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-orange-500 fill-orange-500" size={16} />)}
              </div>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed italic">
              "Honest service that keeps Utah families comfortable without draining their savings. I want you to feel confident calling me when something breaks."
            </p>

            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-600 transition-all">
                <ChevronRight size={24} className="rotate-180" />
              </button>
              <button className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white hover:bg-white hover:text-orange-600 transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aboutTestimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-2xl relative">
                <div className="absolute -top-4 left-6 bg-orange-600 text-white w-10 h-10 flex items-center justify-center rounded-lg shadow-lg">
                  <MessageSquare size={20} />
                </div>
                <p className="text-slate-600 text-sm italic mb-6 leading-relaxed pt-2">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-black text-[#001d3d] uppercase">{t.author[0]}</div>
                  <div>
                    <h4 className="text-sm font-black text-[#001d3d] uppercase leading-none mb-1">{t.author}</h4>
                    <p className="text-[10px] font-black uppercase text-orange-600 tracking-widest">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonials;
