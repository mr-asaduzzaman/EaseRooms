import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-6">
      <Helmet>
                <title>About Us - EaseRooms</title>
                <meta name="description" content="Welcome to the home page of My Website" />
                <meta name="robots" content="index, follow" />
            </Helmet>
      {/* About Us Header */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
          Welcome to EaseRoom
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Revolutionizing the way you find and book your perfect stay. Explore,
          compare, and reserve with ease on our cutting-edge platform designed
          for travelers like you.
        </p>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 flex flex-col bg-gray-200 py-5 lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
            alt="Modern Hotel Room"
            className="rounded-lg shadow-xl h-full"
          />
        </div>
        <div className="lg:w-1/2 text-gray-800">
          <h3 className="text-3xl font-bold mb-6">About EaseRoom</h3>
          <p className="text-lg mb-4">
            At EaseRoom, we aim to bridge the gap between travelers and their
            dream accommodations. From luxury resorts to budget-friendly
            options, our platform caters to every type of traveler.
          </p>
          <p className="text-lg">
            With a seamless interface and reliable partnerships, we promise an
            unmatched booking experience that guarantees satisfaction and
            convenience.
          </p>
        </div>
      </div>


      {/* Call to Action Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-black">
          <h3 className="text-4xl font-bold mb-6">
            Your Dream Stay Awaits!
          </h3>
          <p className="text-lg mb-8">
            Discover exceptional stays tailored just for you. Book now and
            experience ease like never before.
          </p>
          <Link to='/rooms'><button className="px-6 py-3 bg-black text-white font-bold rounded-full shadow hover:bg-gray-200">
            Get Started
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
