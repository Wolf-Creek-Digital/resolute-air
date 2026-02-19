import { serviceAreasList, serviceLocations } from '../../data/servicesData';
import { CheckCircle, Phone } from 'lucide-react';

const ServiceAreas = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-orange-600"></div> WHO WE SERVE
                        </span>
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tighter">
                            Residential & Light Commercial
                        </h2>
                        <p className="text-slate-600 font-medium">
                            Serving homeowners, property managers, and retail spaces throughout the
                            Wasatch Front.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {serviceAreasList.map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-6 p-6 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group"
                            >
                                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    <CheckCircle size={20} />
                                </div>
                                <div>
                                    <h5 className="font-black text-[#001d3d] uppercase tracking-tight mb-1">
                                        {item.t}
                                    </h5>
                                    <p className="text-xs text-slate-500 font-bold uppercase leading-relaxed tracking-tight opacity-70">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#001d3d] p-12 rounded-[60px] text-white relative shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
                    <h4 className="text-2xl font-black uppercase mb-8 border-b border-white/10 pb-4 tracking-tight">
                        Service Areas
                    </h4>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <div className="space-y-4">
                            {serviceLocations.col1.map((loc, i) => (
                                <p key={i} className="text-white">{loc}</p>
                            ))}
                        </div>
                        <div className="space-y-4">
                             {serviceLocations.col2.map((loc, i) => (
                                <p key={i} className="text-white">{loc}</p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 bg-white/5 p-6 rounded-3xl border border-white/10">
                        <p className="text-[10px] opacity-60 mb-4">
                            SERVING THE COMMUNITIES OF:
                        </p>
                        <p className="text-xs font-black tracking-tight leading-relaxed">
                            {serviceLocations.communities}
                        </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4 text-orange-500 font-black uppercase text-xs">
                        <Phone size={16} /> 801-970-5797
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
