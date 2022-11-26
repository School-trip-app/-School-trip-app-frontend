import React from 'react'
import './nav.scss';
import logo from '../../assets/logo.png.webp';
function Navbar() {
  return (
    <div className='navbar section__padding'>
       <div className='logo'>
          <img alt='logo' src={logo}/>
       </div>
       <div className='nav-list'>
           <ul>
             <li>Home</li>
             <li>Events</li>
             <li>About</li>
             <li>Blog</li>
             <li>Contact</li>
             <li className='call'>
               +10 (67) 678 2567
             </li>
           </ul>
       </div>
    </div>
  )
}

export default Navbar
