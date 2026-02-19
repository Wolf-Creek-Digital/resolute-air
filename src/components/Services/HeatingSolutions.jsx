import { heatingProblems, installationInclusions } from '../../data/servicesData';
import { Flame, ShieldCheck, Check } from 'lucide-react';

const HeatingSolutions = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="bg-[#001d3d] p-10 rounded-[40px] text-white space-y-8 shadow-2xl">
                        <div className="flex justify-between items-start">
                            <h4 className="text-2xl font-black uppercase tracking-tight">
                                No-Heat Emergencies
                            </h4>
                            <div className="bg-orange-600 p-3 rounded-2xl animate-pulse">
                                <Flame size={24} />
                            </div>
                        </div>
                        <p className="text-slate-400 font-medium italic">
                            Utah winters drop to 0°F. If your furnace stops, it's an emergency.
                            Travis is available 24/7.
                        </p>
                        <div className="space-y-4 pt-4">
                            {heatingProblems.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-center bg-white/5 p-4 rounded-xl"
                                >
                                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                    <span className="text-sm font-bold uppercase tracking-tight">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="tel:8019705797"
                            className="block text-center bg-white text-[#001d3d] py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all text-sm"
                        >
                            CALL IMMEDIATELY: 801-970-5797
                        </a>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                        HEATING SPECIALISTS
                    </span>
                    <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight">
                        Furnace Installation & Repair
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-orange-600">
                            <p className="font-black text-[#001d3d] uppercase text-sm mb-2">
                                What's Included in Installation:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {installationInclusions.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase"
                                    >
                                        <Check size={14} className="text-orange-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                            <ShieldCheck className="text-blue-600 shrink-0" />
                            <p className="text-blue-900 text-xs font-bold uppercase tracking-tight">
                                Repair makes sense if heat exchanger is intact and furnace is under 15
                                years old.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingSolutions;
