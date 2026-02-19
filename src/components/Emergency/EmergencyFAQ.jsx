"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const EmergencyFAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const maintenanceFaqs = [
        { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. We keep you as a member by providing great service, not by locking you in." },
        { q: "What if I need a repair between tune-ups?", a: "No problem! You get priority scheduling and 10% off the repair. That's the value of membership." },
        { q: "Do you service all brands?", a: "Yes. We service all makes and models of HVAC equipment including Carrier, Trane, Lennox, and more." },
        { q: "Is it really worth it?", a: "Most members save more than the plan costs through 10% repair discounts, lower energy bills, and avoiding emergency fees." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">FAQ</span>
                    <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight italic">Common Questions</h2>
                </div>

                <div className="space-y-4">
                    {maintenanceFaqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group">
                            <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full flex justify-between items-center p-8 text-left transition-all hover:bg-white"
                            >
                                <span className="font-black text-[#001d3d] uppercase tracking-tight text-sm">{faq.q}</span>
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'bg-orange-600 text-white rotate-180' : 'bg-white text-[#001d3d] shadow-sm'}`}>
                                    <ChevronDown size={20} />
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

export default EmergencyFAQ;
