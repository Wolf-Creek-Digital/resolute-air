"use client";
import React from "react";
import { Phone } from "lucide-react";

const Cta = () => {
    return (
        <>
            <style jsx>{`
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
            `}</style>
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
        </>
    );
};

export default Cta;
