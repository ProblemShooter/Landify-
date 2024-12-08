import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animation effects
import { Link } from 'react-router-dom'; // For navigation

const About = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDetails = (index) => {
    setIsOpen(isOpen === index ? null : index); // Toggle the section's visibility
  };
  return (
    <div className="bg-[#007BFF] text-white min-h-screen flex flex-col scroll-smooth">
      {/* Navigation Button */}
      <div className="w-full flex justify-end p-4">
        <Link to="/">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white text-[#007BFF] py-3 px-8 rounded-lg shadow-lg text-lg font-semibold hover:bg-[#006bb3] transition-all duration-300"
          >
            Go to Home
          </motion.button>
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 mt-20 px-4 sm:px-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
        <p className="text-xl mt-4">Transforming land management with innovative solutions</p>
      </motion.div>

      {/* Key Points with Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-16">
        {/* Point 1: Land Management */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white text-black p-8 rounded-xl shadow-lg flex flex-col sm:flex-row-reverse items-center space-x-6 sm:space-x-12 hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-3/4 sm:w-1/3">
            <img
              src="https://www.csm.tech/storage/uploads/news/657c400d07ca21702641677Thumb.jpg"
              alt="Land Management"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-2/3 mt-6 sm:mt-0">
            <h3 className="text-2xl font-semibold mb-4">1. Land Management</h3>
            <p>We provide modern solutions to manage your land assets, ensuring maximum value and usability.</p>
            <button
              onClick={() => toggleDetails(1)}
              className="mt-4 text-[#007BFF] font-semibold hover:underline"
            >
              {isOpen === 1 ? 'Show Less' : 'Know More'}
            </button>
            {isOpen === 1 && (
              <p className="mt-4 text-gray-700">
                Our land management services cover everything from asset tracking to optimizing land usage. We use the latest technology to ensure your land is always performing at its best.
              </p>
            )}
          </div>
        </motion.div>

        {/* Point 2: Dealing with Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-white text-black p-8 rounded-xl shadow-lg flex flex-col sm:flex-row-reverse items-center space-x-6 sm:space-x-12 hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-2/4 sm:w-100">
            <img
              src="https://media.smallbiztrends.com/2020/10/a-Deal.png"
              alt="Client Deal"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-2/3 mt-6 sm:mt-0">
            <h3 className="text-2xl font-semibold mb-4">2. Land Transactions</h3>
            <p>At Landify, we simplify the buying and selling of land, ensuring smooth, transparent deals tailored to our clients' needs.</p>
            <button
              onClick={() => toggleDetails(2)}
              className="mt-4 text-[#007BFF] font-semibold hover:underline"
            >
              {isOpen === 2 ? 'Show Less' : 'Know More'}
            </button>
            {isOpen === 2 && (
              <p className="mt-4 text-gray-700">
                Our team ensures smooth transactions by carefully assessing the client's needs and working with the right buyers and sellers. We make sure the process is transparent and hassle-free.
              </p>
            )}
          </div>
        </motion.div>

        {/* Point 3: Property Development */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="bg-white text-black p-8 rounded-xl shadow-lg flex flex-col sm:flex-row-reverse items-center space-x-6 sm:space-x-12 hover:shadow-2xl transition-all duration-300"
        >
          <div className="w-3/4 sm:w-1/3">
            <img
              src="https://www.cyberswift.com/blog/wp-content/uploads/2024/09/the-evolving-landscape-of-land-management-harnessing-technology-for-sustainable-growth.jpg"
              alt="Property Development"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-2/3 mt-6 sm:mt-0">
            <h3 className="text-2xl font-semibold mb-4">3. Property Development</h3>
            <p>We assist with property development by providing expertise in site selection and project management.</p>
            <button
              onClick={() => toggleDetails(3)}
              className="mt-4 text-[#007BFF] font-semibold hover:underline"
            >
              {isOpen === 3 ? 'Show Less' : 'Know More'}
            </button>
            {isOpen === 3 && (
              <p className="mt-4 text-gray-700">
                We offer full support in property development, from the initial design phase to project completion. Our expertise ensures that each development is both sustainable and profitable.
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Trust and Success Phrase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-12 text-center px-4 sm:px-16"
      >
        <p className="text-xl font-semibold">
          "We have trust, and you will be successful with Landify by your side."
        </p>
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-12 text-center px-4 sm:px-16"
      >
        <p className="text-2xl font-semibold mb-4">
          Ready to take the next step with us?
        </p>
        <Link to="/contact">
          <motion.button
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-[#007BFF] py-3 px-8 rounded-lg shadow-lg text-lg font-semibold hover:bg-[#006bb3] transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>
      <footer className="text-center p-4 bg-[#0056b3] text-white">
        <p>&copy; 2024 Landify. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;
