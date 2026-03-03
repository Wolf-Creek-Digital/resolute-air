"use client";
import React from 'react';
import FooterTop from './FooterTop';
import FooterMain from './FooterMain';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-[#00172d] text-white">
      <FooterTop />
      <FooterMain />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
