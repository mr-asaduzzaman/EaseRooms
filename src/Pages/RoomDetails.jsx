import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RoomDetails = () => {
    const room = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isBooked, setIsBooked] = useState(false);

    const handleBookNow = () => {
        if (isBooked) {
            alert("This room is already booked!");
            return;
        }
        setIsModalOpen(true);
    };

    const handleConfirmBooking = () => {
        if (!selectedDate) {
            alert("Please select a booking date.");
            return;
        }
        setIsBooked(true);
        setIsModalOpen(false);
        alert("Room successfully booked!");
    };

    return (
        <>
            <div className="font-bold text-3xl bg-slate-600 py-10 text-white text-center">Room Details</div>
            <div className="w-10/12 mx-auto my-10 p-5 bg-white rounded-lg shadow-lg border">
                <img
                    src={room.image}
                    alt={room.name}
                    className="w-full lg:h-96 rounded-md mb-5"
                />
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">{room.name}</h2>
                    <p className="text-gray-600 mb-4">{room.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <p><span className="font-semibold text-gray-700">Price:</span> ${room.price} / night</p>
                        <p><span className="font-semibold text-gray-700">Rating:</span> ★ {room.rating} ({room.reviews} reviews)</p>
                        <p><span className="font-semibold text-gray-700">Beds:</span> {room.beds}</p>
                        <p><span className="font-semibold text-gray-700">Max Occupancy:</span> {room.occupancy}</p>
                        <p><span className="font-semibold text-gray-700">Size:</span> {room.size}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Amenities:</h3>
                        <ul className="list-disc grid grid-cols-2 pl-5 space-y-2 text-gray-600">
                            {room.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                    </div>
                    <button
                        className={`btn w-full ${isBooked ? "bg-gray-500" : "bg-green-600"} text-white my-5 hover:bg-black`}
                        onClick={handleBookNow}
                        disabled={isBooked}
                    >
                        {isBooked ? "Booked" : "Book Now"}
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-5/12 rounded-lg shadow-lg p-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Summary</h2>
                        <div>
                            <img className='h-44 w-full' src={room.image} alt="" />
                        </div>
                        <div className='mt-5'>
                            <p><span className="font-semibold">Price:</span> ${room.price} / Night</p>
                            <p><span className="font-semibold">Room Size:</span> {room.size}</p>
                            <p><span className="font-semibold">Room Name:</span> {room.name}</p>
                            <p><span className="font-semibold">Max Occupancy:</span> {room.occupancy}</p>

                            <div className="my-4 justify-between">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    minDate={new Date()}
                                    className="w-full text-black border p-1 rounded-md"
                                    placeholderText="Select Booking date"
                                />
                            </div>

                        </div>
                        <div className="flex justify-between gap-4">
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-gray-700"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                onClick={handleConfirmBooking}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RoomDetails;
