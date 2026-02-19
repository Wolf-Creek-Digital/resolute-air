import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const ReviewSpotlight = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-400 fill-amber-400" size={24} />)}
                </div>
                <h2 className="text-3xl font-black text-[#001d3d] uppercase italic mb-10">Don't Just Take Our Word For It</h2>

                <div className="bg-white p-12 rounded-[50px] shadow-sm border border-slate-100 relative">
                    <div className="text-7xl text-slate-100 absolute top-4 left-6 italic font-serif">“</div>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium italic leading-relaxed relative z-10 mb-10">
                        "Travis is such an awesome guy. He is solid. Fixed my HVAC when it wouldn't turn on. He solved it quick and kept his time costs low. Use him if you want someone you trust in your own home. I would 1000% use him again!"
                    </p>
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-black text-[#001d3d] uppercase tracking-widest mb-4 italic leading-none">Emergency Repair Customer</p>
                        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 hover:text-[#001d3d] transition-colors">
                            READ ALL REVIEWS ON GOOGLE <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSpotlight;
