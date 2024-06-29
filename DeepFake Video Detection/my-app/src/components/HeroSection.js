import React from 'react';
import Navbar from './Navbar';

function HeroSection() {
  return (
    <div>  
    <section className="hero-section  justify-content-center align-items-center" id="section_1">
    <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto  mb-5">
            <h1 className="text-white text-center">Upload. Verify. Detect</h1>
            <h6 className="text-center">Detect and Verify the authenticity of media content</h6>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default HeroSection;
