import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";

const FooterTop = () => {
    return (
        <div className="py-8 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        {[
                            { icon: Facebook, href: "#" },
                            { icon: Twitter, href: "#" },
                            { icon: Instagram, href: "#" },
                            { icon: Linkedin, href: "#" }
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"
                            >
                                <social.icon size={18} fill="currentColor" className="stroke-0" />
                            </Link>
                        ))}
                    </div>

                    {/* Logo */}
                    <div className="animate-in zoom-in duration-1000">
                        <Link href="/">
                            <Image src="/assets/img/RHVAC footer color.svg" alt="Resolute Air Logo" width={200} height={200} />
                        </Link>
                    </div>

                    {/* Contact Card */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-orange-600 shadow-lg">
                            <Phone size={24} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-300 m-0">Need Any Cleaning Help</p>
                            <h3 className="text-2xl font-bold text-white m-0">801-970-5797</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterTop;
