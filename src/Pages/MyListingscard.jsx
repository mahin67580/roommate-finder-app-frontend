
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
                fetch(`https://roommateserver-production.up.railway.app/roommates/${id}`, { method: "DELETE" }).then(res => res.json()).then(data => {
                    if (data.deletedCount) {
                        reload()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });


    };










    return (
        <>



            <tr className="text-center border-b  ">
                <td className="py-2 px-4">{title}</td>
                <td className="py-2 px-4">{location}</td>
                <td className="py-2 px-4"> $ {rent}</td>
                <td className="py-2 px-4 flex justify-center items-center">


                    <Link to={`/Update/${_id}`}><button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2">
                        Update
                    </button></Link>



                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </td>


            </tr>




        </>

    );
};

export default MyListingscard;