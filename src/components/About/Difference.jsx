"use client";
import React from "react";
import { PhoneIncoming, BadgeDollarSign, Home, Award } from "lucide-react";
import SectionIcon from "../Common/SectionIcon";

const Difference = () => {
  const diffItems = [
    {
      title: "I Answer My Own Phone",
      desc:
        "Talk to Travis—not a call center. I'll answer questions and show up myself.",
      icon: <PhoneIncoming size={32} />,
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

  return (
    <>
      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
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
          color: #dee2e6;
        }
        .diff-card:hover .number-badge {
          background-color: rgba(226, 109, 38, 0.1);
          color: var(--accent);
        }
      `}</style>
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
    </>
  );
};

export default Difference;
