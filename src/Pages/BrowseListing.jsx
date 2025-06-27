import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import BrowseListingCard from './BrowseListingCard';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes, FaSpinner } from 'react-icons/fa';

const BrowseListing = () => {
    const allPosts = useLoaderData();
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        minRent: '',
        maxRent: '',
        location: ''
    });
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = 'Browse Roommate Listings';
        window.scrollTo(0, 0);
        
        // Simulate loading delay (you can remove this if your data loads instantly)
        const timer = setTimeout(() => {
            setPosts(allPosts);
            setIsLoading(false);
        }, 500);
        
        return () => clearTimeout(timer);
    }, [allPosts]);

    useEffect(() => {
        if (!isLoading) {
            // Filter posts based on search term and filters
            const filteredPosts = allPosts.filter(post => {
                // Search term matching (title or location)
                const matchesSearch = searchTerm === '' || 
                    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    post.location.toLowerCase().includes(searchTerm.toLowerCase());

                // Rent range filtering
                const matchesMinRent = filters.minRent === '' || post.rent >= Number(filters.minRent);
                const matchesMaxRent = filters.maxRent === '' || post.rent <= Number(filters.maxRent);

                // Location filtering
                const matchesLocation = filters.location === '' || 
                    post.location.toLowerCase().includes(filters.location.toLowerCase());

                return matchesSearch && matchesMinRent && matchesMaxRent && matchesLocation;
            });

            setPosts(filteredPosts);
        }
    }, [searchTerm, filters, allPosts, isLoading]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            minRent: '',
            maxRent: '',
            location: ''
        });
        setSearchTerm('');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-base-100 flex items-center justify-center">
                {/* <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="text-primary text-4xl"
                >
                    <FaSpinner />
                </motion.div> */}
                <p className="ml-4 text-lg">Loading listings...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Browse Roommate Listings
                    </h1>
                    <p className="text-lg text-base-content max-w-2xl mx-auto">
                        Find your perfect roommate match from our verified listings
                    </p>
                </motion.div>

                {/* Search and Filter Bar */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col gap-4 mb-8 bg-base-200 p-4 rounded-lg shadow-sm"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by title or location..."
                                className="input input-bordered w-full pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button 
                            className="btn btn-outline gap-2"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <FaFilter />
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>
                    </div>

                    {/* Expanded Filters */}
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-base-300"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Min Rent ($)</span>
                                </label>
                                <input
                                    type="number"
                                    name="minRent"
                                    placeholder="Any"
                                    className="input input-bordered"
                                    value={filters.minRent}
                                    onChange={handleFilterChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Max Rent ($)</span>
                                </label>
                                <input
                                    type="number"
                                    name="maxRent"
                                    placeholder="Any"
                                    className="input input-bordered"
                                    value={filters.maxRent}
                                    onChange={handleFilterChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Any location"
                                    className="input input-bordered"
                                    value={filters.location}
                                    onChange={handleFilterChange}
                                />
                            </div>
                            <div className="md:col-span-3 flex justify-end gap-2">
                                <button 
                                    className="btn btn-ghost"
                                    onClick={resetFilters}
                                >
                                    <FaTimes className="mr-2" />
                                    Reset Filters
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Results Count */}
                <div className="mb-4 text-base-content">
                    Showing {posts.length} {posts.length === 1 ? 'result' : 'results'}
                </div>

                {/* Listings Table */}
                <div className="overflow-x-auto bg-base-200 rounded-xl shadow-lg">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead className="bg-primary text-primary-content">
                            <tr>
                                <th className="py-4 px-6 text-left rounded-tl-xl">Listing</th>
                                <th className="py-4 px-6 text-left">Location</th>
                                <th className="py-4 px-6 text-left">Rent</th>
                                <th className="py-4 px-6 text-left rounded-tr-xl">Actions</th>
                            </tr>
                        </thead>
                        
                        {/* Table Body */}
                        <tbody className="divide-y divide-base-300">
                            {posts.map((post, index) => (
                                <motion.tr
                                    key={post._id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-base-300 transition-colors duration-200"
                                >
                                    <BrowseListingCard post={post} />
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-xl text-base-content mb-4">
                            No roommate listings match your search criteria.
                        </p>
                        <button 
                            className="btn btn-primary"
                            onClick={resetFilters}
                        >
                            Reset Filters
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default BrowseListing;