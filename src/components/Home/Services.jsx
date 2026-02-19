"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import SectionIcon from '../Common/SectionIcon';
import { servicesData } from '../../data/homeData';

const Services = () => {
  return (
    <section className="py-5 relative">
       {/* Optimized Background Image using Next.js Image */}
       <div className="absolute inset-0 z-[-1]">
          <Image 
            src="/assets/img/service_bg_1.svg" 
            alt="" 
            fill 
            className="object-cover"
            quality={90}
            priority
          />
       </div>

       <div className="container py-5 relative z-10">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-4">
            <div>
              <h2 className="fs-2 font-bold text-slate-900 mb-3 d-flex align-items-center gap-2">
                <SectionIcon size={24} />
                Common HVAC Problems We Solve
              </h2>
              <p className="fs-5 text-slate-600 mb-0">Fast solutions for Utah's unpredictable weather.</p>
            </div>
            <button className="h3_btn_outline bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
              View All HVAC Services
            </button>
          </div>

          <div className="row g-4">
            {servicesData.map((service, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                 <div className="h3_service_card bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 d-flex flex-column h-100 group">
                    <div className="mb-4 group-hover-scale transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h3 className="fs-4 font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4 flex-grow-1 leading-relaxed">{service.desc}</p>
                    <a href={`tel:${service.phone.replace(/-/g, '')}`} className="d-flex align-items-center justify-content-between text-orange-600 font-bold border-top border-slate-50 pt-4 hover:text-orange-700 text-decoration-none">
                        {service.cta}
                        <ChevronRight size={20} />
                    </a>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Services;
