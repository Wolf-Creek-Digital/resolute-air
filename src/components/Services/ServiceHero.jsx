import React from 'react';

const ServiceHero = () => {
    return (
        <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-[#001d3d] uppercase tracking-tight leading-tight">
                    AC Repair, Furnace Installation & HVAC Services in Salt Lake County
                </h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                    From emergency repairs to new installations, Resolute Heating & Air
                    provides complete HVAC solutions for homeowners across the Wasatch Front.
                    Travis personally handles every job with honest recommendations and fair
                    pricing—no high-pressure sales, ever. Just options and suggestions.
                </p>
                <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
            </div>
        </section>
    );
};

export default ServiceHero;
