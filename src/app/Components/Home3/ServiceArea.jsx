"use client"
import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import SectionIcon from './Common/SectionIcon';

const ServiceArea = () => {
  return (
    <section className="py-24 text-white relative" style={{background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)'}}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <h3 className="fs-2 font-bold mb-4 text-white d-flex align-items-center gap-2">
                <SectionIcon size={24} />
                Serving the Wasatch Front
            </h3>
            <div className="space-y-6">
              <p className="text-slate-400 fs-5">We provide expert service to homeowners in these counties with <span className="text-white font-bold text-decoration-underline decoration-orange-500">no long-distance fees:</span></p>
              <div className="row g-3">
                {['Salt Lake County', 'Utah County', 'Davis County', 'Weber County', 'Summit County', 'Wasatch County'].map((area, i) => (
                  <div key={i} className="col-6 d-flex align-items-center gap-2 text-slate-300">
                    <CheckCircle className="text-orange-500 flex-shrink-0" size={16} color="#f97316" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white-5 border border-white-10 rounded-xl">
                 <p className="text-sm text-slate-400 italic mb-0">Outside these areas? We'll still help! Long-distance charges may apply. Call to confirm.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white text-slate-900 rounded-3xl p-4 md:p-5">
              <h3 className="fs-3 font-bold mb-4 text-center">Why Choose Local vs. Corporate?</h3>
              <div className="space-y-8">
                <div className="pb-4 border-bottom border-slate-100 mb-4">
                  <p className="text-xs font-bold text-uppercase text-slate-400 mb-3 tracking-widest">Big Corporate Companies</p>
                  <ul className="list-unstyled space-y-3">
                    <li className="d-flex align-items-center gap-3 text-slate-500 mb-3"><X className="text-danger flex-shrink-0" size={18} color="#ef4444" /> Send different technicians each time</li>
                    <li className="d-flex align-items-center gap-3 text-slate-500 mb-3"><X className="text-danger flex-shrink-0" size={18} color="#ef4444" /> Commissions on sales (incentive to upsell)</li>
                    <li className="d-flex align-items-center gap-3 text-slate-500 mb-0"><X className="text-danger flex-shrink-0" size={18} color="#ef4444" /> Answer to corporate, not customers</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-uppercase text-orange-600 mb-3 tracking-widest">Resolute Heating & Air</p>
                  <ul className="list-unstyled space-y-3">
                    <li className="d-flex align-items-center gap-3 font-bold mb-3"><CheckCircle className="text-green-500 flex-shrink-0" size={18} color="#22c55e" /> Travis on every single job</li>
                    <li className="d-flex align-items-center gap-3 font-bold mb-3"><CheckCircle className="text-green-500 flex-shrink-0" size={18} color="#22c55e" /> No commissions = No pressure to upsell</li>
                    <li className="d-flex align-items-center gap-3 font-bold mb-0"><CheckCircle className="text-green-500 flex-shrink-0" size={18} color="#22c55e" /> Direct accountability to YOU</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator - Blends into Footer */}
      <div className="absolute bottom-0 left-0 w-100 overflow-hidden leading-none">
        <svg className="relative d-block w-100" style={{height: '60px', transform: 'rotate(180deg)'}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#1e293b" className="fill-slate-800"></path>
        </svg>
      </div>
    </section>
  );
};

export default ServiceArea;
