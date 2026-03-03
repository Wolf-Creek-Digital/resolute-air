import React from 'react';
import { ChevronRight } from 'lucide-react';

const EmergencyProcess = () => {
    return (
        <section className="py-24 bg-[#001d3d] text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">THE PROCESS</span>
                    <h2 className="text-4xl font-black uppercase tracking-tight italic">What to Expect</h2>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {[
                        { s: "01", t: "Call or Text", d: "Travis answers directly to help." },
                        { s: "02", t: "Estimated Time", d: "Typically 1 hour or less response." },
                        { s: "03", t: "Stocked Truck", d: "Parts on hand for first-visit fix." },
                        { s: "04", t: "Fast Diagnosis", d: "Identify the problem quickly." },
                        { s: "05", t: "Upfront Price", d: "Price given before work starts." },
                        { s: "06", t: "Same-Day Fix", d: "Most repairs finished on spot." }
                    ].map((item, i) => (
                        <div key={i} className="relative text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-2xl font-black text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                {item.s}
                            </div>
                            <h5 className="font-black uppercase text-xs mb-2">{item.t}</h5>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{item.d}</p>
                            {i < 5 && <ChevronRight className="absolute top-8 -right-4 text-white/10 hidden lg:block" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmergencyProcess;
