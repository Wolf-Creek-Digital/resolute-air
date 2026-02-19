import { ThermometerSnowflake, Flame, Construction, Wrench, Volume2, Shield, User, Hammer, Clock, BadgeCheck } from 'lucide-react';
import React from 'react';

export const servicesData = [
  {
    title: "Is Your AC Not Cooling?",
    desc: "Utah summers hit 100°F and your AC is blowing warm air. Travis will diagnose the problem and work to fix it, the same day in most cases.",
    icon: <ThermometerSnowflake size={40} className="text-blue-500" color="#3b82f6" />,
    cta: "Call for Same-Day AC Repair",
    phone: "801-970-5797"
  },
  {
    title: "Furnace Quit in Winter?",
    desc: "No heat when it's 15°F outside? We're available 24/7 for emergency furnace repairs. Most problems fixed the same day.",
    icon: <Flame size={40} className="text-orange-600" color="#ea580c" />,
    cta: "Emergency Furnace Help",
    phone: "801-970-5797"
  },
  {
    title: "Finishing Your Basement?",
    desc: "Proper planning for new vents and comfort zones. We design systems that work without breaking the bank.",
    icon: <Construction size={40} className="text-slate-600" color="#475569" />,
    cta: "Get a Free Basement Quote",
    phone: "801-970-5797"
  },
  {
    title: "Seasonal Tune-Up",
    desc: "Prevent breakdowns and lower energy bills. Our maintenance catches small problems before they become expensive.",
    icon: <Wrench size={40} className="text-blue-700" color="#1d4ed8" />,
    cta: "Schedule Your Tune-Up",
    phone: "801-970-5797"
  },
  {
    title: "Strange Noises?",
    desc: "Banging, grinding, or squealing sounds? We'll diagnose and fix it before it becomes a total system failure.",
    icon: <Volume2 size={40} className="text-amber-600" color="#d97706" />,
    cta: "Schedule a Diagnostic",
    phone: "801-970-5797"
  }
];

export   const testimonialsData = [
    {
      text: "Travis did a fantastic job with the HVAC in my basement. He did honest and fair work and if you're reading this call him already so he can help you too!",
      author: "Basement Renovation",
      location: "West Jordan"
    },
    {
      text: "Travis is such an awesome guy. Fixed my HVAC when it wouldn't turn on. He solved it quick and kept his time costs low. 1000% use him again!",
      author: "Emergency Repair",
      location: "Salt Lake County"
    },
    {
      text: "Super helpful, great price, and even offered suggestions on things we needed help with. Absolutely will be calling in the future.",
      author: "Tune-Up & Ductwork",
      location: "Utah County"
    }
  ];

  export const trustBadges = [
  { icon: <Shield size={24} />, text: "Licensed & Insured" },
  { icon: <User size={24} />, text: "Owner-Operator (Travis)" },
  { icon: <Hammer size={24} />, text: "15+ Years Experience" },
  { icon: <Clock size={24} />, text: "24/7 Emergency Service" },
  { icon: <BadgeCheck size={24} />, text: "Honest Pricing" }
];
