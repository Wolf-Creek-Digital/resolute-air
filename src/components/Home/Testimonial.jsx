"use client"
import React from 'react';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import SectionIcon from '../Common/SectionIcon';
import { testimonialsData } from '../../data/homeData';

const Testimonial = () => {

  return (
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <div className="flex justify-center gap-1 mb-4">
               {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-400 fill-amber-400" size={24} />)}
             </div>
             <h2 className="text-4xl font-bold mb-4">Real Reviews from Real Neighbors</h2>
             <p className="text-slate-600 font-medium italic">Average Rating: 5.0 Stars based on recent work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="text-6xl text-slate-200 absolute top-4 left-4 font-serif">“</div>
                <p className="relative z-10 text-slate-700 mb-8 leading-relaxed italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">
                    {t.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.author}</h5>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin size={12} /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-orange-600 transition-colors">
              Read All Reviews on Google <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
  );
};

export default Testimonial;
