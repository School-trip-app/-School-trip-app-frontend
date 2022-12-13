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
      <img src={amman} alt='travel' />
      <img src={dead} alt='travel' />
      <img src={istockphoto} alt='travel' />
      <img src={Umm} alt='travel' />
      <img src={Ajloun_Castle} alt='travel' />
    </div>
  )
}

export default JoPics
