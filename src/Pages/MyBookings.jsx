import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { MdDeleteForever, MdOutlineReviews } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newDate, setNewDate] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/BookedRooms?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            })
            .catch((error) => {
                console.error("Error fetching rooms:", error);
                toast.error("Failed to fetch booking data.");
            });
    }, [user.email]);

    const handleUpdate = (booking) => {
        setSelectedBooking(booking); // Open the modal with the selected booking
    };

    const handleDateChange = (e) => {
        setNewDate(e.target.value);
    };

    const handleSaveUpdate = () => {
        if (!newDate) {
            toast.error("Please select a new booking date!");
            return;
        }

        // Make the PATCH request to update the booking date
        fetch(`http://localhost:5000/BookedRooms/${selectedBooking.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookingDate: newDate }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Booking date updated successfully!");
                    // Update the UI by mapping the rooms and updating the selected booking
                    setRooms((prevRooms) =>
                        prevRooms.map((room) =>
                            room.id === selectedBooking.id 
                        )
                    );
                    setSelectedBooking(null); // Close the modal
                    setNewDate(""); // Clear the date input field
                } else {
                    toast.error("Failed to update booking date.");
                }
            })
            .catch((error) => {
                console.error("Error updating booking date:", error);
                toast.error("An error occurred while updating the booking.");
            });
    };

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
                                        <button className="relative flex flex-col items-center group">
                                            <MdOutlineReviews className="text-blue-600 hover:text-red-800 text-2xl" />
                                            <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Review
                                            </span>
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(room)}
                                            className="relative flex flex-col items-center group"
                                        >
                                            <FaRegEdit className="text-green-600 hover:text-red-800 text-2xl" />
                                            <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Update
                                            </span>
                                        </button>
                                        <button className="relative flex flex-col items-center group">
                                            <MdDeleteForever className="text-red-600 hover:text-red-800 text-2xl" />
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

            {/* Modal for Updating Booking Date */}
            {selectedBooking && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Update Booking Date</h3>
                        <p className="py-4">
                            Current Date: <strong>{selectedBooking.bookingDate}</strong>
                        </p>
                        <input
                            type="date"
                            value={newDate}
                            onChange={handleDateChange}
                            className="input input-bordered w-full"
                        />
                        <div className="modal-action">
                            <button
                                onClick={handleSaveUpdate}
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setSelectedBooking(null)}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
