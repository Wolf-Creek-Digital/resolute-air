"use client";
import React from "react";
import EmergencyHero from "./EmergencyHero";
import EmergencySymptoms from "./EmergencySymptoms";
import EmergencyProcess from "./EmergencyProcess";
import EmergencyMaintenance from "./EmergencyMaintenance";
import EmergencyFAQ from "./EmergencyFAQ";
import EmergencyCTA from "./EmergencyCTA";

const Emergency = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 leading-normal">
            
            {/* 1. EMERGENCY SECTION (Hero + Symptoms) */}
            <EmergencyHero />
            <EmergencySymptoms />

            {/* 2. PROCESS SECTION (Visual flow) */}
            <EmergencyProcess />

            {/* 3. MAINTENANCE SECTION (Plans + Cost) */}
            <EmergencyMaintenance />

            {/* 4. FAQ SECTION */}
            <EmergencyFAQ />

            {/* FINAL CTA */}
            <EmergencyCTA />
            
        </div>
    );
};

export default Emergency;
