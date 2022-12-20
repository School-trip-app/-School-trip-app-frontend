import React from 'react'
import './navs.css';
import logo from '../../assets/Logo.jpeg';
import { Link } from 'react-router-dom';
import { setLogout } from '../../store/auth';
import { useDispatch } from 'react-redux';
import cookies from 'react-cookies';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  const dispatch = useDispatch();
  const handlerLogout = () => {
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('userRole');
    cookies.remove('capabilities')
    cookies.remove('userId');
    cookies.remove('email');
    cookies.remove('phonenumber');
    cookies.remove('imageprofile')

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
          {/* <Link to='/about'><li>About</li></Link> */}
          {/* <Link to='/contact'><li>Contact</li></Link> */}
          <Link to='/cart'><li>Cart</li></Link>
          <Dropdown>
            <Dropdown.Toggle variant="Warning" id="dropdown-basic">
              Others
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link to='/Profile'><li className='down-menu'>Profile</li></Link>
                <Link to='/about'><li className='down-menu'>About</li></Link>
               <Link to='/contact'><li className='down-menu'>Contact</li></Link>
            </Dropdown.Menu>
          </Dropdown>

          <li className='call' onClick={handlerLogout}>
            Logout          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
