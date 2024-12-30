import React from 'react';
import { Link } from 'react-router-dom';

const AllRoomCard = ({ room }) => {
    return (
        <>
            <Link to={`/rooms/${room._id}`}>
                <div
                    key={room.id}
                    className="bg-white rounded-lg p-5 border shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
                >
                    <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-48 rounded-md transition-transform duration-300"
                    />
                    <div className="border p-2 rounded-md mt-4">
                        <h2 className="text-xl font-bold text-gray-800">{room.name}</h2>
                       
                        <div className="mt-2 flex justify-between items-center">
                            <p className="text-lg font-semibold text-black">${room.price} / night</p>
                            <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="ml-1">{room.rating} ({room.reviews} reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default AllRoomCard;
