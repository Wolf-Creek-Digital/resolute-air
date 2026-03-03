"use client"
import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import SectionIcon from '../Common/SectionIcon';

const ServiceArea = () => {
    return (

        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20">
                <div>
                    <h3 className="text-3xl font-bold mb-8">Serving the Wasatch Front</h3>
                    <div className="space-y-6">
                        <p className="text-slate-400 text-lg">We provide expert service to homeowners in these counties with <span className="text-white font-bold underline decoration-orange-500">no long-distance fees:</span></p>
                        <div className="grid grid-cols-2 gap-4">
                            {['Salt Lake County', 'Utah County', 'Davis County', 'Weber County', 'Summit County', 'Wasatch County'].map((area, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-300">
                                    <CheckCircle className="text-orange-500" size={16} />
                                    {area}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                            <p className="text-sm text-slate-400 italic">Outside these areas? We'll still help! Long-distance charges may apply. Call to confirm.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-8 text-center">Why Choose Local vs. Corporate?</h3>
                    <div className="space-y-8">
                        <div className="pb-8 border-b border-slate-100">
                            <p className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">Big Corporate Companies</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-500"><X className="text-red-500" size={18} /> Send different technicians each time</li>
                                <li className="flex items-center gap-3 text-slate-500"><X className="text-red-500" size={18} /> Commissions on sales (incentive to upsell)</li>
                                <li className="flex items-center gap-3 text-slate-500"><X className="text-red-500" size={18} /> Answer to corporate, not customers</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-orange-600 mb-4 tracking-widest">Resolute Heating & Air</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 font-bold"><CheckCircle className="text-green-500" size={18} /> Travis on every single job</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle className="text-green-500" size={18} /> No commissions = No pressure to upsell</li>
                                <li className="flex items-center gap-3 font-bold"><CheckCircle className="text-green-500" size={18} /> Direct accountability to YOU</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
