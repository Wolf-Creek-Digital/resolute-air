"use client";
import React, { useState, useEffect } from "react";
import {
    Phone,
    Star,
    X,
    ChevronRight,
    ThermometerSnowflake,
    AlertTriangle,
    ShieldCheck,
    Check,
    Zap,
    Droplets,
    DollarSign,
    TrendingDown,
    Timer,
    ChevronDown,
} from "lucide-react";
import SectionIcon from "../Common/SectionIcon";

const Emergency = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const emergencySymptom = [
        {
            title: "No Heat When It's Below Freezing",
            icon: <ThermometerSnowflake size={32} />,
            risk: "Dangerous for kids/elderly and can cause burst pipes.",
            action: "Call us immediately at 801-970-5797. Don't wait.",
            color: "blue"
        },
        {
            title: "Gas Smell or Yellow Flame",
            icon: <AlertTriangle size={32} />,
            risk: "Fire hazard and deadly carbon monoxide production.",
            action: "Turn off furnace, open windows, and evacuate if smell is strong.",
            color: "red"
        },
        {
            title: "No AC During Extreme Heat (95°F+)",
            icon: <Star size={32} />,
            risk: "Serious health risk during triple-digit Utah summers.",
            action: "Call for same-day emergency AC repair.",
            color: "orange"
        },
        {
            title: "Significant Water Leaks",
            icon: <Droplets size={32} />,
            risk: "Can cause mold, flooring damage, and electrical hazards.",
            action: "Turn off power to the unit and call right away.",
            color: "blue"
        },
        {
            title: "Electrical Problems",
            icon: <Zap size={32} />,
            risk: "Burning smells, sparks, or repeatedly tripping breakers.",
            action: "Turn off power at the breaker immediately.",
            color: "amber"
        }
    ];

    const maintenanceFaqs = [
        { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. We keep you as a member by providing great service, not by locking you in." },
        { q: "What if I need a repair between tune-ups?", a: "No problem! You get priority scheduling and 10% off the repair. That's the value of membership." },
        { q: "Do you service all brands?", a: "Yes. We service all makes and models of HVAC equipment including Carrier, Trane, Lennox, and more." },
        { q: "Is it really worth it?", a: "Most members save more than the plan costs through 10% repair discounts, lower energy bills, and avoiding emergency fees." }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-normal">

            {/* 1. EMERGENCY SECTION (Full Width) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3">
                            <div className="w-10 h-[2px] bg-red-600"></div> 24/7 EMERGENCY SERVICE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight italic">
                            Your Furnace or AC <br className="hidden md:block" /> Can't Wait Until Monday
                        </h2>
                        <p className="text-slate-600 text-lg font-medium">
                            When your system fails, you need help NOW. Travis is available 24/7/365 for HVAC emergencies throughout Salt Lake County and surrounding areas.
                        </p>
                    </div>

                    {/* Emergency Hotline Box */}
                    <div className="bg-[#001d3d] max-w-4xl mx-auto p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden group mb-24">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                            <div className="space-y-4">
                                <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-500">Emergency Hotline</p>
                                <a href="tel:8019705797" className="text-5xl md:text-7xl font-black italic block hover:text-orange-500 transition-all transform hover:scale-105">801-970-5797</a>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">Call or Text Anytime - Travis Actually Answers</p>
                            </div>
                            <div className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 shrink-0">
                                <Timer className="text-orange-500 w-12 h-12" />
                                <div>
                                    <p className="text-2xl font-black">1 HOUR</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none">Avg Response Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-[-20deg] translate-x-10"></div>
                    </div>

                    {/* Emergency Symptoms Grid */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-black text-[#001d3d] uppercase tracking-tight text-center">What Qualifies as an HVAC Emergency?</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {emergencySymptom.map((s, i) => (
                                <div key={i} className="bg-slate-50 p-10 rounded-[40px] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100 group flex flex-col items-center text-center">
                                    <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg mb-8 transition-all group-hover:scale-110 
                    ${s.color === 'red' ? 'bg-red-600 text-white' :
                                            s.color === 'blue' ? 'bg-blue-600 text-white' :
                                                'bg-orange-600 text-white'}`}>
                                        {s.icon}
                                    </div>
                                    <h4 className="text-xl font-black text-[#001d3d] uppercase mb-3 leading-tight">{s.title}</h4>
                                    <p className="text-xs font-black text-red-600 uppercase mb-4 tracking-widest px-4">{s.risk}</p>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{s.action}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROCESS SECTION (Visual flow) */}
            <section className="py-24 bg-[#001d3d] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">THE PROCESS</span>
                        <h2 className="text-4xl font-black uppercase tracking-tight italic">What to Expect</h2>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {[
                            { s: "01", t: "Call or Text", d: "Travis answers directly to help." },
                            { s: "02", t: "Estimated Time", d: "Typically 1 hour or less response." },
                            { s: "03", t: "Stocked Truck", d: "Parts on hand for first-visit fix." },
                            { s: "04", t: "Fast Diagnosis", d: "Identify the problem quickly." },
                            { s: "05", t: "Upfront Price", d: "Price given before work starts." },
                            { s: "06", t: "Same-Day Fix", d: "Most repairs finished on spot." }
                        ].map((item, i) => (
                            <div key={i} className="relative text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-2xl font-black text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                    {item.s}
                                </div>
                                <h5 className="font-black uppercase text-xs mb-2">{item.t}</h5>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{item.d}</p>
                                {i < 5 && <ChevronRight className="absolute top-8 -right-4 text-white/10 hidden lg:block" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. MAINTENANCE SECTION (Full Width) */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                                    <div className="w-10 h-[2px] bg-orange-600"></div> MAINTENANCE PLANS
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight italic">
                                    Stop Paying for <br /> Emergency Repairs
                                </h2>
                            </div>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                Regular maintenance doesn't just save money—it gives you peace of mind knowing your system is less likely to fail when you need it most.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                                    <ShieldCheck className="text-orange-600 mb-4" size={32} />
                                    <h5 className="font-black text-[#001d3d] uppercase text-sm mb-2">Priority Scheduling</h5>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Members skip the line during peak seasons.</p>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                                    <DollarSign className="text-orange-600 mb-4" size={32} />
                                    <h5 className="font-black text-[#001d3d] uppercase text-sm mb-2">10% Off Repairs</h5>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Save on all parts and labor for any repair.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-[50px] shadow-2xl border border-slate-100 relative overflow-hidden">
                            <h3 className="text-2xl font-black text-[#001d3d] uppercase mb-8 text-center border-b border-slate-50 pb-6">Choose Your Plan</h3>
                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-200 group hover:border-orange-600 transition-all">
                                    <div className="text-center md:text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Single System</p>
                                        <p className="text-5xl font-black text-[#001d3d]">$299<span className="text-xs opacity-40">/yr</span></p>
                                    </div>
                                    <div className="flex-grow space-y-2">
                                        <p className="text-xs font-black text-[#001d3d] uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-600" /> 2 Tune-ups Yearly</p>
                                        <p className="text-xs font-black text-[#001d3d] uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-600" /> Priority Response</p>
                                    </div>
                                    <button className="bg-[#001d3d] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest group-hover:bg-orange-600 transition-colors">ENROLL NOW</button>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-8 bg-[#001d3d] p-8 rounded-[2rem] text-white relative group transition-all transform hover:scale-[1.02]">
                                    <div className="absolute top-0 right-10 bg-orange-600 px-4 py-1 text-[10px] font-black uppercase rounded-b-lg">Best Value</div>
                                    <div className="text-center md:text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Two Systems</p>
                                        <p className="text-5xl font-black italic">$549<span className="text-xs opacity-40">/yr</span></p>
                                        <p className="text-[9px] text-orange-500 font-black uppercase">SAVE $49 ANNUALLY</p>
                                    </div>
                                    <div className="flex-grow space-y-2">
                                        <p className="text-xs font-black uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-500" /> 4 Tune-ups Yearly</p>
                                        <p className="text-xs font-black uppercase tracking-tight flex items-center gap-2"><Check size={14} className="text-orange-500" /> VIP Support</p>
                                    </div>
                                    <button className="bg-white text-[#001d3d] px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 hover:text-white transition-colors">ENROLL NOW</button>
                                </div>
                            </div>
                            <div className="mt-10 text-center">
                                <p className="text-xs font-bold uppercase text-slate-400">Three or more systems? <span className="text-orange-600 underline cursor-pointer">Call for custom quote</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Real Cost Comparison Section */}
                    <div className="max-w-5xl mx-auto bg-white rounded-[50px] p-12 shadow-xl border border-slate-100">
                        <div className="text-center mb-12">
                            <h4 className="text-2xl font-black text-[#001d3d] uppercase italic">The Real Cost of Skipping Maintenance</h4>
                            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mt-2">Prevention vs. Crisis</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-red-600 mb-8 border-b border-red-50 pb-4">
                                    <TrendingDown size={28} />
                                    <span className="font-black uppercase tracking-widest text-sm">Without Regular Plan</span>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Energy bills increase 15-30% from dirty parts",
                                        "Small $200 problems become $2,000 emergencies",
                                        "System fails 5-10 years earlier than normal",
                                        "Frequent breakdowns during peak extreme weather",
                                        "Manufacturer warranty may be voided"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-slate-400 leading-tight">
                                            <X size={14} className="text-red-600 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-green-600 mb-8 border-b border-green-50 pb-4">
                                    <ShieldCheck size={28} />
                                    <span className="font-black uppercase tracking-widest text-sm">With Maintenance Plan</span>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Lowest possible energy bills year-round",
                                        "Catch problems early when repairs are cheap",
                                        "System lasts significantly longer (thousands saved)",
                                        "Avoid high-cost emergency service dispatch",
                                        "Fully maintained manufacturer warranty"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 text-[11px] font-black uppercase text-[#001d3d] leading-tight">
                                            <Check size={14} className="text-green-600 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION (Single Column) */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">FAQ</span>
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight italic">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {maintenanceFaqs.map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center p-8 text-left transition-all hover:bg-white"
                                >
                                    <span className="font-black text-[#001d3d] uppercase tracking-tight text-sm">{faq.q}</span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'bg-orange-600 text-white rotate-180' : 'bg-white text-[#001d3d] shadow-sm'}`}>
                                        <ChevronDown size={20} />
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

            {/* FINAL CTA (Full Width Overlay) */}
            <section className="py-24 bg-orange-600 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter text-balance">
                        Enroll in Peace of Mind
                    </h2>
                    <p className="text-white text-xl font-bold uppercase tracking-tight opacity-90 max-w-3xl mx-auto">
                        Lets schedule your first tune-up within the week and get your system in top shape before the weather hits.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
                        <button className="bg-[#001d3d] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-orange-600 transition-all text-xs">
                            Enroll Plan Online
                        </button>
                        <div className="flex items-center gap-5 group cursor-pointer text-white">
                            <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-600 transition-all shadow-xl">
                                <Phone size={28} fill="currentColor" />
                            </div>
                            <div className="text-left leading-none">
                                <p className="text-[10px] font-black uppercase text-white/60 tracking-[0.3em] mb-2 italic">Call or Text Travis</p>
                                <p className="text-3xl font-black text-white italic tracking-tighter">801-970-5797</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:60px_60px]"></div>
            </section>
        </div>
    );
};

export default Emergency;
