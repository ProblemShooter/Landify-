import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Contact = () => {
  return (
    <div className="bg-[#007BFF] text-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-white text-lg font-semibold hover:underline">
            Home
          </Link>
          <Link to="/" className="text-white text-lg font-semibold hover:underline">
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl mb-12">We'd love to hear from you! Reach out to us via any of the following ways:</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Phone */}
          <div className="contact-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Phone</h3>
            <p className="text-lg"><strong>+91 75585 31761</strong></p>
            <p className="text-lg"><strong>+91 80108 95478</strong></p>
          </div>

          {/* Email */}
          <div className="contact-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="text-lg"><strong>team@landify.live</strong></p>
            <p className="text-lg"><strong>(owner's personal email) aadityajauhari01@gmail.com</strong></p>
          </div>
        </div>

        {/* Address */}
        <div className="mt-12 bg-[#f8f8f8] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-black">Our Address</h3>
          <p className="text-md italic mb-4 text-black">
            Laxmi Ben Chedda Park Cooperative Housing Society, 1, Achole Rd, <br />
            Shree Ram Sankul Society, Moregaon Talao, Chandan Naka, <br />
            Nalasopara East, Nala Sopara, Maharashtra 401209
          </p>
        </div>

        {/* Location (Google Maps) */}
        <div className="mt-12 bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Location</h3>
          <p className="text-lg">Visit us at:</p>
          <div className="google-maps mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243693.0612827855!2d72.82308071965056!3d19.076090804412378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b4a8814896b5%3A0x78a91b9569acbbf1!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698843953143!5m2!1sen!2sus"
              width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
