"use client";
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceGrid from "./ServiceGrid";
import CoolingSolutions from "./CoolingSolutions";
import HeatingSolutions from "./HeatingSolutions";
import MaintenanceDucts from "./MaintenanceDucts";
import ServiceAreas from "./ServiceAreas";
import ServiceFAQ from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";

const Services = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-normal">
            <ServiceHero />
            <ServiceGrid />
            <CoolingSolutions />
            <HeatingSolutions />
            <MaintenanceDucts />
            <ServiceAreas />
            <ServiceFAQ />
            <ServiceCTA />
        </div>
    );
};

export default Services;
