import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("https://ease-room-server.vercel.app/Rooms")
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            })
            .catch((error) => console.error("Error fetching rooms:", error));
    }, []);

    return (
        <div className="py-10 px-2 lg:px-5 bg-slate-200">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-black">
                    Experience Luxury with Our Featured Rooms
                </h1>
                <p className="mt-2 text-gray-900">
                    Highlighting the exclusivity and charm of the showcased rooms.
                </p>
            </div>

            {/* Display only 6 rooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.slice(0, 6).map((room) => (
                    <RoomCard key={room._id} room={room}></RoomCard>
                ))}
            </div>

            {/* All Rooms button */}
            <div className="text-center mt-8">
                <Link to="/rooms">
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800">
                        Explore All Rooms
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedRooms;
