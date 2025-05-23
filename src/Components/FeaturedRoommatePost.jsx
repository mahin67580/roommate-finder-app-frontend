import React, { useEffect, useState } from 'react';
import RoommatePostCard from './RoommatePostCard';
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1747927511878.json";

const FeaturedRoommatePost = () => {


    const [RoommatePosts, setRoommatePost] = useState([]);

    const fetchsetRoommatePosts = async () => {
        const res = await fetch("http://localhost:3000/roommates");
        const data = await res.json();
        setRoommatePost(data);
    };

    useEffect(() => {
        fetchsetRoommatePosts();
    }, []);


    


    const avaiablePost = RoommatePosts.filter(RoommatePost => RoommatePost.availability === "available").slice(0, 6);


    return (
        <div>
            <div className='  flex justify-center mt-16 gap-1 items-center'>
                <div className='w-[80px]  '><Lottie animationData={animationData} loop autoplay /> </div>
                <h1 className='text-center   text-3xl font-bold  '>Featured Roommates</h1>
                <div className='w-[80px]  '><Lottie animationData={animationData} loop autoplay /> </div>


            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-11/12 mx-auto p-8'>
                {
                    avaiablePost.map(post => <RoommatePostCard key={post._id} post={post}></RoommatePostCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedRoommatePost;