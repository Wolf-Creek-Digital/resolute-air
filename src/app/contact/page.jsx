import React from 'react';
import BreadCumb from '@/components/Common/BreadCumb';
import Contact from '@/components/Contact/Contact';

export const metadata = {
    title: "Contact | Resolute Heating & Air",
    description: "Contact Page for Resolute Heating & Air",
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