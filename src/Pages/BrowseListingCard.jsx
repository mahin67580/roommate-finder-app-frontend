import React from 'react';
import { Link } from 'react-router';

const BrowseListingCard = ({ post }) => {
    const { _id, title, rent, location } = post;
    return (
        <>
            <td className="py-3 px-4 border border-gray-300">{title}</td>
            <td className="py-3 px-4 border border-gray-300">{location}</td>
            <td className="py-3 px-4 border border-gray-300">৳{rent}</td>
            <td className="py-3 px-4 border border-gray-300">
                <Link
                    to={`/roommates/${_id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                    See More
                </Link>
            </td>
        </>
    );
};

export default BrowseListingCard;