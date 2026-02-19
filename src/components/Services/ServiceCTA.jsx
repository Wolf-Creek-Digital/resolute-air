import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

const ServiceCTA = () => {
    return (
        <>
            {/* Risk Free Promise */}
            <section className="bg-white py-20 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                    <div className="bg-orange-50 p-6 rounded-full mb-6 shadow-inner">
                        <ShieldCheck className="text-orange-600" size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-[#001d3d] uppercase tracking-tight italic mb-4">
                        The Resolute No-Risk Promise
                    </h2>
                    <p className="text-xl font-bold text-slate-500 uppercase tracking-widest max-w-2xl leading-snug">
                        "If I can't fix it, you don't even pay for the service call. Simple as
                        that. I'll even help find someone who can."
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-[#001d3d] relative overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                        Get HVAC Service Today
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto font-bold uppercase tracking-tight opacity-80">
                        Free estimates on installations and major repairs. Travis is ready to help
                        Salt Lake homes.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
                        <button className="bg-orange-600 text-white px-12 py-6 rounded-lg font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-600/40 hover:bg-white hover:text-orange-600 transition-all text-xs">
                            Schedule Service Now
                        </button>
                        <div className="flex items-center gap-5 group cursor-pointer">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-xl">
                                <Phone size={28} fill="currentColor" />
                            </div>
                            <div className="text-left leading-none">
                                <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-2 italic text-balance">
                                    Speak with Travis
                                </p>
                                <p className="text-3xl font-black text-white italic tracking-tighter">
                                    801-970-5797
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:60px_60px]"></div>
            </section>
        </>
    );
};

export default ServiceCTA;
