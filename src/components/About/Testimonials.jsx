"use client";
import React from "react";
import { Star, ChevronRight, MessageSquare } from "lucide-react";

const Testimonials = () => {
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
             .testimonial-card-icon {
              box-shadow: 0 10px 20px rgba(226, 109, 38, 0.3);
             }
            `}</style>
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
        </>
    );
};

export default Testimonials;
