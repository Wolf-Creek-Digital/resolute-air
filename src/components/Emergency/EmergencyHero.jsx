import React from 'react';
import { Timer } from 'lucide-react';import SectionIcon from '../Common/SectionIcon';


const EmergencyHero = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3">
                        <SectionIcon size={20} /><div className="w-10 h-[2px] bg-red-600"></div> 24/7 EMERGENCY SERVICE
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight italic">
                        Your Furnace or AC <br className="hidden md:block" /> Can't Wait Until Monday
                    </h2>
                    <p className="text-slate-600 text-lg font-medium">
                        When your system fails, you need help NOW. Travis is available 24/7/365 for HVAC emergencies throughout Salt Lake County and surrounding areas.
                    </p>
                </div>

                {/* Emergency Hotline Box */}
                <div className="bg-[#001d3d] max-w-4xl mx-auto p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                        <div className="space-y-4">
                            <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-500">Emergency Hotline</p>
                            <a href="tel:8019705797" className="text-5xl md:text-7xl font-black italic block hover:text-orange-500 transition-all transform hover:scale-105">801-970-5797</a>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">Call or Text Anytime - Travis Actually Answers</p>
                        </div>
                        <div className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 shrink-0">
                            <Timer className="text-orange-500 w-12 h-12" />
                            <div>
                                <p className="text-2xl font-black">1 HOUR</p>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none">Avg Response Time</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-[-20deg] translate-x-10"></div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyHero;
