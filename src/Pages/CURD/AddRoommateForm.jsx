import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { Link, Navigate, useNavigate } from "react-router";
import SpinnerLoader from "../../Components/SpinnerLoader";
import Swal from "sweetalert2";

export default function AddRoommateForm() {


    

    const { user } = use(AuthContext)
    const navigate = useNavigate()
    // console.log(user.email);
    useEffect(() => {
          document.title = 'Add Roommate Listing';
        window.scrollTo(0, 0);
    }, []);


    const [formData, setFormData] = useState({
        title: "",
        location: "",
        rent: "",
        roomType: "",
        lifestyle: "",
        description: "",
        contact: "",
        availability: "available",
        email: "",
        // name: "",
    });
    useEffect(() => {
        if (user) {
            setFormData((prev) => ({ ...prev, email: user.email }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        


        fetch("http://localhost:3000/roommates ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            // …
        }).then(res => res.json()).then(data => {
            console.log("data from serverDB", data);
            if (data.insertedId) {
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your list has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({
                    title: "",
                    location: "",
                    rent: "",
                    roomType: "",
                    lifestyle: "",
                    description: "",
                    contact: "",
                    availability: "available",
                    name: "",
                });
                navigate("/MyListings");

            }
        })
    };

    return (
        <SpinnerLoader>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6   rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl text-base-content   font-bold text-center">Add a Roommate Listing</h2>

                <input
                    name="title"
                    type="text"
                    placeholder="Title (e.g., Looking for a roommate in NYC)"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    name="rent"
                    type="number"
                    placeholder="Rent Amount"
                    value={formData.rent}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                >
                    <option className="text-blue-800 font-bold" value="">Select Room Type</option>
                    <option className="text-blue-800" value="Single">Single</option>
                    <option className="text-blue-800" value="Shared">Shared</option>
                    <option className="text-blue-800" value="Studio">Studio</option>
                </select>

                <input
                    name="lifestyle"
                    type="text"
                    placeholder="Lifestyle Preferences (e.g., Pets, Smoking, Night Owl)"
                    value={formData.lifestyle}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border p-3 rounded h-28"
                    required
                />

                <input
                    name="contact"
                    type="text"
                    placeholder="Contact Info"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                >
                    <option className="text-blue-800  " value="available">Available</option>
                    <option className="text-blue-800  " value="not-available">Not Available</option>
                </select>

                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    readOnly
                    className="w-full border p-3 rounded "
                />

                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={user?.displayName}
                    readOnly
                    className="w-full border p-3 rounded"

                />

                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                    Add Listing
                </button>

            </form>
        </SpinnerLoader>
    );
}
