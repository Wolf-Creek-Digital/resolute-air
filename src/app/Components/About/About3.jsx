"use client";
import React from "react";
import {
    Phone,
    Flame,
    CheckCircle,
    Hammer,
    Star,
    BadgeDollarSign,
    Home,
    Award,
    MessageSquare,
    ArrowRight,
    Clock,
    ChevronRight,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    PhoneIncoming,
} from "lucide-react";
import SectionIcon from "../Home3/Common/SectionIcon";

const About3 = () => {
    const diffItems = [
        {
            title: "I Answer My Own Phone",
            desc:
                "Talk to Travis—not a call center. I'll answer questions and show up myself.",
            icon: <PhoneIncoming size={32} />, // Let CSS handle color
        },
        {
            title: "No Commissions",
            desc:
                "Zero incentive to upsell you. Honest repairs over expensive replacements.",
            icon: <BadgeDollarSign size={32} />,
        },
        {
            title: "I Live Here Too",
            desc: "Based in West Jordan. Serving neighbors with direct accountability.",
            icon: <Home size={32} />,
        },
        {
            title: "15+ Years Pro",
            desc:
                "Working on HVAC systems since before smartphones existed. Expert quality.",
            icon: <Award size={32} />,
        },
    ];

    const aboutTestimonials = [
        {
            text:
                "Travis has done an awesome job working on my ac units at my apartments. He was efficient to get the tenants comfortable. He has replaced a condenser and serviced the other units.",
            author: "Property Owner",
            location: "Multi-Unit Building",
            rating: 5,
        },
        {
            text:
                "Travis has far been my number one go-to HVAC guy! He is responsive, clear, transparent, trustworthy, and reliable. For simple questions or big projects he has helped me.",
            author: "Real Estate Investor",
            location: "Multiple Properties",
            rating: 5,
        },
    ];

    return (
        <>
            <style jsx>{`
    .hover-lift {
     transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border-color 0.3s ease;
    }
    .hover-lift:hover {
     transform: translateY(-10px);
     box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
     border-color: var(--accent) !important;
    }

    .diff-card .icon-box {
     transition: all 0.3s ease;
     color: var(--accent);
     background-color: #f8f9fa;
    }
    .diff-card:hover .icon-box {
     background-color: var(--accent);
     color: white;
     border-color: var(--accent) !important;
    }

    .diff-card .number-badge {
     transition: all 0.3s ease;
     background-color: #f8f9fa;
     color: #dee2e6; /* muted placeholder color */
    }
    .diff-card:hover .number-badge {
     background-color: rgba(226, 109, 38, 0.1); /* light accent bg */
     color: var(--accent);
    }

    .cta-btn {
     transition: all 0.3s ease;
    }
    .cta-btn:hover {
     background-color: #010f34 !important;
     transform: translateY(-2px);
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .emergency-group:hover .icon-circle {
     background-color: var(--accent) !important;
     color: white !important;
    }
    .emergency-group .icon-circle {
     transition: all 0.3s ease;
    }

    .testimonial-card-icon {
     box-shadow: 0 10px 20px rgba(226, 109, 38, 0.3);
    }

    /* Responsive Utilities */
    .hidden {
     display: none !important;
    }
    .block {
     display: block !important;
    }

    @media (min-width: 768px) {
     .md\:hidden {
      display: none !important;
     }
     .md\:block {
      display: block !important;
     }
    }
    @media (min-width: 992px) {
     .lg\:hidden {
      display: none !important;
     }
     .lg\:block {
      display: block !important;
     }
    }
    @media (max-width: 767.98px) {
     .hidden-sm-down {
      display: none !important;
     }
    }
   `}</style>

            <div className="font-sans text-dark leading-normal">
                {/* Meet Travis Section */}
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 position-relative">
                                {/* Collage frames */}
                                <div
                                    className="position-relative z-1 w-85 mx-auto overflow-hidden shadow-lg border border-5 border-white hidden lg:block"
                                    style={{
                                        borderRadius: "100px 100px 100px 100px",
                                        transform: "rotate(-2deg)",
                                    }}
                                >
                                    {/* Reverting rotation for image content if needed */}
                                    <div
                                        style={{ borderRadius: "100px", overflow: "hidden" }}
                                        className="bg-light"
                                    >
                                        <img
                                            src="/assets/v3/home-v3-differences.avif"
                                            alt="Travis working on HVAC"
                                            className="img-fluid w-100 object-fit-cover"
                                            style={{ aspectRatio: "4/5" }}
                                        />
                                    </div>
                                </div>

                                {/* Decorative Dots Pattern */}
                                <div
                                    className="position-absolute top-0 end-0 me-4 mt-4 d-grid pe-none opacity-25"
                                    style={{
                                        gridTemplateColumns: "repeat(4, 1fr)",
                                        gap: "8px",
                                        zIndex: 0,
                                    }}
                                >
                                    {[...Array(16)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="rounded-circle"
                                            style={{
                                                width: "8px",
                                                height: "8px",
                                                backgroundColor: "var(--accent)",
                                            }}
                                        ></div>
                                    ))}
                                </div>

                                {/* 15+ Experience Badge */}
                                <div
                                    className="position-absolute bottom-0 end-0 bg-white p-4 rounded-4 shadow-lg d-flex align-items-center gap-3 z-2 border-start border-5"
                                    style={{
                                        borderColor: "var(--accent)",
                                        right: "10%",
                                        marginBottom: "40px",
                                    }}
                                >
                                    <span
                                        className="display-4 fw-bold lh-1"
                                        style={{ color: "var(--accent)", fontSize: "3.5rem" }}
                                    >
                                        15+
                                    </span>
                                    <div className="d-flex flex-column lh-1">
                                        <span
                                            className="small fw-bold text-muted text-uppercase mb-1"
                                            style={{ letterSpacing: "0.1em", fontSize: "10px" }}
                                        >
                                            Years Of
                                        </span>
                                        <span className="fw-bold text-dark text-uppercase fs-6">
                                            Experience
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <span
                                        className="fw-bold text-uppercase d-flex align-items-center gap-2 small mb-2"
                                        style={{ letterSpacing: "0.2em", color: "var(--accent)" }}
                                    >
                                        <SectionIcon size={20} /> ABOUT US
                                    </span>
                                    <h2 className="display-5 fw-bold text-dark text-uppercase lh-sm">
                                        Meet Travis Angell: <br />
                                        Your HVAC Expert & Neighbor
                                    </h2>
                                </div>

                                <p className="text-muted fs-5 mb-4 fw-medium">
                                    I've been working on HVAC systems for over 15 years, and I've seen it
                                    all—the good, the bad, and the dishonest. I started Resolute Heating &
                                    Air because I was tired of watching homeowners get pressured into
                                    expensive upgrades they didn't need.
                                </p>

                                <div className="d-flex flex-column gap-3 mb-5">
                                    <div className="d-flex align-items-center gap-3 text-dark fw-bold">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                backgroundColor: "rgba(226, 109, 38, 0.1)",
                                                color: "var(--accent)",
                                            }}
                                        >
                                            <CheckCircle size={16} />
                                        </div>
                                        Ventilation System Maintenance
                                    </div>
                                    <div className="d-flex align-items-center gap-3 text-dark fw-bold">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                backgroundColor: "rgba(226, 109, 38, 0.1)",
                                                color: "var(--accent)",
                                            }}
                                        >
                                            <CheckCircle size={16} />
                                        </div>
                                        Honest Diagnostic & Fair Pricing
                                    </div>
                                    <div className="d-flex align-items-center gap-3 text-dark fw-bold">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                backgroundColor: "rgba(226, 109, 38, 0.1)",
                                                color: "var(--accent)",
                                            }}
                                        >
                                            <CheckCircle size={16} />
                                        </div>
                                        Owner-Operated (I'm on every job)
                                    </div>
                                </div>

                                <div className="d-flex flex-column flex-sm-row align-items-center gap-4">
                                    <a
                                        href="tel:8019705797"
                                        className="btn btn-lg text-white rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm d-flex align-items-center gap-2 cta-btn"
                                        style={{ backgroundColor: "var(--accent)", letterSpacing: "0.1em" }}
                                    >
                                        CALL NOW <ArrowRight size={20} />
                                    </a>
                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            className="rounded-circle overflow-hidden border border-2 p-1"
                                            style={{
                                                borderColor: "var(--accent)",
                                                width: "60px",
                                                height: "60px",
                                            }}
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100"
                                                alt="Travis"
                                                className="rounded-circle w-100 h-100 object-fit-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="fw-bold text-dark m-0 lh-1 text-uppercase">
                                                Travis Angell
                                            </p>
                                            <p className="small text-muted fw-bold m-0">
                                                Founder & HVAC Technician
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Difference Section */}
                <section className="py-5 bg-light">
                    <div className="container py-5">
                        <div className="text-center mb-5">
                            <span
                                className="fw-bold text-uppercase small d-block mb-2"
                                style={{ letterSpacing: "0.2em", color: "var(--accent)" }}
                            >
                                <SectionIcon size={16} />
                                WHY CHOOSE US
                            </span>
                            <h2 className="display-6 fw-bold text-dark text-uppercase">
                                What Makes Me Different?
                            </h2>
                        </div>

                        <div className="row g-4">
                            {diffItems.map((item, i) => (
                                <div key={i} className="col-md-6 col-lg-3">
                                    <div className="bg-white p-4 p-xl-5 rounded-4 shadow-sm h-100 position-relative hover-lift border-bottom border-4 border-transparent diff-card">
                                        <div
                                            className="mb-4 d-flex align-items-center justify-content-center mx-auto rounded-circle border border-2 border-light shadow-sm icon-box"
                                            style={{ width: "80px", height: "80px" }}
                                        >
                                            {item.icon}
                                        </div>
                                        <h3 className="h5 fw-bold text-dark mb-3 text-uppercase text-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted small text-center mb-0 lh-base">
                                            {item.desc}
                                        </p>
                                        <div
                                            className="position-absolute top-0 end-0 d-flex align-items-center justify-content-center fw-bold fs-4 number-badge"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderBottomLeftRadius: "30px",
                                            }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section
                    className="py-5 position-relative overflow-hidden"
                    style={{ backgroundColor: "#010f34" }}
                >
                    {/* Background decoration */}
                    <div
                        className="position-absolute top-0 end-0 h-100 bg-white opacity-10"
                        style={{ width: "50%", transform: "skewX(-30deg) translateX(290px)" }}
                    ></div>

                    <div className="container py-5 position-relative z-1">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 text-white space-y-4">
                                <div className="mb-4">
                                    <span
                                        className="fw-bold text-uppercase small d-block mb-2"
                                        style={{ letterSpacing: "0.2em", color: "var(--accent)" }}
                                    >
                                        TESTIMONIALS
                                    </span>
                                    <h2 className="display-5 fw-bold text-white text-uppercase">
                                        Our Clients Feedback
                                    </h2>
                                    <div className="d-flex gap-1 mt-3" style={{ color: "var(--accent)" }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>

                                <p className="fs-5 fst-italic text-light opacity-75 mb-4">
                                    "Honest service that keeps Utah families comfortable without draining
                                    their savings. I want you to feel confident calling me when something
                                    breaks."
                                </p>

                                <div className="d-flex gap-3">
                                    <button
                                        className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center transition-all bg-transparent hover:bg-white hover:text-dark"
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        <ChevronRight
                                            size={24}
                                            className="rotate-180"
                                            style={{ transform: "rotate(180deg)" }}
                                        />
                                    </button>
                                    <button
                                        className="btn rounded-circle p-0 d-flex align-items-center justify-content-center text-white border-0 transition-all hover-scale"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            backgroundColor: "var(--accent)",
                                        }}
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="row g-4">
                                    {aboutTestimonials.map((t, i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="bg-white p-4 rounded-4 shadow position-relative mt-4 h-100">
                                                <div
                                                    className="position-absolute top-0 start-0 translate-middle-y ms-4 d-flex align-items-center justify-content-center rounded-3 testimonial-card-icon"
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                        backgroundColor: "var(--accent)",
                                                        marginTop: "-10px",
                                                    }}
                                                >
                                                    <MessageSquare size={24} className="text-white" />
                                                </div>
                                                <p className="text-muted small fst-italic mb-4 mt-4 pt-2">
                                                    "{t.text}"
                                                </p>
                                                <div className="d-flex align-items-center gap-3 pt-3 border-top border-light mt-auto">
                                                    <div
                                                        className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold text-dark flex-shrink-0"
                                                        style={{ width: "40px", height: "40px" }}
                                                    >
                                                        {t.author[0]}
                                                    </div>
                                                    <div>
                                                        <h4 className="small fw-bold text-dark text-uppercase m-0">
                                                            {t.author}
                                                        </h4>
                                                        <p
                                                            className="fw-bold text-uppercase m-0"
                                                            style={{
                                                                fontSize: "10px",
                                                                color: "var(--accent)",
                                                                letterSpacing: "0.1em",
                                                            }}
                                                        >
                                                            {t.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-5 bg-white mb-5">
                    <div className="container text-center py-5">
                        <h2 className="display-5 fw-bold text-dark text-uppercase fst-italic mb-5">
                            Ready to Work with an HVAC <br /> Contractor You Can Trust?
                        </h2>
                        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
                            <button
                                className="btn btn-lg text-white rounded-3 px-5 py-4 fw-bold text-uppercase shadow-lg cta-btn"
                                style={{ backgroundColor: "var(--accent)", letterSpacing: "0.1em" }}
                            >
                                Schedule Service with Travis
                            </button>
                            <div className="d-flex align-items-center gap-3 group cursor-pointer emergency-group">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center shadow icon-circle"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        backgroundColor: "#fff4e6",
                                        color: "var(--accent)",
                                    }}
                                >
                                    <Phone size={24} fill="currentColor" />
                                </div>
                                <div className="text-start">
                                    <p
                                        className="small fw-bold text-muted text-uppercase m-0"
                                        style={{ letterSpacing: "0.1em", fontSize: "10px" }}
                                    >
                                        Emergency Help
                                    </p>
                                    <p className="fs-4 fw-bold text-dark m-0">801-970-5797</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About3;
