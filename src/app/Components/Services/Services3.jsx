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
} from "lucide-react";

const Services3 = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const mainServices = [
    {
      id: "01",
      title: "ComfortCare Tune-Up",
      icon: <Wrench size={24} />,
      desc: "24/7 emergency repair services for sudden breakdowns",
    },
    {
      id: "02",
      title: "Frosty Flow Systems",
      icon: <Wind size={24} />,
      desc: "Common signs include reduced cooling efficiency",
    },
    {
      id: "03",
      title: "Breeze Tech Cooling",
      icon: <ThermometerSnowflake size={24} />,
      desc: "It is recommended to service your air conditioner signs",
    },
    {
      id: "04",
      title: "Eco Cool Maintenance",
      icon: <Home size={24} />,
      desc: "Check the thermostat settings clean or replace the filter",
    },
    {
      id: "05",
      title: "Arctic Shield Repairs",
      icon: <Hammer size={24} />,
      desc: "Strange noises, unpleasant odors, and increased",
    },
    {
      id: "06",
      title: "Cool Breeze Solutions",
      icon: <Building2 size={24} />,
      desc: "Testing and analysis of indoor air quality with Air",
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
            filter: drop-shadow(0 10px 30px rgba(0,0,0,0.05));
            transition: filter 0.3s ease;
        }
        .service-card-wrapper:hover {
            filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
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
             filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
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
        
        .bg-accent { background-color: var(--accent); }
        .text-accent { color: var(--accent); }
        .border-accent { border-color: var(--accent); }
        
        .hover-bg-accent:hover { background-color: var(--accent) !important; color: white !important; }
        .hover-text-accent:hover { color: var(--accent) !important; }
        
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
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
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
            border: 2px solid rgba(255,255,255,0.2) !important;
        }
        .phone-btn:hover .phone-icon-box {
            background-color: var(--accent) !important;
            color: white !important;
            border-color: var(--accent) !important;
        }
        
        .dots-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0.5rem;
        }
      `}</style>
      
      <div className="font-sans text-dark leading-normal">
        
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
                        <p className="small text-muted mb-4 fw-bold text-uppercase" style={{fontSize: '10px', letterSpacing: '0.1em', maxWidth: '180px'}}>
                          {service.desc}
                        </p>
                        <button className="btn btn-link text-decoration-none p-0 small fw-bold d-flex align-items-center gap-2 read-more" style={{fontSize: '9px', letterSpacing: '0.2em'}}>
                          READ MORE <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Icon Circle at Bottom */}
                    <div className="icon-circle-wrapper">
                        <div className="icon-circle">
                            {service.icon}
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Orange Action Banner */}
        <section className="py-5 position-relative overflow-hidden" style={{backgroundColor: '#ea580c'}}>
          <div className="position-absolute top-0 end-0 h-100 opacity-10" style={{width: '33%', transform: 'skewX(-20deg) translateX(40px)', backgroundColor: '#ec6925'}}></div>
          <div className="container position-relative z-1">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7 text-white">
                <span className="d-flex align-items-center gap-2 fw-bold text-uppercase small mb-2" style={{letterSpacing: '0.2em', fontSize: '10px'}}>
                  <div style={{width: '24px', height: '2px', backgroundColor: '#fff'}}></div> FREE TO CONTACT US
                </span>
                <h2 className="display-4 fw-bold text-uppercase lh-sm text-white">
                  Get Premium Air Services <br className="d-none d-md-block"/> From With Us!
                </h2>
              </div>
              <div className="col-lg-5">
                <div className="d-flex align-items-center justify-content-lg-end gap-4">
                  <button className="btn px-4 py-3 rounded-1 fw-bold text-uppercase small d-flex align-items-center gap-2 shadow hover-lift discover-btn" style={{letterSpacing: '0.1em'}}>
                    DISCOVER MORE <ArrowRight size={16} />
                  </button>
                  <div className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow border border-4 border-white-50" style={{width: '64px', height: '64px', color: 'var(--accent)'}}>
                    <Star fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-5 bg-light">
          <div className="container py-5">
            <div className="text-center mb-5">
              <span className="fw-bold text-uppercase small d-block mb-3" style={{color: 'var(--accent)', letterSpacing: '0.2em'}}>OUR PRICE PLAN</span>
              <h2 className="display-5 fw-bold text-dark text-uppercase">Where Comfort Meets Efficiency</h2>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button 
                    onClick={() => setBillingCycle('monthly')}
                    className={`btn rounded-pill px-4 py-2 small fw-bold text-uppercase ${billingCycle === 'monthly' ? 'text-white' : 'bg-white text-muted border'}`} 
                    style={{backgroundColor: billingCycle === 'monthly' ? 'var(--accent)' : '', fontSize: '12px', letterSpacing: '0.1em'}}
                >
                    Monthly
                </button>
                <button 
                    onClick={() => setBillingCycle('/mo')}
                    className={`btn rounded-pill px-4 py-2 small fw-bold text-uppercase ${billingCycle === '/mo' ? 'text-white' : 'bg-white text-muted border'}`} 
                    style={{backgroundColor: billingCycle === '/mo' ? 'var(--accent)' : '', fontSize: '12px', letterSpacing: '0.1em'}}
                >
                    Yearly
                </button>
              </div>
            </div>

            <div className="row g-4">
              {pricingPlans.map((plan, i) => (
                <div key={i} className="col-md-4">
                  <div className={`bg-white rounded-4 shadow-sm overflow-hidden h-100 pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                    <div className="p-4 text-center border-bottom border-light">
                      <div className="position-relative d-inline-block mb-3">
                        <div className="rounded-4 d-flex flex-column align-items-center justify-content-center mx-auto mb-3 border border-light price-box" style={{width: '96px', height: '96px', backgroundColor: '#fff7ed', color: '#010f34', transition: 'background-color 0.3s'}}>
                          <span className="fw-black" style={{fontWeight: 900, fontSize: '32px'}}>${billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}</span>
                          <span className="small fw-bold text-uppercase opacity-50" style={{fontSize: '8px', letterSpacing: '0.1em'}}>{billingCycle}</span>
                        </div>
                      </div>
                      <h3 className="h5 fw-bold text-dark text-uppercase">{plan.title}</h3>
                    </div>
                    
                    <ul className="list-unstyled p-4 mb-0 d-flex flex-column gap-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-center gap-2 text-muted small fw-bold text-uppercase" style={{fontSize: '11px', letterSpacing: '0.05em'}}>
                          <ChevronRight size={14} style={{color: 'var(--accent)'}} className="flex-shrink-0" /> {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="p-4 pt-0 mt-auto">
                      <button className={`btn w-100 py-3 rounded-1 fw-bold text-uppercase border-2 ${plan.highlight ? 'text-white border-accent' : 'bg-light text-dark border-light hover-bg-accent'}`} style={{fontSize: '11px', letterSpacing: '0.2em', backgroundColor: plan.highlight ? 'var(--accent)' : ''}}>
                        CHOOSE PLAN
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Resolute Section */}
        <section className="py-5 bg-white overflow-hidden">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 position-relative">
                 {/* Main Image */}
                 <div className="position-relative z-1 rounded-5 overflow-hidden border border-5 border-light shadow" style={{borderRadius: '60px'}}>
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-7d15cb8905ed?auto=format&fit=crop&q=80&w=1200" 
                      alt="Travis servicing HVAC" 
                      className="img-fluid w-100 object-fit-cover"
                      style={{aspectRatio: '1/1'}}
                      onError={handleImageError} 
                    />
                 </div>
                 {/* Decorative Background Pattern */}
                 <div className="position-absolute top-0 end-0 mt-4 dots-grid opacity-25 pe-none">
                  {[...Array(16)].map((_, i) => <div key={i} className="rounded-circle" style={{width: '10px', height: '10px', backgroundColor: 'var(--accent)'}}></div>)}
                </div>
                {/* Experience Badge */}
                <div className="position-absolute bottom-0 end-0 p-4 rounded-5 shadow text-white z-2 text-center border border-4 border-white mb-4 me-4" style={{backgroundColor: 'var(--accent)', borderRadius: '30px', minWidth: '140px'}}>
                   <UserCheck size={40} className="mx-auto mb-2" />
                   <p className="display-4 fw-black lh-1 mb-0" style={{fontWeight: 900}}>25+</p>
                   <p className="small fw-bold text-uppercase opacity-75 mt-1 mb-0" style={{fontSize: '10px', letterSpacing: '0.1em'}}>Years Pro</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-5">
                  <span className="fw-bold text-uppercase d-flex align-items-center gap-2 small mb-2" style={{letterSpacing: '0.2em', color: 'var(--accent)'}}>
                    <div style={{width: '32px', height: '2px', backgroundColor: 'var(--accent)'}}></div> WHY US
                  </span>
                  <h2 className="display-4 fw-bold text-dark text-uppercase lh-sm">Why Choose Resolute for HVAC Service?</h2>
                </div>
                
                <div className="row g-4 mb-5">
                  {[
                    "Travis personally handles every job",
                    "15+ years of HVAC experience",
                    "Honest repair vs. replace advice",
                    "24/7 emergency service available",
                    "Licensed & insured in Utah",
                    "All brands serviced expertly"
                  ].map((item, i) => (
                    <div key={i} className="col-sm-6 d-flex align-items-center gap-3 text-dark fw-bold group">
                      <div className="rounded-circle d-flex align-items-center justify-content-center border border-light flex-shrink-0" style={{width: '32px', height: '32px', backgroundColor: '#fff7ed', color: 'var(--accent)'}}>
                        <CheckCircle size={16} />
                      </div>
                      <span className="small text-uppercase" style={{letterSpacing: '-0.025em'}}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-5 text-white position-relative overflow-hidden cursor-pointer shadow-lg emergency-card" style={{backgroundColor: '#010f34', borderRadius: '2rem'}}>
                   <div className="position-relative z-1 d-flex align-items-center gap-4">
                     <div className="rounded-circle d-flex align-items-center justify-content-center shadow border border-2 border-white-50 flex-shrink-0 icon-box" style={{width: '80px', height: '80px', backgroundColor: 'var(--accent)'}}>
                       <Phone size={32} />
                     </div>
                     <div>
                       <p className="small fw-bold text-uppercase opacity-50 mb-1 fst-italic" style={{fontSize: '10px', letterSpacing: '0.3em'}}>Emergency Help?</p>
                       <p className="h2 fw-black mb-0" style={{fontWeight: 900}}>801-970-5797</p>
                     </div>
                   </div>
                   <div className="position-absolute top-0 end-0 h-100 w-25 bg-white opacity-5" style={{transform: 'skewX(-25deg) translateX(20px)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5 bg-light">
          <div className="container py-5" style={{maxWidth: '900px'}}>
            <div className="text-center mb-5">
              <span className="fw-bold text-uppercase small d-block mb-3" style={{color: 'var(--accent)', letterSpacing: '0.2em'}}>F. A. Q.</span>
              <h2 className="display-5 fw-bold text-dark text-uppercase fst-italic">Frequently Asked Questions</h2>
            </div>

            <div className="d-flex flex-column gap-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-4 overflow-hidden shadow-sm border border-light faq-item">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-100 d-flex justify-content-between align-items-center p-4 text-start border-0 bg-transparent"
                  >
                    <span className="fw-bold text-dark text-uppercase small pe-4" style={{letterSpacing: '-0.025em'}}>{faq.q}</span>
                    <div className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 transition-all ${activeFaq === i ? 'text-white' : 'text-dark bg-light'}`} style={{width: '40px', height: '40px', backgroundColor: activeFaq === i ? 'var(--accent)' : '', transform: activeFaq === i ? 'rotate(180deg)' : ''}}>
                      {activeFaq === i ? <Minus size={20}/> : <Plus size={20}/>}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all ${activeFaq === i ? 'd-block' : 'd-none'}`}>
                    <div className="p-4 pt-0 text-muted small fw-bold text-uppercase border-top border-light lh-base">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-5 position-relative overflow-hidden text-center" style={{marginTop: '0px', backgroundColor: '#010f34', paddingBottom: '8rem!important'}}>
           <div className="container position-relative z-1 py-5">
              <h2 className="display-3 fw-black text-white text-uppercase fst-italic mb-4" style={{fontWeight: 900}}>
                Get HVAC Service Today
              </h2>
              <p className="text-light opacity-75 fs-5 mx-auto fw-bold text-uppercase mb-5" style={{maxWidth: '700px'}}>
                Whether you're dealing with an emergency or planning a new installation, Travis is ready to help.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
                <button className="btn px-5 py-3 rounded-1 fw-bold text-uppercase shadow hover-lift cta-btn" style={{letterSpacing: '0.1em'}}>
                  Schedule Service Now
                </button>
                <a href="tel:801-970-5797" className="d-flex align-items-center gap-3 phone-btn text-decoration-none group">
                  <div className="rounded-circle d-flex align-items-center justify-content-center border border-white-50 phone-icon-box" style={{width: '64px', height: '64px', transition: 'all 0.3s ease'}}>
                    <Phone size={28} fill="currentColor" />
                  </div>
                  <div className="text-start lh-1">
                    <p className="small fw-bold text-white text-uppercase mb-1 fst-italic" style={{letterSpacing: '0.2em', fontSize: '10px'}}>Call Travis Directly</p>
                    <p className="h3 fw-black text-white fst-italic mb-0" style={{fontWeight: 900}}>801-970-5797</p>
                  </div>
                </a>
              </div>
           </div>
           <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5 pe-none" style={{backgroundImage: 'radial-gradient(#ffffffec 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        </section>

      </div>
    </>
  );
};

export default Services3;
