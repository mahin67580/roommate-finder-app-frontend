import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaHome, FaUser, FaPlus, FaList, FaHeart, FaUsers, FaDollarSign } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashHome = () => {
    const [stats, setStats] = useState({
        totalListings: 0,
        activeListings: 0,
        totalLikes: 0,
        averageRent: 0,
        listingsByLocation: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Overview';
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const response = await fetch("https://room-mate-server.vercel.app/roommates");
                const data = await response.json();

                // Calculate statistics
                const totalListings = data.length;
                const activeListings = data.filter(listing => listing.availability === "available").length;
                const totalLikes = data.reduce((sum, listing) => sum + (listing.likes || 0), 0);
                const averageRent = data.length > 0
                    ? Math.round(data.reduce((sum, listing) => sum + Number(listing.rent), 0) / data.length)
                    : 0;

                // Group listings by location
                const locationMap = {};
                data.forEach(listing => {
                    if (!locationMap[listing.location]) {
                        locationMap[listing.location] = 0;
                    }
                    locationMap[listing.location]++;
                });

                const listingsByLocation = Object.entries(locationMap)
                    .map(([location, count]) => ({ location, count }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 5); // Top 5 locations

                setStats({
                    totalListings,
                    activeListings,
                    totalLikes,
                    averageRent,
                    listingsByLocation
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary bg-opacity-20 text-primary">
                                <FaUsers className="text-2xl" />
                            </div>
                            <div>
                                <h2 className="card-title">{stats.totalListings}</h2>
                                <p className="text-sm">Total Listings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-secondary bg-opacity-20 text-secondary">
                                <FaHome className="text-2xl" />
                            </div>
                            <div>
                                <h2 className="card-title">{stats.activeListings}</h2>
                                <p className="text-sm">Active Listings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-accent bg-opacity-20 text-accent">
                                <FaHeart className="text-2xl" />
                            </div>
                            <div>
                                <h2 className="card-title">{stats.totalLikes}</h2>
                                <p className="text-sm">Total Likes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-info bg-opacity-20 text-info">
                                <FaDollarSign className="text-2xl" />
                            </div>
                            <div>
                                <h2 className="card-title">${stats.averageRent}</h2>
                                <p className="text-sm">Avg. Rent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Listings by Location Chart */}
                <div className="card bg-base-200 shadow-sm p-4">
                    <h2 className="text-xl font-semibold mb-4">Listings by Location</h2>
                    <div className="h-64  ">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={stats.listingsByLocation}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="location" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#8884d8" name="Listings" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card bg-base-200 shadow-sm p-4">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            to="/dashboard/myprofile"
                            className="btn btn-primary gap-2"
                        >
                            <FaUser />
                            My Profile
                        </Link>
                        <Link
                            to="/dashboard/add-listing"
                            className="btn btn-secondary gap-2"
                        >
                            <FaPlus />
                            Add Listing
                        </Link>
                        <Link
                            to="/dashboard/my-listings"
                            className="btn btn-accent gap-2"
                        >
                            <FaList />
                            My Listings
                        </Link>
                        <Link
                            to="/dashboard"
                            className="btn btn-info gap-2"
                        >
                            <FaHome />
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHome;