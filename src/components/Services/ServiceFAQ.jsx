"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ServiceFAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        {
            q: "How much does AC repair usually cost?",
            a: "Most AC repairs range from $150-$600. Common fixes like capacitors or refrigerant recharges typically cost $300-$500. We'll give you an upfront price before starting work.",
        },
        {
            q: "When should I repair vs. replace my furnace?",
            a: "Generally, if your furnace is under 15 years old and the repair costs less than $1,000, repair makes sense. If it's 18+ years old or needs expensive repairs, replacement is often smarter. I'll give you honest advice.",
        },
        {
            q: "How long do HVAC systems last?",
            a: "With regular maintenance: AC units last 12-15 years, furnaces last 15-20 years. Without maintenance, you could see a 30-40% shorter lifespan.",
        },
        {
            q: "What's included in a tune-up?",
            a: "Complete inspection, cleaning, testing, and adjustment of all components. Travis checks for potential problems and can fix small issues before they become expensive breakdowns.",
        },
        {
            q: "Do you offer payment plans?",
            a: "FINANCING SOON!! We are currently setting up flexible payment options to help with major replacements.",
        },
        {
            q: "How quickly can you get here?",
            a: "For emergencies: typically within 1-2 hours. For scheduled service: usually same-day or within 24-48 hours.",
        },
        {
            q: "What if you can't fix it?",
            a: "If I can't fix it, you don't even pay for the service call. Simple as that. I'll even help find someone who can.",
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                        RESOURCES
                    </span>
                    <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight italic text-balance">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-5">
                    {faqs.map((faq, i) => (
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
