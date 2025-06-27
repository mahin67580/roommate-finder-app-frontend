import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyListingscard = ({ useraddedpost, reload }) => {
    const { _id, title, location, rent } = useraddedpost;

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
                        reload();
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
        <tr className="hover:bg-base-300 transition-colors">
            <td className="py-3 px-4">{title}</td>
            <td className="py-3 px-4">{location}</td>
            <td className="py-3 px-4">${rent}</td>
            <td className="py-3 px-4">
                <div className="flex gap-2">
                    <Link 
                        to={`/Update/${_id}`} 
                        className="btn btn-warning btn-sm"
                    >
                        Update
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyListingscard;