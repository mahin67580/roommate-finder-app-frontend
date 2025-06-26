import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaYoutube, FaFacebook, FaHome, FaUserFriends, FaSearch, FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdPrivacyTip, MdOutlineHelp } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = [
        { icon: <FaHome className="mr-2" />, text: "Home", href: "/" },
        { icon: <FaUserFriends className="mr-2" />, text: "Find Roommates", href: "/roommates" },
        { icon: <RiTeamFill className="mr-2" />, text: "About Us", href: "/AboutUs" },
        { icon: <RiTeamFill className="mr-2" />, text: "Contact Us", href: "/contactUs" },
 
    ];

    const contactInfo = [
        { icon: <FaEnvelope className="mr-2" />, text: "support@roommatefinder.com" },
        { icon: <FaPhone className="mr-2" />, text: "+1 (555) 123-4567" }
    ];

    const socialLinks = [
        { icon: <FaTwitter size={20} />, href: "#", aria: "Twitter" },
        { icon: <FaYoutube size={20} />, href: "#", aria: "YouTube" },
        { icon: <FaFacebook size={20} />, href: "#", aria: "Facebook" }
    ];

    return (
        <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="footer p-10 bg-base-200 text-base-content"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex flex-col items-start"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                                <FaUserFriends className="text-white text-xl" />
                            </div>
                            <span className="text-xl font-bold">RoommateFinder</span>
                        </div>
                        <p className="text-sm opacity-80">
                            Connecting people with compatible roommates since 2023. 
                            Find your perfect living situation today.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-2"
                    >
                        <span className="footer-title">Quick Links</span>
                        {footerLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ x: 5 }}
                                href={link.href}
                                className="link link-hover flex items-center"
                            >
                                {link.icon}
                                {link.text}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2"
                    >
                        <span className="footer-title">Contact Us</span>
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 5 }}
                                className="flex items-center"
                            >
                                {info.icon}
                                <span>{info.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subscribe for updates</span>
                            </label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="your@email.com" 
                                    className="input input-bordered w-full pr-16" 
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary absolute top-0 right-0 rounded-l-none"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    href={social.href}
                                    aria-label={social.aria}
                                    className="btn btn-ghost btn-circle"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-base-300 pt-6 mt-8 text-center"
                >
                    <p>Copyright © {currentYear} - All rights reserved by RoommateFinder</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;