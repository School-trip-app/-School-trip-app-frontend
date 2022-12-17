import React from 'react'
import './joPics.css'
import amman from '../../assets/amman-jordan-08bcc7bf3103.jpg';
import dead from '../../assets/dead-sea-jordan.jpg';
import istockphoto from '../../assets/istockphoto-1170941515-612x612.jpg';
import Umm from '../../assets/Umm-Qais.jpg';
import Ajloun_Castle from '../../assets/Ajloun_Castle.jpg';

function JoPics() {
  return (
    <div className='images-travels'>
      <div className='div-one-image' >
        <a href='https://en.wikipedia.org/wiki/Amman' rel='noreferrer' target='_blank'>Amman City</a>
      </div>
      <div className='div-two-image' >
        <a href='https://en.wikipedia.org/wiki/Ajloun' rel='noreferrer' target='_blank'>Ajloun City</a>
      </div>
      <div className='div-three-image'>
        <a href='https://en.wikipedia.org/wiki/Irbid' rel='noreferrer' target='_blank'>Irbid City</a>
      </div>
      <div className='div-four-image'>
        <a href='https://en.wikipedia.org/wiki/Petra' rel='noreferrer' target='_blank'>Petra City</a>
      </div>
      <div className='div-five-image'>
        <a href='https://en.wikipedia.org/wiki/Dead_sea' rel='noreferrer' target='_blank'>Dead Sea</a>
      </div>
    </div>
  )
}

export default JoPics
