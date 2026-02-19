"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        { q: "Do you offer free estimates?", a: "Yes! Free estimates for installations and major repairs. A standard service call fee applies for diagnostic visits." },
        { q: "Are you available for emergencies?", a: "Yes, 24/7/365. Average emergency response time is 1 hour or less." },
        { q: "Do you offer financing?", a: "Soon! We are currently setting up financing options. Ask Travis for the most updated info during your call." },
        { q: "Are you licensed and insured?", a: "Yes. Fully licensed in Utah. You can look us up on Utah State’s DOPL. Full liability coverage included." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">ANSWERS</span>
                    <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight italic">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group">
                            <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full flex justify-between items-center p-8 text-left transition-all hover:bg-white"
                            >
                                <span className="font-black text-[#001d3d] uppercase tracking-tight text-sm">{faq.q}</span>
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'bg-orange-600 text-white rotate-180' : 'bg-white text-[#001d3d] shadow-sm'}`}>
                                    <ChevronRight size={20} className="rotate-90" />
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-8 pt-0 text-slate-500 font-bold text-xs border-t border-slate-200/50 leading-relaxed uppercase tracking-tight">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
