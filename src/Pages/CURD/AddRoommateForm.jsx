import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useNavigate } from "react-router";
import SpinnerLoader from "../../Components/SpinnerLoader";
import Swal from "sweetalert2";

export default function AddRoommateForm() {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        email: user?.email || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        fetch("https://room-mate-server.vercel.app/roommates", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
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
                    email: user?.email || "",
                });
                navigate("/dashboard/my-listings");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: "There was an error saving your listing. Please try again.",
            });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <SpinnerLoader>
            <div className="container mx-auto px-4 py-8">
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-base-200 rounded-xl shadow-md p-4 md:p-6 space-y-4">
      
                     <h2 className="text-2xl font-bold text-center">Add a Roommate Listing</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Looking for a roommate"
                                value={formData.title}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                name="location"
                                type="text"
                                placeholder="City, Neighborhood"
                                value={formData.location}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent Amount ($)</span>
                            </label>
                            <input
                                name="rent"
                                type="number"
                                placeholder="Monthly rent"
                                value={formData.rent}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room Type</span>
                            </label>
                            <select
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Select Room Type</option>
                                <option value="Single">Single</option>
                                <option value="Shared">Shared</option>
                                <option value="Studio">Studio</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Lifestyle Preferences</span>
                        </label>
                        <input
                            name="lifestyle"
                            type="text"
                            placeholder="Pets, Smoking, etc."
                            value={formData.lifestyle}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Tell us about the place and what you're looking for"
                            value={formData.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full h-32"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Info</span>
                            </label>
                            <input
                                name="contact"
                                type="text"
                                placeholder="Phone or preferred contact method"
                                value={formData.contact}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Availability</span>
                            </label>
                            <select
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="available">Available</option>
                                <option value="not-available">Not Available</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            readOnly
                            className="input input-bordered w-full bg-base-300"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={user?.displayName || ""}
                            readOnly
                            className="input input-bordered w-full bg-base-300"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary w-full mt-4"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            "Add Listing"
                        )}
                    </button>
                </form>
            </div>
        </SpinnerLoader>
    );
}