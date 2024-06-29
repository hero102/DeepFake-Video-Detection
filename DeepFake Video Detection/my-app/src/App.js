import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detect from './components/Detect';
import NewsDetection from './components/NewsDetection';
import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './components/style.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
