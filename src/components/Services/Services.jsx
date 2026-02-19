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
} from "lucide-react";
import SectionIcon from "../Common/SectionIcon";

const Services = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'

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
            icon: <Home size={24} />,
            desc: "Specialized zoning and ductwork for your basement finish project.",
        },
        {
            id: "06",
            title: "Light Commercial",
            icon: <Building2 size={24} />,
            desc: "Fast response for small offices, retail, and multi-unit properties.",
        },
    ];

    const pricingPlans = [
        {
            priceMonthly: "150",
            priceYearly: "125",
            title: "Basic Plan",
            features: [
                "Refrigerant leak detection & repair",
                "Thermostat replacement",
                "Clean condenser coil",
                "Air filter replacement",
                "Clean condenser coil",
                "AC fan replacement",
            ],
        },
        {
            priceMonthly: "200",
            priceYearly: "165",
            title: "Standard Plan",
            features: [
                "Refrigerant leak detection & repair",
                "Thermostat replacement",
                "Clean condenser coil",
                "Air filter replacement",
                "Clean condenser coil",
                "AC fan replacement",
            ],
            highlight: true,
        },
        {
            priceMonthly: "250",
            priceYearly: "210",
            title: "Premium Plan",
            features: [
                "Refrigerant leak detection & repair",
                "Thermostat replacement",
                "Clean condenser coil",
                "Air filter replacement",
                "Clean condenser coil",
                "AC fan replacement",
            ],
        },
    ];

    const faqs = [
        {
            q: "How much does AC repair usually cost?",
            a: "Most AC repairs range from $150-$600. Common fixes like capacitors or refrigerant recharges typically cost $300-$500. We'll give you an upfront price before starting work.",
        },
        {
            q: "When should I repair vs. replace my furnace?",
            a: "Generally, if your furnace is under 15 years old and the repair costs less than $1,000, repair makes sense. If it's 18+ years old or needs expensive repairs, replacement is often smarter.",
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
            a: "SOON!! We are working on providing flexible financing options for our customers.",
        },
        {
            q: "How quickly can you get here?",
            a: "For emergencies: typically within 1-2 hours. For scheduled service: usually within 24-48 hours, often same-day or next-day.",
        },
    ];

    const handleImageError = (e) => {
        e.target.src =
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800";
    };

    return (
        <>
            <style jsx>{`
    .service-card-wrapper {
     filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.05));
     transition: filter 0.3s ease;
    }
    .service-card-wrapper:hover {
     filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
    }

    .service-card {
     background-color: white;
     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
     aspect-ratio: 1/1;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     position: relative;
     z-index: 1;
    }

    .service-card .service-id {
     color: #f8fafc; /* slate-50 */
     transition: color 0.3s ease;
     font-size: 5rem;
     line-height: 1;
     position: absolute;
     top: 2rem;
     z-index: 0;
     font-weight: 900;
    }
    .service-card-wrapper:hover .service-id {
     color: #fff7ed; /* orange-50 */
    }

    .service-card-content {
     position: relative;
     z-index: 1;
     padding: 2rem;
     text-align: center;
    }

    .icon-circle-wrapper {
     position: absolute;
     bottom: -28px;
     left: 50%;
     transform: translateX(-50%);
     z-index: 2;
     filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    }
    .icon-circle {
     width: 56px;
     height: 56px;
     background-color: white;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     color: #cbd5e1; /* slate-300 */
     transition: all 0.3s ease;
    }
    .service-card-wrapper:hover .icon-circle {
     background-color: var(--accent);
     color: white;
    }

    .read-more {
     color: #010f34;
     border-bottom: 1px solid transparent;
     transition: all 0.3s ease;
    }
    .service-card-wrapper:hover .read-more {
     color: var(--accent);
     border-color: var(--accent);
    }

    .pricing-card {
     transition: transform 0.3s ease;
    }
    .pricing-card:hover {
     transform: translateY(-10px);
    }
    .pricing-card.highlight {
     border-top: 8px solid var(--accent);
    }
    .pricing-card:not(.highlight) {
     border-top: 8px solid transparent;
    }
    .pricing-card:hover .price-box {
     background-color: var(--accent) !important;
     color: white !important;
    }

    .faq-item button {
     transition: all 0.3s ease;
    }
    .faq-item:hover {
     border-color: #fed7aa; /* orange-200 */
    }

    .bg-accent {
     background-color: var(--accent);
    }
    .text-accent {
     color: var(--accent);
    }
    .border-accent {
     border-color: var(--accent);
    }

    .hover-bg-accent:hover {
     background-color: var(--accent) !important;
     color: white !important;
    }
    .hover-text-accent:hover {
     color: var(--accent) !important;
    }

    .discover-btn {
     transition: all 0.3s ease;
     background-color: white !important;
     color: var(--accent) !important;
    }
    .discover-btn:hover {
     background-color: #010f34 !important;
     color: white !important;
    }

    .emergency-card {
     transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
     border-bottom: 8px solid var(--accent) !important;
    }
    .emergency-card:hover {
     transform: translateY(-5px);
     box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    }
    .emergency-card .icon-box {
     transition: all 0.3s ease;
     box-shadow: 0 0 0 0 rgba(226, 109, 38, 0.7);
    }
    .emergency-card:hover .icon-box {
     box-shadow: 0 0 0 10px rgba(226, 109, 38, 0.3);
     transform: scale(1.1);
    }

    .cta-btn {
     background-color: var(--accent) !important;
     color: white !important;
     transition: all 0.3s ease;
     border: 2px solid var(--accent) !important;
    }
    .cta-btn:hover {
     background-color: white !important;
     color: var(--accent) !important;
    }

    .phone-icon-box {
     background-color: transparent !important;
     color: var(--accent) !important;
     transition: all 0.3s ease;
     border: 2px solid rgba(255, 255, 255, 0.2) !important;
    }
    .phone-btn:hover .phone-icon-box {
     background-color: var(--accent) !important;
     color: white !important;
     border-color: var(--accent) !important;
    }

    .btn-emergency-call {
     background-color: white !important;
     color: #010f34 !important;
     transition: all 0.3s ease;
     font-size: 14px;
     letter-spacing: 0.1em;
    }
    .btn-emergency-call:hover {
     background-color: #ea580c !important;
     color: white !important;
     box-shadow: 0 10px 20px rgba(234, 88, 12, 0.3);
     transform: translateY(-3px);
    }

    .dots-grid {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 0.5rem;
    }
   `}</style>

            <div className="font-sans text-dark leading-normal">
                {/* Intro Description Section */}
                <section className="py-5 bg-white border-bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h2
                                    className="display-5 fw-black text-uppercase mb-4"
                                    style={{ color: "#010f34", fontWeight: 900, letterSpacing: "-0.02em" }}
                                >
                                    AC Repair, Furnace Installation & HVAC Services in Salt Lake County
                                </h2>
                                <p
                                    className="fs-5 text-secondary fw-medium mb-5 mx-auto lh-lg"
                                    style={{ maxWidth: "1200px" }}
                                >
                                    From emergency repairs to new installations, Resolute Heating & Air
                                    provides complete HVAC solutions for homeowners across the Wasatch
                                    Front. Travis personally handles every job with honest recommendations
                                    and fair pricing—no high-pressure sales, ever. Just options and
                                    suggestions.
                                </p>
                                <div
                                    className="mx-auto rounded-pill"
                                    style={{ width: "96px", height: "6px", backgroundColor: "#ea580c" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Services Grid */}
                <section className="py-5 position-relative bg-white">
                    <div className="container py-5">
                        <div className="row g-5">
                            {mainServices.map((service, i) => (
                                <div key={i} className="col-md-6 col-lg-4">
                                    <div className="position-relative d-flex flex-column align-items-center service-card-wrapper group">
                                        {/* Diamond Container */}
                                        <div className="w-100 service-card">
                                            {/* Number at top */}
                                            <span className="service-id">{service.id}</span>

                                            <div className="service-card-content d-flex flex-column align-items-center">
                                                <h3 className="h6 fw-bold text-dark text-uppercase mb-3 px-2 lh-sm pt-4">
                                                    {service.title}
                                                </h3>
                                                <p
                                                    className="small text-muted mb-4 fw-bold text-uppercase"
                                                    style={{
                                                        fontSize: "10px",
                                                        letterSpacing: "0.1em",
                                                        maxWidth: "180px",
                                                    }}
                                                >
                                                    {service.desc}
                                                </p>
                                                <button
                                                    className="btn btn-link text-decoration-none p-0 small fw-bold d-flex align-items-center gap-2 read-more"
                                                    style={{ fontSize: "9px", letterSpacing: "0.2em" }}
                                                >
                                                    VIEW DETAILS <ArrowRight size={12} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Icon Circle at Bottom */}
                                        <div className="icon-circle-wrapper">
                                            <div className="icon-circle">{service.icon}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 1: AC Detail */}
                <section className="py-5 bg-light">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="d-flex flex-column gap-4">
                                    <div>
                                        <span
                                            className="fw-bold text-uppercase small d-block mb-2"
                                            style={{
                                                color: "#ea580c",
                                                letterSpacing: "0.2em",
                                                fontSize: "12px",
                                            }}
                                        >
                                            {" "}
                                            <SectionIcon size={16} />
                                            COOLING SOLUTIONS
                                        </span>
                                        <h2
                                            className="display-5 fw-black text-dark text-uppercase lh-sm"
                                            style={{ color: "#010f34", fontWeight: 900 }}
                                        >
                                            AC Repair & Installation
                                        </h2>
                                    </div>
                                    <p className="fs-5 text-muted fw-medium lh-lg">
                                        When Utah temperatures hit 95°F+, a broken AC is unbearable. Travis
                                        diagnoses and fixes problems the same day in most cases.
                                    </p>

                                    <div className="mt-2">
                                        <h4
                                            className="fw-bold text-dark text-uppercase small mb-4 ps-3 border-start border-4 border-warning"
                                            style={{ borderColor: "#ea580c !important", letterSpacing: "0.1em" }}
                                        >
                                            {" "}
                                            Common AC Problems
                                        </h4>
                                        <div className="row g-3">
                                            {[
                                                { p: "Blowing Warm Air", c: "Low refrigerant or compressor" },
                                                { p: "Won't Turn On", c: "Electrical or capacitor failure" },
                                                { p: "Loud Noises", c: "Worn motor or loose parts" },
                                                { p: "Short Cycling", c: "Thermostat or refrigerant issues" },
                                                { p: "Water Leaking", c: "Clogged drain or frozen coil" },
                                            ].map((item, idx) => (
                                                <div key={idx} className="col-sm-6">
                                                    <div className="bg-white p-3 rounded-3 shadow-sm border border-light h-100">
                                                        <p
                                                            className="fw-black text-uppercase mb-1 small"
                                                            style={{ color: "#ea580c", fontSize: "12px", fontWeight: 900 }}
                                                        >
                                                            {item.p}
                                                        </p>
                                                        <p
                                                            className="text-muted fw-bold text-uppercase mb-0"
                                                            style={{ fontSize: "10px" }}
                                                        >
                                                            {item.c}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="bg-white p-4 p-md-5 rounded-4 shadow-lg border border-light">
                                    <h4
                                        className="h4 fw-black text-dark text-uppercase mb-4 text-center"
                                        style={{ color: "#010f34" }}
                                    >
                                        Repair vs. Replace Your AC
                                    </h4>
                                    <div className="row g-4">
                                        <div className="col-6">
                                            <div className="d-flex flex-column gap-3">
                                                <span
                                                    className="badge rounded-pill text-uppercase py-2 px-3 align-self-start"
                                                    style={{
                                                        backgroundColor: "#dcfce7",
                                                        color: "#15803d",
                                                        fontSize: "10px",
                                                        fontWeight: 800,
                                                    }}
                                                >
                                                    Repair If:
                                                </span>
                                                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                                                    {[
                                                        "Under 10 years old",
                                                        "Repair costs < $1,000",
                                                        "System is reliable",
                                                        "Stable energy bills",
                                                    ].map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="d-flex gap-2 align-items-center text-muted fw-bold text-uppercase"
                                                            style={{ fontSize: "11px" }}
                                                        >
                                                            <Check
                                                                size={14}
                                                                className="flex-shrink-0"
                                                                style={{ color: "#22c55e" }}
                                                            />{" "}
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex flex-column gap-3">
                                                <span
                                                    className="badge rounded-pill text-uppercase py-2 px-3 align-self-start"
                                                    style={{
                                                        backgroundColor: "#ffedd5",
                                                        color: "#c2410c",
                                                        fontSize: "10px",
                                                        fontWeight: 800,
                                                    }}
                                                >
                                                    Replace If:
                                                </span>
                                                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                                                    {[
                                                        "12-15+ years old",
                                                        "Repair > 50% cost",
                                                        "Frequent breakdowns",
                                                        "Climbing energy bills",
                                                    ].map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="d-flex gap-2 align-items-center text-muted fw-bold text-uppercase"
                                                            style={{ fontSize: "11px" }}
                                                        >
                                                            <AlertCircle
                                                                size={14}
                                                                className="flex-shrink-0"
                                                                style={{ color: "#f97316" }}
                                                            />{" "}
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-4 p-3 bg-light rounded-3 border-top border-4 border-warning fst-italic text-muted small fw-medium"
                                        style={{ borderColor: "#ea580c !important" }}
                                    >
                                        "I'll tell you honestly which option makes more financial sense for
                                        YOUR situation. No pressure to buy if repair is smarter." — Travis
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Orange Action Banner */}
                <section
                    className="py-5 position-relative overflow-hidden"
                    style={{ backgroundColor: "#ea580c" }}
                >
                    <div
                        className="position-absolute top-0 end-0 h-100 opacity-10"
                        style={{
                            width: "33%",
                            transform: "skewX(-20deg) translateX(40px)",
                            backgroundColor: "#ec6925",
                        }}
                    ></div>
                    <div className="container position-relative z-1">
                        <div className="row align-items-center gy-4">
                            <div className="col-lg-7 text-white">
                                <span
                                    className="d-flex align-items-center gap-2 fw-bold text-uppercase small mb-2"
                                    style={{ letterSpacing: "0.2em", fontSize: "10px" }}
                                >
                                    <div
                                        style={{ width: "24px", height: "2px", backgroundColor: "#fff" }}
                                    ></div>{" "}
                                    FREE TO CONTACT US
                                </span>
                                <h2 className="display-4 fw-bold text-uppercase lh-sm text-white">
                                    Get Premium Air Services <br className="d-none d-md-block" /> From With
                                    Us!
                                </h2>
                            </div>
                            <div className="col-lg-5">
                                <div className="d-flex align-items-center justify-content-lg-end gap-4">
                                    <button
                                        className="btn px-4 py-3 rounded-1 fw-bold text-uppercase small d-flex align-items-center gap-2 shadow hover-lift discover-btn"
                                        style={{ letterSpacing: "0.1em" }}
                                    >
                                        DISCOVER MORE <ArrowRight size={16} />
                                    </button>
                                    <div
                                        className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow border border-4 border-white-50"
                                        style={{ width: "64px", height: "64px", color: "var(--accent)" }}
                                    >
                                        <Star fill="currentColor" size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Furnace Detail */}
                <section className="py-5 bg-white">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            {/* Left Column (Order 2 on mobile, 1 on LG) */}
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div
                                    className="position-relative p-4 p-md-5 rounded-4 shadow-lg text-white"
                                    style={{ backgroundColor: "#010f34", borderRadius: "40px" }}
                                >
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <h4
                                            className="h3 fw-black text-uppercase lh-sm"
                                            style={{ fontWeight: 900 }}
                                        >
                                            No-Heat Emergencies
                                        </h4>
                                        <div className="p-3 rounded-4" style={{ backgroundColor: "#ea580c" }}>
                                            <Flame size={24} className="text-white" />
                                        </div>
                                    </div>
                                    <p className="fw-medium fst-italic mb-4" style={{ color: "#94a3b8" }}>
                                        Utah winters drop to 0°F. If your furnace stops, it's an emergency.
                                        Travis is available 24/7.
                                    </p>
                                    <div className="d-flex flex-column gap-3 mb-5">
                                        {[
                                            "Ignition failure or gas supply problems",
                                            "Failed pilot light or limit switch tripped",
                                            "Loose blower wheel (banging noises)",
                                            "Dirty filter causing short cycling",
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="d-flex align-items-center gap-3 p-3 rounded-3"
                                                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                                            >
                                                <div
                                                    className="rounded-circle flex-shrink-0"
                                                    style={{ width: "8px", height: "8px", backgroundColor: "#ea580c" }}
                                                ></div>
                                                <span
                                                    className="small fw-bold text-uppercase"
                                                    style={{ letterSpacing: "-0.025em" }}
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href="tel:8019705797"
                                        className="btn w-100 py-3 rounded-3 fw-black text-uppercase d-block text-center shadow hover-lift btn-emergency-call"
                                    >
                                        CALL IMMEDIATELY: 801-970-5797
                                    </a>
                                </div>
                            </div>

                            {/* Right Column (Order 1 on mobile, 2 on LG) */}
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="d-flex flex-column gap-4">
                                    <div>
                                        <span
                                            className="fw-bold text-uppercase small d-block mb-2"
                                            style={{
                                                color: "#ea580c",
                                                letterSpacing: "0.2em",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <SectionIcon size={16} />
                                            HEATING SPECIALISTS
                                        </span>
                                        <h2
                                            className="display-4 fw-black text-dark text-uppercase lh-sm"
                                            style={{ color: "#010f34", fontWeight: 900 }}
                                        >
                                            Furnace Installation & Repair
                                        </h2>
                                    </div>

                                    <div
                                        className="p-4 bg-light rounded-4 border-start border-4 border-warning"
                                        style={{ borderColor: "#ea580c !important" }}
                                    >
                                        <p
                                            className="fw-black text-uppercase small mb-3"
                                            style={{ color: "#010f34" }}
                                        >
                                            What's Included in Installation:
                                        </p>
                                        <div className="row g-3">
                                            {[
                                                "Proper BTU sizing",
                                                "High-efficiency options",
                                                "Permits & Inspections",
                                                "Old unit disposal",
                                                "Warranty coverage",
                                                "Financing (Soon!)",
                                            ].map((item, i) => (
                                                <div key={i} className="col-sm-6">
                                                    <div
                                                        className="d-flex align-items-center gap-2 text-muted fw-bold text-uppercase small"
                                                        style={{ fontSize: "11px" }}
                                                    >
                                                        <Check size={14} style={{ color: "#ea580c" }} /> {item}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        className="d-flex align-items-start gap-3 p-4 rounded-4 border"
                                        style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
                                    >
                                        <ShieldCheck className="flex-shrink-0" style={{ color: "#2563eb" }} />
                                        <p
                                            className="small fw-bold text-uppercase mb-0"
                                            style={{ color: "#1e3a8a", fontSize: "12px" }}
                                        >
                                            Repair makes sense if heat exchanger is intact and furnace is under
                                            15 years old.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Ductwork & Maintenance */}
                <section className="py-5 bg-light">
                    <div className="container py-5">
                        <div className="text-center mb-5">
                            <span
                                className="fw-bold text-uppercase small d-block mb-2"
                                style={{ color: "#ea580c", letterSpacing: "0.2em", fontSize: "12px" }}
                            >
                                <SectionIcon size={16} />
                                MAINTENANCE & DUCTS
                            </span>
                            <h2
                                className="display-4 fw-black text-dark text-uppercase lh-sm"
                                style={{ color: "#010f34", fontWeight: 900 }}
                            >
                                Keep Your System Efficient
                            </h2>
                        </div>

                        <div className="row g-5">
                            {/* Ductwork */}
                            <div className="col-lg-6">
                                <div
                                    className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light h-100"
                                    style={{ borderRadius: "40px" }}
                                >
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <Wind size={32} style={{ color: "#ea580c" }} />
                                        <h3
                                            className="h2 fw-black text-uppercase mb-0"
                                            style={{ color: "#010f34" }}
                                        >
                                            Ductwork Services
                                        </h3>
                                    </div>
                                    <p className="text-secondary fw-medium mb-4">
                                        Bad ductwork can waste 30% of your energy. We design and seal systems
                                        for basements and remodels.
                                    </p>

                                    <div className="d-flex flex-column gap-3 mb-4">
                                        <div className="d-flex gap-3">
                                            <div
                                                className="p-2 rounded-3 flex-shrink-0"
                                                style={{ backgroundColor: "#ffedd5", color: "#ea580c" }}
                                            >
                                                <AlertCircle size={20} />
                                            </div>
                                            <div>
                                                <p
                                                    className="fw-black text-dark text-uppercase small mb-0"
                                                    style={{ fontSize: "12px" }}
                                                >
                                                    Uneven Heating/Cooling
                                                </p>
                                                <p
                                                    className="text-muted fw-bold text-uppercase small mb-0"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    Solution: Duct balancing or redesign
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <div
                                                className="p-2 rounded-3 flex-shrink-0"
                                                style={{ backgroundColor: "#ffedd5", color: "#ea580c" }}
                                            >
                                                <AlertCircle size={20} />
                                            </div>
                                            <div>
                                                <p
                                                    className="fw-black text-dark text-uppercase small mb-0"
                                                    style={{ fontSize: "12px" }}
                                                >
                                                    Excessive Dust
                                                </p>
                                                <p
                                                    className="text-muted fw-bold text-uppercase small mb-0"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    Solution: Seal return duct leaks
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 pt-4 border-top border-light">
                                        {["Basement Finishes", "Repair & Sealing", "Zoning"].map((tag, i) => (
                                            <span
                                                key={i}
                                                className="badge bg-light text-secondary rounded-pill fw-black text-uppercase px-3 py-2"
                                                style={{ letterSpacing: "0.1em", fontSize: "9px" }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tune-Ups */}
                            <div className="col-lg-6">
                                <div
                                    className="p-4 p-md-5 rounded-4 shadow-lg text-white h-100 position-relative overflow-hidden"
                                    style={{ backgroundColor: "#010f34", borderRadius: "40px" }}
                                >
                                    <div className="position-relative z-1">
                                        <div className="d-flex align-items-center gap-3 mb-4">
                                            <Wrench size={32} style={{ color: "#ea580c" }} />
                                            <h3 className="h2 fw-black text-uppercase mb-0">
                                                Maintenance Plans
                                            </h3>
                                        </div>

                                        <div className="row g-4 mb-4">
                                            <div className="col-sm-6">
                                                <h5
                                                    className="fw-black text-uppercase small mb-3"
                                                    style={{ color: "#f97316", letterSpacing: "0.1em" }}
                                                >
                                                    Spring AC Tune-Up
                                                </h5>
                                                <ul
                                                    className="list-unstyled mb-0 d-flex flex-column gap-2 opacity-75 small fw-bold text-uppercase"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    <li>• Clean condenser coils</li>
                                                    <li>• Check refrigerant levels</li>
                                                    <li>• Test thermostat accuracy</li>
                                                    <li>• Inspect connections</li>
                                                    <li>• Clear condensate drain</li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5
                                                    className="fw-black text-uppercase small mb-3"
                                                    style={{ color: "#f97316", letterSpacing: "0.1em" }}
                                                >
                                                    Fall Furnace Tune-Up
                                                </h5>
                                                <ul
                                                    className="list-unstyled mb-0 d-flex flex-column gap-2 opacity-75 small fw-bold text-uppercase"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    <li>• Inspect heat exchanger</li>
                                                    <li>• Test ignition system</li>
                                                    <li>• Adjust gas pressure</li>
                                                    <li>• Clean burners</li>
                                                    <li>• Combustion analysis</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div
                                            className="p-3 rounded-4 d-flex align-items-center justify-content-between"
                                            style={{ backgroundColor: "#ea580c" }}
                                        >
                                            <div>
                                                <p
                                                    className="fw-black text-uppercase small mb-0"
                                                    style={{ letterSpacing: "0.1em", fontSize: "10px" }}
                                                >
                                                    Why Maintenance Matters
                                                </p>
                                                <p
                                                    className="small fw-bold text-uppercase mb-0 opacity-75"
                                                    style={{ fontSize: "9px" }}
                                                >
                                                    Small $200 problems become $2,000 problems.
                                                </p>
                                            </div>
                                            <button
                                                className="btn btn-light text-uppercase fw-black small text-primary rounded-3 px-3 py-2 shadow-sm"
                                                style={{ color: "#ea580c !important", fontSize: "9px" }}
                                            >
                                                Save 10%
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Who We Serve & Service Areas */}
                <section className="py-5 bg-white overflow-hidden">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            {/* Left Column */}
                            <div className="col-lg-6">
                                <div className="d-flex flex-column gap-5">
                                    <div className="d-flex flex-column gap-3">
                                        <span
                                            className="fw-bold text-uppercase small d-flex align-items-center gap-2"
                                            style={{
                                                color: "#ea580c",
                                                letterSpacing: "0.2em",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <div
                                                style={{ width: "32px", height: "2px", backgroundColor: "#ea580c" }}
                                            ></div>{" "}
                                            <SectionIcon size={16} /> WHO WE SERVE
                                        </span>
                                        <h2
                                            className="display-4 fw-black text-dark text-uppercase lh-sm"
                                            style={{ color: "#010f34", fontWeight: 900 }}
                                        >
                                            Residential & Light Commercial
                                        </h2>
                                        <p className="text-secondary fw-medium">
                                            Serving homeowners, property managers, and retail spaces throughout
                                            the Wasatch Front.
                                        </p>
                                    </div>

                                    <div className="d-flex flex-column gap-4">
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
                                                className="d-flex gap-4 p-4 rounded-4 border group"
                                                style={{
                                                    backgroundColor: "#f8fafc",
                                                    borderColor: "transparent",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-3 shadow-sm flex-shrink-0"
                                                    style={{
                                                        width: "48px",
                                                        height: "48px",
                                                        backgroundColor: "white",
                                                        color: "#ea580c",
                                                        transition: "all 0.3s ease",
                                                    }}
                                                >
                                                    <CheckCircle size={20} />
                                                </div>
                                                <div>
                                                    <h5 className="h6 fw-black text-dark text-uppercase mb-1">
                                                        {item.t}
                                                    </h5>
                                                    <p
                                                        className="small text-muted fw-bold text-uppercase mb-0 opacity-75"
                                                        style={{ fontSize: "11px", lineHeight: "1.6" }}
                                                    >
                                                        {item.d}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="col-lg-6">
                                <div
                                    className="position-relative p-5 rounded-5 shadow-lg text-white overflow-hidden group"
                                    style={{ backgroundColor: "#010f34", borderRadius: "40px" }}
                                >
                                    <div
                                        className="position-absolute top-0 end-0 rounded-circle opacity-10"
                                        style={{
                                            width: "128px",
                                            height: "128px",
                                            backgroundColor: "#ea580c",
                                            transform: "translate(40px, -40px)",
                                        }}
                                    ></div>
                                    <h4
                                        className="h3 fw-black text-uppercase mb-4 pb-4 border-bottom border-light border-opacity-10"
                                        style={{ fontWeight: 900 }}
                                    >
                                        Service Areas
                                    </h4>

                                    <div className="row g-4 mb-5">
                                        <div className="col-6">
                                            <div
                                                className="d-flex flex-column gap-3 opacity-75 small fw-bold text-uppercase"
                                                style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                                            >
                                                <p className="mb-0 text-white">Salt Lake County</p>
                                                <p className="mb-0 text-white">Utah County</p>
                                                <p className="mb-0 text-white">Davis County</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div
                                                className="d-flex flex-column gap-3 opacity-75 small fw-bold text-uppercase"
                                                style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                                            >
                                                <p className="mb-0 text-white">Weber County</p>
                                                <p className="mb-0 text-white">Summit County</p>
                                                <p className="mb-0 text-white">Wasatch County</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="p-4 rounded-4 border border-light border-opacity-10"
                                        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                                    >
                                        <p
                                            className="small fw-bold text-uppercase mb-3 opacity-50"
                                            style={{ fontSize: "10px" }}
                                        >
                                            SERVING THE COMMUNITIES OF:
                                        </p>
                                        <p
                                            className="small fw-black text-uppercase lh-base mb-0"
                                            style={{ fontSize: "12px" }}
                                        >
                                            West Jordan, Sandy, Draper, South Jordan, SLC, Provo, Orem, Lehi,
                                            Bountiful, Layton, Ogden, Park City.
                                        </p>
                                    </div>

                                    <div
                                        className="mt-4 d-flex align-items-center gap-3 fw-black text-uppercase small"
                                        style={{ color: "#f97316" }}
                                    >
                                        <Phone size={16} /> 801-970-5797
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-5 bg-light">
                    <div className="container py-5" style={{ maxWidth: "900px" }}>
                        <div className="text-center mb-5">
                            <span
                                className="fw-bold text-uppercase small d-block mb-3"
                                style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                            >
                                F. A. Q.
                            </span>
                            <h2 className="display-5 fw-bold text-dark text-uppercase fst-italic">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-4 overflow-hidden shadow-sm border border-light faq-item"
                                >
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        className="w-100 d-flex justify-content-between align-items-center p-4 text-start border-0 bg-transparent"
                                    >
                                        <span
                                            className="fw-bold text-dark text-uppercase small pe-4"
                                            style={{ letterSpacing: "-0.025em" }}
                                        >
                                            {faq.q}
                                        </span>
                                        <div
                                            className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 transition-all ${activeFaq === i ? "text-white" : "text-dark bg-light"}`}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                backgroundColor: activeFaq === i ? "var(--accent)" : "",
                                                transform: activeFaq === i ? "rotate(180deg)" : "",
                                            }}
                                        >
                                            {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all ${activeFaq === i ? "d-block" : "d-none"}`}
                                    >
                                        <div className="p-4 pt-0 text-muted small fw-bold text-uppercase border-top border-light lh-base">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* No-Risk Promise Section */}
                <section className="bg-white py-5 border-top border-bottom">
                    <div className="container py-5 d-flex flex-column align-items-center text-center">
                        <div className="rounded-circle mb-4 shadow-sm d-flex align-items-center justify-content-center" style={{width: '96px', height: '96px', backgroundColor: '#fff7ed'}}>
                            <ShieldCheck size={48} style={{color: '#ea580c'}} />
                        </div>
                        <h2 className="display-5 fw-black text-uppercase fst-italic mb-4" style={{color: '#010f34', letterSpacing: '-0.025em'}}>
                            The Resolute No-Risk Promise
                        </h2>
                        <p className="fs-4 fw-bold text-secondary text-uppercase opacity-75 lh-base" style={{maxWidth: '800px', letterSpacing: '0.1em'}}>
                            "If I can't fix it, you don't even pay for the service call. Simple as that. I'll even help find someone who can."
                        </p>
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    className="py-5 position-relative overflow-hidden text-center"
                    style={{
                        marginTop: "0px",
                        backgroundColor: "#010f34",
                        paddingBottom: "8rem!important",
                    }}
                >
                    <div className="container position-relative z-1 py-5">
                        <h2
                            className="display-3 fw-black text-white text-uppercase fst-italic mb-4"
                            style={{ fontWeight: 900 }}
                        >
                            Get HVAC Service Today
                        </h2>
                        <p
                            className="text-light opacity-75 fs-5 mx-auto fw-bold text-uppercase mb-5"
                            style={{ maxWidth: "700px" }}
                        >
                            Whether you're dealing with an emergency or planning a new installation,
                            Travis is ready to help.
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
                            <button
                                className="btn px-5 py-3 rounded-1 fw-bold text-uppercase shadow hover-lift cta-btn"
                                style={{ letterSpacing: "0.1em" }}
                            >
                                Schedule Service Now
                            </button>
                            <a
                                href="tel:801-970-5797"
                                className="d-flex align-items-center gap-3 phone-btn text-decoration-none group"
                            >
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center border border-white-50 phone-icon-box"
                                    style={{ width: "64px", height: "64px", transition: "all 0.3s ease" }}
                                >
                                    <Phone size={28} fill="currentColor" />
                                </div>
                                <div className="text-start lh-1">
                                    <p
                                        className="small fw-bold text-white text-uppercase mb-1 fst-italic"
                                        style={{ letterSpacing: "0.2em", fontSize: "10px" }}
                                    >
                                        Call Travis Directly
                                    </p>
                                    <p
                                        className="h3 fw-black text-white fst-italic mb-0"
                                        style={{ fontWeight: 900 }}
                                    >
                                        801-970-5797
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 opacity-5 pe-none"
                        style={{
                            backgroundImage: "radial-gradient(#ffffffec 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    ></div>
                </section>
            </div>
        </>
    );
};

export default Services;
