import React from 'react'
import './nav.scss';
import logo from '../../assets/Logo.jpeg';
import { Link } from 'react-router-dom';
import { setLogout } from '../../store/auth';
import { useDispatch } from 'react-redux';
import cookies from 'react-cookies';
function Navbar() {
  const dispatch = useDispatch();
  const handlerLogout=()=>{
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('userRole');
    cookies.remove('capabilities')
    cookies.remove('userId');

    dispatch(setLogout());
  }
  return (
    <div className='navbar section__padding'>
      <div className='logo'>
        <img alt='logo' src={logo} className='logo-image-pic' />
      </div>
      <div className='nav-list'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/events'><li>Trips</li></Link>
          <Link to='/blog'><li>Memories</li></Link>
          <Link to='/photographers'><li>Photographers</li></Link>
          <Link to='/store'><li>Store</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          {/* adding number */}
          <li className='call' onClick={handlerLogout}>
          Logout          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
