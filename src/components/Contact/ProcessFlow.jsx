import React from 'react';
import SectionIcon from '../Common/SectionIcon';

const ProcessFlow = () => {
    return (
        <section className="py-24 bg-[#001d3d] text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20 space-y-4">
                    <SectionIcon size={16} /><span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">FOLLOWING UP</span>
                    <h2 className="text-4xl font-black uppercase tracking-tight italic">What Happens After You Contact Us?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { s: "01", t: "Fast Response", d: "We'll get back to you within 2-4 hours (usually faster)." },
                        { s: "02", t: "Quick Questions", d: "We'll confirm details and schedule the right amount of time." },
                        { s: "03", t: "Scheduling", d: "Convenient same-day or next-day appointments available." },
                        { s: "04", t: "Confirmation", d: "You'll get a call or text before Travis arrives." },
                        { s: "05", t: "On-Time Arrival", d: "Our goal is precision. We'll contact you if traffic hits." },
                        { s: "06", t: "Honest Diagnosis", d: "Upfront pricing and options before any work starts." },
                        { s: "07", t: "Quality Service", d: "Once approved, Travis gets straight to work." }
                    ].map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="flex items-center gap-6 mb-4">
                                <span className="text-5xl font-black italic text-orange-600 opacity-30 group-hover:opacity-100 transition-all">{step.s}</span>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <h5 className="text-lg font-black uppercase tracking-tight italic mb-3">{step.t}</h5>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-tight leading-relaxed">{step.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
