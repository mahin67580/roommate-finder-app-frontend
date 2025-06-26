import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import FeaturedRoommatePost from '../Components/FeaturedRoommatePost';
import BannerText from '../Components/BannerText';
import Countuoany from '../Components/Countuoany';
import FAQAccordion from '../Components/FAQAccordion';
import AboutUs from '../Components/AboutUs';
import Contact from '../Components/Contact';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='min-h-screen '>

            <div>
                <Banner></Banner>
            </div>
           
            <div className=' '>
                <FeaturedRoommatePost></FeaturedRoommatePost>
            </div>
            <div>
                <Countuoany></Countuoany>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <Contact></Contact>
            </div>
            <div className='mt-20'>
                <FAQAccordion></FAQAccordion>
            </div>

        </div>
    );
};

export default Home;