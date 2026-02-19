"use client"
import React from 'react';
import { Phone, ChevronRight, Shield, User, Hammer, Clock, BadgeCheck } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    { icon: "🛡️", text: "Licensed & Insured" }, // Placeholder icons until fully implemented in Difference
    { icon: "👤", text: "Owner-Operated" },
  ];

  return (
    <section className="h3_hero_section relative min-vh-100 d-flex align-items-center pt-5 overflow-hidden cs_bg_filed" style={{backgroundImage: 'url(/assets/img/hero_bg_1.jpg)'}}>
        <div className="h3_hero_overlay absolute inset-0"></div>
        
        <div className="container relative z-index-2">
            <div className="row align-items-center">
                <div className="col-lg-7 space-y-8 animate-in">
                    <div className="h3_badge d-inline-block px-3 py-1 rounded-pill text-uppercase tracking-widest mb-4">
                        Available 24/7 for Emergencies
                    </div>
                    <h1 className="h3_hero_title text-white font-extrabold leading-tight mb-4">
                        AC Not Cooling? <br/>
                        <span className="h3_text_accent text-decoration-underline decoration-white-20">Furnace Broken?</span>
                    </h1>
                    <p className="h3_hero_subtitle text-slate-300 fs-5 mb-5 max-w-lg leading-relaxed">
                        Skip the high-pressure sales tactics. Get expert help from Travis, an owner-operator with 15+ years experience who tells you the truth.
                    </p>
                    <div className="d-flex flex-column flex-sm-row gap-3">
                        <a href="tel:8019705797" className="h3_btn h3_btn_primary d-flex align-items-center justify-content-center gap-2 group">
                            <Phone fill="white" size={20} /> Get Fast Service Now
                            <ChevronRight className="group-hover-translate-x-1" size={20} />
                        </a>
                        <button className="h3_btn h3_btn_white d-flex align-items-center justify-content-center gap-2">
                            Schedule Online
                        </button>
                    </div>
                </div>
                
                {/* Trust Badges - Using the exact design from the image */}
                <div className="col-lg-5 d-none d-lg-flex justify-content-end">
                    <div className="h3_glass_panel p-4 p-xl-5 rounded-3xl w-100 max-w-md">
                         <h3 className="text-white font-bold fs-4 border-bottom border-white-10 pb-4 mb-4">The Resolute Guarantee</h3>
                         
                         <div className="d-flex flex-column gap-4 text-slate-200 font-medium">
                            <div className="d-flex align-items-center gap-3">
                                <Shield className="text-orange-500 flex-shrink-0" size={24} />
                                <span>Licensed & Insured in Utah</span>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <User className="text-orange-500 flex-shrink-0" size={24} />
                                <span>Owner-Operated (Travis on Every Job)</span>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <Hammer className="text-orange-500 flex-shrink-0" size={24} />
                                <span>15+ Years HVAC Experience</span>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <Clock className="text-orange-500 flex-shrink-0" size={24} />
                                <span>24/7 Emergency Service</span>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <BadgeCheck className="text-orange-500 flex-shrink-0" size={24} />
                                <span>No High-Pressure Sales</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
