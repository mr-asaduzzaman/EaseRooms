import React from 'react';
import { FaSwimmer, FaUtensils, FaSpa, FaWifi, FaShuttleVan, FaSafari } from 'react-icons/fa';

const OurServices = () => {
    const services = [
        { icon: <FaSwimmer size={40} className="text-blue-500" />, title: 'Swimming Pool', description: 'Relax and unwind in our luxurious pool.' },
        { icon: <FaUtensils size={40} className="text-red-500" />, title: 'Fine Dining', description: 'Enjoy gourmet meals prepared by top chefs.' },
        { icon: <FaSpa size={40} className="text-pink-500" />, title: 'Spa Services', description: 'Rejuvenate with our premium spa treatments.' },
        { icon: <FaSafari size={40} className="text-pink-500" />, title: 'Tour Guide', description: 'We have tour guide services for the guest.' },
        { icon: <FaWifi size={40} className="text-green-500" />, title: 'Free Wi-Fi', description: 'Stay connected with high-speed internet.' },
        { icon: <FaShuttleVan size={40} className="text-purple-500" />, title: 'Airport Shuttle', description: 'Convenient airport pick-up and drop-off.' },
    ];

    return (
        <div className="services-section bg-white py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Our Exclusive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 shadow-md p-6 rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
