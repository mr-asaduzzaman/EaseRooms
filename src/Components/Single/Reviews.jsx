import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
    const [rooms, setRooms] = useState([]);
    const reviews = useLoaderData();

    useEffect(() => {
        fetch("https://ease-room-server.vercel.app/Rooms")
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            })
            .catch((error) => console.error("Error fetching rooms:", error));
    }, []);

    // Calculate rating summary
    const totalReviews = reviews.length;
    const overallRating =
        totalReviews > 0
            ? (reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1)
            : 0;

    const ratingBreakdown = [1, 2, 3, 4, 5].map((star) => ({
        star,
        count: reviews.filter((review) => review.rating === star).length,
    }));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">User Reviews</h1>

            {/* Rating Summary */}
            <div className="mb-8">
                <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold">{overallRating}</div>
                    <div className="flex-1">
                        <p className="text-lg font-semibold">{totalReviews} Reviews</p>
                        <div className="mt-2">
                            {ratingBreakdown
                                .slice()
                                .reverse()
                                .map(({ star, count }) => (
                                    <div key={star} className="flex items-center gap-2 mb-1">
                                        <span className="w-6 text-right">{star} ⭐</span>
                                        <div className="w-full h-2 bg-gray-200 rounded-lg relative">
                                            <div
                                                className="absolute h-2 bg-blue-500 rounded-lg"
                                                style={{
                                                    width: `${(count / totalReviews) * 100}%`,
                                                }}
                                            ></div>
                                        </div>
                                        <span className="w-8 text-gray-600">{count}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews List with Scrollable Container */}
            <div className="max-h-[500px] overflow-y-auto mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.isArray(reviews) && reviews.length > 0 ? (
                        reviews.map((review, index) => {
                            const matchedRoom = rooms.find(
                                (room) => room._id === review.roomId
                            );

                            return (
                                <div
                                    key={index}
                                    className="border rounded-lg shadow-md p-4 bg-white"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <h2 className="text-xl font-semibold">
                                            {review.rating} ⭐
                                        </h2>
                                        <span className="text-gray-500 text-sm">
                                            {matchedRoom ? matchedRoom.name : "Deluxe Suite"}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-2">{review.comment}</p>
                                    {matchedRoom && (
                                        <p className="text-sm text-gray-500">
                                            Room ID: {matchedRoom._id}
                                        </p>
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
        </div>
    );
};

export default Reviews;
