import React, { useEffect, useState } from 'react';
import AllRoomCard from '../Components/Single/AllRoomCard';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Fetch rooms from the API
  useEffect(() => {
    fetch("http://localhost:5000/Rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setFilteredRooms(data); // Initialize filteredRooms with all rooms
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  // Handle price range change
  const handleFilterChange = (minPrice, maxPrice) => {
    setPriceRange({ min: minPrice, max: maxPrice });
    const filtered = rooms.filter(room => room.price >= minPrice && room.price <= maxPrice);
    setFilteredRooms(filtered); // Update filteredRooms based on price range
  };

  return (
    <div className='bg-base-200'>
      <div className="bg-gradient-to-r from-gray-500 to-gray-800 py-6 my-2">
        <h1 className="text-5xl font-extrabold text-white text-center mb-6">Explore our Rooms</h1>
        <p className="text-xl text-white text-center">Explore our variety of rooms and find the one that suits you best!</p>
      </div>

      {/* Price Filter */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 mb-6">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <label htmlFor="minPrice" className="text-black">Min Price: </label>
          <input
            id="minPrice"
            type="number"
            value={priceRange.min}
            onChange={(e) => handleFilterChange(e.target.value, priceRange.max)}
            min="0"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="maxPrice" className="text-black">Max Price: </label>
          <input
            id="maxPrice"
            type="number"
            value={priceRange.max}
            onChange={(e) => handleFilterChange(priceRange.min, e.target.value)}
            min="0"
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* Room Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
        {
          filteredRooms.map(room => (
            <AllRoomCard key={room._id} room={room} />
          ))
        }
      </div>
    </div>
  );
};

export default Rooms;
