"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import SectionIcon from '../Common/SectionIcon';
import { servicesData } from '../../data/homeData';


const Services = () => {
  return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Common HVAC Problems We Solve</h2>
              <p className="text-xl text-slate-600">Fast solutions for Utah's unpredictable weather.</p>
            </div>
            <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              View All HVAC Services
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <a 
                  href={`tel:${service.phone.replace(/-/g, '')}`} 
                  className="flex items-center justify-between text-orange-600 font-bold border-t border-slate-50 pt-6 hover:text-orange-700"
                >
                  {service.cta}
                  <ChevronRight size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;
