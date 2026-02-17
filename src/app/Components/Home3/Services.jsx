"use client"
import React, { useEffect } from 'react';
import { ThermometerSnowflake, Flame, Construction, Wrench, Volume2, ChevronRight } from 'lucide-react';
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Services = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const services = [
    {
      title: "Is Your AC Not Cooling?",
      desc: "Utah summers hit 100°F and your AC is blowing warm air. Travis will diagnose the problem and work to fix it, the same day in most cases.",
      icon: <ThermometerSnowflake size={40} className="text-blue-500" color="#3b82f6" />,
      cta: "Call for Same-Day AC Repair",
      phone: "801-970-5797"
    },
    {
      title: "Furnace Quit in Winter?",
      desc: "No heat when it's 15°F outside? We're available 24/7 for emergency furnace repairs. Most problems fixed the same day.",
      icon: <Flame size={40} className="text-orange-600" color="#ea580c" />,
      cta: "Emergency Furnace Help",
      phone: "801-970-5797"
    },
    {
      title: "Finishing Your Basement?",
      desc: "Proper planning for new vents and comfort zones. We design systems that work without breaking the bank.",
      icon: <Construction size={40} className="text-slate-600" color="#475569" />,
      cta: "Get a Free Basement Quote",
      phone: "801-970-5797"
    },
    {
      title: "Seasonal Tune-Up",
      desc: "Prevent breakdowns and lower energy bills. Our maintenance catches small problems before they become expensive.",
      icon: <Wrench size={40} className="text-blue-700" color="#1d4ed8" />,
      cta: "Schedule Your Tune-Up",
      phone: "801-970-5797"
    },
    {
      title: "Strange Noises?",
      desc: "Banging, grinding, or squealing sounds? We'll diagnose and fix it before it becomes a total system failure.",
      icon: <Volume2 size={40} className="text-amber-600" color="#d97706" />,
      cta: "Schedule a Diagnostic",
      phone: "801-970-5797"
    }
  ];

  return (
    <section className="py-5 cs_bg_filed" data-background="/assets/img/service_bg_1.svg">
       <div className="container py-5">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-4">
            <div>
              <h2 className="fs-2 font-bold text-slate-900 mb-3">Common HVAC Problems We Solve</h2>
              <p className="fs-5 text-slate-600 mb-0">Fast solutions for Utah's unpredictable weather.</p>
            </div>
            <button className="h3_btn_outline bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
              View All HVAC Services
            </button>
          </div>

          <div className="row g-4">
            {services.map((service, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                 <div className="h3_service_card bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 d-flex flex-column h-100 group">
                    <div className="mb-4 group-hover-scale transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h3 className="fs-4 font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4 flex-grow-1 leading-relaxed">{service.desc}</p>
                    <a href={`tel:${service.phone.replace(/-/g, '')}`} className="d-flex align-items-center justify-content-between text-orange-600 font-bold border-top border-slate-50 pt-4 hover:text-orange-700 text-decoration-none">
                        {service.cta}
                        <ChevronRight size={20} />
                    </a>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Services;
