import React from 'react';
import Banner from '../Components/Single/Banner';
import FeaturedRooms from '../Components/Single/FeaturedRooms';

const Home = () => {
    return (
        <div className='min-h-screen'>
           <Banner></Banner>
          <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;