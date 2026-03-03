"use client";
import React from "react";
import { Phone } from "lucide-react";

const Cta = () => {
    return (

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-6xl font-black text-[#001d3d] uppercase tracking-tighter mb-8 italic text-balance">
             Ready to Work with an HVAC <br/> Contractor You Can Trust?
           </h2>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="tel:8019705797" className="bg-orange-600 text-white px-12 py-5 rounded-lg font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-600/30 hover:bg-[#001d3d] transition-all inline-block text-center">
                Call Now
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-xl">
                  <Phone size={24} fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Emergency Help</p>
                  <p className="text-xl font-black text-[#001d3d]">801-970-5797</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    );
};

export default Cta;
