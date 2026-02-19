"use client";
import React, { useState } from 'react';
import {
    ArrowRight,
    Building,
    Calendar,
    Check,
    Clock,
    ChevronRight,
    Flame,
    Mail,
    Map,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    Star,
    User,
    UserCheck,
    X,
    Facebook,
    Twitter,
    Instagram,
    Menu,
} from 'lucide-react';
import { useEffect } from 'react';


const Contact = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        serviceType: '',
        contactMethod: 'Phone Call',
        message: '',
        preferredDate: ''
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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

    const faqs = [
        { q: "Do you offer free estimates?", a: "Yes! Free estimates for installations and major repairs. A standard service call fee applies for diagnostic visits." },
        { q: "Are you available for emergencies?", a: "Yes, 24/7/365. Average emergency response time is 1 hour or less." },
        { q: "Do you offer financing?", a: "Soon! We are currently setting up financing options. Ask Travis for the most updated info during your call." },
        { q: "Are you licensed and insured?", a: "Yes. Fully licensed in Utah. You can look us up on Utah State’s DOPL. Full liability coverage included." }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-normal">
            {/* Contact Info & Form Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Left Column: Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-4">
                                <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                                    <div className="w-10 h-[2px] bg-orange-600"></div> GET IN TOUCH
                                </span>
                                <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight italic">
                                    How to Reach Us
                                </h2>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Travis answers directly—no voicemail, no runaround. Whether it's a quote or an emergency, you talk to the technician.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                                    <div className="w-14 h-14 bg-[#001d3d] rounded-2xl flex items-center justify-center text-orange-500 shrink-0 shadow-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call or Text</p>
                                        <a href="tel:8019705797" className="text-2xl font-black text-[#001d3d] hover:text-orange-600 transition-colors italic">801-970-5797</a>
                                    </div>
                                </div>

                                <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                                    <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                                        <a href="mailto:travis@resoluteair.com" className="text-xl font-black text-[#001d3d] hover:text-orange-600 transition-colors">travis@resoluteair.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                                    <div className="w-14 h-14 bg-[#001d3d] rounded-2xl flex items-center justify-center text-orange-500 shrink-0 shadow-lg">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Based in</p>
                                        <p className="text-xl font-black text-[#001d3d] uppercase tracking-tight">West Jordan, Utah</p>
                                        <p className="text-xs text-slate-400 font-bold uppercase mt-1">Serving Salt Lake & surrounding counties</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#001d3d] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                                <h4 className="text-lg font-black uppercase tracking-widest mb-6 italic border-b border-white/10 pb-4">Operating Hours</h4>
                                <div className="space-y-4 text-sm font-bold uppercase tracking-tight">
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-400">Emergency Service:</span>
                                        <span className="text-orange-500 italic">24/7/365</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-400">Regular Business:</span>
                                        <span>Mon-Fri 8am-6pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Weekends:</span>
                                        <span>By Appt (Fees apply)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-slate-50 p-8 md:p-12 rounded-[60px] border border-slate-100 shadow-sm relative">
                                <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                                    <Flame size={120} fill="currentColor" />
                                </div>
                                <div className="mb-10 text-center lg:text-left">
                                    <h3 className="text-3xl font-black text-[#001d3d] uppercase tracking-tight mb-2">Request Service Online</h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Fast Response Guaranteed</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><User size={12} /> Your Name*</label>
                                            <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Phone size={12} /> Phone Number*</label>
                                            <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="801-000-0000" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Mail size={12} /> Email*</label>
                                            <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="email@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Map size={12} /> Address / City*</label>
                                            <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="Salt Lake City, UT" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Building size={12} /> What do you need help with?*</label>
                                        <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors appearance-none">
                                            <option>Select a service</option>
                                            <option>AC Not Cooling / AC Repair</option>
                                            <option>Furnace Not Working / Furnace Repair</option>
                                            <option>HVAC Installation (New System)</option>
                                            <option>Ductwork (Basement or Addition)</option>
                                            <option>Seasonal Tune-Up / Maintenance</option>
                                            <option>Other (Describe below)</option>
                                        </select>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest">Best way to contact you:</label>
                                        <div className="flex flex-wrap gap-8">
                                            {['Phone Call', 'Text Message', 'Email'].map(method => (
                                                <label key={method} className="flex items-center gap-3 cursor-pointer group">
                                                    <input type="radio" name="contact" className="w-4 h-4 accent-orange-600" defaultChecked={method === 'Phone Call'} />
                                                    <span className="text-xs font-black uppercase text-slate-500 group-hover:text-[#001d3d] transition-colors">{method}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><MessageSquare size={12} /> Tell us about your project</label>
                                        <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="Explain your HVAC problem or project..."></textarea>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Calendar size={12} /> Preferred date/time (optional)</label>
                                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="e.g. Next Tuesday morning" />
                                    </div>

                                    <button className="w-full bg-orange-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] shadow-2xl shadow-orange-600/30 hover:bg-[#001d3d] transition-all flex items-center justify-center gap-3 group">
                                        REQUEST SERVICE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow - Step by Step */}
            <section className="py-24 bg-[#001d3d] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">FOLLOWING UP</span>
                        <h2 className="text-4xl font-black uppercase tracking-tight italic">What Happens After You Contact Us?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { s: "01", t: "Fast Response", d: "We'll get back to you within 2-4 hours (usually faster)." },
                            { s: "02", t: "Quick Questions", d: "We'll confirm details and schedule the right amount of time." },
                            { s: "03", t: "Scheduling", d: "Convenient same-day or next-day appointments available." },
                            { s: "04", t: "Confirmation", d: "You'll get a call or text before Travis arrives." },
                            { s: "05", t: "On-Time Arrival", d: "Our goal is precision. We'll contact you if traffic hits." },
                            { s: "06", t: "Honest Diagnosis", d: "Upfront pricing and options before any work starts." },
                            { s: "07", t: "Quality Service", d: "Once approved, Travis gets straight to work." }
                        ].map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="flex items-center gap-6 mb-4">
                                    <span className="text-5xl font-black italic text-orange-600 opacity-30 group-hover:opacity-100 transition-all">{step.s}</span>
                                    <div className="h-px bg-white/10 flex-grow"></div>
                                </div>
                                <h5 className="text-lg font-black uppercase tracking-tight italic mb-3">{step.t}</h5>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tight leading-relaxed">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Area Grid */}
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

            {/* Comparison: Local vs National */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase italic tracking-tight">Why Choose a Local HVAC Contractor?</h2>
                        <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Resolute vs. National Chains</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-4 text-slate-400 mb-10 border-b border-slate-200 pb-6">
                                <Building size={32} />
                                <span className="font-black uppercase tracking-widest text-sm">National Corporations</span>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Talk to a call center (not the tech)",
                                    "Get whoever is available (random guy)",
                                    "Pay for their massive advertising & overhead",
                                    "Deal with rigid corporate policies"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-slate-400 italic">
                                        <X size={16} className="text-red-400 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-10 rounded-[40px] bg-[#001d3d] text-white border-b-8 border-orange-600 shadow-2xl relative overflow-hidden">
                            <div className="flex items-center gap-4 text-orange-500 mb-10 border-b border-white/10 pb-6">
                                <UserCheck size={32} />
                                <span className="font-black uppercase tracking-widest text-sm">Resolute Heating & Air</span>
                            </div>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Talk directly to Travis (the guy on site)",
                                    "Same experienced technician every time",
                                    "Pay for quality work, not overhead",
                                    "Work with a neighbor who lives here"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-white italic">
                                        <Check size={16} className="text-orange-500 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12 p-6 bg-white/5 rounded-2xl italic text-xs font-medium text-slate-400">
                                "We're your neighbors. Travis is based out of West Jordan and runs into customers at the store. That local accountability keeps us honest."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Spotlight */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-400 fill-amber-400" size={24} />)}
                    </div>
                    <h2 className="text-3xl font-black text-[#001d3d] uppercase italic mb-10">Don't Just Take Our Word For It</h2>

                    <div className="bg-white p-12 rounded-[50px] shadow-sm border border-slate-100 relative">
                        <div className="text-7xl text-slate-100 absolute top-4 left-6 italic font-serif">“</div>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium italic leading-relaxed relative z-10 mb-10">
                            "Travis is such an awesome guy. He is solid. Fixed my HVAC when it wouldn't turn on. He solved it quick and kept his time costs low. Use him if you want someone you trust in your own home. I would 1000% use him again!"
                        </p>
                        <div className="flex flex-col items-center">
                            <p className="text-xs font-black text-[#001d3d] uppercase tracking-widest mb-4 italic leading-none">Emergency Repair Customer</p>
                            <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 hover:text-[#001d3d] transition-colors">
                                READ ALL REVIEWS ON GOOGLE <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">ANSWERS</span>
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight italic">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center p-8 text-left transition-all hover:bg-white"
                                >
                                    <span className="font-black text-[#001d3d] uppercase tracking-tight text-sm">{faq.q}</span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'bg-orange-600 text-white rotate-180' : 'bg-white text-[#001d3d] shadow-sm'}`}>
                                        <ChevronRight size={20} className="rotate-90" />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-8 pt-0 text-slate-500 font-bold text-xs border-t border-slate-200/50 leading-relaxed uppercase tracking-tight">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ready CTA */}
            <section className="py-24 bg-orange-600 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter text-balance leading-tight">
                        Ready to Schedule <br /> Honest HVAC Service?
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
                        <button className="bg-[#001d3d] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-orange-600 transition-all text-xs">
                            Schedule Now
                        </button>
                        <div className="flex items-center gap-5 group cursor-pointer text-white">
                            <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-600 transition-all shadow-xl">
                                <Phone size={28} fill="currentColor" />
                            </div>
                            <div className="text-left leading-none">
                                <p className="text-[10px] font-black uppercase text-white/60 tracking-[0.3em] mb-2 italic">Direct Call or Text</p>
                                <p className="text-3xl font-black text-white italic tracking-tighter">801-970-5797</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-[600px] w-full bg-slate-100 relative group overflow-hidden">
                <iframe 
                    id="map" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.352306266146!2d-112.0010389!3d40.60004999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528e55e5dd5193%3A0xb6b10c987e71c11c!2s8327%20Etude%20Dr%2C%20West%20Jordan%2C%20UT%2084088%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1767588394075!5m2!1ses!2sco" 
                    allowFullScreen 
                    title="Google Map" 
                    className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500 block"
                ></iframe>
            </div>

        </div>
    );
};

export default Contact;