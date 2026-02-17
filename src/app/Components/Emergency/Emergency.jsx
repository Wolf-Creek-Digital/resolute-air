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
 Clock,
 Facebook,
 Twitter,
 Instagram,
 ArrowRight,
 Plus,
 Minus,
 AlertTriangle,
 ShieldCheck,
 Check,
 Zap,
 Droplets,
 Calendar,
 DollarSign,
 TrendingDown,
 Timer,
 Info,
 ChevronDown,
} from "lucide-react";
import SectionIcon from "../Home3/Common/SectionIcon";

const Emergency = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [activeFaq, setActiveFaq] = useState(null);

 useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const emergencySymptom = [
  {
   title: "No Heat When It's Below Freezing",
   icon: <ThermometerSnowflake size={32} />,
   risk: "Dangerous for kids/elderly and can cause burst pipes.",
   action: "Call us immediately at 801-970-5797. Don't wait.",
   color: "blue",
  },
  {
   title: "Gas Smell or Yellow Flame",
   icon: <AlertTriangle size={32} />,
   risk: "Fire hazard and deadly carbon monoxide production.",
   action: "Turn off furnace, open windows, and evacuate if smell is strong.",
   color: "red",
  },
  {
   title: "No AC During Extreme Heat (95°F+)",
   icon: <Star size={32} />,
   risk: "Serious health risk during triple-digit Utah summers.",
   action: "Call for same-day emergency AC repair.",
   color: "orange",
  },
  {
   title: "Significant Water Leaks",
   icon: <Droplets size={32} />,
   risk: "Can cause mold, flooring damage, and electrical hazards.",
   action: "Turn off power to the unit and call right away.",
   color: "blue",
  },
  {
   title: "Electrical Problems",
   icon: <Zap size={32} />,
   risk: "Burning smells, sparks, or repeatedly tripping breakers.",
   action: "Turn off power at the breaker immediately.",
   color: "amber",
  },
 ];

 const maintenanceFaqs = [
  {
   q: "Can I cancel anytime?",
   a: "Yes. No long-term contracts. We keep you as a member by providing great service, not by locking you in.",
  },
  {
   q: "What if I need a repair between tune-ups?",
   a: "No problem! You get priority scheduling and 10% off the repair. That's the value of membership.",
  },
  {
   q: "Do you service all brands?",
   a: "Yes. We service all makes and models of HVAC equipment including Carrier, Trane, Lennox, and more.",
  },
  {
   q: "Is it really worth it?",
   a: "Most members save more than the plan costs through 10% repair discounts, lower energy bills, and avoiding emergency fees.",
  },
 ];

 return (
  <>
   <style jsx>{`
    .bg-navy {
     background-color: #001d3d;
    }
    .text-navy {
     color: #001d3d;
    }
    .bg-orange {
     background-color: #ea580c;
    }
    .text-orange {
     color: #ea580c;
    }
    .border-orange {
     border-color: #ea580c;
    }

    .nav-link {
     color: #001d3d;
     font-weight: 700;
     text-transform: uppercase;
     letter-spacing: 0.05em;
     transition: color 0.3s ease;
    }
    .nav-link:hover {
     color: #ea580c;
    }
    .nav-link.active {
     color: #ea580c;
     border-bottom: 2px solid #ea580c;
    }

    .btn-call {
     background-color: #ea580c;
     color: white;
     transition: all 0.3s ease;
    }
    .btn-call:hover {
     background-color: #001d3d;
     color: white;
    }

    .emergency-card {
     transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    }
    .emergency-card:hover {
     transform: translateY(-5px);
     box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
     background-color: white !important;
    }
    .emergency-card .icon-box {
     transition: transform 0.3s ease;
    }
    .emergency-card:hover .icon-box {
     transform: scale(1.1);
    }

    .process-item .icon-box {
     background-color: rgba(255, 255, 255, 0.05);
     color: #ea580c;
     border: 1px solid rgba(255, 255, 255, 0.1);
     transition: all 0.3s ease;
    }
    .process-item:hover .icon-box {
     background-color: #ea580c;
     color: white;
    }

    .plan-card {
     transition: all 0.3s ease;
    }
    .plan-card:hover {
     border-color: #ea580c !important;
     transform: scale(1.02);
    }

    .enroll-btn {
     background-color: #001d3d;
     color: white;
     transition: all 0.3s ease;
    }
    .plan-card:hover .enroll-btn {
     background-color: #ea580c;
    }

    .enroll-btn-white {
     background-color: white;
     color: #001d3d;
     transition: all 0.3s ease;
    }
    .enroll-btn-white:hover {
     background-color: #ea580c;
     color: white;
    }

    .faq-btn:hover {
     background-color: white;
    }
    .faq-icon {
     transition: all 0.5s ease;
    }

    .phone-circle {
     background-color: rgba(255, 255, 255, 0.2);
     border: 1px solid rgba(255, 255, 255, 0.3);
     transition: all 0.3s ease;
    }
    .group:hover .phone-circle {
     background-color: white;
     color: #ea580c;
    }

    .footer-social {
     background-color: rgba(255, 255, 255, 0.05);
     border: 1px solid rgba(255, 255, 255, 0.1);
     transition: all 0.3s ease;
    }
    .footer-social:hover {
     background-color: #ea580c;
    }

    .hover-text-white:hover {
     color: white !important;
    }
    .hover-translate:hover {
     transform: translateX(5px);
    }
   `}</style>

   <div className="font-sans text-dark leading-normal">
    {/* 1. EMERGENCY SECTION (Full Width) */}
    <section className="py-5 bg-white position-relative overflow-hidden">
     <div className="container py-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "768px" }}>
       <span
        className="text-danger fw-black text-uppercase d-flex align-items-center justify-content-center gap-3 small mb-3"
        style={{ letterSpacing: "0.3em" }}
       >
        <div
         style={{ width: "40px", height: "2px", backgroundColor: "#dc3545" }}
        ></div>{" "}
        24/7 EMERGENCY SERVICE
       </span>
       <h2 className="display-4 fw-black text-navy text-uppercase fst-italic lh-sm mb-4">
        Your Furnace or AC <br className="d-none d-md-block" /> Can't Wait Until
        Monday
       </h2>
       <p className="fs-5 text-secondary fw-medium">
        When your system fails, you need help NOW. Travis is available 24/7/365
        for HVAC emergencies throughout Salt Lake County and surrounding areas.
       </p>
      </div>

      {/* Emergency Hotline Box */}
      <div
       className="bg-navy p-5 rounded-5 text-white shadow-lg position-relative overflow-hidden mb-5 mx-auto"
       style={{ maxWidth: "900px", borderRadius: "50px" }}
      >
       <div className="position-relative z-1 row align-items-center text-center text-md-start g-4">
        <div className="col-md-7">
         <p
          className="small fw-black text-uppercase text-orange mb-2"
          style={{ letterSpacing: "0.4em" }}
         >
          Emergency Hotline
         </p>
         <a
          href="tel:8019705797"
          className="display-3 fw-black fst-italic d-block text-white text-decoration-none mb-2 hover-text-orange"
          style={{ transition: "all 0.3s" }}
         >
          801-970-5797
         </a>
         <p
          className="text-white-50 fw-bold text-uppercase small fst-italic mb-0"
          style={{ letterSpacing: "0.1em" }}
         >
          Call or Text Anytime - Travis Actually Answers
         </p>
        </div>
        <div className="col-md-5">
         <div
          className="d-flex align-items-center gap-3 p-4 rounded-4 border border-white border-opacity-10"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
         >
          <Timer className="text-orange" size={48} />
          <div className="text-start">
           <p className="h3 fw-black mb-0">1 HOUR</p>
           <p
            className="small fw-black text-uppercase opacity-50 mb-0"
            style={{ letterSpacing: "0.1em" }}
           >
            Avg Response Time
           </p>
          </div>
         </div>
        </div>
       </div>
       <div
        className="position-absolute top-0 end-0 h-100 bg-orange opacity-10"
        style={{ width: "33%", transform: "skewX(-20deg) translateX(40px)" }}
       ></div>
      </div>

      {/* Emergency Symptoms Grid */}
      <div className="mt-5">
       <h3
        className="h2 fw-black text-navy text-uppercase text-center mb-5"
        style={{ letterSpacing: "-0.025em" }}
       >
        What Qualifies as an HVAC Emergency?
       </h3>
       <div className="row g-4 justify-content-center">
        {emergencySymptom.map((s, i) => (
         <div key={i} className="col-md-6 col-lg-4">
          <div
           className="bg-light p-5 rounded-5 h-100 text-center border border-transparent emergency-card"
           style={{ borderRadius: "40px" }}
          >
           <div
            className={`d-flex align-items-center justify-content-center shadow mb-4 mx-auto rounded-4 icon-box ${s.color === "red" ? "bg-danger text-white" : s.color === "blue" ? "bg-primary text-white" : "bg-orange text-white"}`}
            style={{ width: "80px", height: "80px", borderRadius: "2rem" }}
           >
            {s.icon}
           </div>
           <h4 className="h5 fw-black text-navy text-uppercase mb-3">
            {s.title}
           </h4>
           <p
            className="small fw-black text-danger text-uppercase mb-3 px-2"
            style={{ letterSpacing: "0.1em" }}
           >
            {s.risk}
           </p>
           <p className="text-secondary small fw-bold mb-0">{s.action}</p>
          </div>
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>

    {/* 2. PROCESS SECTION (Visual flow) */}
    <section className="py-5 bg-navy text-white">
     <div className="container py-5">
      <div className="text-center mb-5">
       <span
        className="text-orange fw-black text-uppercase small"
        style={{ letterSpacing: "0.3em" }}
       >
        THE PROCESS
       </span>
       <h2
        className="display-4text-uppercase fst-italic mt-2 text-white bold"
        style={{ textTransform: "uppercase" }}
       >
        What to Expect
       </h2>
      </div>

      <div className="row g-4 justify-content-center position-relative">
       {[
        { s: "01", t: "Call or Text", d: "Travis answers directly to help." },
        {
         s: "02",
         t: "Estimated Time",
         d: "Typically 1 hour or less response.",
        },
        {
         s: "03",
         t: "Stocked Truck",
         d: "Parts on hand for first-visit fix.",
        },
        { s: "04", t: "Fast Diagnosis", d: "Identify the problem quickly." },
        { s: "05", t: "Upfront Price", d: "Price given before work starts." },
        { s: "06", t: "Same-Day Fix", d: "Most repairs finished on spot." },
       ].map((item, i) => (
        <div
         key={i}
         className="col-6 col-md-4 col-lg-2 process-item group position-relative"
        >
         <div
          className="d-flex align-items-center justify-content-center mx-auto mb-4 fw-black h3 icon-box"
          style={{ width: "64px", height: "64px", borderRadius: "20px" }}
         >
          {item.s}
         </div>
         <h5 className="fw-black text-uppercase small mb-2 text-white text-center">
          {item.t}
         </h5>
         <p
          className="small text-white fw-bold text-uppercase text-center mx-auto"
          style={{ fontSize: "10px", maxWidth: "140px" }}
         >
          {item.d}
         </p>

         {/* Chevron for desktop */}
         {i < 5 && (
          <div
           className="d-none d-lg-block position-absolute top-0 start-100 translate-middle-x"
           style={{
            marginTop: "20px",
            marginLeft: "10px",
            color: "rgba(255,255,255,0.1)",
           }}
          >
           <ChevronRight size={24} />
          </div>
         )}
        </div>
       ))}
      </div>
     </div>
    </section>

    {/* 3. MAINTENANCE SECTION (Full Width) */}
    <section className="py-5 bg-light">
     <div className="container py-5">
      <div className="row g-5 align-items-center mb-5">
       <div className="col-lg-6">
        <div className="d-flex flex-column gap-4">
         <div>
          <span
           className="text-orange fw-black text-uppercase small d-flex align-items-center gap-2"
           style={{ letterSpacing: "0.3em" }}
          >
           <div
            style={{ width: "40px", height: "2px", backgroundColor: "#ea580c" }}
           ></div>{" "}
           MAINTENANCE PLANS
          </span>
          <h2 className="display-4 fw-black text-navy text-uppercase fst-italic lh-sm mt-3">
           Stop Paying for <br /> Emergency Repairs
          </h2>
         </div>
         <p className="fs-5 text-secondary fw-medium lh-base">
          Regular maintenance doesn't just save money—it gives you peace of mind
          knowing your system is less likely to fail when you need it most.
         </p>
         <div className="row g-4">
          <div className="col-sm-6">
           <div className="bg-white p-4 rounded-4 shadow-sm border border-light h-100">
            <ShieldCheck className="text-orange mb-3" size={32} />
            <h5 className="fw-black text-navy text-uppercase small mb-2">
             Priority Scheduling
            </h5>
            <p className="small text-secondary fw-bold text-uppercase mb-0">
             Members skip the line during peak seasons.
            </p>
           </div>
          </div>
          <div className="col-sm-6">
           <div className="bg-white p-4 rounded-4 shadow-sm border border-light h-100">
            <DollarSign className="text-orange mb-3" size={32} />
            <h5 className="fw-black text-navy text-uppercase small mb-2">
             10% Off Repairs
            </h5>
            <p className="small text-secondary fw-bold text-uppercase mb-0">
             Save on all parts and labor for any repair.
            </p>
           </div>
          </div>
         </div>
        </div>
       </div>

       <div className="col-lg-6">
        <div
         className="bg-white p-5 rounded-5 shadow-lg border border-light position-relative overflow-hidden"
         style={{ borderRadius: "50px" }}
        >
         <h3 className="h3 fw-black text-navy text-uppercase mb-4 text-center border-bottom pb-4">
          Choose Your Plan
         </h3>
         <div className="d-flex flex-column gap-4">
          {/* Plan 1 */}
          <div className="d-flex flex-column flex-md-row align-items-center gap-4 bg-light p-4 rounded-5 border plan-card">
           <div className="text-center text-md-start">
            <p
             className="small fw-black text-uppercase text-secondary mb-1"
             style={{ letterSpacing: "0.1em" }}
            >
             Single System
            </p>
            <p className="display-6 fw-black text-navy mb-0">
             $299<span className="fs-6 opacity-50 ms-1">/yr</span>
            </p>
           </div>
           <div className="flex-grow-1">
            <p className="small fw-black text-navy text-uppercase mb-1 d-flex align-items-center gap-2">
             <Check size={14} className="text-orange" /> 2 Tune-ups Yearly
            </p>
            <p className="small fw-black text-navy text-uppercase mb-0 d-flex align-items-center gap-2">
             <Check size={14} className="text-orange" /> Priority Response
            </p>
           </div>
           <button
            className="btn btn-navy text-white px-4 py-3 rounded-4 fw-black text-uppercase small enroll-btn"
            style={{ letterSpacing: "0.1em", fontSize: "10px" }}
           >
            ENROLL NOW
           </button>
          </div>

          {/* Plan 2 */}
          <div
           className="d-flex flex-column flex-md-row align-items-center gap-4 bg-navy rounded-5 text-white position-relative plan-card shadow p-4"
          >
           <div className="text-center text-md-start">
            <p
             className="small fw-black text-uppercase text-white-50 mb-1"
             style={{ letterSpacing: "0.1em" }}
            >
             Two Systems
            </p>
            <p className="display-6 fw-black fst-italic mb-0">
             $549<span className="fs-6 opacity-50 ms-1">/yr</span>
            </p>
            <p
             className="text-orange fw-black text-uppercase small mb-0"
             style={{ fontSize: "9px" }}
            >
             SAVE $49 ANNUALLY
            </p>
           </div>
           <div className="flex-grow-1 h-100">
            <p className="small fw-black text-uppercase mb-1 d-flex align-items-center gap-2">
             <Check size={14} className="text-orange" /> 4 Tune-ups Yearly
            </p>
            <p className="small fw-black text-uppercase mb-0 d-flex align-items-center gap-2">
             <Check size={14} className="text-orange" /> VIP Support
            </p>
           </div>
           <div className="flex flex-column">
            <div
             className="relative bg-orange px-3 py-1 rounded-bottom small fw-black text-uppercase m-auto"
             style={{ fontSize: "10px", top: "-25px" }}
            >
             Best Value
            </div>
            <button
             className="btn bg-white text-navy px-4 py-3 rounded-4 fw-black text-uppercase small enroll-btn-white"
             style={{ letterSpacing: "0.1em", fontSize: "10px" }}
            >
             ENROLL NOW
            </button>
           </div>
          </div>
         </div>
         <div className="mt-4 text-center">
          <p className="small fw-bold text-uppercase text-secondary">
           Three or more systems?{" "}
           <a href="#" className="text-orange text-decoration-underline">
            Call for custom quote
           </a>
          </p>
         </div>
        </div>
       </div>
      </div>

      {/* Real Cost Comparison Section */}
      <div
       className="bg-white rounded-5 p-5 shadow border border-light mx-auto"
       style={{ maxWidth: "1024px", borderRadius: "50px" }}
      >
       <div className="text-center mb-5">
        <h4 className="h2 fw-black text-navy text-uppercase fst-italic">
         The Real Cost of Skipping Maintenance
        </h4>
        <p
         className="text-secondary fw-bold text-uppercase small mt-2"
         style={{ letterSpacing: "0.2em" }}
        >
         Prevention vs. Crisis
        </p>
       </div>
       <div className="row g-5">
        <div className="col-md-6">
         <div className="d-flex align-items-center gap-3 text-danger mb-4 border-bottom border-danger pb-3">
          <TrendingDown size={28} />
          <span
           className="fw-black text-uppercase small"
           style={{ letterSpacing: "0.1em" }}
          >
           Without Regular Plan
          </span>
         </div>
         <ul className="list-unstyled d-flex flex-column gap-3">
          {[
           "Energy bills increase 15-30% from dirty parts",
           "Small $200 problems become $2,000 emergencies",
           "System fails 5-10 years earlier than normal",
           "Frequent breakdowns during peak extreme weather",
           "Manufacturer warranty may be voided",
          ].map((item, i) => (
           <li
            key={i}
            className="d-flex gap-3 small fw-black text-uppercase text-secondary lh-1"
           >
            <X size={14} className="text-danger flex-shrink-0" /> {item}
           </li>
          ))}
         </ul>
        </div>
        <div className="col-md-6">
         <div className="d-flex align-items-center gap-3 text-success mb-4 border-bottom border-success pb-3">
          <ShieldCheck size={28} />
          <span
           className="fw-black text-uppercase small"
           style={{ letterSpacing: "0.1em" }}
          >
           With Maintenance Plan
          </span>
         </div>
         <ul className="list-unstyled d-flex flex-column gap-3">
          {[
           "Lowest possible energy bills year-round",
           "Catch problems early when repairs are cheap",
           "System lasts significantly longer (thousands saved)",
           "Avoid high-cost emergency service dispatch",
           "Fully maintained manufacturer warranty",
          ].map((item, i) => (
           <li
            key={i}
            className="d-flex gap-3 small fw-black text-uppercase text-navy lh-1"
           >
            <Check size={14} className="text-success flex-shrink-0" /> {item}
           </li>
          ))}
         </ul>
        </div>
       </div>
      </div>
     </div>
    </section>

    {/* 4. FAQ SECTION (Single Column) */}
    <section className="py-5 bg-white">
     <div className="container py-5" style={{ maxWidth: "800px" }}>
      <div className="text-center mb-5">
       <span
        className="text-orange fw-black text-uppercase small"
        style={{ letterSpacing: "0.3em" }}
       >
        FAQ
       </span>
       <h2 className="display-4 fw-black text-navy text-uppercase fst-italic mt-2">
        Common Questions
       </h2>
      </div>

      <div className="d-flex flex-column gap-3">
       {maintenanceFaqs.map((faq, i) => (
        <div
         key={i}
         className="bg-light rounded-4 overflow-hidden border border-light"
        >
         <button
          onClick={() => setActiveFaq(activeFaq === i ? null : i)}
          className="w-100 d-flex justify-content-between align-items-center p-4 text-start border-0 bg-transparent faq-btn shadow-sm"
         >
          <span
           className="fw-black text-navy text-uppercase small"
           style={{ letterSpacing: "-0.025em" }}
          >
           {faq.q}
          </span>
          <div
           className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 faq-icon ${activeFaq === i ? "bg-orange text-white" : "bg-white text-navy shadow-sm"}`}
           style={{
            width: "40px",
            height: "40px",
            transform: activeFaq === i ? "rotate(180deg)" : "",
           }}
          >
           <ChevronDown size={20} />
          </div>
         </button>
         <div
          className={`overflow-hidden transition-all ${activeFaq === i ? "d-block" : "d-none"}`}
         >
          <div className="p-4 pt-0 text-secondary fw-bold small border-top border-light lh-base text-uppercase">
           {faq.a}
          </div>
         </div>
        </div>
       ))}
      </div>
     </div>
    </section>

    {/* FINAL CTA (Full Width Overlay) */}
    <section
     className="py-5 position-relative overflow-hidden text-center bg-orange"
     style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
     <div className="container position-relative z-1">
      <h2 className="display-4 fw-black text-white text-uppercase fst-italic mb-4 lh-1">
       Enroll in Peace of Mind
      </h2>
      <p
       className="text-white opacity-75 fs-5 fw-bold text-uppercase mx-auto mb-5"
       style={{ maxWidth: "800px" }}
      >
       Lets schedule your first tune-up within the week and get your system in
       top shape before the weather hits.
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 pt-3">
       <button
        className="btn btn-navy bold px-5 py-4 rounded-4 fw-black text-uppercase shadow-lg enroll-btn-white"
        style={{ letterSpacing: "0.2em", fontSize: "14px" }}
       >
        Enroll Plan Online
       </button>
       <div className="d-flex align-items-center gap-3 text-white group cursor-pointer">
        <div
         className="rounded-circle d-flex align-items-center justify-content-center phone-circle text-white shadow"
         style={{ width: "64px", height: "64px" }}
        >
         <Phone size={28} fill="currentColor" />
        </div>
        <div className="text-start lh-1">
         <p
          className="small fw-black text-uppercase mb-2 fst-italic"
          style={{ letterSpacing: "0.3em", fontSize: "10px" }}
         >
          Call or Text Travis
         </p>
         <p className="h3 fw-black text-white fst-italic mb-0">801-970-5797</p>
        </div>
       </div>
      </div>
     </div>
    </section>
   </div>
  </>
 );
};

export default Emergency;
