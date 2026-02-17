"use client"
import React from 'react';
import { UserCheck, CheckCircle, AlertTriangle, X } from 'lucide-react';
import Image from 'next/image';

const Difference = () => {
  return (
    <section className="h3_section py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="h3_section_title font-bold text-slate-900 mb-3">The Resolute Difference</h2>
          <p className="fs-5 text-slate-600 max-w-2xl mx-auto">What you'll get that other corporate companies won't give you.</p>
        </div>

        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="relative group p-4">
              <div className="h3_rotate_bg absolute inset-0 bg-orange-100 rounded-3xl -rotate-2"></div>
              <div className="relative bg-slate-200 rounded-2xl overflow-hidden shadow-2xl aspect-4-5">
                 <Image 
                  src="/assets/v3/home-v3-differences.avif" 
                  alt="Travis professional HVAC tech" 
                  width={600}
                  height={750}
                  className="w-100 h-100 object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white-90 backdrop-blur rounded-xl shadow-lg">
                  <p className="h3_text_accent font-bold mb-1">Owner-Operator</p>
                  <p className="text-slate-900 font-medium mb-0">"I'm on every job. My reputation is my business." — Travis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ps-lg-5 space-y-12">
              <div className="mb-5">
                <div className="h3_icon_box_lg bg-orange-100 text-orange-600 mb-4 rounded-xl d-flex align-items-center justify-content-center">
                  <UserCheck size={28} />
                </div>
                <h3 className="fs-2 font-bold mb-3">You Get Travis, Not a Rotating Cast</h3>
                <p className="text-slate-600 leading-relaxed fs-5">
                  When you call Resolute, Travis personally handles your job from start to finish. No wondering who's showing up at your door. No explaining your problem to three different people. Just expert service from a local expert with 15+ years experience.
                </p>
              </div>

              <div className="h3_alert_box bg-slate-50 p-4 rounded-2xl border-l-4 border-orange-500 relative mb-4">
                <div className="absolute top-0 right-0 p-3 text-orange-200">
                  <AlertTriangle size={48} color="#fed7aa" />
                </div>
                <h4 className="fs-5 font-bold mb-3 d-flex align-items-center gap-2">
                  <CheckCircle className="text-green-500" size={24} color="#22c55e" /> Honest Repair vs. Replace
                </h4>
                <p className="text-slate-700 italic mb-3">
                  "A customer was told they needed a $1,200 gas valve replacement. I investigated and found a simple sensor needed a reset. They only paid for the service call."
                </p>
                <p className="text-slate-600 font-medium mb-0">Travis tells you the truth about what you actually need.</p>
              </div>

              <div className="row g-4">
                 <div className="col-sm-6">
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <h5 className="font-bold text-slate-900 mb-2">Fair Pricing</h5>
                        <p className="text-sm text-slate-600 mb-0">No bait-and-switch. No hidden fees. Upfront pricing before work starts.</p>
                    </div>
                 </div>
                 <div className="col-sm-6">
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <h5 className="font-bold text-slate-900 mb-2">Real Phone Support</h5>
                        <p className="text-sm text-slate-600 mb-0">No call centers. When you call, you talk to Travis directly.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
