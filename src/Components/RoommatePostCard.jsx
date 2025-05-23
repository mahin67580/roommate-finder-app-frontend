import React from 'react';
import { Link } from 'react-router';

const RoommatePostCard = ({ post }) => {
    const { _id, title, rent, location ,likes,availability} = post;
    console.log(post);
    return (
        <div>
            <div className="  p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300">
                <h2 className="text-xl font-bold mb-2 ">{title}</h2>
                <p className=" "><strong>Location :</strong> {location}</p>
                <p className="   "><strong>Rent :</strong> ${rent}</p>
                <p className="   "><strong>Availability :</strong> <span className='p-2 rounded-2xl bg-green-400 '>{availability}</span></p>
                <p className="  mb-4"><strong>LIkes :</strong><span className='text-blue-700 text-2xl'> {likes}</span> people liked this person</p>
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