"use client"
import React from 'react';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Testimonial = () => {
    const testimonials = [
        {
          text: "Travis did a fantastic job with the HVAC in my basement. He did honest and fair work and if you're reading this call him already so he can help you too!",
          author: "Basement Renovation",
          location: "West Jordan",
          rating: 5
        },
        {
          text: "Travis is such an awesome guy. Fixed my HVAC when it wouldn't turn on. He solved it quick and kept his time costs low. 1000% use him again!",
          author: "Emergency Repair",
          location: "Salt Lake County",
          rating: 5
        },
        {
          text: "Super helpful, great price, and even offered suggestions on things we needed help with. Absolutely will be calling in the future.",
          author: "Tune-Up & Ductwork",
          location: "Utah County",
          rating: 5
        }
    ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-4 d-flex align-items-center justify-content-center gap-2">
                <Image src="/assets/img/icons/fan.svg" alt="" className="cs_section_subheading_icon" width={28} height={28} />
                Real Reviews from Real Neighbors
             </h2>
             <p className="text-slate-600 font-medium italic">Average Rating: 5.0 Stars based on recent work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl relative shadow-sm border border-slate-100 flex flex-col">
                {/* Individual stars per testimonial */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="text-amber-400 fill-amber-400" size={18} />
                  ))}
                </div>
                
                <p className="relative z-10 text-slate-700 mb-8 leading-relaxed italic flex-grow">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-slate-200 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">
                    {t.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-0">{t.author}</h5>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mb-0">
                      <MapPin size={12} /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-orange-600 transition-colors bg-transparent border-0">
              Read All Reviews on Google <ChevronRight size={18} />
            </button>
          </div> */}
        </div>
      </section>
  );
};

export default Testimonial;
