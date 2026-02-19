"use client";
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionIcon from "../Common/SectionIcon";

const MeetTravis = () => {
  return (
    <>
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 w-[85%] rounded-t-[100px] rounded-b-[100px] overflow-hidden border-[15px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                alt="Travis working on HVAC" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute top-10 right-0 grid grid-cols-4 gap-2 opacity-30">
              {[...Array(16)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-orange-600"></div>)}
            </div>
            <div className="absolute bottom-10 right-4 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 z-20 border-l-8 border-orange-600">
               <span className="text-5xl font-black text-orange-600">15+</span>
               <div className="flex flex-col leading-none">
                 <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Years Of</span>
                 <span className="text-sm font-black uppercase text-[#001d3d]">Experience</span>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                <div className="w-8 h-[2px] bg-orange-600"></div> ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#001d3d] uppercase tracking-tight leading-tight">
                Meet Travis Angell: <br/>Your HVAC Expert & Neighbor
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              I've been working on HVAC systems for over 15 years, and I've seen it all—the good, the bad, and the dishonest. I started Resolute Heating & Air because I was tired of watching homeowners get pressured into expensive upgrades they didn't need.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#001d3d] font-bold">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><CheckCircle size={16} /></div>
                Ventilation System Maintenance
              </div>
              <div className="flex items-center gap-4 text-[#001d3d] font-bold">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><CheckCircle size={16} /></div>
                Honest Diagnostic & Fair Pricing
              </div>
              <div className="flex items-center gap-4 text-[#001d3d] font-bold">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><CheckCircle size={16} /></div>
                Owner-Operated (I'm on every job)
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
              <button className="bg-orange-600 text-white px-10 py-4 rounded font-black uppercase tracking-widest hover:bg-[#001d3d] transition-all flex items-center gap-2">
                CALL NOW <ArrowRight size={20} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-600 p-1">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" alt="Travis headshot" className="rounded-full object-cover w-full h-full" />
                </div>
                <div>
                  <p className="font-black text-[#001d3d] leading-none uppercase tracking-tight">Travis Angell</p>
                  <p className="text-xs text-slate-400 font-bold">Founder & HVAC Technician</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetTravis;
