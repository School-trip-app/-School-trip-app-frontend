import React from 'react'
import amman from '../../assets/amman-jordan-08bcc7bf3103.jpg';
import dead from '../../assets/dead-sea-jordan.jpg';
import istockphoto from '../../assets/istockphoto-1170941515-612x612.jpg';
import Umm from '../../assets/Umm-Qais.jpg';
import Ajloun_Castle from '../../assets/Ajloun_Castle.jpg';
import './joPics.css'

function JoPics() {
  return (
    <div className='images-travels'>
      <div className='div-one-image'>
        <img src={amman} alt='travel' />
      </div>
      <div className='div-two-image' >
        <img src={Ajloun_Castle} alt='travel' />
      </div>
      <div className='div-three-image'>
        <img src={Umm} alt='travel' />
      </div>
      <div className='div-four-image'>
        <img src={istockphoto} alt='travel' />
      </div>
      <div className='div-five-image'>
        <img src={dead} alt='travel' />
      </div>
    </div>
  )
}

export default JoPics
