import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaHeart } from 'react-icons/fa';

const RoommatePostCard = ({ post }) => {
    const { _id, title, rent, location, likes, availability } = post;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full"
        >
            <div className="card-body">
                <h2 className="card-title text-xl   h-[100px] md:text-2xl font-bold text-primary">{title}</h2>
                
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-secondary flex-shrink-0" />
                        <span className="text-base-content">{location}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <FaMoneyBillWave className="text-secondary flex-shrink-0" />
                        <span className="text-base-content">${rent} per month</span>
                    </div>
                    
                    <div className="flex items-center   gap-3">
                        <FaCalendarAlt className="text-secondary flex-shrink-0" />
                        <span className="badge badge-success gap-2 font-bold">
                            {availability}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <FaHeart className="text-secondary flex-shrink-0" />
                        <span className="text-base-content">
                            <span className="text-primary font-bold text-xl">{likes}</span> people interested
                        </span>
                    </div>
                </div>
                
                <div className="card-actions justify-center mt-4">
                    <Link
                        to={`/roommates/${_id}`}
                        className="btn btn-primary w-full"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default RoommatePostCard;