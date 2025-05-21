import React from 'react';
import { useLoaderData } from 'react-router';
import BrowseListingCard from './BrowseListingCard';

const BrowseListing = () => {

    const posts = useLoaderData();

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Browse Roommate Listings</h1>

                <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm sm:text-base">
                    <thead className="bg-blue-100 text-blue-900">
                        <tr>
                            <th className="border border-gray-300 px-4 py-3 text-left">Title</th>
                            <th className="border border-gray-300 px-4 py-3 text-left">Location</th>
                            <th className="border border-gray-300 px-4 py-3 text-left">Rent</th>
                            <th className="border border-gray-300 px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {posts.map(post => (
                            <tr key={post._id} className="hover:bg-gray-50 transition">
                                <BrowseListingCard post={post} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseListing;