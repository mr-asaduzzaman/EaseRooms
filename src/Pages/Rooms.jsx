import React, { useEffect, useState } from 'react';
import AllRoomCard from '../Components/Single/AllRoomCard';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/Rooms")
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            })
            .catch((error) => console.error("Error fetching rooms:", error));
    }, []);

    return (
        <div className='bg-base-200'>
            <div className="bg-gradient-to-r from-gray-500 to-gray-800 py-6 my-2">
                <h1 className="text-5xl font-extrabold text-white text-center mb-6">Explore our Rooms</h1>
                <p className="text-xl text-white text-center">Explore our variety of rooms and find the one that suits you best!</p>
                <div className="text-center text-lg font-semibold text-white">
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    rooms.map(room => <AllRoomCard key={room._id} room={room}></AllRoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;