import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea = () => {
    const serviceAreas = [
        {
            county: "Salt Lake County",
            cities: "West Jordan (Home Base), Sandy, Draper, South Jordan, Riverton, Herriman, SLC, Murray, Midvale, West Valley City."
        },
        {
            county: "Utah County",
            cities: "Provo, Orem, Lehi, American Fork, Saratoga Springs, Eagle Mountain, Spanish Fork, Springville, Lindon, Payson."
        },
        {
            county: "Davis County",
            cities: "Bountiful, Farmington, Kaysville, Layton, Clearfield, Syracuse, Centerville, Woods Cross."
        },
        {
            county: "Weber County",
            cities: "Ogden, Roy, North Ogden, Pleasant View, Harrisville, Farr West."
        },
        {
            county: "Summit & Wasatch",
            cities: "Park City, Kamas, Heber City, Midway, and surrounding mountain communities."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                                <div className="w-10 h-[2px] bg-orange-600"></div> NORTHERN UTAH
                            </span>
                            <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight italic">Service Areas</h2>
                            <p className="text-slate-600 font-medium">Providing honest HVAC care to families across the Wasatch Front with no long-distance fees in our primary zone.</p>
                        </div>

                        <div className="grid gap-6">
                            {serviceAreas.map((area, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
                                    <h5 className="font-black text-[#001d3d] uppercase text-sm mb-2 border-b border-slate-50 pb-2">{area.county}</h5>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">{area.cities}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#001d3d] p-10 rounded-[60px] text-white shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center text-center">
                        <div className="relative z-10 space-y-8">
                            <MapPin size={64} className="text-orange-600 mx-auto animate-bounce" />
                            <h3 className="text-3xl font-black uppercase italic tracking-tight">Outside These Areas?</h3>
                            <p className="text-slate-400 text-lg font-medium max-w-sm mx-auto">
                                We're happy to help! A long-distance service charge may apply.
                            </p>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mb-2">Confirm Availability</p>
                                <p className="text-4xl font-black italic">801-970-5797</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:40px_40px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
