"use client"
import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { trustBadges } from '../../data/homeData';

const Hero = () => {
  return (
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
           {/* Fallback pattern for HVAC background */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
           <Image 
            src="/assets/img/hero_bg_1.jpg" 
            alt="Travis working on HVAC" 
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-400 font-semibold text-sm uppercase tracking-widest">
              Available 24/7 for Emergencies
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              AC Not Cooling? <br/>
              <span className="text-orange-500 underline decoration-white/20">Furnace Broken?</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              Skip the high-pressure sales tactics. Get expert help from Travis, an owner-operator with 15+ years experience who tells you the truth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8019705797" className="flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold px-8 py-5 rounded-xl transition-all shadow-xl shadow-orange-600/20 group">
                <Phone fill="white" /> Get Fast Service Now
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:8019705797" className="flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 text-lg font-bold px-8 py-5 rounded-xl transition-all shadow-xl">
                Call to Schedule
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-4">
              <h3 className="text-white font-bold text-xl border-b border-white/10 pb-4 mb-4">The Resolute Guarantee</h3>
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200">
                  <span className="text-orange-500">{badge.icon}</span>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
