"use client"
import React from 'react';
import { Flame } from 'lucide-react';
import SectionIcon from '../Common/SectionIcon';

const PreFooter = () => {
  return (
    <section className="bg-slate-950 text-slate-400 py-20 relative z-index-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-12 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="p-2 rounded bg-orange-600 text-white">
                  <Flame size={20} fill="currentColor" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white uppercase flex items-center gap-2">
                  RESOLUTE <span className="text-orange-600">HEATING & AIR</span>
                </span>
              </div>
              <p className="max-w-xs mx-auto md:mx-0 font-medium text-slate-400">
                Honest, expert HVAC service from a local owner-operator who cares.
              </p>
            </div>
            
            <div className="space-y-4 flex flex-col md:align-items-start align-items-center">
              <p className="text-white font-bold text-xl uppercase tracking-tight mb-2 text-center md:text-left d-flex align-items-center gap-2 justify-content-center md:justify-content-start">
                <SectionIcon size={20} />
                Ready for Honest HVAC Service?
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="tel:8019705797" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-600/20 uppercase tracking-widest text-sm text-decoration-none d-inline-block hover-scale">
                  Call Now
                </a>
              </div>
              <p className="text-2xl font-black text-white mt-4">801-970-5797</p>
            </div>
          </div>
          

        </div>
      </section>
  );
};

export default PreFooter;
