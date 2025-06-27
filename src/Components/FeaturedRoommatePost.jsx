import React, { useEffect, useState } from 'react';
import RoommatePostCard from './RoommatePostCard';
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1747927511878.json";
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const FeaturedRoommatePost = () => {
    const [roommatePosts, setRoommatePosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRoommatePosts = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://room-mate-server.vercel.app/roommates");
            if (!res.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await res.json();
            setRoommatePosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRoommatePosts();
    }, []);

    const availablePosts = roommatePosts.filter(post => post.availability === "available").slice(0, 8);

    if (error) {
        return (
            <div className="alert alert-error max-w-md mx-auto my-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Error loading posts: {error}</span>
                <button onClick={fetchRoommatePosts} className="btn btn-sm btn-ghost">Retry</button>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[300px]">
                {/* <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="text-primary text-4xl mb-4"
                >
                    <FaSpinner />
                </motion.div> */}
                <p className="text-lg text-base-content">Finding the best roommates for you...</p>
            </div>
        );
    }

    return (
        <section className="py-12   bg-base-100  ">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className='flex justify-center items-center mb-12 gap-2 sm:gap-4'>
                    <div className='w-16 sm:w-20'>
                        <Lottie animationData={animationData} loop autoplay />
                    </div>
                    <motion.h1 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className='text-center text-2xl sm:text-4xl font-bold text-primary'
                    >
                        Featured Roommates
                    </motion.h1>
                    <div className='w-16 sm:w-20'>
                        <Lottie animationData={animationData} loop autoplay />
                    </div>
                </div>

                {availablePosts.length > 0 ? (
                    <div className='grid   lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 '>
                        {availablePosts.map((post, index) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <RoommatePostCard post={post} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-base-content">No available roommates found. Check back later!</p>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default FeaturedRoommatePost;