import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // For navigation

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const history = useHistory(); // Hook to navigate to different pages

  const newsAPIKey = '6a44ca940db641b8be3ab582adc7bbe9'; // Replace with your NewsAPI key
  const newsAPIUrl = `https://newsapi.org/v2/everything?q=mumbai+land+deals&language=en&sortBy=publishedAt&apiKey=${newsAPIKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(newsAPIUrl);
        const data = await response.json();
        console.log(data);  // Log the entire response

        if (data.status === 'ok' && data.articles) {
          setNewsItems(data.articles); // Store the Mumbai land-related news articles
        } else {
          console.error('Error fetching news:', data.message);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000); // Fetch news every 24 hours

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="bg-[#007BFF] p-6 text-white min-h-screen">
      {/* Home Button */}
      <button
        onClick={() => history.push('/')} // Redirect to home page
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-105"
      >
        🏠 Home
      </button>
      
      <h1 className="text-3xl font-semibold mb-6">Landify News - Mumbai Land Deals</h1>
      
      <div className="space-y-8">
        {newsItems.length > 0 ? (
          newsItems.map((news, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">{news.title}</h2>
              <p className="text-gray-600">{news.publishedAt}</p>
              <img src={news.urlToImage} alt={news.title} className="my-4 w-full h-48 object-cover rounded-lg" />
              <p className="text-gray-800 mb-4">{news.description}</p>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => alert('Redirecting to full article...')}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Know More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading Mumbai land-related news...</p>
        )}
      </div>
    </div>
  );
};

export default News;
