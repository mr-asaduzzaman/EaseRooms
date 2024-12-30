import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div
            className="hero min-h-52"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/FYXLw7H/windows-on-city-skylines-black-600nw-128900696.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content flex gap-5 items-center">
                <div>
                    <motion.img
                        animate={{ x: [-50, 0, -50] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className='h-40 w-56 rounded-tl-3xl rounded-bl-3xl border-l-4 border-b-4 border-gray-400'
                        src="https://i.ibb.co.com/8czJRqn/lllllllllllllllll.jpg"
                        alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    {/* Heading Animation */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, y: [-100, 0] }}
                        transition={{ duration: 1.5, }}
                        className="mb-5 mt-20 text-5xl font-bold">
                        Welcome to EaseRoom!
                    </motion.h1>

                    {/* Paragraph Animation */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [50, 0] }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="mb-5 flex flex-col items-center justify-center">
                        Searching For Perfect Room?
                        You are in the right place.
                    </motion.p>

                    {/* Search Bar Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="join mb-5">
                        <Link to='/rooms'>
                            <div className='btn btn-wide bg-black text-white hover:bg-white hover:text-black '>
                                View Rooms
                            </div>
                        </Link>
                    </motion.div>
                </div>
                <div>
                    <motion.img
                        animate={{ x: [100, 50, 100] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className='h-40 w-56 rounded-tr-3xl rounded-br-3xl border-r-4 border-b-4 border-gray-400'
                        src="https://i.ibb.co.com/jTqgYmp/rrrrrrrr.jpg"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;