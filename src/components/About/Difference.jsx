"use client";
import React from "react";
import { PhoneIncoming, BadgeDollarSign, Home, Award } from "lucide-react";
import SectionIcon from "../Common/SectionIcon";

const Difference = () => {
  const diffItems = [
    {
      title: "I Answer My Own Phone",
      desc: "Talk to Travis—not a call center. I'll answer questions and show up myself.",
      icon: PhoneIncoming
    },
    {
      title: "No Commissions",
      desc: "Zero incentive to upsell you. Honest repairs over expensive replacements.",
      icon: BadgeDollarSign
    },
    {
      title: "I Live Here Too",
      desc: "Based in West Jordan. Serving neighbors with direct accountability.",
      icon: Home
    },
    {
      title: "15+ Years Pro",
      desc: "Working on HVAC systems since before smartphones existed. Expert quality.",
      icon: Award
    }
  ];

  return (
   <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">WHY CHOOSE US</span>
          <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight mt-2">What Makes Me Different?</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diffItems.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-xl hover:translate-y-[-10px] transition-all duration-500 relative group overflow-hidden border-b-4 border-transparent hover:border-orange-600 cursor-default">
              {/* Icon Container with Fixed Hover State */}
              <div className="mb-8 bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-inner group-hover:bg-orange-600 transition-all duration-300">
                <item.icon 
                  size={32} 
                  className="text-orange-600 group-hover:text-white transition-colors duration-300" 
                />
              </div>
              
              <h3 className="text-lg font-black text-[#001d3d] mb-4 uppercase tracking-tight text-center leading-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed text-center font-medium">
                {item.desc}
              </p>

              {/* Step Number Badge */}
              <div className="absolute top-0 right-0 w-14 h-14 bg-slate-50 flex items-center justify-center font-black text-slate-200 text-2xl rounded-bl-[2rem] group-hover:bg-orange-100 group-hover:text-orange-600 transition-all duration-300">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Difference;
