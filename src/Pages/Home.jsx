import React from 'react';
import Banner from '../Components/Banner';
import FeaturedRoommatePost from '../Components/FeaturedRoommatePost';
import BannerText from '../Components/BannerText';

const Home = () => {
    return (
        <div className='min-h-screen relative '>

            <div>
                <Banner></Banner>
            </div>
            <div className=' absolute top-[90px] left-[42px] lg:top-[500px] lg:left-[160px] w-9/12 '>
                <BannerText></BannerText>
            </div>
            <div className=' '>
                <FeaturedRoommatePost></FeaturedRoommatePost>
            </div>

        </div>
    );
};

export default Home;