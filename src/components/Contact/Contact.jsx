"use client";
import React from "react";
import { Phone } from "lucide-react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ProcessFlow from "./ProcessFlow";
import ServiceArea from "./ServiceArea";
import Comparison from "./Comparison";
import ReviewSpotlight from "./ReviewSpotlight";
import FAQ from "./FAQ";
import ContactMap from "./Map";

const Contact = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-normal">
            {/* Contact Info & Form Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Left Column: Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <ContactInfo />
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7">
                            {/* <ContactForm /> */}

                            <div className="bg-[#001d3d] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                                <h4 className="text-lg font-black uppercase tracking-widest mb-6 italic border-b border-white/10 pb-4">
                                    Operating Hours
                                </h4>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow - Step by Step */}
            <ProcessFlow />

            {/* Service Area Grid */}
            <ServiceArea />

            {/* Comparison: Local vs National */}
            <Comparison />

            {/* Review Spotlight */}
            <ReviewSpotlight />

            {/* FAQ Section */}
            <FAQ />

            {/* Ready CTA */}
            <section className="py-24 bg-orange-600 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter text-balance leading-tight">
                        Ready to Schedule <br /> Honest HVAC Service?
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">
                        <a href="tel:8019705797" className="bg-[#001d3d] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-orange-600 transition-all text-xs inline-block text-center mt-2">
                            Call Now
                        </a>
                        <div className="flex items-center gap-5 group cursor-pointer text-white">
                            <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-600 transition-all shadow-xl">
                                <Phone size={28} fill="currentColor" />
                            </div>
                            <div className="text-left leading-none">
                                <p className="text-[10px] font-black uppercase text-white/60 tracking-[0.3em] mb-2 italic">
                                    Direct Call or Text
                                </p>
                                <p className="text-3xl font-black text-white italic tracking-tighter">
                                    801-970-5797
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactMap />
        </div>
    );
};

export default Contact;
