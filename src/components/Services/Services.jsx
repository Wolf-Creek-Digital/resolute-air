"use client";
import React, { useState, useEffect } from "react";
import {
    Phone,
    Flame,
    CheckCircle,
    UserCheck,
    Hammer,
    Star,
    MapPin,
    Menu,
    X,
    ChevronRight,
    ThermometerSnowflake,
    Wind,
    Wrench,
    Home,
    Building2,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    ArrowRight,
    Plus,
    Minus,
    AlertCircle,
    Check,
    ShieldCheck,
    Construction,
    Snowflake,
} from "lucide-react";
import SectionIcon from "../Common/SectionIcon";

const Services = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const mainServices = [
        {
            id: "01",
            title: "AC Repair & Installation",
            icon: <ThermometerSnowflake size={24} />,
            desc:
                "Is your AC blowing warm air? Same-day diagnosis for Salt Lake County.",
        },
        {
            id: "02",
            title: "Furnace Repair & Install",
            icon: <Flame size={24} />,
            desc: "Available 24/7 for no-heat emergencies during Utah winters.",
        },
        {
            id: "03",
            title: "Ductwork Services",
            icon: <Wind size={24} />,
            desc: "Installation & repair for basements, remodels, and additions.",
        },
        {
            id: "04",
            title: "Seasonal Maintenance",
            icon: <Wrench size={24} />,
            desc: "Prevent breakdowns with our comprehensive 15-point tune-ups.",
        },
        {
            id: "05",
            title: "Basement HVAC",
            icon: <Construction size={24} />,
            desc: "Specialized zoning and ductwork for your basement finish project.",
        },
        {
            id: "08",
            title: "Light Commercial",
            icon: <Building2 size={24} />,
            desc: "Fast response for small offices, retail, and multi-unit properties.",
        },
    ];

    const faqs = [
        {
            q: "How much does AC repair usually cost?",
            a: "Most AC repairs range from $150-$600. Common fixes like capacitors or refrigerant recharges typically cost $300-$500. We'll give you an upfront price before starting work.",
        },
        {
            q: "When should I repair vs. replace my furnace?",
            a: "Generally, if your furnace is under 15 years old and the repair costs less than $1,000, repair makes sense. If it's 18+ years old or needs expensive repairs, replacement is often smarter. I'll give you honest advice.",
        },
        {
            q: "How long do HVAC systems last?",
            a: "With regular maintenance: AC units last 12-15 years, furnaces last 15-20 years. Without maintenance, you could see a 30-40% shorter lifespan.",
        },
        {
            q: "What's included in a tune-up?",
            a: "Complete inspection, cleaning, testing, and adjustment of all components. Travis checks for potential problems and can fix small issues before they become expensive breakdowns.",
        },
        {
            q: "Do you offer payment plans?",
            a: "FINANCING SOON!! We are currently setting up flexible payment options to help with major replacements.",
        },
        {
            q: "How quickly can you get here?",
            a: "For emergencies: typically within 1-2 hours. For scheduled service: usually same-day or within 24-48 hours.",
        },
        {
            q: "What if you can't fix it?",
            a: "If I can't fix it, you don't even pay for the service call. Simple as that. I'll even help find someone who can.",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-normal">
            {/* Intro Description Section - New Placement */}
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

            {/* Main Grid Intro */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                    {mainServices.map((service, i) => (
                        <div key={i} className="relative group flex flex-col items-center">
                            <div
                                className="w-full aspect-square bg-white border border-slate-100 flex flex-col items-center justify-center p-10 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl relative overflow-visible"
                                style={{
                                    clipPath:
                                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                }}
                            >
                                <div className="absolute top-10 font-black text-slate-100 text-5xl group-hover:text-orange-50 transition-colors pointer-events-none">
                                    {service.id}
                                </div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <h3 className="text-lg font-black text-[#001d3d] text-center uppercase tracking-tight mb-3 px-2 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-[10px] text-slate-400 text-center mb-4 max-w-[150px] font-bold uppercase tracking-widest leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <button className="text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-[#001d3d] group-hover:text-orange-600 transition-colors">
                                        VIEW DETAILS <ArrowRight size={10} />
                                    </button>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-full shadow-lg border border-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 1: AC Detail */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                                COOLING SOLUTIONS
                            </span>
                            <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight leading-tight">
                                AC Repair & Installation
                            </h2>
                        </div>
                        <p className="text-slate-600 font-medium">
                            When Utah temperatures hit 95°F+, a broken AC is unbearable. Travis
                            diagnoses and fixes problems the same day in most cases.
                        </p>
                        <div className="space-y-4">
                            <h4 className="font-black text-[#001d3d] text-sm uppercase tracking-widest border-l-4 border-orange-600 pl-4">
                                Common AC Problems
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { p: "Blowing Warm Air", c: "Low refrigerant or compressor" },
                                    { p: "Won't Turn On", c: "Electrical or capacitor failure" },
                                    { p: "Loud Noises", c: "Worn motor or loose parts" },
                                    { p: "Short Cycling", c: "Thermostat or refrigerant issues" },
                                    { p: "Water Leaking", c: "Clogged drain or frozen coil" },
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                                    >
                                        <p className="text-orange-600 font-black text-xs uppercase mb-1">
                                            {item.p}
                                        </p>
                                        <p className="text-slate-500 text-[10px] font-bold uppercase">
                                            {item.c}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                        <h4 className="text-xl font-black text-[#001d3d] uppercase mb-6 text-center tracking-tight">
                            Repair vs. Replace Your AC
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <p className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase inline-block">
                                    Repair If:
                                </p>
                                <ul className="text-xs space-y-2 text-slate-500 font-bold uppercase tracking-tight">
                                    <li className="flex gap-2">
                                        <Check size={14} className="text-green-500 shrink-0" /> Under 10 years
                                        old
                                    </li>
                                    <li className="flex gap-2">
                                        <Check size={14} className="text-green-500 shrink-0" /> Repair costs
                                        &lt; $1,000
                                    </li>
                                    <li className="flex gap-2">
                                        <Check size={14} className="text-green-500 shrink-0" /> System is
                                        reliable
                                    </li>
                                    <li className="flex gap-2">
                                        <Check size={14} className="text-green-500 shrink-0" /> Stable energy
                                        bills
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-[10px] font-black uppercase inline-block">
                                    Replace If:
                                </p>
                                <ul className="text-xs space-y-2 text-slate-500 font-bold uppercase tracking-tight">
                                    <li className="flex gap-2">
                                        <AlertCircle size={14} className="text-orange-500 shrink-0" /> 12-15+
                                        years old
                                    </li>
                                    <li className="flex gap-2">
                                        <AlertCircle size={14} className="text-orange-500 shrink-0" /> Repair
                                        &gt; 50% cost
                                    </li>
                                    <li className="flex gap-2">
                                        <AlertCircle size={14} className="text-orange-500 shrink-0" />{" "}
                                        Frequent breakdowns
                                    </li>
                                    <li className="flex gap-2">
                                        <AlertCircle size={14} className="text-orange-500 shrink-0" />{" "}
                                        Climbing energy bills
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 p-4 bg-slate-50 rounded-xl border-t-4 border-orange-600 italic text-slate-600 text-xs font-medium">
                            "I'll tell you honestly which option makes more financial sense for YOUR
                            situation. No pressure to buy if repair is smarter." — Travis
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Furnace Detail */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="bg-[#001d3d] p-10 rounded-[40px] text-white space-y-8 shadow-2xl">
                            <div className="flex justify-between items-start">
                                <h4 className="text-2xl font-black uppercase tracking-tight">
                                    No-Heat Emergencies
                                </h4>
                                <div className="bg-orange-600 p-3 rounded-2xl animate-pulse">
                                    <Flame size={24} />
                                </div>
                            </div>
                            <p className="text-slate-400 font-medium italic">
                                Utah winters drop to 0°F. If your furnace stops, it's an emergency.
                                Travis is available 24/7.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    "Ignition failure or gas supply problems",
                                    "Failed pilot light or limit switch tripped",
                                    "Loose blower wheel (banging noises)",
                                    "Dirty filter causing short cycling",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 items-center bg-white/5 p-4 rounded-xl"
                                    >
                                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                        <span className="text-sm font-bold uppercase tracking-tight">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <a
                                href="tel:8019705797"
                                className="block text-center bg-white text-[#001d3d] py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all text-sm"
                            >
                                CALL IMMEDIATELY: 801-970-5797
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                            HEATING SPECIALISTS
                        </span>
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight">
                            Furnace Installation & Repair
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-orange-600">
                                <p className="font-black text-[#001d3d] uppercase text-sm mb-2">
                                    What's Included in Installation:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Proper BTU sizing",
                                        "High-efficiency options",
                                        "Permits & Inspections",
                                        "Old unit disposal",
                                        "Warranty coverage",
                                        "Financing (Soon!)",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase"
                                        >
                                            <Check size={14} className="text-orange-600" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <ShieldCheck className="text-blue-600 shrink-0" />
                                <p className="text-blue-900 text-xs font-bold uppercase tracking-tight">
                                    Repair makes sense if heat exchanger is intact and furnace is under 15
                                    years old.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Ductwork & Maintenance */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                            MAINTENANCE & DUCTS
                        </span>
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight">
                            Keep Your System Efficient
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Ductwork */}
                        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4 mb-8">
                                <Wind className="text-orange-600" size={32} />
                                <h3 className="text-2xl font-black text-[#001d3d] uppercase">
                                    Ductwork Services
                                </h3>
                            </div>
                            <p className="text-slate-500 mb-8 font-medium">
                                Bad ductwork can waste 30% of your energy. We design and seal systems
                                for basements and remodels.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                        <AlertCircle size={20} />
                                    </div>
                                    <div>
                                        <p className="font-black text-xs uppercase text-slate-800">
                                            Uneven Heating/Cooling
                                        </p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                                            Solution: Duct balancing or redesign
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                        <AlertCircle size={20} />
                                    </div>
                                    <div>
                                        <p className="font-black text-xs uppercase text-slate-800">
                                            Excessive Dust
                                        </p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                                            Solution: Seal return duct leaks
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex gap-4 overflow-x-auto pb-4 border-t pt-6">
                                {["Basement Finishes", "Repair & Sealing", "Zoning"].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-slate-100 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tune-Ups */}
                        <div className="bg-[#001d3d] p-10 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <Wrench className="text-orange-600" size={32} />
                                    <h3 className="text-2xl font-black uppercase tracking-tight">
                                        Maintenance Plans
                                    </h3>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h5 className="text-orange-500 font-black text-xs uppercase mb-4 tracking-widest">
                                            Spring AC Tune-Up
                                        </h5>
                                        <ul className="text-[10px] font-bold uppercase space-y-2 opacity-80">
                                            <li>• Clean condenser coils</li>
                                            <li>• Check refrigerant levels</li>
                                            <li>• Test thermostat accuracy</li>
                                            <li>• Inspect connections</li>
                                            <li>• Clear condensate drain</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-orange-500 font-black text-xs uppercase mb-4 tracking-widest">
                                            Fall Furnace Tune-Up
                                        </h5>
                                        <ul className="text-[10px] font-bold uppercase space-y-2 opacity-80">
                                            <li>• Inspect heat exchanger</li>
                                            <li>• Test ignition system</li>
                                            <li>• Adjust gas pressure</li>
                                            <li>• Clean burners</li>
                                            <li>• Combustion analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-10 p-4 bg-orange-600 rounded-2xl flex items-center justify-between">
                                    <div className="text-left">
                                        <p className="font-black uppercase text-[10px] tracking-widest">
                                            Why Maintenance Matters
                                        </p>
                                        <p className="text-[9px] font-bold opacity-80 uppercase">
                                            Small $200 problems become $2,000 problems.
                                        </p>
                                    </div>
                                    <button className="bg-white text-orange-600 px-4 py-2 rounded-xl font-black uppercase text-[9px] hover:bg-slate-900 hover:text-white transition-all shrink-0 ml-4 shadow-lg">
                                        Save 10%
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Who We Serve & Service Areas */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                                <div className="w-8 h-[2px] bg-orange-600"></div> WHO WE SERVE
                            </span>
                            <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tighter">
                                Residential & Light Commercial
                            </h2>
                            <p className="text-slate-600 font-medium">
                                Serving homeowners, property managers, and retail spaces throughout the
                                Wasatch Front.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    t: "Basement HVAC",
                                    d: "Extend existing ductwork or add separate zones for remodel projects.",
                                },
                                {
                                    t: "Residential Services",
                                    d: "Primary focus on homes, rentals, and multi-unit properties.",
                                },
                                {
                                    t: "Light Commercial",
                                    d: "Small offices, retail spaces, and small warehouses.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-6 p-6 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group"
                                >
                                    <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-black text-[#001d3d] uppercase tracking-tight mb-1">
                                            {item.t}
                                        </h5>
                                        <p className="text-xs text-slate-500 font-bold uppercase leading-relaxed tracking-tight opacity-70">
                                            {item.d}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#001d3d] p-12 rounded-[60px] text-white relative shadow-2xl overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform"></div>
                        <h4 className="text-2xl font-black uppercase mb-8 border-b border-white/10 pb-4 tracking-tight">
                            Service Areas
                        </h4>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <div className="space-y-4">
                                <p className="text-white">Salt Lake County</p>
                                <p className="text-white">Utah County</p>
                                <p className="text-white">Davis County</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-white">Weber County</p>
                                <p className="text-white">Summit County</p>
                                <p className="text-white">Wasatch County</p>
                            </div>
                        </div>
                        <div className="mt-12 bg-white/5 p-6 rounded-3xl border border-white/10">
                            <p className="text-[10px] opacity-60 mb-4">
                                SERVING THE COMMUNITIES OF:
                            </p>
                            <p className="text-xs font-black tracking-tight leading-relaxed">
                                West Jordan, Sandy, Draper, South Jordan, SLC, Provo, Orem, Lehi,
                                Bountiful, Layton, Ogden, Park City.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-4 text-orange-500 font-black uppercase text-xs">
                            <Phone size={16} /> 801-970-5797
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs">
                            RESOURCES
                        </span>
                        <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tight italic text-balance">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-5">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:border-orange-200 transition-colors"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center p-7 text-left transition-colors"
                                >
                                    <span className="font-black text-[#001d3d] uppercase tracking-tight pr-8 text-sm">
                                        {faq.q}
                                    </span>
                                    <div
                                        className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === i ? "bg-orange-600 text-white rotate-180" : "bg-slate-50 text-[#001d3d] group-hover:bg-orange-50"}`}
                                    >
                                        {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="p-7 pt-0 text-slate-500 font-bold text-sm border-t border-slate-50 leading-relaxed uppercase tracking-tight">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Risk Free Promise */}
            <section className="bg-white py-20 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                    <div className="bg-orange-50 p-6 rounded-full mb-6 shadow-inner">
                        <ShieldCheck className="text-orange-600" size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-[#001d3d] uppercase tracking-tight italic mb-4">
                        The Resolute No-Risk Promise
                    </h2>
                    <p className="text-xl font-bold text-slate-500 uppercase tracking-widest max-w-2xl leading-snug">
                        "If I can't fix it, you don't even pay for the service call. Simple as
                        that. I'll even help find someone who can."
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-[#001d3d] relative overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                        Get HVAC Service Today
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto font-bold uppercase tracking-tight opacity-80">
                        Free estimates on installations and major repairs. Travis is ready to help
                        Salt Lake homes.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
                        <button className="bg-orange-600 text-white px-12 py-6 rounded-lg font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-600/40 hover:bg-white hover:text-orange-600 transition-all text-xs">
                            Schedule Service Now
                        </button>
                        <div className="flex items-center gap-5 group cursor-pointer">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-xl">
                                <Phone size={28} fill="currentColor" />
                            </div>
                            <div className="text-left leading-none">
                                <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-2 italic text-balance">
                                    Speak with Travis
                                </p>
                                <p className="text-3xl font-black text-white italic tracking-tighter">
                                    801-970-5797
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:60px_60px]"></div>
            </section>
        </div>
    );
};

export default Services;
