import React from 'react';
import BreadCumb from '@/components/Common/BreadCumb';
import Contact from '@/components/Contact/Contact';

export const metadata = {
  title: "Contact Us",
  description: "Schedule your HVAC service today. Call 801-970-5797 for direct access to Travis Angell. No call centers, just honest help.",
};

const page = () => {
    return (
        <div className='contact-page'>
            <BreadCumb Title="Contact Us"></BreadCumb>
            <Contact></Contact>
        </div>
    );
};

export default page;