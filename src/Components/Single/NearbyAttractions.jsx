import React from 'react';

const NearbyAttractions = () => {
    const attractions = [
        {
            name: 'National Museum',
            distance: '2 km away',
            description: 'Explore the rich history and cultural heritage.',
        },
        {
            name: 'City Park',
            distance: '1 km away',
            description: 'A beautiful green escape in the heart of the city.',
        },
        {
            name: 'Shopping Plaza',
            distance: '500 m away',
            description: 'Enjoy the best shopping and dining experience.',
        },
    ];

    return (
        <div className="reviews-section bg-gray-200 py-10">
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Nearby Attractions</h2>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {attractions.map((attraction, index) => (
                    <div
                        key={index}
                        className="border-l-4 border-blue-400 bg-gray-100 shadow-md p-6 rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                        <p className="text-gray-500 mb-1">{attraction.distance}</p>
                        <p className="text-gray-600">{attraction.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyAttractions;
