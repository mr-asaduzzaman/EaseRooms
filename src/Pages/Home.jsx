import React from 'react';
import Banner from '../Components/Single/Banner';
import FeaturedRooms from '../Components/Single/FeaturedRooms';
import ReviewsCard from '../Components/Single/ReviewCard';
import MapComponent from '../Components/Single/MapComponent';
import NearbyAttractions from '../Components/Single/NearbyAttractions';
import OurServices from '../Components/Single/OurServices';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>Home - EaseRooms</title>
                <meta name="description" content="Welcome to the home page of My Website" />
                <meta name="robots" content="index, follow" />
            </Helmet>
           <Banner></Banner>
          <FeaturedRooms></FeaturedRooms>
            <ReviewsCard></ReviewsCard>
            <MapComponent></MapComponent>
            <NearbyAttractions></NearbyAttractions>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;