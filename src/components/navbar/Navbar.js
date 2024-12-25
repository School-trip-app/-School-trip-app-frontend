import React, { useState } from 'react'
import './navs.css';
import logo from '../../assets/Logo.jpeg';
import { Link } from 'react-router-dom';
import { setLogout } from '../../store/auth';
import { useDispatch } from 'react-redux';
import cookies from 'react-cookies';
import Dropdown from 'react-bootstrap/Dropdown';
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [showBurger, setShowBurger] = useState(false);


  const showListBurger = () => {
    setShowBurger((prev) => !prev)
  }

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
            Logout
          </li>
        </ul>
      </div>
      <div className='nav-list-mobile'>
        <ul className={`${showBurger ? "show_burger" : ""}`}>
          <Link to='/'><li className='flex'>Home  <GrClose className='close' onClick={()=>showListBurger()}/></li></Link>
          <Link to='/events'><li>Trips</li></Link>
          <Link to='/blog'><li>Memories</li></Link>
          <Link to='/photographers'><li>Photographers</li></Link>
          <Link to='/store'><li>Store</li></Link>
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
            Logout
          </li>
        </ul>
      </div>
      <RxHamburgerMenu className={`hamburger_mobile ${showBurger ? "show_burger" : ""}`} onClick={() => showListBurger()} />

    </div>
  )
}

export default Navbar
