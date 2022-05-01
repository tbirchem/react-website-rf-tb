import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <footer class="footer">
      <Link to='/'> --- <i className='far fa-gem'/> --- </Link>
      </footer>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
