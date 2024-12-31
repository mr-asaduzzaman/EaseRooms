import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { MdDeleteForever, MdOutlineReviews } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import ReactStars from "react-stars";

const MyBookings2 = () => {
    const { user } = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newDate, setNewDate] = useState("");
    const [reviewModal, setReviewModal] = useState(null); // Review Modal State

    useEffect(() => {
        fetch(`http://localhost:5000/BookedRooms?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setRooms(data))
            .catch((error) => {
                console.error("Error fetching rooms:", error);
                toast.error("Failed to fetch booking data.");
            });
    }, [user.email]);

    

    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold text-center text-gray-600 mb-6">
                My Bookings: {rooms.length}
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="table w-full bg-white border border-gray-200">
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
                                                <img src={room.image} alt="Room Thumbnail" className="object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-700">{room.roomName}</div>
                                            <div className="text-sm text-gray-500">${room.price} / Night</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">{room.bookingDate}</td>
                                <td className="py-3 px-4 text-center">{room.size}</td>
                                <td className="py-3 px-4 text-center">
                                    <button
                                        
                                        className="btn btn-outline btn-sm text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white"
                                    >
                                        Review
                                    </button>
                                </td>
                                <td className="py-3 px-4 text-center">{room.beds}</td>
                                <td className="py-3 px-4 text-center">
                                    {/* Existing Actions */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
        </div>
    );
};

export default MyBookings2;
