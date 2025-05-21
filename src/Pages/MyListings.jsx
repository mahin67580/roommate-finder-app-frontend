import React, { use, useEffect, useState } from 'react';

import { AuthContext } from '../Provider/AuthContext';
import MyListingscard from './MyListingscard';

const MyListings = () => {

    const { user } = use(AuthContext);
    const [userAddedPosts, setUserAddedPosts] = useState([]);

    const fetchUserPosts = async () => {
        const res = await fetch("http://localhost:3000/roommates");
        const data = await res.json();
        const filtered = data.filter(post => post.email === user?.email);
        setUserAddedPosts(filtered);
    };

    useEffect(() => {
        fetchUserPosts();
    }, [user?.email]);


    return (
        <div className='min-h-screen'>
            <div className="min-h-screen p-6">
                <h1 className="text-3xl font-bold text-center mb-6">My Listings</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border shadow-md rounded">
                        <thead className="bg-gray-200">
                            <tr className="text-center">
                                <th className="py-3 px-4">Title</th>
                                <th className="py-3 px-4">Location</th>
                                <th className="py-3 px-4">Rent</th>
                                <th className="py-3 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userAddedPosts.map(post => (
                                <MyListingscard
                                    key={post._id}
                                    useraddedpost={post}
                                    reload={fetchUserPosts} //  Pass reload function to child
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyListings;