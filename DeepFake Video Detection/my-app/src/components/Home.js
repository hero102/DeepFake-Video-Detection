import React from 'react';
import ApplicationsSection from './ApplicationsSection';
import Navbar from './Navbar';
import '../css/bootstrap-icons.css';
import '../css/bootstrap.min.css';
import './style.css';
import bgVideo from './bg.mp4';


const Home = () => {
  return (
    <div>
    <div>
      <Navbar/>
      </div>
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <h1>Welcome to the Deepfake Detection App</h1>
        <p>This application helps you to detect whether a video is real or fake using advanced machine learning algorithms.</p>
      </div>
      <ApplicationsSection/>
    </div>
  );
};

export default Home;
