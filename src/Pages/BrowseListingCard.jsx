// BrowseListingCard.jsx
import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaMoneyBillWave, FaEye } from 'react-icons/fa';

const BrowseListingCard = ({ post }) => {
    const { _id, title, rent, location } = post;
  
    return (
        <>
            <td className="py-4 px-6">
                <motion.div 
                    whileHover={{ x: 5 }}
                    className="font-medium text-base-content"
                >
                    {title}
                </motion.div>
            </td>
            <td className="py-4 px-6">
                <div className="flex items-center gap-2 text-base-content">
                    <FaMapMarkerAlt className="text-primary" />
                    {location}
                </div>
            </td>
            <td className="py-4 px-6">
                <div className="flex items-center gap-2 text-base-content">
                    <FaMoneyBillWave className="text-primary" />
                    ${rent}
                </div>
            </td>
            <td className="py-4 px-6">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to={`/roommates/${_id}`}
                        className="btn btn-primary btn-sm gap-2"
                    >
                        <FaEye />
                        View
                    </Link>
                </motion.div>
            </td>
        </>
    );
};

export default BrowseListingCard;