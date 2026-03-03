"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Header({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky ? 'lg:top-[-50px] top-0' : 'top-0'
        }`}
      >
        {/* Wrapper Background (Orange) - Visible behind the curve */}
        <div className="absolute hidden lg:block inset-0 bg-orange-600 -z-20 h-[140px]"></div>

        {/* Top Header */}
        <div className="hidden lg:block h-[50px] relative z-10">
          <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center text-white text-xs font-medium">
            <div className="tracking-wide">
              Air Conditioning & Heating Services Company
            </div>
            <div className="flex items-center gap-4">
              <p className="mb-0">Follow Us On:</p>
              <div className="flex gap-3">
                {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" }
                ].map((social, i) => (
                    <Link key={i} href={social.href} className="hover:text-black transition-colors">
                        <social.icon size={14} fill="currentColor" className="stroke-0" />
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`relative transition-all duration-300 ${isSticky ? 'shadow-lg bg-orange-600' : ''}`}>
          
          <div className="max-w-7xl mx-auto px-4 relative">
             {/* White Curve Background */}
             {/* Positioned relative to container to match original design "left: -6%" */}
             <div className="absolute top-0 bottom-0 lg:left-[-6%] left-0 right-[-100vw] bg-white lg:rounded-tl-[60px] -z-10"></div>

            <div className="flex justify-between items-center h-[90px]">
              
              {/* Logo */}
              <div className="flex-shrink-0 animate-in zoom-in duration-500 pl-2 lg:pl-0">
                <Link href="/">
                    <Image src="/assets/img/RHVAC Wide Color BG-white.svg" alt="Resolute Air Logo" width={356} height={56} className="h-20 w-auto" />
                </Link>
              </div>

              {/* Navigation & Mobile Toggle */}
              <div className="flex items-center gap-8 pr-2 lg:pr-0">
                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden text-[#010f34] focus:outline-none"
                    onClick={() => setMobileToggle(!mobileToggle)}
                >
                    <div className="w-8 h-6 flex flex-col justify-between">
                        <span className={`block w-full h-0.5 bg-[#010f34] transition-all ${mobileToggle ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`block w-full h-0.5 bg-[#010f34] transition-all ${mobileToggle ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-full h-0.5 bg-[#010f34] transition-all ${mobileToggle ? '-rotate-45 -translate-y-3' : ''}`}></span>
                    </div>
                </button>

                {/* Desktop Nav */}
                <div className={`${mobileToggle ? 'flex' : 'hidden'} lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row items-center gap-4 p-8 lg:p-0 shadow-xl lg:shadow-none transition-all duration-300 border-t lg:border-none border-gray-100`}>
                    <Nav setMobileToggle={setMobileToggle} isSticky={isSticky} />
                    
                     {/* CTA Button (Mobile Only in Nav menu, Desktop separate) */}
                    <div className="lg:hidden mt-4">
                      <Link 
                        href="/contact" 
                        className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2.5 rounded hover:bg-[#010f34] transition-all font-bold uppercase tracking-wider text-sm"
                        onClick={() => setMobileToggle(false)}
                      >
                        <span>Request Quote</span>
                      </Link>
                    </div>
                </div>

                {/* CTA Button (Desktop) */}
                <div className="hidden lg:block">
                  <Link 
                    href="/contact" 
                    className={`flex items-center gap-2 px-8 py-3 rounded transition-all font-black uppercase tracking-wider text-sm shadow-lg ${
                        isSticky 
                        ? 'bg-white text-orange-600 hover:bg-[#010f34] hover:text-white' 
                        : 'bg-orange-600 text-white hover:bg-[#010f34]'
                    }`}
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
               {/* Spacer for fixed header */}
       <div className="lg:h-[140px]"></div>
    </>
  );
}
