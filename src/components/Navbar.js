import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    console.log('i was clickeds')
    console.log(click)
    setClick(!click);
    console.log(click)
  }
  const closeMobileMenu = () => setClick();

   return(
    <>
    <nav className = "navbar">
      <div className = "navbar-container" onClick={closeMobileMenu}>
        <Link to="/" className="navbar-logo">
          Ring Finder <i className='far fa-gem'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className = 'nav-item'>
            <Link to='/cut' className='nav-links' onClick={closeMobileMenu}>
            Cut
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/color' className='nav-links' onClick={closeMobileMenu}>
            Color
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/clarity' className='nav-links' onClick={closeMobileMenu}>
            Clarity
            </Link>
          </li>
          <li className = 'nav-item'>
            <Link to='/form' className='nav-links' onClick={closeMobileMenu}>
            Form
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar
