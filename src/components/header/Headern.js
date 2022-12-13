import React from 'react'
import './header.css';
import bgbus from '../../assets/h1_hero1.png.webp';
import bus from '../../assets/car.png.webp';
function Headern() {
  return (
    <div className='header'>
        <h1>LifeLone memories just a <dd>few seconds away</dd></h1>
        <p>Let s start your journey with us m your drean will come true</p>
        <button><h3>Explore Destinations</h3></button>
        <div className='bg-bus'>
        <img src={bgbus} alt='bus' className='bg-car'/>
        <img className='bus-car' src={bus} alt='bus'/>
        </div>
    </div>
  )
}

export default Headern
