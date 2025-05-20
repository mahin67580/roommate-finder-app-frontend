import React, { useEffect, useState } from 'react';
import RoommatePostCard from './RoommatePostCard';

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


    console.log(RoommatePosts);




    return (
        <div>
            <h1 className='text-center p-10 text-3xl font-bold mt-10'>Featured Roommates</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-11/12 mx-auto p-8'>
                {
                    RoommatePosts.map(post => <RoommatePostCard key={post._id} post={post}></RoommatePostCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedRoommatePost;