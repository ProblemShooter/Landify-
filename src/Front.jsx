import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Front = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#007BFF] min-h-screen flex flex-col justify-between">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-5 shadow-lg bg-gradient-to-r from-[#007BFF] to-[#0056b3] relative">
                <Link
                    to="/"
                    className="text-white text-2xl font-bold hover:text-gray-200 transition-all"
                >
                    Landify
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-5">
                    <Link
                        to="/"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        Home
                    </Link>
                    <Link
                        to="/About"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/Contact"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/News"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        News
                    </Link>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0056b3] flex flex-col space-y-2 p-4">
                    <Link
                        to="/home"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/News"
                        className="text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#007BFF] transition-all"
                    >
                        News
                    </Link>
                </div>
            )}

            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1720760946922-68a84dc62f25?w=500&auto=format&fit=crop&q=60')`,
                }}
                className="mt-4 flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-x-10 md:space-y-0 bg-cover bg-center"
            >
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                        Together We Achieve More — Trust, Innovate, Succeed.
                    </h1>
                    <p className="text-white text-lg md:text-xl mb-6">
                        With every project, we prioritize transparency, integrity, and collaboration.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-[#007BFF] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all"
                    >
                        CONTACT US
                    </Link>
                </div>
                <div className="w-full md:w-1/5 px-4">
                    <img
                        src="https://images.pexels.com/photos/29644194/pexels-photo-29644194.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="Logo"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Key Services Section */}
            <div className="flex flex-wrap items-center justify-center p-6 space-y-6 md:space-x-10 md:space-y-0">
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Key Services Overview
                    </h2>
                    <p className="text-white text-lg mb-6">
                        At Landify, we offer a range of services designed to simplify land management and property development:
                    </p>
                    <ul className="text-white text-lg space-y-6">
                        <li>
                            <h3 className="font-bold">1. Buy/Sell Assistance</h3>
                            <p>
                                Helping clients with land transactions, facilitating high-value deals, and creating value.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-bold">2. Property Development</h3>
                            <p>
                                Turning raw land into thriving industrial and commercial spaces with optimized land use.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <img
                        src="https://kcppromoters.com/wp-content/uploads/2023/12/plant-growing-coins-glass-jar-money-green-grass-1-min-1400x700.jpg"
                        alt="Services Overview"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Work With Us Section */}
            <div className="flex flex-wrap items-center justify-center p-6 space-y-6 md:space-x-10 md:space-y-0">
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Why Work With Us?
                    </h2>
                    <ul className="text-white text-lg space-y-6">
                        <li>
                            <h3 className="font-bold">1. Expertise in Land Management</h3>
                            <p>
                                With years of hands-on experience in managing land for various purposes, we ensure maximum efficiency and value.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-bold">2. Transparent Approach</h3>
                            <p>
                                We prioritize building trust with full transparency in land acquisition, development, and management.
                            </p>
                        </li>
                        <li>
                            <h3 className="font-bold">3. Dedicated Professionals</h3>
                            <p>
                                Our team’s commitment drives every project’s success.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <img
                        src="https://img.freepik.com/free-photo/multiracial-group-young-creative-people-smart-casual-wear-discussing-business-shaking-hands-together_7861-3059.jpg"
                        alt="Work With Us"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center p-4 bg-[#0056b3] text-white">
                <p>&copy; 2024 Landify. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Front;
