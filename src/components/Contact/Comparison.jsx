import React from 'react';
import { Building, X, UserCheck, Check } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-black text-[#001d3d] uppercase italic tracking-tight">Why Choose a Local HVAC Contractor?</h2>
                    <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Resolute vs. National Chains</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-4 text-slate-400 mb-10 border-b border-slate-200 pb-6">
                            <Building size={32} />
                            <span className="font-black uppercase tracking-widest text-sm">National Corporations</span>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Talk to a call center (not the tech)",
                                "Get whoever is available (random guy)",
                                "Pay for their massive advertising & overhead",
                                "Deal with rigid corporate policies"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-slate-400 italic">
                                    <X size={16} className="text-red-400 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-10 rounded-[40px] bg-[#001d3d] text-white border-b-8 border-orange-600 shadow-2xl relative overflow-hidden">
                        <div className="flex items-center gap-4 text-orange-500 mb-10 border-b border-white/10 pb-6">
                            <UserCheck size={32} />
                            <span className="font-black uppercase tracking-widest text-sm">Resolute Heating & Air</span>
                        </div>
                        <ul className="space-y-6 relative z-10">
                            {[
                                "Talk directly to Travis (the guy on site)",
                                "Same experienced technician every time",
                                "Pay for quality work, not overhead",
                                "Work with a neighbor who lives here"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-white italic">
                                    <Check size={16} className="text-orange-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 p-6 bg-white/5 rounded-2xl italic text-xs font-medium text-slate-400">
                            "We're your neighbors. Travis is based out of West Jordan and runs into customers at the store. That local accountability keeps us honest."
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
