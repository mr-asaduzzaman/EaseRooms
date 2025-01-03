import React, { useEffect, useState } from 'react';
import Banner from '../Components/Single/Banner';
import FeaturedRooms from '../Components/Single/FeaturedRooms';
import MapComponent from '../Components/Single/MapComponent';
import NearbyAttractions from '../Components/Single/NearbyAttractions';
import OurServices from '../Components/Single/OurServices';
import { Helmet } from 'react-helmet';
import ReviewComponent from '../Components/Single/ReviewCard';

// Modal Component (to show special offer)
const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null; // Don't render if the modal is closed

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-4xl w-full relative flex">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold focus:outline-none"
                >
                    &times;
                </button>

                {/* Left Section with Image */}
                <div className="w-1/2">
                    <img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/495934403.jpg?k=96902d702cc3fedac3b4e5da88fbfe293457ca40ea16ffec80fd4c33976a1066&o=&hp=1"
                        alt="Special Offer"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>

                {/* Right Section with Text and Offer Details */}
                <div className="w-1/2 pl-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                            Exclusive <span className="text-orange-600">Offer</span> for <span className="text-orange-600">You!</span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Don’t miss out on our limited-time offer! Get 20% off on your first booking at EaseRooms.
                            Whether you're looking for a cozy room or a luxurious suite, we've got you covered.
                        </p>
                    </div>
                    {/* Book Now Button */}
                    <a
                        href="/rooms"
                        className="btn btn-sm btn-success text-white rounded-md p-2 self-end mt-6"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>

    );
};


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open modal after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Home - EaseRooms</title>
                <meta name="description" content="Welcome to the home page of My Website" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Banner />
            <FeaturedRooms />
            <ReviewComponent></ReviewComponent>
            <NearbyAttractions />
            <OurServices />
            <MapComponent />

            {/* Modal for Special Offer */}
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

export default Home;
