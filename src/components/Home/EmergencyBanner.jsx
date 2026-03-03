"use client"
import React from 'react';

const EmergencyBanner = () => {
  return (
      <section className="bg-orange-600 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Your AC or Furnace Can't Wait Until Monday</h2>
          <p className="text-xl opacity-90 mb-10">Available 24/7/365 for emergency repairs across the Wasatch Front.</p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
             <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Emergency Hotline</p>
             <a href="tel:8019705797" className="text-4xl md:text-6xl font-black hover:scale-105 transition-transform inline-block">
               801-970-5797
             </a>
             <p className="mt-4 text-sm font-medium opacity-70">(Call or Text Anytime - After-hours fees apply)</p>
          </div>
        </div>
      </section>
  );
};

export default EmergencyBanner;
