import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyCTA = () => {
    return (
        <section className="py-24 bg-orange-600 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-10">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter text-balance">
                    Enroll in Peace of Mind
                </h2>
                <p className="text-white text-xl font-bold uppercase tracking-tight opacity-90 max-w-3xl mx-auto">
                    Lets schedule your first tune-up within the week and get your system in top shape before the weather hits.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
                    <button className="bg-[#001d3d] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-orange-600 transition-all text-xs">
                        Enroll Plan Online
                    </button>
                    <div className="flex items-center gap-5 group cursor-pointer text-white">
                        <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-600 transition-all shadow-xl">
                            <Phone size={28} fill="currentColor" />
                        </div>
                        <div className="text-left leading-none">
                            <p className="text-[10px] font-black uppercase text-white/60 tracking-[0.3em] mb-2 italic">Call or Text Travis</p>
                            <p className="text-3xl font-black text-white italic tracking-tighter">801-970-5797</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:60px_60px]"></div>
        </section>
    );
};

export default EmergencyCTA;
