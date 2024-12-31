import React from 'react';
import Banner from '../Components/Single/Banner';
import FeaturedRooms from '../Components/Single/FeaturedRooms';
import ReviewsCard from '../Components/Single/ReviewCard';


const Home = () => {
    return (
        <div className='min-h-screen'>
           <Banner></Banner>
          <FeaturedRooms></FeaturedRooms>
            <ReviewsCard></ReviewsCard>
        </div>
    );
};

export default Home;