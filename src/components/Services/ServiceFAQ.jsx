"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionIcon from '../Common/SectionIcon';
import { serviceFaqs } from '../../data/servicesData';

const ServiceFAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                        <SectionIcon size={20} />RESOURCES
                    </span>
                    <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight italic text-balance">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-5">
                    {serviceFaqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:border-orange-200 transition-colors"
                        >
                            <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full flex justify-between items-center p-7 text-left transition-colors"
                            >
                                <span className="font-black text-[#001d3d] uppercase tracking-tight pr-8 text-sm">
                                    {faq.q}
                                </span>
                                <div
                                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === i ? "bg-orange-600 text-white rotate-180" : "bg-slate-50 text-[#001d3d] group-hover:bg-orange-50"}`}
                                >
                                    {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-7 pt-0 text-slate-500 font-bold text-sm border-t border-slate-50 leading-relaxed uppercase tracking-tight">
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

export default ServiceFAQ;
