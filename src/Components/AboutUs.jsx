import { FaHandshake, FaSearchLocation, FaUserFriends, FaHeart, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = use(AuthContext)

    useEffect(() => {
        setIsVisible(true);
        document.title = 'About Us';
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <FaSearchLocation className="w-8 h-8" />,
            title: "Location Matching",
            description: "Find roommates in your preferred area with our advanced location filters."
        },
        {
            icon: <FaUserFriends className="w-8 h-8" />,
            title: "Compatibility Scores",
            description: "Our algorithm calculates compatibility based on lifestyle and preferences."
        },
        {
            icon: <FaHandshake className="w-8 h-8" />,
            title: "Safe Connections",
            description: "Verified profiles and secure messaging for your peace of mind."
        },
        {
            icon: <FaHeart className="w-8 h-8" />,
            title: "Community Focused",
            description: "Join a community of people looking for the perfect living situation."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="modal-box relative max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            <FaTimes />
                        </button>
                        <h3 className="text-2xl font-bold mb-4">Our Mission and Vision</h3>
                        <div className="space-y-4">
                            <p>
                                At Roommate Finder, we understand that finding the right roommate is about more than just splitting rent - it's about creating a home environment where everyone feels comfortable and respected.
                            </p>

                            <h4 className="text-xl font-semibold mt-6">Our Approach</h4>
                            <p>
                                We use a sophisticated matching algorithm that considers:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Lifestyle compatibility (sleep schedules, cleanliness preferences)</li>
                                <li>Shared interests and hobbies</li>
                                <li>Financial expectations and budget alignment</li>
                                <li>Communication styles and conflict resolution approaches</li>
                            </ul>

                            <h4 className="text-xl font-semibold mt-6">Safety Features</h4>
                            <p>
                                Your safety is our priority. That's why we offer:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Verified profiles with ID confirmation</li>
                                <li>Secure in-app messaging</li>
                                <li>Background check options</li>
                                <li>Reference verification system</li>
                            </ul>

                            <h4 className="text-xl font-semibold mt-6">Success Stories</h4>
                            <p>
                                Over 50,000 successful matches made since our launch. Here's what some of our users say:
                            </p>
                            <div className="bg-base-200 p-4 rounded-lg mt-2">
                                <p className="italic">"I moved to a new city and found my perfect roommate match within a week. We've been living together for 2 years now!" - Sarah, New York</p>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="btn btn-primary"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Main Content */}
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold sm:text-4xl text-primary">
                        About Roommate Finder
                    </h2>
                    <p className="mt-4 text-xl max-w-2xl mx-auto text-base-content">
                        Connecting people with compatible roommates since 2023
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-20">
                    <div className="hero bg-base-200 rounded-xl">
                        <div className="hero-content flex-col lg:flex-row gap-12">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/2"
                            >
                                <img
                                    src="https://www.usnews.com/object/image/00000181-8ba8-d047-a9e3-dba94e780001/gettyimages-1367813999.jpg?update-time=1655905472035&size=responsive640"
                                    alt="Roommates together"
                                    className="rounded-lg shadow-2xl w-full h-auto max-h-96 object-cover"
                                />
                            </motion.div>
                            <div className="lg:w-1/2">
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl font-bold text-base-content"
                                >
                                    Our Story
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="py-6 text-base-content"
                                >
                                    Founded in 2023, Roommate Finder was born out of personal frustration with the
                                    difficulty of finding compatible roommates. Our mission is to make the process
                                    of finding a roommate as smooth and stress-free as possible by focusing on
                                    compatibility beyond just location and budget. We believe that great
                                    roommate relationships start with shared values and lifestyles.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="btn btn-primary"
                                    >
                                        Learn More
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-primary">Why Choose Us</h3>
                        <p className="mt-2 text-lg text-base-content">
                            We make finding your perfect roommate simple and effective
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="card-body items-center text-center">
                                    <div className="text-primary mb-4">
                                        {feature.icon}
                                    </div>
                                    <h4 className="card-title text-base-content">{feature.title}</h4>
                                    <p className="text-base-content">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-primary text-primary-content p-8 rounded-xl"
                >

                    {
                        user ? <><h3 className="text-2xl text-center font-bold mb-4">Welcome to Our Community</h3></> : <>   <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                        <p className="mb-6">
                            Thousands of people have found their perfect roommate through our platform.
                            Whether you're moving to a new city or just looking for a better living situation,
                            we're here to help.
                        </p>

                        <Link to={"/register"}><button className="btn btn-secondary">Sign Up Now</button></Link>

                    </div></>
                    }
                 

                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutUs;