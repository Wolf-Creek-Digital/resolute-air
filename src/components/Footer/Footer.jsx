"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";

const Footer = () => {
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
    <footer className="bg-[#00172d] text-white">
      {/* Top Footer Section */}
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

      {/* Main Footer Widgets */}
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

      {/* Footer Bottom */}
      <div className="bg-orange-600 py-6 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="m-0">
            Copyright@ {new Date().getFullYear()} <Link href="/" className="font-bold hover:underline">Resolute Air</Link>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;