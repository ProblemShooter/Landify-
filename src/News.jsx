import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  // News data
  const newsData = [
    {
      id: 1,
      title: "Urban Land Development Progress",
      description: "Learn about the latest updates in urban land development projects.",
      image: "https://via.placeholder.com/400x200?text=Urban+Land",
      content: "Urban land development has seen remarkable progress this year. With modern technologies and innovative strategies, the urban landscape is transforming to support sustainable growth. Discover more about Landify's role in this transformation.",
    },
    {
      id: 2,
      title: "Landify Partners with Local Dealers",
      description: "Strategic partnerships for smoother land transactions.",
      image: "https://via.placeholder.com/400x200?text=Partnership",
      content: "Landify has partnered with top local dealers to streamline land transactions. These partnerships aim to provide clients with seamless experiences, ensuring transparency and efficiency. Find out how these collaborations benefit both buyers and sellers.",
    },
    {
      id: 3,
      title: "Smart Solutions for Land Management",
      description: "Innovative tools for smarter property management.",
      image: "https://via.placeholder.com/400x200?text=Smart+Solutions",
      content: "Smart solutions like AI-driven analytics and automated workflows are revolutionizing land management. Landify leverages these technologies to offer smarter, faster, and more reliable services for all stakeholders.",
    },
  ];

  // State to manage modal
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="min-h-screen bg-[#007BFF] text-white font-sans">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#005BB5] shadow-lg">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-[#E1E9F6] transition duration-300"
        >
          Landify
        </Link>
        <div>
          <Link
            to="/"
            className="px-4 py-2 bg-white text-[#007BFF] font-semibold rounded-lg shadow-md hover:bg-[#E1E9F6] transition duration-300 ease-in-out mx-2"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-white text-[#007BFF] font-semibold rounded-lg shadow-md hover:bg-[#E1E9F6] transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* News Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white text-[#007BFF] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{news.description}</p>
                <button
                  onClick={() => setSelectedNews(news)}
                  className="px-4 py-2 bg-[#007BFF] text-white font-semibold rounded hover:bg-[#005BB5] transition duration-300"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed News */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-[#007BFF] rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6 relative shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-700 mb-6">{selectedNews.content}</p>
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-white bg-[#007BFF] rounded-full p-2 w-8 h-8 flex items-center justify-center hover:bg-[#005BB5] transition duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 bg-[#005BB5] text-center">
        <p>&copy; 2024 Landify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default News;
