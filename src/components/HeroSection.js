import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>FIND YOUR RING</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--small'
          >
          <Link to='/questionnaire'>
          GET STARTED
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
