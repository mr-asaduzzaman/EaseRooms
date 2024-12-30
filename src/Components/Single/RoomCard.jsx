import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {

    return (
        <>
            <div
                key={room.id}
                className="bg-white rounded-lg p-5 border shadow-lg overflow-hidden transform transition-all duration-300">
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
                <Link to={`/rooms/${room._id}`}>
                    <button className='btn w-full bg-black text-white hover:bg-gray-800'>Book Now</button>
                </Link>
            </div>
        </>
    );
};

export default RoomCard;