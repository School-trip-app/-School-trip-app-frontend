import React from 'react'
import './joPics.css'
import img1 from '../../assets/amman-jordan-08bcc7bf3103.jpg';
import img2 from '../../assets/Ajloun_Castle.jpg';
import img3 from '../../assets/Umm-Qais.jpg';
import img4 from '../../assets/istockphoto-1170941515-612x612.jpg';
import img5 from '../../assets/dead-sea-jordan.jpg';


function JoPics() {
  return (
    <div className='images-travels'>
      <div className='div-one-image' >
        <a href='https://en.wikipedia.org/wiki/Amman' rel='noreferrer' target='_blank'>
        <img src={img1} alt='Amman'/>
        </a>
      </div>
      <div className='div-two-image' >
        <a href='https://en.wikipedia.org/wiki/Ajloun' rel='noreferrer' target='_blank'>
         <img src={img2} alt='Ajloun City'/>
        </a>
      </div>
      <div className='div-three-image'>
        <a href='https://en.wikipedia.org/wiki/Irbid' rel='noreferrer' target='_blank'>
        <img src={img3} alt='Irbid City'/>
        </a>
      </div>
      <div className='div-four-image'>
        <a href='https://en.wikipedia.org/wiki/Petra' rel='noreferrer' target='_blank'>
        <img src={img4} alt='Petra City'/>
        </a>
      </div>
      <div className='div-five-image'>
        <a href='https://en.wikipedia.org/wiki/Dead_sea' rel='noreferrer' target='_blank'>
        <img src={img5} alt='Dead Sea'/>
        </a>
      </div>
    </div>
  )
}

export default JoPics