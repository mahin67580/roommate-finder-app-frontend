import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router';
import { FaHome, FaUser, FaPlus, FaList, FaBars, FaTimes } from 'react-icons/fa';

const DashboardLayout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        document.title = 'Dashboard';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-base-100">
            {/* Mobile Header */}
            <header className="bg-primary text-primary-content p-4 lg:hidden flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="btn btn-ghost btn-square"
                >
                    {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </header>

            {/* Desktop Header (hidden on mobile) */}
            <header className="bg-primary text-primary-content p-4 hidden lg:block">
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </header>

            <div className="flex flex-col lg:flex-row">
                {/* Mobile Sidebar (shown when menu open) */}
                {mobileMenuOpen && (
                    <nav className="w-full bg-base-200 lg:hidden">
                        <ul className="space-y-2 p-4">
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <FaHome />
                                    Overview
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/myprofile"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <FaUser />
                                    My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/add-listing"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <FaPlus />
                                    Add Listing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/my-listings"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <FaList />
                                    My Listings
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Desktop Sidebar (always visible on desktop) */}
                <nav className="hidden lg:block w-64 bg-base-200 min-h-screen p-4">
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                to="/dashboard"
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                }
                            >
                                <FaHome />
                                Overview
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/myprofile"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                }
                            >
                                <FaUser />
                                My Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/add-listing"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                }
                            >
                                <FaPlus />
                                Add Listing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/my-listings"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}`
                                }
                            >
                                <FaList />
                                My Listings
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <main className="flex-1 p-4 lg:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;