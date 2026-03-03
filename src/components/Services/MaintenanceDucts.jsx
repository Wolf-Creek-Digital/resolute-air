import { ductTags, springTuneUp, fallTuneUp } from '../../data/servicesData';
import { Wind, AlertCircle, Wrench } from 'lucide-react';
import SectionIcon from '../Common/SectionIcon';

const MaintenanceDucts = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                        <SectionIcon size={20} />MAINTENANCE & DUCTS
                    </span>
                    <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight">
                        Keep Your System Efficient
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Ductwork */}
                    <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <Wind className="text-orange-600" size={32} />
                            <h3 className="text-2xl font-black text-[#001d3d] uppercase">
                                Ductwork Services
                            </h3>
                        </div>
                        <p className="text-slate-500 mb-8 font-medium">
                            Bad ductwork can waste 30% of your energy. We design and seal systems
                            for basements and remodels.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                    <AlertCircle size={20} />
                                </div>
                                <div>
                                    <p className="font-black text-xs uppercase text-slate-800">
                                        Uneven Heating/Cooling
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                                        Solution: Duct balancing or redesign
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                    <AlertCircle size={20} />
                                </div>
                                <div>
                                    <p className="font-black text-xs uppercase text-slate-800">
                                        Excessive Dust
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                                        Solution: Seal return duct leaks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 border-t pt-6">
                            {ductTags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-slate-100 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tune-Ups */}
                    <div className="bg-[#001d3d] p-10 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <Wrench className="text-orange-600" size={32} />
                                <h3 className="text-2xl font-black uppercase tracking-tight">
                                    Maintenance Plans
                                </h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="text-orange-500 font-black text-xs uppercase mb-4 tracking-widest">
                                        Spring AC Tune-Up
                                    </h5>
                                    <ul className="text-[10px] font-bold uppercase space-y-2 opacity-80">
                                        {springTuneUp.map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-orange-500 font-black text-xs uppercase mb-4 tracking-widest">
                                        Fall Furnace Tune-Up
                                    </h5>
                                    <ul className="text-[10px] font-bold uppercase space-y-2 opacity-80">
                                        {fallTuneUp.map((item, i) => (
                                            <li key={i}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 p-4 bg-orange-600 rounded-2xl flex items-center justify-between">
                                <div className="text-left">
                                    <p className="font-black uppercase text-[10px] tracking-widest">
                                        Why Maintenance Matters
                                    </p>
                                    <p className="text-[9px] font-bold opacity-80 uppercase">
                                        Small $200 problems become $2,000 problems.
                                    </p>
                                </div>
                                <button className="bg-white text-orange-600 px-4 py-2 rounded-xl font-black uppercase text-[9px] hover:bg-slate-900 hover:text-white transition-all shrink-0 ml-4 shadow-lg">
                                    Save 10%
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaintenanceDucts;
