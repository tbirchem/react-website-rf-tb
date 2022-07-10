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
          Reveal Party!
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={mobileMenuOpen ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu} >
          <li className = 'nav-item'>
            <Link to='/cut' className='nav-links' >
            Poll!
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/result' className='nav-links'>
              Poll Results!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default Navbar
