import React, { useState } from 'react';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';


const Detect = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
   
      <HeroSection />
      <FeaturedSection setResult={setResult} result={result} />
    </div>
  );
};

export default Detect;
