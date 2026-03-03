import React from 'react';
import { ThermometerSnowflake, Flame, Wind, Wrench, Construction, Building2, Check, AlertCircle, ShieldCheck, CheckCircle, Phone } from 'lucide-react';

export const mainServices = [
    {
        id: "01",
        title: "AC Repair & Installation",
        icon: <ThermometerSnowflake size={24} />,
        desc: "Is your AC blowing warm air? Same-day diagnosis for Salt Lake County.",
    },
    {
        id: "02",
        title: "Furnace Repair & Install",
        icon: <Flame size={24} />,
        desc: "Available 24/7 for no-heat emergencies during Utah winters.",
    },
    {
        id: "03",
        title: "Ductwork Services",
        icon: <Wind size={24} />,
        desc: "Installation & repair for basements, remodels, and additions.",
    },
    {
        id: "04",
        title: "Seasonal Maintenance",
        icon: <Wrench size={24} />,
        desc: "Prevent breakdowns with our comprehensive 15-point tune-ups.",
    },
    {
        id: "05",
        title: "Basement HVAC",
        icon: <Construction size={24} />,
        desc: "Specialized zoning and ductwork for your basement finish project.",
    },
    {
        id: "08",
        title: "Light Commercial",
        icon: <Building2 size={24} />,
        desc: "Fast response for small offices, retail, and multi-unit properties.",
    },
];

export const serviceFaqs = [
    {
        q: "How much does AC repair usually cost?",
        a: "Most AC repairs range from $150-$600. Common fixes like capacitors or refrigerant recharges typically cost $300-$500. We'll give you an upfront price before starting work.",
    },
    {
        q: "When should I repair vs. replace my furnace?",
        a: "Generally, if your furnace is under 15 years old and the repair costs less than $1,000, repair makes sense. If it's 18+ years old or needs expensive repairs, replacement is often smarter. I'll give you honest advice.",
    },
    {
        q: "How long do HVAC systems last?",
        a: "With regular maintenance: AC units last 12-15 years, furnaces last 15-20 years. Without maintenance, you could see a 30-40% shorter lifespan.",
    },
    {
        q: "What's included in a tune-up?",
        a: "Complete inspection, cleaning, testing, and adjustment of all components. Travis checks for potential problems and can fix small issues before they become expensive breakdowns.",
    },
    {
        q: "Do you offer payment plans?",
        a: "FINANCING SOON!! We are currently setting up flexible payment options to help with major replacements.",
    },
    {
        q: "How quickly can you get here?",
        a: "For emergencies: typically within 1-2 hours. For scheduled service: usually same-day or within 24-48 hours.",
    },
    {
        q: "What if you can't fix it?",
        a: "If I can't fix it, you don't even pay for the service call. Simple as that. I'll even help find someone who can.",
    },
];

export const coolingCommonProblems = [
    { p: "Blowing Warm Air", c: "Low refrigerant or compressor" },
    { p: "Won't Turn On", c: "Electrical or capacitor failure" },
    { p: "Loud Noises", c: "Worn motor or loose parts" },
    { p: "Short Cycling", c: "Thermostat or refrigerant issues" },
    { p: "Water Leaking", c: "Clogged drain or frozen coil" },
];

export const repairCriteria = [
    { text: "Under 10 years old" },
    { text: "Repair costs < $1,000" },
    { text: "System is reliable" },
    { text: "Stable energy bills" }
];

export const replaceCriteria = [
    { text: "12-15+ years old" },
    { text: "Repair > 50% cost" },
    { text: "Frequent breakdowns" },
    { text: "Climbing energy bills" }
];

export const heatingProblems = [
    "Ignition failure or gas supply problems",
    "Failed pilot light or limit switch tripped",
    "Loose blower wheel (banging noises)",
    "Dirty filter causing short cycling",
];

export const installationInclusions = [
    "Proper BTU sizing",
    "High-efficiency options",
    "Permits & Inspections",
    "Old unit disposal",
    "Warranty coverage",
    "Financing (Soon!)",
];

export const ductTags = ["Basement Finishes", "Repair & Sealing", "Zoning"];

export const springTuneUp = [
    "Clean condenser coils",
    "Check refrigerant levels",
    "Test thermostat accuracy",
    "Inspect connections",
    "Clear condensate drain"
];

export const fallTuneUp = [
    "Inspect heat exchanger",
    "Test ignition system",
    "Adjust gas pressure",
    "Clean burners",
    "Combustion analysis"
];

export const serviceAreasList = [
    {
        t: "Basement HVAC",
        d: "Extend existing ductwork or add separate zones for remodel projects.",
    },
    {
        t: "Residential Services",
        d: "Primary focus on homes, rentals, and multi-unit properties.",
    },
    {
        t: "Light Commercial",
        d: "Small offices, retail spaces, and small warehouses.",
    },
];

export const serviceLocations = {
    col1: ["Salt Lake County", "Utah County", "Davis County"],
    col2: ["Weber County", "Summit County", "Wasatch County"],
    communities: "West Jordan, Sandy, Draper, South Jordan, SLC, Provo, Orem, Lehi, Bountiful, Layton, Ogden, Park City."
};
