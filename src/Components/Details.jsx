import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaHeart, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaInfoCircle, FaUserClock, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Details = () => {
    useEffect(() => {
        document.title = 'Roommate Details';
        window.scrollTo(0, 0);
    }, []);

    const post = useLoaderData();
    const { user } = React.useContext(AuthContext);
    const [count, setCount] = useState(post?.likes || 0);
    const [showContact, setShowContact] = useState(false);
    const { _id, title, rent, location, availability, contact, description, lifestyle, roomType, email } = post;
    const isOwner = user?.email === email;

    const handleLike = (id) => {
        if (isOwner) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can't like your own post!",
            });
            return;
        }

        const newCount = count + 1;
        setCount(newCount);
        setShowContact(true);

        fetch(`https://room-mate-server.vercel.app/roommates/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ likes: newCount }),
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Liked it",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const infoItems = [
        { icon: <FaMapMarkerAlt />, label: "Location", value: location },
        { icon: <FaMoneyBillWave />, label: "Rent", value: `$${rent}` },
        { icon: <FaCalendarAlt />, label: "Availability", value: availability },
        { icon: <FaInfoCircle />, label: "Description", value: description },
        { icon: <FaUserClock />, label: "Lifestyle", value: lifestyle },
        { icon: <FaHome />, label: "Room Type", value: roomType },
        { icon: <FaEnvelope />, label: "Email", value: email },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            <Navbar />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-1 py-8 px-4 sm:px-6 lg:px-8"
            >
                <div className="  mx-auto">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="card-body">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <motion.h2 
                                    initial={{ x: -20 }}
                                    animate={{ x: 0 }}
                                    className="text-2xl md:text-3xl font-bold text-primary"
                                >
                                    {title}
                                </motion.h2>
                                <div className="badge badge-primary badge-lg mt-2 md:mt-0">
                                    {count} {count === 1 ? 'Like' : 'Likes'}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {infoItems.map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="text-primary mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-base-content">{item.label}</h3>
                                            <p className="text-base-content">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {showContact && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-4 p-4 bg-primary bg-opacity-10 rounded-lg"
                                >
                                    <FaPhone className="text-primary text-xl" />
                                    <div>
                                        <h3 className="font-semibold text-base-content">Contact</h3>
                                        <p className="text-base-content">{contact}</p>
                                    </div>
                                </motion.div>
                            )}

                            <div className="card-actions justify-center mt-6">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleLike(_id)}
                                    className="btn btn-primary gap-2"
                                    disabled={isOwner}
                                    data-tooltip-id="my-tooltip-1"
                                >
                                    <FaHeart />
                                    Show Interest
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <Footer />
            
            <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                content="Press to show interest and view contact"
                className="z-50"
            />
        </div>
    );
};

export default Details;