import React from 'react';
import { ThermometerSnowflake, AlertTriangle, Star, Droplets, Zap } from 'lucide-react';

export const emergencySymptoms = [
    {
        title: "No Heat When It's Below Freezing",
        icon: <ThermometerSnowflake size={32} />,
        risk: "Dangerous for kids/elderly and can cause burst pipes.",
        action: "Call us immediately at 801-970-5797. Don't wait.",
        color: "blue"
    },
    {
        title: "Gas Smell or Yellow Flame",
        icon: <AlertTriangle size={32} />,
        risk: "Fire hazard and deadly carbon monoxide production.",
        action: "Turn off furnace, open windows, and evacuate if smell is strong.",
        color: "red"
    },
    {
        title: "No AC During Extreme Heat (95°F+)",
        icon: <Star size={32} />,
        risk: "Serious health risk during triple-digit Utah summers.",
        action: "Call for same-day emergency AC repair.",
        color: "orange"
    },
    {
        title: "Significant Water Leaks",
        icon: <Droplets size={32} />,
        risk: "Can cause mold, flooring damage, and electrical hazards.",
        action: "Turn off power to the unit and call right away.",
        color: "blue"
    },
    {
        title: "Electrical Problems",
        icon: <Zap size={32} />,
        risk: "Burning smells, sparks, or repeatedly tripping breakers.",
        action: "Turn off power at the breaker immediately.",
        color: "amber"
    }
];

export const maintenanceFaqs = [
    { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. We keep you as a member by providing great service, not by locking you in." },
    { q: "What if I need a repair between tune-ups?", a: "No problem! You get priority scheduling and 10% off the repair. That's the value of membership." },
    { q: "Do you service all brands?", a: "Yes. We service all makes and models of HVAC equipment including Carrier, Trane, Lennox, and more." },
    { q: "Is it really worth it?", a: "Most members save more than the plan costs through 10% repair discounts, lower energy bills, and avoiding emergency fees." }
];
