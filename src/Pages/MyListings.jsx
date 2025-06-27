import React, { use, useCallback, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import MyListingscard from './MyListingscard';
import SpinnerLoader from '../Components/SpinnerLoader';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyListings = () => {
    const { user } = use(AuthContext);
    const [userAddedPosts, setUserAddedPosts] = useState([]);

    const fetchUserPosts = useCallback(async () => {
        const res = await fetch("https://room-mate-server.vercel.app/roommates");
        const data = await res.json();
        const filtered = data.filter(post => post.email === user?.email);
        setUserAddedPosts(filtered);
    }, [user?.email]);

    useEffect(() => {
        document.title = 'My Listings';
        window.scrollTo(0, 0);
        fetchUserPosts();
    }, [fetchUserPosts]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://room-mate-server.vercel.app/roommates/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                           fetchUserPosts();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your listing has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };
    return (
        <SpinnerLoader>
            <div className="min-h-screen bg-base-100 p-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">My Listings</h1>

                    {/* Mobile View (Cards) */}
                    <div className="lg:hidden space-y-4">
                        {userAddedPosts.length > 0 ? (
                            userAddedPosts.map(post => (
                                <div key={post._id} className="card bg-base-200 shadow-md">
                                    <div className="card-body">
                                        <h2 className="card-title">{post.title}</h2>
                                        <p><span className="font-semibold">Location:</span> {post.location}</p>
                                        <p><span className="font-semibold">Rent:</span> ${post.rent}</p>
                                        <div className="card-actions justify-end mt-2">
                                            <Link
                                                to={`/Update/${post._id}`}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Update
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post._id)}
                                                className="btn btn-error btn-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-lg">You haven't created any listings yet.</p>
                            </div>
                        )}
                    </div>

                    {/* Desktop View (Table) */}
                    <div className="hidden lg:block overflow-x-auto bg-base-200 rounded-lg shadow-md">
                        <table className="table w-full">
                            <thead className="bg-primary text-primary-content">
                                <tr>
                                    <th className="py-3 px-4 text-left">Title</th>
                                    <th className="py-3 px-4 text-left">Location</th>
                                    <th className="py-3 px-4 text-left">Rent</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userAddedPosts.length > 0 ? (
                                    userAddedPosts.map(post => (
                                        <MyListingscard
                                            key={post._id}
                                            useraddedpost={post}
                                            reload={fetchUserPosts}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-8">
                                            You haven't created any listings yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </SpinnerLoader>
    );
};

export default MyListings;