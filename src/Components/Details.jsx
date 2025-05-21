import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Details = () => {
    const post = useLoaderData()
    console.log(post);
    const { _id, title, rent, location, availability, contact, description, lifestyle, roomType,email } = post;
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-white m-6 text-center  p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300 w-11/12 mx-auto">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
                <p className="text-gray-600"><strong>Location:</strong> {location}</p>
                <p className="text-gray-600 mb-4"><strong>Rent:</strong> {rent}</p>
                <p className="text-gray-600 mb-4"><strong>availability:</strong> {availability}</p>
                <p className="text-gray-600 mb-4"><strong>contact:</strong> {contact}</p>
                <p className="text-gray-600 mb-4"><strong>description:</strong> {description}</p>
                <p className="text-gray-600 mb-4"><strong>lifestyle:</strong> {lifestyle}</p>
                <p className="text-gray-600 mb-4"><strong>roomType:</strong> {roomType}</p>
                <p className="text-gray-600 mb-4"><strong>email:</strong> {email}</p>
                <button className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Like</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;