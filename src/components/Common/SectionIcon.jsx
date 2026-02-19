"use client";
import React from "react";
import Image from "next/image";

const SectionIcon = ({ size = 24, className = "" }) => {
  return (
    <Image
      src="/assets/img/icons/fan.svg"
      alt=""
      className={`cs_section_subheading_icon ${className}`}
      width={size}
      height={size}
    />
  );
};

export default SectionIcon;
