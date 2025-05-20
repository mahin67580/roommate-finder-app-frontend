import React from 'react';
import { Link } from 'react-router';

const RoommatePostCard = ({ post }) => {
    const { _id, title, rent, location } = post;
    return (
        <div>
            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
                <p className="text-gray-600"><strong>Location:</strong> {location}</p>
                <p className="text-gray-600 mb-4"><strong>Rent:</strong> ${rent}</p>
                <Link
                    to={`/roommates/${_id}`}
                    className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    See More
                </Link>
            </div>
        </div>
    );
};

export default RoommatePostCard;