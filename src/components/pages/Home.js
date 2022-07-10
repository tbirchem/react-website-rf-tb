import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';
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
