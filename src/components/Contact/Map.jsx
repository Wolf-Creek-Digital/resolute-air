import React from 'react';

const ContactMap = () => {
    return (
        <div className="h-[600px] w-full bg-slate-100 relative group overflow-hidden">
            <iframe 
                id="map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.352306266146!2d-112.0010389!3d40.60004999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528e55e5dd5193%3A0xb6b10c987e71c11c!2s8327%20Etude%20Dr%2C%20West%20Jordan%2C%20UT%2084088%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1767588394075!5m2!1ses!2sco" 
                allowFullScreen 
                title="Google Map" 
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500 block"
            ></iframe>
        </div>
    );
};

export default ContactMap;
