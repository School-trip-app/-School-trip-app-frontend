import React from 'react'
import './nav.scss';
import logo from '../../assets/Logo.jpeg';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar section__padding'>
      <div className='logo'>
        <img alt='logo' src={logo} className='logo-image-pic' />
      </div>
      <div className='nav-list'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/events'><li>Events and Trips</li></Link>
          <Link to='/blog'><li>Memories</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          {/* adding number */}
          <li className='call'>
            +962 (77) 998 8776
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
