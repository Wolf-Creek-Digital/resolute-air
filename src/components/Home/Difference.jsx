"use client"
import React from 'react';
import { UserCheck, CheckCircle, AlertTriangle, X } from 'lucide-react';
import Image from 'next/image';
import SectionIcon from '../Common/SectionIcon';

const Difference = () => {
  return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Resolute Difference</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">What you'll get that other corporate companies won't give you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <div className="relative bg-slate-200 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                  alt="Travis professional HVAC tech" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur rounded-xl shadow-lg">
                  <p className="text-orange-600 font-bold mb-1">Owner-Operator</p>
                  <p className="text-slate-900 font-medium">"I'm on every job. My reputation is my business." — Travis</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                  <UserCheck />
                </div>
                <h3 className="text-2xl font-bold">You Get Travis, Not a Rotating Cast</h3>
                <p className="text-slate-600 leading-relaxed">
                  When you call Resolute, Travis personally handles your job from start to finish. No wondering who's showing up at your door. No explaining your problem to three different people. Just expert service from a local expert with 15+ years experience.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-orange-500 relative">
                <div className="absolute top-0 right-0 p-3 text-orange-200">
                  <AlertTriangle size={48} />
                </div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Honest Repair vs. Replace
                </h4>
                <p className="text-slate-700 italic mb-4">
                  "A customer was told they needed a $1,200 gas valve replacement. I investigated and found a simple sensor needed a reset. They only paid for the service call."
                </p>
                <p className="text-slate-600 font-medium">Travis tells you the truth about what you actually need.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="p-6 bg-slate-50 rounded-xl">
                    <h5 className="font-bold text-slate-900 mb-2">Fair Pricing</h5>
                    <p className="text-sm text-slate-600 text-balance">No bait-and-switch. No hidden fees. Upfront pricing before work starts.</p>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-xl">
                    <h5 className="font-bold text-slate-900 mb-2">Real Phone Support</h5>
                    <p className="text-sm text-slate-600">No call centers. When you call, you talk to Travis directly.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Difference;
