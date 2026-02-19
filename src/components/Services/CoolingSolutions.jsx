import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const CoolingSolutions = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                            COOLING SOLUTIONS
                        </span>
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight leading-tight">
                            AC Repair & Installation
                        </h2>
                    </div>
                    <p className="text-slate-600 font-medium">
                        When Utah temperatures hit 95°F+, a broken AC is unbearable. Travis
                        diagnoses and fixes problems the same day in most cases.
                    </p>
                    <div className="space-y-4">
                        <h4 className="font-black text-[#001d3d] text-sm uppercase tracking-widest border-l-4 border-orange-600 pl-4">
                            Common AC Problems
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                { p: "Blowing Warm Air", c: "Low refrigerant or compressor" },
                                { p: "Won't Turn On", c: "Electrical or capacitor failure" },
                                { p: "Loud Noises", c: "Worn motor or loose parts" },
                                { p: "Short Cycling", c: "Thermostat or refrigerant issues" },
                                { p: "Water Leaking", c: "Clogged drain or frozen coil" },
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                                >
                                    <p className="text-orange-600 font-black text-xs uppercase mb-1">
                                        {item.p}
                                    </p>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase">
                                        {item.c}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <h4 className="text-xl font-black text-[#001d3d] uppercase mb-6 text-center tracking-tight">
                        Repair vs. Replace Your AC
                    </h4>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <p className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase inline-block">
                                Repair If:
                            </p>
                            <ul className="text-xs space-y-2 text-slate-500 font-bold uppercase tracking-tight">
                                <li className="flex gap-2">
                                    <Check size={14} className="text-green-500 shrink-0" /> Under 10 years
                                    old
                                </li>
                                <li className="flex gap-2">
                                    <Check size={14} className="text-green-500 shrink-0" /> Repair costs
                                    &lt; $1,000
                                </li>
                                <li className="flex gap-2">
                                    <Check size={14} className="text-green-500 shrink-0" /> System is
                                    reliable
                                </li>
                                <li className="flex gap-2">
                                    <Check size={14} className="text-green-500 shrink-0" /> Stable energy
                                    bills
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-[10px] font-black uppercase inline-block">
                                Replace If:
                            </p>
                            <ul className="text-xs space-y-2 text-slate-500 font-bold uppercase tracking-tight">
                                <li className="flex gap-2">
                                    <AlertCircle size={14} className="text-orange-500 shrink-0" /> 12-15+
                                    years old
                                </li>
                                <li className="flex gap-2">
                                    <AlertCircle size={14} className="text-orange-500 shrink-0" /> Repair
                                    &gt; 50% cost
                                </li>
                                <li className="flex gap-2">
                                    <AlertCircle size={14} className="text-orange-500 shrink-0" />{" "}
                                    Frequent breakdowns
                                </li>
                                <li className="flex gap-2">
                                    <AlertCircle size={14} className="text-orange-500 shrink-0" />{" "}
                                    Climbing energy bills
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 p-4 bg-slate-50 rounded-xl border-t-4 border-orange-600 italic text-slate-600 text-xs font-medium">
                        "I'll tell you honestly which option makes more financial sense for YOUR
                        situation. No pressure to buy if repair is smarter." — Travis
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoolingSolutions;
