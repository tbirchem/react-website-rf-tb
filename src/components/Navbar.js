import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { Button } from './Button';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => {
    console.log('i was clicked')
    setMobileMenuOpen(!mobileMenuOpen);
  }
  const closeMobileMenu = () => setMobileMenuOpen(false);

   return(
    <div>
    <nav className = "navbar">
      <div className = "navbar-container">
        <Link to="/" className="navbar-logo">
          Ring Finder <i className='far fa-gem'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={mobileMenuOpen ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu} >
          <li className = 'nav-item'>
            <Link to='/cut' className='nav-links' >
            Cut
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/color' className='nav-links' >
            Color
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/clarity' className='nav-links'>
            Clarity
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/Questionnaire' className='nav-links'>
            Questionnaire
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/Shop' className='nav-links'>
            Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default Navbar
