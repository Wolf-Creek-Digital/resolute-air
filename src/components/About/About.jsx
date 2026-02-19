"use client";
import React from "react";
import MeetTravis from "./MeetTravis";
import Difference from "./Difference";
import Testimonials from "./Testimonials";
import Cta from "./Cta";

const About = () => {
    return (
        <div className="font-sans text-gray-900 leading-normal">
            <MeetTravis />
            <Difference />
            <Testimonials />
            <Cta />
        </div>
    );
};

export default About;
