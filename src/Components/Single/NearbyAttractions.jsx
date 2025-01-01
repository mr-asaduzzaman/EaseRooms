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
        <div className="attractions-section bg-gradient-to-r from-blue-100 to-purple-100 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Explore Nearby Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {attractions.map((attraction, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-blue-400"
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
