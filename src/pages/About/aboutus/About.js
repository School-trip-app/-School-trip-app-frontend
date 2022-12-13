import React from 'react';
import aboutUs from '../../../assets/about.png.webp';
import './About.scss';
function About() {
  return (
    <div className='aboutus-section section__padding' style={{ marginTop: '80px' }}>
      <div className='about-image'>
        <img src={aboutUs} alt='about_us' />
      </div>
      <div className='aboutus-text'>
        <h2>Why JOurney</h2>
        <h1>Get ready for real time adventure</h1>
        <p>We provide school trip packages that are characterized by safety and interest in students in terms of education and entertainment, and with a thoughtful choice of places and activities, at prices that suit all groups.</p>
        <p>✦ Safe </p>
        <p>✦ Enjoyable </p>
        <p>✦ Useful </p>
        <button>Book Your Trip</button>
      </div>
    </div>
  )
}

export default About
