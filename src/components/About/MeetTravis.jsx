"use client";
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionIcon from "../Common/SectionIcon";

const MeetTravis = () => {
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
        .hidden { display: none !important; }
        .block { display: block !important; }
        @media (min-width: 992px) {
          .lg\\:hidden { display: none !important; }
          .lg\\:block { display: block !important; }
        }
      `}</style>
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
    </>
  );
};

export default MeetTravis;
