import React, { useEffect, useState } from 'react'
import './contact.scss'
import Navbar from '../navbar/Navbar';
import Carousel from "./Carousel"
import { FaHome,FaEnvelope,FaPhoneSquareAlt} from "react-icons/fa";


const onSubmit = (e) => {
  e.preventDefault()
  const { name, email, message } = e.target.elements
  let conFom = {
    name: name.value,
    email: email.value,
    message: message.value,
  }
  console.log(conFom)
}

function Contact() {
  const [formStatus, setFormStatus] = React.useState('Send')

  return (
    <>
      <Navbar />
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>


      <div className="container mt-5">
        <h2 className="contact-title">Get in Touch</h2>
       

        <div className='grid-container-element'>
        <form onSubmit={onSubmit}>
            <div className="col-lg-8 grid-child-element">
              
              <textarea className="" id="message" required placeholder='Enter Message' cols="30" rows="9" />
              <input className="" type="text" id="name" required placeholder='Enter your name' />
              <input className="" type="email" id="email" required placeholder='Enter email address' />
              <input className="" type="text" id="subject" required placeholder='Enter subject' />


            </div>
            <button className="button sbtbutton" type="submit">
              {formStatus}
            </button>
          </form>
        <div className='col-lg-8'>
          
        </div>
        <div>
      <div className='grid-child-element'>
        <FaHome/> 
        <h5>Amman,jordan</h5>
         <p>airport street,marj al-hamam birdge </p>
      </div>
      <div>
      <FaPhoneSquareAlt/>
       <h5>+9627799886633</h5>
      <p>sun to Thu 9am to 5pm </p>
      </div>
      <div><FaEnvelope/>
        <h5>404Team@email.com</h5>
          <p>send us your query  anytime </p>
      </div>
          </div>
          </div>
         




        </div>
     

    </>
  )
}

export default Contact
