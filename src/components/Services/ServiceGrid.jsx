import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mainServices } from '../../data/servicesData';

const ServiceGrid = () => {

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
