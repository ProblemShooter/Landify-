import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Link} from 'react-scroll'
import Front from './Front'; // Import the Front component
import About from './About'; // Add your About page here
import Contact from './Contact'; // Add your Price page here
import News from './News';
// import Login from './Login'; // Add your Login page here
// import Register from './Register'; // Add your Register page here

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Front />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
         <Route path="/News" element={<News />} />
      { /* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
