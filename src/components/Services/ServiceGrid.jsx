import React from 'react';
import { ThermometerSnowflake, Flame, Wind, Wrench, Construction, Building2, ArrowRight } from 'lucide-react';

const ServiceGrid = () => {
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

    return (
<section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {mainServices.map((service, i) => (
              <div key={i} className="relative group flex flex-col items-center">
                {/* Contenedor de Sombra: Usamos drop-shadow en el padre 
                  porque clip-path en el hijo cortaría un box-shadow normal.
                */}
                <div className="w-full transition-all duration-500 group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]">
                  <div className="w-full aspect-square bg-white border border-slate-100 flex flex-col items-center justify-center p-10 relative overflow-visible" 
                       style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    
                    {/* Número de fondo */}
                    <div className="absolute top-10 font-black text-slate-200 text-5xl group-hover:text-orange-100 transition-colors pointer-events-none">
                      {service.id}
                    </div>

                    {/* Contenido */}
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

                    {/* Icono en la base */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-full shadow-md border border-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
};

export default ServiceGrid;
