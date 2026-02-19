"use client";
import React, { useState } from 'react';
import { Flame, User, Phone, Mail, Map, Building, MessageSquare, Calendar, Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        serviceType: '',
        contactMethod: 'Phone Call',
        message: '',
        preferredDate: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-slate-50 p-8 md:p-12 rounded-[60px] border border-slate-100 shadow-sm relative">
            <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                <Flame size={120} fill="currentColor" />
            </div>
            <div className="mb-10 text-center lg:text-left">
                <h3 className="text-3xl font-black text-[#001d3d] uppercase tracking-tight mb-2">Request Service Online</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">Fast Response Guaranteed</p>
            </div>

            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><User size={12} /> Your Name*</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Phone size={12} /> Phone Number*</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="801-000-0000" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Mail size={12} /> Email*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Map size={12} /> Address / City*</label>
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="Salt Lake City, UT" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Building size={12} /> What do you need help with?*</label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors appearance-none">
                        <option value="">Select a service</option>
                        <option>AC Not Cooling / AC Repair</option>
                        <option>Furnace Not Working / Furnace Repair</option>
                        <option>HVAC Installation (New System)</option>
                        <option>Ductwork (Basement or Addition)</option>
                        <option>Seasonal Tune-Up / Maintenance</option>
                        <option>Other (Describe below)</option>
                    </select>
                </div>

                <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest">Best way to contact you:</label>
                    <div className="flex flex-wrap gap-8">
                        {['Phone Call', 'Text Message', 'Email'].map(method => (
                            <label key={method} className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="contactMethod" value={method} onChange={handleInputChange} className="w-4 h-4 accent-orange-600" checked={formData.contactMethod === method} />
                                <span className="text-xs font-black uppercase text-slate-500 group-hover:text-[#001d3d] transition-colors">{method}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><MessageSquare size={12} /> Tell us about your project</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="Explain your HVAC problem or project..."></textarea>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#001d3d] tracking-widest flex items-center gap-2"><Calendar size={12} /> Preferred date/time (optional)</label>
                    <input type="text" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-orange-600 transition-colors" placeholder="e.g. Next Tuesday morning" />
                </div>

                <button className="w-full bg-orange-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] shadow-2xl shadow-orange-600/30 hover:bg-[#001d3d] transition-all flex items-center justify-center gap-3 group">
                    REQUEST SERVICE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
