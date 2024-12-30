import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { MdDeleteForever, MdOutlineReviews } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/BookedRooms?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            });
    }, [user.email]);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold text-center text-gray-600 mb-6">
                My Bookings: {rooms.length}
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="table w-full bg-white border border-gray-200">
                    {/* Table Head */}
                    <thead className="bg-gray-500 text-white">
                        <tr>
                            <th className="py-3 px-4">SL</th>
                            <th className="py-3 px-4">Room</th>
                            <th className="py-3 px-4">Booking Date</th>
                            <th className="py-3 px-4">Size</th>
                            <th className="py-3 px-4">Reviews</th>
                            <th className="py-3 px-4">Beds</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room, idx) => (
                            <tr key={idx} className="hover:bg-gray-100">
                                <td className="py-3 px-4 text-center font-medium">{idx + 1}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-16 w-16">
                                                <img
                                                    src={room.image}
                                                    alt="Room Thumbnail"
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-700">
                                                {room.roomName}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                ${room.price} / Night
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">{room.bookingDate}</td>
                                <td className="py-3 px-4 text-center">{room.size}</td>
                                <td className="py-3 px-4 text-center">
                                    <button className="btn btn-outline btn-sm text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white">
                                        ({room.reviews} Reviews)
                                    </button>
                                </td>
                                <td className="py-3 px-4 text-center">{room.beds}</td>
                                <td className="py-3 px-4 text-center relative">
                                    <div className="flex gap-4 justify-center">


                                        {/* Icons */}
                                        <button className="relative flex flex-col items-center group">
                                            <MdOutlineReviews className="text-blue-600 hover:text-red-800 text-2xl" />
                                            {/* Show Review text on hover */}
                                            <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Review
                                            </span>
                                        </button>
                                        <button className="relative flex flex-col items-center group">
                                            <FaRegEdit className="text-green-600 hover:text-red-800 text-2xl" />
                                            {/* Show Edit text on hover */}
                                            <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Edit
                                            </span>
                                        </button>
                                        <button className="relative flex flex-col items-center group">
                                            <MdDeleteForever className="text-red-600 hover:text-red-800 text-2xl" />
                                            {/* Show Delete text on hover */}
                                            <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Delete
                                            </span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
