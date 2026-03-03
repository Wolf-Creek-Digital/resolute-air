import React from 'react';
import { ShieldCheck, DollarSign, Check, TrendingDown, X } from 'lucide-react';

const EmergencyMaintenance = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                                <div className="w-10 h-[2px] bg-orange-600"></div> MAINTENANCE PLANS
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight italic">
                                Stop Paying for <br /> Emergency Repairs
                            </h2>
                        </div>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                            Regular maintenance doesn't just save money—it gives you peace of mind knowing your system is less likely to fail when you need it most.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                                <ShieldCheck className="text-orange-600 mb-4" size={32} />
                                <h5 className="font-black text-[#001d3d] uppercase text-sm mb-2">Priority Scheduling</h5>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Members skip the line during peak seasons.</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                                <DollarSign className="text-orange-600 mb-4" size={32} />
                                <h5 className="font-black text-[#001d3d] uppercase text-sm mb-2">10% Off Repairs</h5>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Save on all parts and labor for any repair.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[50px] shadow-2xl border border-slate-100 relative overflow-hidden">
                        <h3 className="text-2xl font-black text-[#001d3d] uppercase mb-8 text-center border-b border-slate-50 pb-6">Choose Your Plan</h3>
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-200 group hover:border-orange-600 transition-all">
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Single System</p>
                                    <p className="text-5xl font-black text-[#001d3d]">$299<span className="text-xs opacity-40">/yr</span></p>
                                </div>
                                <div className="flex-grow space-y-2">
                                    <p className="text-xs font-black text-[#001d3d] uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-600" /> 2 Tune-ups Yearly</p>
                                    <p className="text-xs font-black text-[#001d3d] uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-600" /> Priority Response</p>
                                </div>
                                <a href="tel:8019705797" className="bg-[#001d3d] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest group-hover:bg-orange-600 transition-colors block text-center mt-6">CALL NOW</a>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8 bg-[#001d3d] p-8 rounded-[2rem] text-white relative group transition-all transform hover:scale-[1.02]">
                                <div className="absolute top-0 right-10 bg-orange-600 px-4 py-1 text-[10px] font-black uppercase rounded-b-lg">Best Value</div>
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Two Systems</p>
                                    <p className="text-5xl font-black italic">$549<span className="text-xs opacity-40">/yr</span></p>
                                    <p className="text-[9px] text-orange-500 font-black uppercase">SAVE $49 ANNUALLY</p>
                                </div>
                                <div className="flex-grow space-y-2">
                                    <p className="text-xs font-black uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-500" /> 4 Tune-ups Yearly</p>
                                    <p className="text-xs font-black uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-500" /> VIP Support</p>
                                </div>
                                <a href="tel:8019705797" className="bg-white text-[#001d3d] px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 hover:text-white transition-colors block text-center mt-6">CALL NOW</a>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-xs font-bold uppercase text-slate-400">Three or more systems? <span className="text-orange-600 underline cursor-pointer">Call for custom quote</span></p>
                        </div>
                    </div>
                </div>

                {/* Real Cost Comparison Section */}
                <div className="max-w-5xl mx-auto bg-white rounded-[50px] p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-12">
                        <h4 className="text-2xl font-black text-[#001d3d] uppercase italic">The Real Cost of Skipping Maintenance</h4>
                        <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mt-2">Prevention vs. Crisis</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-red-600 mb-8 border-b border-red-50 pb-4">
                                <TrendingDown size={28} />
                                <span className="font-black uppercase tracking-widest text-sm">Without Regular Plan</span>
                            </div>
                            <ul className="space-y-5">
                                {[
                                    "Energy bills increase 15-30% from dirty parts",
                                    "Small $200 problems become $2,000 emergencies",
                                    "System fails 5-10 years earlier than normal",
                                    "Frequent breakdowns during peak extreme weather",
                                    "Manufacturer warranty may be voided"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-slate-400 leading-tight">
                                        <X size={14} className="text-red-600 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-green-600 mb-8 border-b border-green-50 pb-4">
                                <ShieldCheck size={28} />
                                <span className="font-black uppercase tracking-widest text-sm">With Maintenance Plan</span>
                            </div>
                            <ul className="space-y-5">
                                {[
                                    "Lowest possible energy bills year-round",
                                    "Catch problems early when repairs are cheap",
                                    "System lasts significantly longer (thousands saved)",
                                    "Avoid high-cost emergency service dispatch",
                                    "Fully maintained manufacturer warranty"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-[#001d3d] leading-tight">
                                        <Check size={14} className="text-green-600 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyMaintenance;
