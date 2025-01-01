import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { MdDeleteForever, MdOutlineReviews } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import ReactStars from "react-stars";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const [rooms, setRooms] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newDate, setNewDate] = useState("");
    const [reviewModal, setReviewModal] = useState(null);
    const [reviewData, setReviewData] = useState({ rating: 0, comment: "" });

    useEffect(() => {
        fetch(`https://ease-room-server.vercel.app/BookedRooms?email=${user.email}`)
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
        fetch(`https://ease-room-server.vercel.app/BookedRooms/${selectedBooking._id}`, {
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
                            room._id === selectedBooking._id ? { ...room, bookingDate: newDate } : room
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

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ease-room-server.vercel.app/BookedRooms/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Booking has been canceled.",
                                icon: "success"
                            });
                            setRooms(rooms.filter(room => room._id !== id)); // Update UI after deletion
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting booking:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "There was an issue deleting your booking.",
                            icon: "error"
                        });
                    });
            }
        });
    };
    const handleReviewSubmit = () => {
        if (!reviewData.rating || !reviewData.comment) {
            toast.error("Please provide a rating and a comment.");
            return;
        }

        const reviewPayload = {
            roomId: reviewModal._id,
            username: user.email,
            rating: reviewData.rating,
            comment: reviewData.comment,
            timestamp: new Date().toISOString(),
        };

        fetch(`https://ease-room-server.vercel.app/reviews`, {
            method: "POST",
            headers:
                { "Content-Type": "application/json" },
            body: JSON.stringify(reviewPayload),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if (data.insertedId) {
                    alert("Review submitted successfully!");
                    setReviewModal(null); // Close modal
                    setReviewData({ rating: 0, comment: "" }); // Reset review data
                } else {
                    alert("Failed to submit the review.");
                }
            })
            .catch((error) => {
                console.error("Error submitting review:", error);
                alert("An error occurred while submitting the review.");
            });
    };


    useEffect(() => {
        fetch(`https://ease-room-server.vercel.app/Reviews`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            })
            .catch((error) => {
                console.error("Error fetching rooms:", error);
                toast.error("Failed to fetch booking data.");
            });
    }, [user.email]);
    return (
        <div className="p-6">
            <Helmet>
                <title>My Bookings</title>
                <meta name="description" content="Welcome to the home page of My Website" />
                <meta name="robots" content="index, follow" />
            </Helmet>
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
                                    <Link to='/reviews'>
                                        <button className="btn btn-outline btn-sm text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white">
                                            ({reviews.length} Reviews)
                                        </button>
                                    </Link>
                                </td>
                                <td className="py-3 px-4 text-center">{room.beds}</td>
                                <td className="py-3 px-4 text-center relative">
                                    <div className="flex gap-4 justify-center">
                                        <button className="relative flex flex-col items-center group">
                                            <MdOutlineReviews onClick={() => setReviewModal(room)} className="text-blue-600 hover:text-red-800 text-2xl" />
                                            <div className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Give Review
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(room)}
                                            className="relative flex flex-col items-center group"
                                        >
                                            <FaRegEdit className="text-green-600 hover:text-red-800 text-2xl" />
                                            <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Update Date
                                            </span>
                                        </button>
                                        <button className="relative flex flex-col items-center group">
                                            <MdDeleteForever onClick={() => handleDelete(room._id)} className="text-red-600 hover:text-red-800 text-2xl" />
                                            <span className="absolute top-8 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                Cancel Booking
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
                                className="btn btn-success btn-sm text-white"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setSelectedBooking(null)}
                                className="btn btn-error btn-sm text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Review Modal */}
            {reviewModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">Give Your Review</h3>
                        <p className="py-4">Room: {reviewModal.roomName}</p>
                        <p>
                            Username: <strong>{user.email}</strong>
                        </p>
                        <div className="my-4">
                            <label className="block text-sm font-medium">Rating:</label>
                            <ReactStars
                                count={5}
                                size={24}
                                value={reviewData.rating}
                                onChange={(newRating) => setReviewData((prev) => ({ ...prev, rating: newRating }))}
                                half={false}
                            />
                        </div>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            placeholder="Write your review here..."
                            value={reviewData.comment}
                            onChange={(e) =>
                                setReviewData((prev) => ({ ...prev, comment: e.target.value }))
                            }
                        />
                        <div className="modal-action">
                            <button onClick={handleReviewSubmit} className="btn btn-success btn-sm text-white">
                                Submit
                            </button>
                            <button onClick={() => setReviewModal(null)} className="btn btn-error btn-sm text-white">
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
