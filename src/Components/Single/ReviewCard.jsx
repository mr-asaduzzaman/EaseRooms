import React from 'react';
import { FaStar, FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const ReviewCard = ({ rating, comment, roomName, userName, location, time }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-lg p-6 max-w-sm mx-auto mb-8 transition-transform transform hover:scale-105">
      {/* User Info */}
      <div className="flex items-center mb-4">
        
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{userName}</h3>
        </div>
      </div>

      {/* Room Name */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">{roomName}</h2>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {/* Review Comment */}
      <p className="text-lg text-gray-700 mb-4">{comment}</p>

      {/* Review Time */}
      <div className="text-sm text-gray-500 italic">{time}</div>
    </div>
  );
};

const Reviews = () => {
  // Fake review data
  const reviews = [
    {
      roomId: "1",
      rating: 5,
      comment: "Amazing stay! The room was spacious and well-kept. The service was exceptional. Will definitely come back!",
      roomName: "Skyline Penthouse",
      userName: "Olivia Brown",
      location: "Los Angeles, USA",
      time: "3 hours ago"
    },
    {
      roomId: "2",
      rating: 4,
      comment: "Great location and comfort. The room was clean and cozy, though the Wi-Fi could be faster. Overall, very pleased with my stay.",
      roomName: "Cozy Cabin",
      userName: "Ethan Davis",
      location: "Austin, USA",
      time: "1 day ago"
    },
    {
      roomId: "3",
      rating: 3,
      comment: "It was a decent room. A bit smaller than expected and the air conditioning was not working well. Fine for a short stay though.",
      roomName: "Garden View Room",
      userName: "Sophia Martinez",
      location: "Barcelona, Spain",
      time: "2 days ago"
    },
    {
      roomId: "4",
      rating: 5,
      comment: "The best stay ever! Comfortable, stylish, and the service was top-notch. Highly recommend for a luxury experience.",
      roomName: "Royal Suite",
      userName: "Liam Johnson",
      location: "London, UK",
      time: "5 days ago"
    },
    {
      roomId: "5",
      rating: 2,
      comment: "The room was fine, but there was a lot of street noise, and the bathroom had a few issues. Not great for the price.",
      roomName: "Budget Room",
      userName: "Ava Wilson",
      location: "Toronto, Canada",
      time: "1 week ago"
    },
    {
        roomId: "3",
        rating: 3,
        comment: "It was a decent room. A bit smaller than expected and the air conditioning was not working well. Fine for a short stay though.",
        roomName: "Garden View Room",
        userName: "Sophia Martinez",
        location: "Barcelona, Spain",
        time: "2 days ago"
      }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Guest Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            rating={review.rating}
            comment={review.comment}
            roomName={review.roomName}
            time={review.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
