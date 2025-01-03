import React, { useState } from 'react';

const ReviewComponent = () => {
  // Fake review data
  const fakeReviews = [
    { _id: 1, image:'https://i.ibb.co.com/JyXsrZV/istockphoto-174767532-612x612.jpg', name: 'Deluxe Suite', comment: 'Great place to stay!', rating: 5 },
    { _id: 2, image:'https://i.ibb.co.com/tZhgWnq/istockphoto-466503537-612x612.jpg', name: 'Executive Room', comment: 'Loved the service and ambiance.', rating: 4 },
    { _id: 3, image:'https://i.ibb.co.com/P4t4fw8/istockphoto-1316852690-612x612.jpg', name: 'Standard Room', comment: 'Very comfortable and affordable.', rating: 5 },
    { _id: 4, image:'https://i.ibb.co.com/z6x2jBW/istockphoto-1139706845-612x612.jpg', name: 'Presidential Suite', comment: 'Loved the service and ambiance.', rating: 4 },
    { _id: 5, image:'https://i.ibb.co.com/P4t4fw8/istockphoto-1316852690-612x612.jpg', name: 'Family Suite', comment: 'Had a good time. Will come back again.', rating: 4 },
    { _id: 6, image:'https://i.ibb.co.com/tZhgWnq/istockphoto-466503537-612x612.jpg', name: 'Oceanview Room', comment: 'Great place to stay!', rating: 4 },
  ];

  // State for storing reviews
  const [reviews] = useState(fakeReviews);

  return (
    <div className="reviews-section py-10 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Customer Reviews</h2>

      {/* Display reviews */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review._id} className="flex items-center gap-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 p-2 border-2 border-transparent hover:border-indigo-500">
            {/* Review Image */}
            <div className='w-36 h-32 overflow-hidden rounded-lg shadow-md'>
              <img className='w-full h-full object-cover' src={review.image} alt={review.name} />
            </div>

            {/* Review Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{review.name}</h3>
              <p className="text-gray-600 text-lg mb-4">{review.comment}</p>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-700 text-xl">{review.rating}/5 Reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewComponent;
