import React from 'react';
import Link from "next/link";
import Image from "next/image";

const FooterMain = () => {
    const Services = [
        'Rapid Cool Installation',
        'Air Flow Optimization',
        'Rapid Drain Unclogging',
        'Frost Guard Emergency',
        'Breeze Balance Calibration',
    ];

    const WorkingHours = [
        { day: 'Thu - Fri', time: '9:00 AM - 7:00 PM' },
        { day: 'Mon - Wed', time: '8:00 AM - 10:00 PM' },
        { day: 'Saturday', time: '7:00 AM - 9:00 PM' },
        { day: 'Sunday', time: 'Close' },
    ];

    const QuickLinks = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Services', link: '/service' },
        { title: 'Blog', link: '/blog' },
        { title: 'Contact', link: '/contact' }
    ];

    return (
        <div className="relative py-20 bg-[#00172d] overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/assets/img/footer_bg_1.jpg"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

                    {/* Service Widget */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-6">Our Service</h2>
                        <div className="flex gap-1 mb-8 justify-center md:justify-start">
                            <span className="h-1 w-20 rounded bg-orange-600"></span>
                            <span className="h-1 w-4 rounded bg-white"></span>
                            <span className="h-1 w-1 rounded bg-white"></span>
                        </div>
                        <ul className="space-y-3">
                            {Services.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 justify-center md:justify-start group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-orange-600 transition-colors"></span>
                                    <Link href="/service/service-details" className="hover:text-orange-600 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Working Hours Widget */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-6">Working Hours:</h2>
                        <div className="flex gap-1 mb-8 justify-center md:justify-start">
                            <span className="h-1 w-20 rounded bg-orange-600"></span>
                            <span className="h-1 w-4 rounded bg-white"></span>
                            <span className="h-1 w-1 rounded bg-white"></span>
                        </div>
                        <ul className="space-y-3">
                            {WorkingHours.map((item, i) => (
                                <li key={i} className="flex justify-between max-w-xs mx-auto md:mx-0 border-b border-white/10 pb-2 last:border-0">
                                    <span className="text-slate-300">{item.day}</span>
                                    <span className="font-semibold">{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Widget */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-6">Quick links</h2>
                        <div className="flex gap-1 mb-8 justify-center md:justify-start">
                            <span className="h-1 w-20 rounded bg-orange-600"></span>
                            <span className="h-1 w-4 rounded bg-white"></span>
                            <span className="h-1 w-1 rounded bg-white"></span>
                        </div>
                        <ul className="space-y-3">
                            {QuickLinks.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 justify-center md:justify-start group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-orange-600 transition-colors"></span>
                                    <Link href={item.link} className="hover:text-orange-600 transition-colors">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterMain;
