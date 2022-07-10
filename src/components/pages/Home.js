import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';


function Home() {

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

  return (
    <div>
      <HeroSection />
      <br/>
      <br/>
    </div>
  );
}

export default Home;
