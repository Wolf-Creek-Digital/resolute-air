import React from 'react';
import { ThermometerSnowflake, AlertTriangle, Star, Droplets, Zap } from 'lucide-react';

import { emergencySymptoms } from '../../data/emergencyData';

const EmergencySymptoms = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="space-y-12">
                    <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tight text-center">What Qualifies as an HVAC Emergency?</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {emergencySymptoms.map((s, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-[40px] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100 group flex flex-col items-center text-center">
                                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg mb-8 transition-all group-hover:scale-110 
                ${s.color === 'red' ? 'bg-red-600 text-white' :
                                        s.color === 'blue' ? 'bg-blue-600 text-white' :
                                            'bg-orange-600 text-white'}`}>
                                    {s.icon}
                                </div>
                                <h4 className="text-xl font-black text-[#001d3d] uppercase mb-3 leading-tight">{s.title}</h4>
                                <p className="text-xs font-black text-red-600 uppercase mb-4 tracking-widest px-4">{s.risk}</p>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{s.action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencySymptoms;
