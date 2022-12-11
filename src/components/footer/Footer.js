import React from 'react'
import './footer.scss';
import amman from '../../assets/amman-jordan-08bcc7bf3103.jpg';
import dead from '../../assets/dead-sea-jordan.jpg';
import istockphoto from '../../assets/istockphoto-1170941515-612x612.jpg';
import Umm from '../../assets/Umm-Qais.jpg';
import Ajloun_Castle from '../../assets/Ajloun_Castle.jpg';
import logo from '../../assets/logo.png.webp';
function footer() {
  return (
    <div className='footer'>
       <div className='images-travels'>
       <img src={amman} alt='travel'/>
       <img src={dead} alt='travel'/>
       <img src={istockphoto} alt='travel'/>
       <img src={Umm} alt='travel'/>
       <img src={Ajloun_Castle} alt='travel'/>
       </div>
       <div className='footer-section section__padding'>
         <div className='footer-slice'>
           <img alt='logo'  src={logo}/>
           <p style={{width:'300px'}}>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
         </div>
         <div className='footer-slice'>
           <h4>Navigation</h4>
           <p>Home</p>
           <p>About</p>
           <p>Serveces</p>
           <p>Blog</p>
           <p>Contact</p>
         </div>
         <div className='footer-slice'>
           <h4>Services</h4>
           <p>Blckforest</p>
           <p>Rongdhonu</p>
           <p>Meghrong</p>
         </div>
         <div className='footer-slice'>
          <h4>Contact Us</h4>
          <p>76/A, Green Lane, Dhanmondi, NYC</p>
          <p>demomail89@gmail.com</p>
          <p className='phone'>+10(78) 738-9083</p>
         </div>
       </div>
       <p className='copy'>Copyright ©2022 All rights reserved | This website is made with  by <span>Journey Team</span></p>
    </div>
  )
}

export default footer
