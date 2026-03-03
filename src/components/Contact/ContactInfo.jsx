import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionIcon from '../Common/SectionIcon';

const ContactInfo = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                    <SectionIcon size={20} /><div className="w-10 h-[2px] bg-orange-600"></div> GET IN TOUCH
                </span>
                <h2 className="text-4xl font-black text-[#001d3d] uppercase tracking-tighter leading-tight italic">
                    How to Reach Us
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                    Travis answers directly—no voicemail, no runaround. Whether it's a quote or an emergency, you talk to the technician.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                    <div className="w-14 h-14 bg-[#001d3d] rounded-2xl flex items-center justify-center text-orange-500 shrink-0 shadow-lg">
                        <Phone size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call or Text</p>
                        <a href="tel:8019705797" className="text-2xl font-black text-[#001d3d] hover:text-orange-600 transition-colors italic">801-970-5797</a>
                    </div>
                </div>

                <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                    <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                        <a href="mailto:travis@resoluteair.com" className="text-xl font-black text-[#001d3d] hover:text-orange-600 transition-colors">travis@resoluteair.com</a>
                    </div>
                </div>

                <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group transition-all hover:bg-white hover:shadow-xl">
                    <div className="w-14 h-14 bg-[#001d3d] rounded-2xl flex items-center justify-center text-orange-500 shrink-0 shadow-lg">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Based in</p>
                        <p className="text-xl font-black text-[#001d3d] uppercase tracking-tight">West Jordan, Utah</p>
                        <p className="text-xs text-slate-400 font-bold uppercase mt-1">Serving Salt Lake & surrounding counties</p>
                    </div>
                </div>
            </div>

            {/* <div className="bg-[#001d3d] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                <h4 className="text-lg font-black uppercase tracking-widest mb-6 italic border-b border-white/10 pb-4">Operating Hours</h4>
                <div className="space-y-4 text-sm font-bold uppercase tracking-tight">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-400">Emergency Service:</span>
                        <span className="text-orange-500 italic">24/7/365</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-400">Regular Business:</span>
                        <span>Mon-Fri 8am-6pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Weekends:</span>
                        <span>By Appt (Fees apply)</span>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ContactInfo;
