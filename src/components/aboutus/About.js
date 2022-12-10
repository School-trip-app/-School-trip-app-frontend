import React from 'react';
import aboutUs from '../../assets/about.png.webp';
import './About.scss';
function About() {
  return (
    <div className='aboutus-section section__padding'>
      <div className='about-image'>
        <img src={aboutUs} alt='abouus'/>
      </div>
      <div className='aboutus-text'>
        <h2>About Us</h2>
        <h1>Get ready for real time adventure</h1>
        <p>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
        <button>Book Your Destination</button>
      </div>
    </div>
  )
}

export default About
