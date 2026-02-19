"use client";
import React from "react";
import Image from "next/image";

const SectionIcon = ({ size = 24, className = "" }) => {
  return (
    <Image
      src="/assets/img/icons/fan.svg"
      alt=""
      className={`animate-[spin_10s_linear_infinite] inline-block align-middle mr-2 ${className}`}
      width={size}
      height={size}
    />
  );
};

export default SectionIcon;
