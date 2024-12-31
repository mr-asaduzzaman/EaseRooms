import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Reviews = () => {
    const [rooms, setRooms] = useState([]);
    const reviews = useLoaderData(); // Use the loader data directly

    useEffect(() => {
        fetch("http://localhost:5000/Rooms")
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            })
            .catch((error) => console.error("Error fetching rooms:", error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.isArray(reviews) && reviews.length > 0 ? (
                    reviews.map((review, index) => {
                        // Find the room that matches the review's roomId
                        const matchedRoom = rooms.find(room => room._id === review.roomId);

                        return (
                            <div
                                key={index}
                                className="border rounded-lg shadow-md p-4 bg-white"
                            >
                                <h2 className="text-xl font-semibold mb-2">
                                    Rating: {review.rating} ⭐
                                </h2>
                                <p className="text-gray-700">{review.comment}</p>

                                {/* Display the matching room name, if found */}
                                {matchedRoom ? (
                                    <div className="mt-4">
                                        <h3 className="font-semibold">Room:</h3>
                                        <p>{matchedRoom.name}</p>
                                        {/* Optionally display matched room ID */}
                                        <p className="text-gray-500">Room ID: {matchedRoom._id}</p>
                                    </div>
                                ) : (
                                    <p className="mt-4 text-gray-500">Deluxe Suite</p>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full text-center">
                        <p>No reviews found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reviews;
