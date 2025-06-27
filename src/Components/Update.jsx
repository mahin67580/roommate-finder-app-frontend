import React, { use, useEffect } from 'react';
import SpinnerLoader from './SpinnerLoader';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';


const Update = () => {

     useEffect(() => {
                document.title = 'Update  Listing';
                window.scrollTo(0, 0);
            }, []);

    const post = useLoaderData()
    const { user } = use(AuthContext)
    const navigate = useNavigate()
    const { _id, title, rent, location, availability, contact, description, lifestyle, roomType, email } = post;

    const hndleupdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const rent = form.rent.value;
        const location = form.location.value;
        const availability = form.availability.value;
        const contact = form.contact.value;
        const description = form.description.value;
        const lifestyle = form.lifestyle.value;
        const roomType = form.roomType.value;


        const updatedata = {
            title, rent, location,
            availability,
            contact,
            description,
            lifestyle,
            roomType
        }
        // console.log(updatedata);


        fetch(`https://room-mate-server.vercel.app/roommates/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedata),
        }).then(res => res.json()).then(data => {
            // console.log("data from serverDB", data);
            if (data.acknowledged) {

               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your list has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/my-listings')


            }
        })

    }

    return (
        <SpinnerLoader>
            <form onSubmit={hndleupdate} className="max-w-3xl mx-auto p-6   rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-center">Update Roommate Listing</h2>

                <label className='font-bold'>Title</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Title (e.g., Looking for a roommate in NYC)"
                    //value={formData.title}
                    defaultValue={title}
                    className="w-full border p-3 rounded"
                    required
                />
                <label className='font-bold'>Location</label>
                <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    //value={formData.location}
                    defaultValue={location}
                    className="w-full border p-3 rounded"
                    required
                />
                <label className='font-bold'>Rent Amount</label>
                <input
                    name="rent"
                    type="number"
                    placeholder="Rent Amount"
                    //value={formData.rent}
                    defaultValue={rent}
                    className="w-full border p-3 rounded"
                    required
                />
                <label className='font-bold'>RoomType</label>
                <select
                    name="roomType"
                    //value={formData.roomType}
                    defaultValue={roomType}
                    className="w-full border p-3 rounded"
                    required
                >
                    <option className='text-blue-950 font-semibold' value="">Select Room Type</option>
                    <option className='text-blue-800' value="Single">Single</option>
                    <option className='text-blue-800'  value="Shared">Shared</option>
                    <option className='text-blue-800' value="Studio">Studio</option>
                </select>
                <label className='font-bold'>Lifestyle</label>
                <input
                    name="lifestyle"
                    type="text"
                    placeholder="Lifestyle Preferences (e.g., Pets, Smoking, Night Owl)"
                    // value={formData.lifestyle}
                    defaultValue={lifestyle}
                    className="w-full border p-3 rounded"
                />
                <label className='font-bold'>Description</label>
                <textarea
                    name="description"
                    placeholder="Description"
                    //value={formData.description}
                    defaultValue={description}
                    className="w-full border p-3 rounded h-28"
                    required
                />
                <label className='font-bold'>Contact Info</label>
                <input
                    name="contact"
                    type="text"
                    placeholder="Contact Info"
                    // value={formData.contact}
                    defaultValue={contact}
                    className="w-full border p-3 rounded"
                    required
                />
                <label className='font-bold'>Availability</label>
                <select
                    name="availability"
                    // value={formData.availability}
                    defaultValue={availability}
                    className="w-full border p-3 rounded"
                    required
                >
                    <option className='text-blue-800' value="available">Available</option>
                    <option className='text-blue-800'  value="not-available">Not Available</option>
                </select>
                <label className='font-bold'>Email</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}

                    readOnly
                    className="w-full border p-3 rounded "
                />
                <label className='font-bold'>Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={user?.displayName}
                    readOnly
                    className="w-full border p-3 rounded"

                />

                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                    Update Listing
                </button>

            </form>
        </SpinnerLoader>
    );
};

export default Update;