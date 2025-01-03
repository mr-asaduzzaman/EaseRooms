import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const slides = [
        {
            id: 1,
            backgroundImage: "https://i.ibb.co.com/0DJrfjh/qqqqqqq.jpg",
            heading: "Welcome to EaseRoom!",
            paragraph: "Searching For Perfect Room? You are in the right place.",
            leftImage: "https://i.ibb.co/8czJRqn/lllllllllllllllll.jpg",
            rightImage: "https://i.ibb.co/jTqgYmp/rrrrrrrr.jpg",
        },
        {
            id: 2,
            backgroundImage: "https://i.ibb.co.com/DYJzd73/wwwwww.jpg",
            heading: "Find Your Dream Room!",
            paragraph: "Explore our extensive room listings tailored to your needs.",
            leftImage: "https://i.ibb.co/8czJRqn/lllllllllllllllll.jpg",
            rightImage: "https://i.ibb.co/jTqgYmp/rrrrrrrr.jpg",
        },
        {
            id: 3,
            backgroundImage: "https://i.ibb.co.com/DKyzKrQ/ddddddd.jpg",
            heading: "Experience Comfort Like Never Before!",
            paragraph: "Your comfort is our priority. Discover top-quality rooms now.",
            leftImage: "https://i.ibb.co/8czJRqn/lllllllllllllllll.jpg",
            rightImage: "https://i.ibb.co/jTqgYmp/rrrrrrrr.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id}>
                        <div
                            className="hero min-h-52"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                            }}
                        >
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="text-neutral-content flex flex-col lg:flex-row gap-5 items-center justify-center p-5 lg:p-10">
                                {/* Left Image */}
                                <div className="flex justify-center lg:justify-end w-full lg:w-1/4">
                                    <motion.img
                                        animate={{ x: [-50, 0, -50] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="h-28 w-40 lg:h-40 lg:w-56 rounded-tl-3xl rounded-bl-3xl border-l-4 border-b-4 border-gray-400"
                                        src={slide.leftImage}
                                        alt="Left Banner Image"
                                    />
                                </div>

                                {/* Center Content */}
                                <div className="text-center w-full lg:w-2/4">
                                    {/* Heading Animation */}
                                    <motion.h1
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1, y: [-100, 0] }}
                                        transition={{ duration: 1.5 }}
                                        className="text-2xl lg:text-5xl font-bold mb-5 mt-10 lg:mt-20"
                                    >
                                        {slide.heading}
                                    </motion.h1>

                                    {/* Paragraph Animation */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, y: [50, 0] }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                        className="text-sm lg:text-lg mb-5"
                                    >
                                        {slide.paragraph}
                                    </motion.p>

                                    {/* Search Bar Animation */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                                        className="join mb-5"
                                    >
                                        <Link to="/rooms">
                                            <div className="btn btn-wide bg-black text-white hover:bg-white hover:text-black">
                                                View Rooms
                                            </div>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center lg:justify-start w-full lg:w-1/4">
                                    <motion.img
                                        animate={{ x: [100, 50, 100] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="h-28 w-40 lg:h-40 lg:w-56 rounded-tr-3xl rounded-br-3xl border-r-4 border-b-4 border-gray-400"
                                        src={slide.rightImage}
                                        alt="Right Banner Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
