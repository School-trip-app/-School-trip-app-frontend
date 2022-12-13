import React from 'react'
import './nav.css';
import logo from '../../assets/logo.png.webp';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar section__padding'>
      <div className='logo'>
        {/* <img alt='logo' src={logo} /> */}
      </div>
      <div className='nav-list'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/events'><li>Events</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/blog'><li>Blog</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          <li className='call'>
            +10 (67) 678 2567
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
