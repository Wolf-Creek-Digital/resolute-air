import React from 'react';
import About2 from '../Components/About/About2';
import BreadCumb from '../Components/Common/BreadCumb';
import Testimonial from '../Components/Home/Testimonial';
import Faq from '../Components/Home/Faq';
import Process from '../Components/Home/Process';

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="About Us"></BreadCumb>
            <About2 
                Img="/assets/img/about_img_2.jpg"
                TitleUp="About us"
                Title="Turning up the chill factor in your home or office"
                Content="This involves setting up a new air conditioning system in your home or office. It's crucial to ensure that the unit is properly sized for the space and installed correctly for optimal efficiency"
                FeatureList={[
                    "Ventilation System Maintenance",
                    "Indoor Air Quality Testing",
                    "Cool Craft Custom Solutions"
                ]}
                Experience="25+"
                BioImg="/assets/img/avatar_1.png"                
                BioName="Roberto Ramon"                
                BioContent="Call any time for services"                
            ></About2>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Process></Process>
        </div>
    );
};

export default page;