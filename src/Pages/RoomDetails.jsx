import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../Context/AuthContext";

const RoomDetails = () => {
    const room = useLoaderData();
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isBooked, setIsBooked] = useState(false);

    const { user } = useContext(AuthContext);
    const { _id, name, image, price, reviews, description, rating, beds, occupancy, size, amenities } = room;

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

        const bookedRoom = {
            roomId: _id,
            user_email: user?.email,
            roomName: name,
            image,
            size,
            beds,
            rating,
            price,
            reviews,
            bookingDate: selectedDate,
        };

        fetch('http://localhost:5000/BookedRooms', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookedRoom),
        })
            .then((res) => res.json())
            .then((data) => {
                setIsBooked(true);
                alert("Room successfully booked!");
                setIsModalOpen(false);
                navigate('/myBookings')
            })
            .catch((error) => {
                alert("Something went wrong. Please try again later.");
                setIsModalOpen(false);
            });
    };

    return (
        <>
            <div className="font-bold text-3xl bg-slate-600 py-10 text-white text-center">Room Details</div>
            <div className="w-10/12 mx-auto my-10 p-5 bg-white rounded-lg shadow-lg border">
                <img
                    src={image}
                    alt={name}
                    className="w-full lg:h-96 rounded-md mb-5"
                />
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">{name}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <p><span className="font-semibold text-gray-700">Price:</span> ${price} / night</p>
                        <p><span className="font-semibold text-gray-700">Rating:</span> ★ {rating} ({reviews} reviews)</p>
                        <p><span className="font-semibold text-gray-700">Beds:</span> {beds}</p>
                        <p><span className="font-semibold text-gray-700">Max Occupancy:</span> {occupancy}</p>
                        <p><span className="font-semibold text-gray-700">Size:</span> {size}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Amenities:</h3>
                        <ul className="list-disc grid grid-cols-2 pl-5 space-y-2 text-gray-600">
                            {amenities.map((amenity, index) => (
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
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-5/12 rounded-lg shadow-lg p-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Summary</h2>
                        <div>
                            <img className="h-44 w-full rounded-md" src={image} alt={name} />
                        </div>
                        <div className="mt-5">
                            <p><span className="font-semibold">Price:</span> ${price} / Night</p>
                            <p><span className="font-semibold">Room Size:</span> {size}</p>
                            <p><span className="font-semibold">Room Name:</span> {name}</p>
                            <p><span className="font-semibold">Max Occupancy:</span> {occupancy}</p>

                            <div className="my-4">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    minDate={new Date()}
                                    className="w-full text-black border p-1 rounded-md"
                                    placeholderText="Select Booking Date"
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
