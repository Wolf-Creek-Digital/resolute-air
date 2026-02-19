"use client";
import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Flame,
  User,
  Map,
  Building,
  MessageSquare,
  Send,
  Calendar,
  ChevronRight,
  Star,
  UserCheck,
  X,
  Check,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const serviceAreas = [
        { county: "Salt Lake County", cities: "Salt Lake City, West Jordan, Sandy, Draper, South Jordan, Herriman, Riverton, Taylorsville, Murray, West Valley City" },
        { county: "Utah County", cities: "Lehi, American Fork, Highland, Alpine, Saratoga Springs, Eagle Mountain" },
        { county: "Davis County", cities: "Bountiful, Centerville, Farmington, Kaysville, Layton" },
        { county: "Summit / Wasatch", cities: "Park City, Heber City, Midway (Trip charge may apply)" }
    ];
    
    const faqs = [
        { q: "What areas do you service?", a: "We primarily serve Salt Lake County and surrounding areas including Utah County, Davis County, and Summit County." },
        { q: "Do you offer free estimates?", a: "Yes, we offer free estimates for new system installations and replacements. For repairs, we have a standard diagnostic fee enabling us to identify the exact issue." },
        { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed within the State of Utah and carry comprehensive liability insurance for your peace of mind." },
        { q: "What brands do you service?", a: "We service all major makes and models of HVAC equipment, including Carrier, Trane, Lennox, Rheem, York, and more." }
    ];

    return (
        <div className="contact-page">
            <style jsx>{`
                .bg-navy { background-color: #001d3d; }
                .text-navy { color: #001d3d; }
                .bg-orange { background-color: #ea580c; }
                .text-orange { color: #ea580c; }
                .border-orange { border-color: #ea580c; }
                .bg-slate-50 { background-color: #f8fafc; }
                .text-slate-400 { color: #94a3b8; }
                .text-slate-600 { color: #475569; }
                .border-slate-100 { border-color: #e2e8f0; }
                .border-slate-200 { border-color: #cbd5e1; }
                
                .form-control:focus {
                    border-color: #ea580c;
                    box-shadow: none;
                }
                
                .contact-card {
                    transition: all 0.3s ease;
                }
                .contact-card:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    background-color: white;
                    border-color: transparent;
                }
                
                .btn-submit {
                    background-color: #ea580c;
                    color: white;
                    transition: all 0.3s ease;
                }
                .btn-submit:hover {
                    background-color: #001d3d;
                    color: white;
                    transform: translateY(-2px);
                }
            `}</style>
            
            {/* Contact Info & Form Grid */}
            <section className="py-5 bg-white">
                <div className="container py-5">
                    <div className="row g-5">
                        
                        {/* Left Column: Info */}
                        <div className="col-lg-5">
                            <div className="mb-5">
                                <span className="text-orange fw-black text-uppercase small d-flex align-items-center gap-3 mb-3 fw-bold" style={{letterSpacing: '0.3em', fontSize: '10px'}}>
                                    <div style={{width: '40px', height: '2px', backgroundColor: '#ea580c'}}></div> GET IN TOUCH
                                </span>
                                <h2 className="display-5 fw-black text-navy text-uppercase fst-italic lh-sm mb-4">
                                    How to Reach Us
                                </h2>
                                <p className="text-secondary fw-medium lh-base">
                                    Travis answers directly—no voicemail, no runaround. Whether it's a quote or an emergency, you talk to the technician.
                                </p>
                            </div>

                            <div className="d-flex flex-column gap-4 mb-5">
                                <div className="d-flex gap-4 p-4 bg-slate-50 rounded-4 border border-slate-100 contact-card">
                                    <div className="bg-navy rounded-3 d-flex align-items-center justify-content-center text-orange flex-shrink-0 shadow" style={{width: '56px', height: '56px'}}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="small fw-black text-uppercase text-slate-400 mb-1" style={{fontSize: '10px', letterSpacing: '0.1em'}}>Call or Text</p>
                                        <a href="tel:8019705797" className="h4 fw-black text-navy text-decoration-none fst-italic text-uppercase mb-0">801-970-5797</a>
                                    </div>
                                </div>

                                <div className="d-flex gap-4 p-4 bg-slate-50 rounded-4 border border-slate-100 contact-card">
                                    <div className="bg-orange rounded-3 d-flex align-items-center justify-content-center text-white flex-shrink-0 shadow" style={{width: '56px', height: '56px'}}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="small fw-black text-uppercase text-slate-400 mb-1" style={{fontSize: '10px', letterSpacing: '0.1em'}}>Email Us</p>
                                        <a href="mailto:travis@resoluteair.com" className="h5 fw-black text-navy text-decoration-none mb-0">travis@resoluteair.com</a>
                                    </div>
                                </div>

                                <div className="d-flex gap-4 p-4 bg-slate-50 rounded-4 border border-slate-100 contact-card">
                                    <div className="bg-navy rounded-3 d-flex align-items-center justify-content-center text-orange flex-shrink-0 shadow" style={{width: '56px', height: '56px'}}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="small fw-black text-uppercase text-slate-400 mb-1" style={{fontSize: '10px', letterSpacing: '0.1em'}}>Based in</p>
                                        <p className="h5 fw-black text-navy text-uppercase mb-0">West Jordan, Utah</p>
                                        <p className="small fw-bold text-slate-400 text-uppercase mt-1 mb-0" style={{fontSize: '11px'}}>Serving Salt Lake & surrounding counties</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-navy p-5 rounded-5 text-white shadow-lg position-relative overflow-hidden">
                                <h4 className="h6 fw-black text-uppercase mb-4 fst-italic border-bottom border-white border-opacity-10 pb-3" style={{letterSpacing: '0.1em'}}>Operating Hours</h4>
                                <div className="d-flex flex-column gap-3 small fw-bold text-uppercase">
                                    <div className="d-flex justify-content-between border-bottom border-white border-opacity-10 pb-2">
                                        <span className="text-white-50">Emergency Service:</span>
                                        <span className="text-orange fst-italic">24/7/365</span>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom border-white border-opacity-10 pb-2">
                                        <span className="text-white-50">Regular Business:</span>
                                        <span>Mon-Fri 8am-6pm</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-white-50">Weekends:</span>
                                        <span>By Appt (Fees apply)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="col-lg-7">
                            <div className="bg-slate-50 p-5 rounded-5 border border-slate-100 shadow-sm position-relative h-100">
                                <div className="position-absolute top-0 end-0 p-5 opacity-10 pe-none d-none d-md-block">
                                    <Flame size={120} />
                                </div>
                                <div className="mb-5 text-center text-lg-start position-relative z-1">
                                    <h3 className="h2 fw-black text-navy text-uppercase fst-italic mb-2">Request Service Online</h3>
                                    <p className="small fw-bold text-slate-400 text-uppercase fst-italic" style={{letterSpacing: '0.1em'}}>Fast Response Guaranteed</p>
                                </div>

                                <form className="d-flex flex-column gap-4 position-relative z-1">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="small fw-black text-uppercase text-navy mb-2 d-flex align-items-center gap-2" style={{fontSize: '10px', letterSpacing: '0.1em'}}><User size={14}/> Your Name*</label>
                                            <input type="text" className="form-control rounded-4 py-3 px-4 fw-bold text-secondary border-slate-200" placeholder="John Doe" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small fw-black text-uppercase text-navy mb-2 d-flex align-items-center gap-2" style={{fontSize: '10px', letterSpacing: '0.1em'}}><Phone size={14}/> Phone Number*</label>
                                            <input type="text" className="form-control rounded-4 py-3 px-4 fw-bold text-secondary border-slate-200" placeholder="801-000-0000" />
                                        </div>
                                    </div>

                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="small fw-black text-uppercase text-navy mb-2 d-flex align-items-center gap-2" style={{fontSize: '10px', letterSpacing: '0.1em'}}><Mail size={14}/> Email*</label>
                                            <input type="email" className="form-control rounded-4 py-3 px-4 fw-bold text-secondary border-slate-200" placeholder="email@example.com" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small fw-black text-uppercase text-navy mb-2 d-flex align-items-center gap-2" style={{fontSize: '10px', letterSpacing: '0.1em'}}><Map size={14}/> Address / City*</label>
                                            <input type="text" className="form-control rounded-4 py-3 px-4 fw-bold text-secondary border-slate-200" placeholder="Salt Lake City, UT" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="small fw-black text-uppercase text-navy mb-2 d-flex align-items-center gap-2" style={{fontSize: '10px', letterSpacing: '0.1em'}}><Building size={14}/> What do you need help with?*</label>
                                        <select className="form-select rounded-4 py-3 px-4 fw-bold text-secondary border-slate-200">
                                            <option>Select a service</option>
                                            <option>AC Not Cooling / AC Repair</option>
                                            <option>Furnace Not Working / Furnace Repair</option>
                                            <option>HVAC Installation (New System)</option>
                                            <option>Ductwork (Basement or Addition)</option>
                                            <option>Seasonal Tune-Up / Maintenance</option>
                                            <option>Other (Describe below)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="small fw-black text-uppercase text-navy mb-3 d-block" style={{fontSize: '10px', letterSpacing: '0.1em'}}>Best way to contact you:</label>
                                        <div className="d-flex flex-wrap gap-4">
                                            {['Phone Call', 'Text Message', 'Email'].map(method => (
                                                <div key={method} className="form-check">
                                                    <input className="form-check-input" type="radio" name="contactMethod" id={`contact-${method}`} defaultChecked={method === 'Phone Call'} />
                                                    <label className="form-check-label small fw-black text-uppercase text-secondary" htmlFor={`contact-${method}`} style={{fontSize: '11px'}}>
                                                        {method}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="small fw-black text-uppercase text-navy mb-2 d-flex align-items-center gap-2" style={{fontSize: '10px', letterSpacing: '0.1em'}}><MessageSquare size={14}/> Tell us about your project</label>
                                        <textarea rows="4" className="form-control rounded-4 py-3 px-4 fw-bold text-secondary border-slate-200" placeholder="Explain your HVAC problem or project..."></textarea>
                                    </div>

                                    <div>
                                        <label className="small fw-black text-uppercase text-navy mb-2 d-flex align-items-center gap-2" style={{fontSize: '10px', letterSpacing: '0.1em'}}><Calendar size={14}/> Preferred date/time (optional)</label>
                                        <input type="text" className="form-control rounded-4 py-3 px-4 fw-bold text-secondary border-slate-200" placeholder="e.g. Next Tuesday morning" />
                                    </div>

                                    <button className="btn btn-submit py-3 rounded-4 fw-black text-uppercase w-100 d-flex align-items-center justify-content-center gap-2 shadow-lg" style={{letterSpacing: '0.2em'}}>
                                        REQUEST SERVICE <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow - Step by Step */}
            <section className="py-5 bg-navy text-white">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="text-orange fw-black text-uppercase small" style={{letterSpacing: '0.3em'}}>FOLLOWING UP</span>
                        <h2 className="display-5 fw-black text-uppercase fst-italic mt-2 text-white">What Happens After You Contact Us?</h2>
                    </div>

                    <div className="row g-4 justify-content-start">
                        {[
                            { s: "01", t: "Fast Response", d: "We'll get back to you within 2-4 hours (usually faster)." },
                            { s: "02", t: "Quick Questions", d: "We'll confirm details and schedule the right amount of time." },
                            { s: "03", t: "Scheduling", d: "Convenient same-day or next-day appointments available." },
                            { s: "04", t: "Confirmation", d: "You'll get a call or text before Travis arrives." },
                            { s: "05", t: "On-Time Arrival", d: "Our goal is precision. We'll contact you if traffic hits." },
                            { s: "06", t: "Honest Diagnosis", d: "Upfront pricing and options before any work starts." },
                            { s: "07", t: "Quality Service", d: "Once approved, Travis gets straight to work." }
                        ].map((step, i) => (
                            <div key={i} className="col-md-6 col-lg-3">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <span className="display-4 fw-black font-bold text-orange opacity-50">{step.s}</span>
                                    <div className="flex-grow-1 border-top border-white border-opacity-10"></div>
                                </div>
                                <h5 className="h6 fw-black text-uppercase fst-italic mb-2">{step.t}</h5>
                                <p className="text-white-50 fw-bold text-uppercase mb-0" style={{fontSize: '12px', letterSpacing: '0.05em'}}>{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Area Grid */}
            <section className="py-5 bg-slate-50 overflow-hidden">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-5">
                                <span className="text-orange fw-black text-uppercase small d-flex align-items-center gap-3 mb-3" style={{letterSpacing: '0.3em', fontSize: '10px'}}>
                                    <div style={{width: '40px', height: '2px', backgroundColor: '#ea580c'}}></div> NORTHERN UTAH
                                </span>
                                <h2 className="display-5 fw-black text-navy text-uppercase fst-italic lh-sm mb-4">Service Areas</h2>
                                <p className="text-secondary fw-medium">Providing honest HVAC care to families across the Wasatch Front with no long-distance fees in our primary zone.</p>
                            </div>
                            
                            <div className="row g-3">
                                {serviceAreas.map((area, i) => (
                                    <div key={i} className="col-12">
                                        <div className="bg-white p-4 rounded-4 shadow-sm border border-slate-100 h-100">
                                            <h5 className="fw-black text-navy text-uppercase small mb-2 border-bottom pb-2">{area.county}</h5>
                                            <p className="small text-slate-400 fw-bold text-uppercase mb-0" style={{fontSize: '10px', letterSpacing: '0.1em'}}>{area.cities}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="bg-navy p-5 rounded-5 text-white shadow-lg position-relative overflow-hidden d-flex flex-column justify-content-center text-center h-100" style={{minHeight: '500px'}}>
                                <div className="position-relative z-1 d-flex flex-column gap-4 align-items-center">
                                    <MapPin size={64} className="text-orange" />
                                    <h3 className="h2 fw-black text-uppercase fst-italic">Outside These Areas?</h3>
                                    <p className="text-white-50 fs-5 fw-medium mx-auto" style={{maxWidth: '300px'}}>
                                        We're happy to help! A long-distance service charge may apply. 
                                    </p>
                                    <div className="bg-white bg-opacity-10 border border-white border-opacity-10 p-4 rounded-4">
                                        <p className="small fw-black text-uppercase opacity-75 mb-1" style={{fontSize: '10px', letterSpacing: '0.2em'}}>Confirm Availability</p>
                                        <p className="h3 fw-black fst-italic mb-0">801-970-5797</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Comparison: Local vs National */}
            <section className="py-5 bg-white position-relative">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-black text-navy text-uppercase font-bold">Why Choose a Local HVAC Contractor?</h2>
                        <p className="text-slate-400 fw-bold text-uppercase small mt-3" style={{letterSpacing: '0.2em'}}>Resolute vs. National Chains</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="p-5 rounded-5 bg-slate-50 border border-slate-100 h-100">
                                <div className="d-flex align-items-center gap-3 text-slate-400 mb-4 border-bottom border-slate-200 pb-3">
                                    <Building size={32} />
                                    <span className="fw-black text-uppercase small" style={{letterSpacing: '0.1em'}}>National Corporations</span>
                                </div>
                                <ul className="d-flex flex-column gap-3 list-unstyled mb-0">
                                    {[
                                        "Talk to a call center (not the tech)",
                                        "Get whoever is available (random guy)",
                                        "Pay for their massive advertising & overhead",
                                        "Deal with rigid corporate policies"
                                    ].map((item, i) => (
                                        <li key={i} className="d-flex gap-3 small fw-black text-uppercase text-slate-400 fst-italic">
                                            <X size={16} className="text-danger flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="p-5 rounded-5 bg-navy text-white shadow-lg position-relative overflow-hidden h-100 border-bottom border-orange border-5">
                                <div className="d-flex align-items-center gap-3 text-orange mb-4 border-bottom border-white border-opacity-10 pb-3">
                                    <UserCheck size={32} />
                                    <span className="fw-black text-uppercase small" style={{letterSpacing: '0.1em'}}>Resolute Heating & Air</span>
                                </div>
                                <ul className="d-flex flex-column gap-3 list-unstyled position-relative z-1 mb-4">
                                    {[
                                        "Talk directly to Travis (the guy on site)",
                                        "Same experienced technician every time",
                                        "Pay for quality work, not overhead",
                                        "Work with a neighbor who lives here"
                                    ].map((item, i) => (
                                        <li key={i} className="d-flex gap-3 small fw-black text-uppercase text-white fst-italic">
                                            <Check size={16} className="text-orange flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-4 bg-white bg-opacity-10 rounded-3 fst-italic small fw-medium text-white-50">
                                    "We're your neighbors. Travis is based out of West Jordan and runs into customers at the store. That local accountability keeps us honest."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Spotlight */}
            <section className="py-5 bg-slate-50 position-relative">
                <div className="container py-5 text-center">
                    <div className="d-flex justify-content-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-warning fill-warning" size={24} />)}
                    </div>
                    <h2 className="display-6 fw-black text-navy text-uppercase font-bold mb-5">Don't Just Take Our Word For It</h2>
                    
                    <div className="bg-white p-5 rounded-5 shadow-sm border border-slate-100 position-relative mx-auto" style={{maxWidth: '900px'}}>
                        
                        <p className="fs-4 text-secondary fw-medium fst-italic lh-base position-relative z-1 mb-5">
                            "Travis is such an awesome guy. He is solid. Fixed my HVAC when it wouldn't turn on. He solved it quick and kept his time costs low. Use him if you want someone you trust in your own home. I would 1000% use him again!"
                        </p>
                        <div className="d-flex flex-column align-items-center">
                            <p className="small fw-black text-navy text-uppercase mb-3 fst-italic" style={{letterSpacing: '0.1em'}}>Emergency Repair Customer</p>
                            {/* <button className="btn btn-link text-decoration-none d-flex align-items-center gap-2 small fw-black text-uppercase text-orange p-0" style={{fontSize: '11px', letterSpacing: '0.2em'}}>
                                READ ALL REVIEWS ON GOOGLE <ArrowRight size={14} />
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="py-5 bg-white">
                <div className="container py-5" style={{maxWidth: '800px'}}>
                    <div className="text-center mb-5">
                        <span className="text-orange fw-black text-uppercase small" style={{letterSpacing: '0.3em'}}>ANSWERS</span>
                        <h2 className="display-4 fw-black text-navy text-uppercase fst-italic mt-2">Frequently Asked Questions</h2>
                    </div>

                    <div className="d-flex flex-column gap-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-4 overflow-hidden border border-slate-100">
                                <button 
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-100 d-flex justify-content-between align-items-center p-4 text-start border-0 bg-transparent shadow-none"
                                >
                                    <span className="fw-black text-navy text-uppercase small" style={{letterSpacing: '-0.025em'}}>{faq.q}</span>
                                    <div className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 transition-all ${activeFaq === i ? 'bg-orange text-white' : 'bg-white text-navy shadow-sm'}`} style={{width: '40px', height: '40px', transform: activeFaq === i ? 'rotate(180deg)' : ''}}>
                                        <ChevronRight size={20} className={activeFaq === i ? 'rotate-90' : ''} style={{transition: 'transform 0.3s'}} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all ${activeFaq === i ? 'd-block' : 'd-none'}`}>
                                    <div className="p-4 pt-0 text-secondary fw-bold small border-top border-slate-200 lh-base text-uppercase">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ready CTA */}
            <section className="py-5 bg-orange position-relative overflow-hidden">
                <div className="container py-5 text-center position-relative z-1">
                    <h2 className="display-3 fw-black text-white text-uppercase fst-italic mb-5 lh-sm">
                        Ready to Schedule <br/> Honest HVAC Service?
                    </h2>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
                        <button className="btn btn-navy text-white px-5 py-4 rounded-4 fw-black text-uppercase shadow-lg" style={{letterSpacing: '0.2em', fontSize: '12px'}}>
                            Schedule Now
                        </button>
                        <div className="d-flex align-items-center gap-4 text-white group cursor-pointer">
                            <div className="d-flex align-items-center justify-content-center rounded-circle border border-white border-opacity-25 bg-white bg-opacity-10 shadow" style={{width: '70px', height: '70px'}}>
                                <Phone size={32} fill="currentColor" />
                            </div>
                            <div className="text-start lh-1">
                                <p className="small fw-black text-white-50 text-uppercase mb-2 fst-italic" style={{letterSpacing: '0.2em', fontSize: '10px'}}>Direct Call or Text</p>
                                <p className="display-6 fw-black text-white fst-italic mb-0">801-970-5797</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cs_map">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.352306266146!2d-112.0010389!3d40.60004999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528e55e5dd5193%3A0xb6b10c987e71c11c!2s8327%20Etude%20Dr%2C%20West%20Jordan%2C%20UT%2084088%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1767588394075!5m2!1ses!2sco" ></iframe>
            </div>

        </div>
    );
};

export default Contact;